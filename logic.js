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

    // --- Renderizado Inicial (MODIFICADO CON GUARDIAS) ---
    function initialRender() {
        // --- INICIO DE LA CORRECCIÓN ---
        // Se comprueba si las variables de datos existen antes de usarlas
        if (typeof titulus_graecus !== 'undefined') {
            mainTitle.textContent = titulus_graecus;
        } else {
            console.error("Error: 'titulus_graecus' no está definido. ¿Archivo de datos cargado?");
        }
        
        if (typeof titulus_latinus !== 'undefined' && titulus_latinus[idiomaActivo]) {
            subtitle.textContent = titulus_latinus[idiomaActivo];
        } else {
            console.error("Error: 'titulus_latinus' no está definido. ¿Archivo de datos cargado?");
        }
        // --- FIN DE LA CORRECCIÓN ---

        reddeParagrafum();
        actualizaMarginalia();
    }

    // --- Función para Renderizar el Texto Griego (MODIFICADA CON GUARDIAS) ---
    function reddeParagrafum() {
        // --- INICIO DE LA CORRECCIÓN ---
        // La guardia principal: comprueba si 'paragrafus' existe
        if (typeof paragrafus === 'undefined' || !paragrafus || !paragrafus.orationes) {
            console.error("Error Funeșto: La variable 'paragrafus' no está definida o no contiene 'orationes'.");
            console.error("Asegúrese de que el archivo de datos (ej: capitulum_XX.js) se carga ANTES que logic.js en su HTML.");
            
            // Muestra un error visible al usuario
            if (paragrafusContent
