/* === logic.js === */
document.addEventListener('DOMContentLoaded', () => {

    const mainTitle = document.getElementById('main-title');
    const paragrafusContentus = document.getElementById('paragrafus-contentus');
    const marginaliaContentus = document.getElementById('marginalia-contentus');
    const subtitle = document.getElementById('subtitle');
    const footerText = document.getElementById('footer-text');

    let activumVerbum = null;
    let activaOratio = null;

    // --- Configuración de idioma (simplificada para ZH-TW) ---
    const langConfig = {
        zh: {
            analysisTitle: '詞法分析 (Análisis Morfológico)',
            translationTitle: '句子翻譯 (Traducción de la Frase)',
            selectWordText: '請選取一個單字以查看其分析。',
            meaningLabel: '意義 (Significado)',
            footerTextContent: '<i>點擊一個單字以查看其分析及句子翻譯。</i>',
            analysisKey: 'analysis_morphologicus_zh',
            significationKey: 'zh',
            translationKey: 'zh'
        }
    };
    const idiomaActivo = 'zh'; // Forzado a Chino Tradicional
    const config = langConfig[idiomaActivo];

    // --- Renderizado Inicial ---
    function initialRender() {
        // Asegúrate de que los datos de data.js estén disponibles
        if (typeof data_kz === 'undefined' || typeof titulus_graecus === 'undefined') {
            console.error("Error: Los datos (data_kz, titulus_graecus) no están cargados. Asegúrate de que data.js se cargue antes que logic.js.");
            return;
        }
        
        mainTitle.textContent = titulus_graecus;
        subtitle.textContent = titulus_latinus[idiomaActivo];
        reddeParagrafum();
        actualizaMarginalia();
    }

    // --- Función para Renderizar el Texto Griego ---
    function reddeParagrafum() {
        // CORRECCIÓN: Se accede a 'data_kz.paragrafus' en lugar de 'paragrafus'
        let fullText = data_kz.paragrafus.orationes.map(o => o.textus_graecus).join(' ');
        let allVerba = data_kz.paragrafus.orationes.flatMap(o => o.verba.map(v => ({...v, oratioId: o.id_orationis})));

        // Ordenar por longitud para evitar solapamientos (ej. "en" y "men")
        allVerba.sort((a,b) => b.terminus.replace(/[.,·;:]/g, '').length - a.terminus.replace(/[.,·;:]/g, '').length);

        allVerba.forEach(verbum => {
            if (!verbum.terminus) return; // Omitir verba vacíos
            const cleanTerminus = verbum.terminus.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp(`(${cleanTerminus})(?![^<]*?>|[^<>]*?<\\/)`, 'g');
            const replacement = `<span class="verbum" data-verbum-id="${verbum.id_verbi}" data-oratio-id="${verbum.oratioId}">$1</span>`;
            fullText = fullText.replace(regex, replacement);
        });

        paragrafusContentus.innerHTML = fullText.replace(/\n/g, '<br><br>');
    }
    
    // --- Función para Actualizar la Barra Lateral ---
    function actualizaMarginalia() {
        let htmlContentus = '';
        footerText.innerHTML = config.footerTextContent;

        htmlContentus += `<section id="analysis-morphologicus-section" class="mb-6"><h3 class="text-xl font-semibold text-gray-800 mb-4">${config.analysisTitle}</h3>`;
        
        if (activumVerbum) {
            const analysisText = activumVerbum[config.analysisKey];
            const meaningText = activumVerbum.significationes[config.significationKey];
            
            htmlContentus += `
                <h4 class="text-2xl textum-classicum text-gray-800 mb-4">${activumVerbum.terminus}</h4>
                <div class="space-y-4">
                    <div>
                        <p class="text-gray-700 mt-1">${analysisText}</p>
                        <p class="text-gray-700 mt-1"><strong>${config.meaningLabel}:</strong> ${meaningText}</p>
                    </div>
                </div>`;
        } else {
            htmlContentus += `<div class="p-4 bg-stone-200 rounded-md text-gray-600"><p>${config.selectWordText}</p></div>`;
        }
        htmlContentus += `</section>`;

        if (activaOratio) {
            const translationText = activaOratio.translationes[config.translationKey];
            
            htmlContentus += `
                <hr class="border-stone-300 my-6">
                <section id="analysis-orationis-section">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">${config.translationTitle}</h3>
                    <div class="space-y-3">
                        <p class="text-gray-800 textum-classicum bg-stone-200 p-3 rounded-md">${activaOratio.textus_graecus}</p>
                        <div class="text-gray-700 mt-2">${translationText}</div>
                    </div>
                </section>`;
        }
        
        marginaliaContentus.innerHTML = htmlContentus;
    }

    // --- Manejador de Clics en Texto Griego ---
    paragrafusContentus.addEventListener('click', (e) => {
        const verbumTarget = e.target.closest('.verbum');
        if (!verbumTarget) {
            if (!e.target.closest('#marginalia-sinistra')) {
                document.querySelectorAll('.activus').forEach(el => el.classList.remove('activus'));
                activumVerbum = null;
                activaOratio = null;
                actualizaMarginalia();
            }
            return;
        }

        const isAlreadyActive = verbumTarget.classList.contains('activus');
        document.querySelectorAll('.activus').forEach(el => el.classList.remove('activus'));
        
        if (isAlreadyActive) {
            activumVerbum = null;
            activaOratio = null;
        } else {
            const verbumId = verbumTarget.dataset.verbumId;
            const oratioId = verbumTarget.dataset.oratioId;
            
            // CORRECCIÓN: Se accede a 'data_kz.paragrafus' en lugar de 'paragrafus'
            activaOratio = data_kz.paragrafus.orationes.find(o => o.id_orationis === oratioId);
            
            if (activaOratio) {
                activumVerbum = activaOratio.verba.find(v => v.id_verbi === verbumId);
            }
            verbumTarget.classList.add('activus');
        }
        actualizaMarginalia();
    });

    // --- Iniciar la aplicación ---
    initialRender();
});
