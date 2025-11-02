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
        mainTitle.textContent = titulus_graecus;
        subtitle.textContent = titulus_latinus[idiomaActivo];
        reddeParagrafum();
        actualizaMarginalia();
    }

    // --- Función para Renderizar el Texto Griego (MODIFICADA) ---
    function reddeParagrafum() {
        paragrafusContentus.innerHTML = ''; // Limpiar el contenedor

        // Iterar por cada oración en los datos
        paragrafus.orationes.forEach(oratio => {
            if (!oratio.textus_graecus || oratio.textus_graecus === "...") return; // Omitir frases vacías

            let sentenceText = oratio.textus_graecus; // Texto de esta oración
            let oratioVerba = oratio.verba.map(v => ({...v, oratioId: oratio.id_orationis}));

            // Ordenar las palabras de ESTA oración por longitud
            oratioVerba.sort((a,b) => b.terminus.replace(/[.,·;:]/g, '').length - a.terminus.replace(/[.,·;:]/g, '').length);
            
            // Aplicar reemplazo de verba solo para esta oración
            oratioVerba.forEach(verbum => {
                if (!verbum.terminus) return;
                const cleanTerminus = verbum.terminus.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                // Regex: Busca el término exacto, pero no dentro de tags HTML ya existentes
                const regex = new RegExp(`(${cleanTerminus})(?![^<]*?>|[^<>]*?<\\/)`, 'g');
                const replacement = `<span class="verbum" data-verbum-id="${verbum.id_verbi}" data-oratio-id="${verbum.oratioId}">$1</span>`;
                sentenceText = sentenceText.replace(regex, replacement);
            });

            // Crear un elemento <p> para esta oración
            const p = document.createElement('p');
            p.className = 'orationis-paragraph'; // Nueva clase para espaciado
            p.innerHTML = sentenceText; // Asignar el texto procesado
            
            // Añadir el párrafo al contenedor principal
            paragrafusContentus.appendChild(p);
        });
    }
    
    // --- Función para Actualizar la Barra Lateral (Sin cambios) ---
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

    // --- Manejador de Clics en Texto Griego (Sin cambios) ---
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
            activaOratio = paragrafus.orationes.find(o => o.id_orationis === oratioId);
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
