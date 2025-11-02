/* === data.js === */
/* Repositorio de Contenidos - Κεφάλαιον ΚΖ' */

// Se asignan las constantes iniciales
const titulus_graecus = "Κεφάλαιον ΚΖ' (Ἄσκησις)";
const titulus_latinus = {
    zh: "第27章 (練習)"
};

// CORRECCIÓN: Se asigna la estructura principal a una variable (const data_kz)
const data_kz = { // (Se añade 'const data_kz = {' para encapsular la data)
    paragrafus: { // (Se anida 'paragrafus' dentro de la variable principal)
        id: 1,
        orationes: [
            {
                id_orationis: 'o1',
                textus_graecus: "δημοκρατία ἐστὶν ἐν τῇ πόλει ἐν ᾗ ὁ δῆμος ἄρχει.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 民主，就是人民（在城邦中）進行統治。'
                },
                verba: [
                    { 
                        id_verbi: 'v1_1', 
                        terminus: 'δημοκρατία', 
                        analysis_morphologicus_zh: '名詞：主格、陰性、單數。', 
                        significationes: { zh: '民主 (原型: ἡ δημοκρατία)' } 
                    },
                    { 
                        id_verbi: 'v1_2', 
                        terminus: 'ἐστὶν', 
                        analysis_morphologicus_zh: '動詞：第三人稱單數現在時直陳式主動語態。', 
                        significationes: { zh: '是，存在 (原型: εἰμί)' } 
                    },
                    { 
                        id_verbi: 'v1_3', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v1_4', 
                        terminus: 'τῇ', 
                        analysis_morphologicus_zh: '定冠詞：與格、陰性、單數。', 
                        significationes: { zh: '(定冠詞)' } 
                    },
                    { 
                        id_verbi: 'v1_5', 
                        terminus: 'πόλει', 
                        analysis_morphologicus_zh: '名詞：與格、陰性、單數。', 
                        significationes: { zh: '城市，城邦 (原型: ἡ πόλις)' } 
                    },
                    { 
                        id_verbi: 'v1_6', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v1_7', 
                        terminus: 'ᾗ', 
                        analysis_morphologicus_zh: '關係代名詞：與格、陰性、單數 (先行詞: πόλει)。', 
                        significationes: { zh: '在那個... (原型: ὅς, ἥ, ὅ)' } 
                    },
                    { 
                        id_verbi: 'v1_8', 
                        terminus: 'ὁ', 
                        analysis_morphologicus_zh: '定冠詞：主格、陽性、單數。', 
                        significationes: { zh: '(定冠詞)' } 
                    },
                    { 
                        id_verbi: 'v1_9', 
                        terminus: 'δῆμος', 
                        analysis_morphologicus_zh: '名詞：主格、陽性、單數。', 
                        significationes: { zh: '人民 (原型: ὁ δῆμος)' } 
                    },
                    { 
                        id_verbi: 'v1_10', 
                        terminus: 'ἄρχει.', 
                        analysis_morphologicus_zh: '動詞：第三人稱單數現在時直陳式主動語態。', 
                        significationes: { zh: '統治 (原型: ἄρχω)' } 
                    }
                ]
            }, // <-- CORRECCIÓN: Se añade la coma que faltaba aquí

            /* CORRECCIÓN: Se elimina este bloque duplicado que causaba un error
                {
                    id_orationis: 'o2',
                    textus_graecus: "...", // Próxima frase aquí
                    translationes: { 
                        zh: '...'
                    },
                    verba: [
                        // Próximas palabras aquí
                    ]
                } 
            */
            
            {
                id_orationis: 'o2', // Este es el objeto 'o2' correcto
                textus_graecus: "ἀριστοκρατία ἐστὶn ἐν ταῖς πόλεσι ἐν αἷς οἱ ἄριστοι ἄρχουσιν.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 貴族制，就是由最優秀的人（在城邦中）進行統治。'
                },
                verba: [
                    { 
                        id_verbi: 'v2_1', 
                        terminus: 'ἀριστοκρατία', 
                        analysis_morphologicus_zh: '名詞：主格、陰性、單數。', 
                        significationes: { zh: '貴族制 (原型: ἡ ἀριστοκρατία)' } 
                    },
                    { 
                        id_verbi: 'v2_2', 
                        terminus: 'ἐστὶn', 
                        analysis_morphologicus_zh: '動詞：第三人稱單數現在時直陳式主動語態。(註：n 為 νῦ ἐφελκυστικόν)', 
                        significationes: { zh: '是，存在 (原型: εἰμί)' } 
                    },
                    { 
                        id_verbi: 'v2_3', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v2_4', 
                        terminus: 'ταῖς', 
                        analysis_morphologicus_zh: '定冠詞：與格、陰性、複數。', 
                        significationes: { zh: '(定冠詞)' } 
                    },
                    { 
                        id_verbi: 'v2_5', 
                        terminus: 'πόλεσι', 
                        analysis_morphologicus_zh: '名詞：與格、陰性、複數。', 
                        significationes: { zh: '城市，城邦 (原型: ἡ πόλις)' } 
                    },
                    { 
                        id_verbi: 'v2_6', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v2_7', 
                        terminus: 'αἷς', 
                        analysis_morphologicus_zh: '關係代名詞：與格、陰性、複數 (先行詞: πόλεσι)。', 
                        significationes: { zh: '在那個... (原型: ὅς, ἥ, ὅ)' } 
                    },
                    { 
                        id_verbi: 'v2_8', 
                        terminus: 'οἱ', 
                        analysis_morphologicus_zh: '定冠詞：主格、陽性、複數。', 
                        significationes: { zh: '(定冠詞)' } 
                    },
                    { 
                        id_verbi: 'v2_9', 
                        terminus: 'ἄριστοι', 
                        analysis_morphologicus_zh: '形容詞(作名詞用)：主格、陽性、複數。', 
                        significationes: { zh: '最優秀的人們 (原型: ἄριστος)' } 
                    },
                    { 
                        id_verbi: 'v2_10', 
                        terminus: 'ἄρχουσιν.', 
                        analysis_morphologicus_zh: '動詞：第三人稱複數現在時直陳式主動語態。', 
                        significationes: { zh: '統治 (原型: ἄρχω)' } 
                    }
                ]
            },
            {
                id_orationis: 'o3',
                textus_graecus: "ὀλιγαρχία ἐστὶν ἐν ταῖς πόλεσι ἐν αἷς οἱ πλούσιοι ἄρχουσιν.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 寡頭制，就是由富人（在城邦中）進行統治。'
                },
                verba: [
                    { 
                        id_verbi: 'v3_1', 
                        terminus: 'ὀλιγαρχία', 
                        analysis_morphologicus_zh: '名詞：陰性、單數、主格。', 
                        significationes: { zh: '寡頭制 (原型: ἡ ὀλιγαρχία)' } 
                    },
                    { 
                        id_verbi: 'v3_2', 
                        terminus: 'ἐστὶν', 
                        analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', 
                        significationes: { zh: '是 (原型: εἰμί)' } 
                    },
                    { 
                        id_verbi: 'v3_3', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v3_4', 
                        terminus: 'ταῖς', 
                        analysis_morphologicus_zh: '定冠詞：陰性、複數、與格。', 
                        significationes: { zh: '(定冠詞)' } 
                    },
                    { 
                        id_verbi: 'v3_5', 
                        terminus: 'πόλεσι', 
                        analysis_morphologicus_zh: '名詞：陰性、複數、與格。', 
                        significationes: { zh: '城邦 (原型: ἡ πόλις)' } 
                    },
                    { 
                        id_verbi: 'v3_6', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v3_7', 
                        terminus: 'αἷς', 
                        analysis_morphologicus_zh: '關係代名詞：陰性、複數、與格。', 
                        significationes: { zh: '在那個... (原型: ὅς, ἥ, ὅ)' } 
                    },
                    { 
                        id_verbi: 'v3_8', 
                        terminus: 'οἱ', 
                        analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', 
                        significationes: { zh: '(定冠詞)' } 
                    },
                    { 
                        id_verbi: 'v3_9', 
                        terminus: 'πλούσιοι', 
                        analysis_morphologicus_zh: '形容詞(作名詞用)：陽性、複數、主格。', 
                        significationes: { zh: '富人 (原型: πλούσιος)' } 
                    },
                    { 
                        id_verbi: 'v3_10', 
                        terminus: 'ἄρχουσιν.', 
                        analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', 
                        significationes: { zh: '統治 (原型: ἄρχω)' } 
                    }
                ]
            },
            {
                id_orationis: 'o4',
                textus_graecus: "μοναρχία ἐστὶν ἐν ταῖς πόλεσι ἐν αἷς βασιλεὺς ἄρχει.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 君主制，就是由一位國王（在城邦中）進行統治。'
                },
                verba: [
                    { 
                        id_verbi: 'v4_1', 
                        terminus: 'μοναρχία', 
                        analysis_morphologicus_zh: '名詞：陰性、單數、主格。', 
                        significationes: { zh: '君主制 (原型: ἡ μοναρχία)' } 
                    },
                    { 
                        id_verbi: 'v4_2', 
                        terminus: 'ἐστὶν', 
                        analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', 
                        significationes: { zh: '是 (原型: εἰμί)' } 
                    },
                    { 
                        id_verbi: 'v4_3', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v4_4', 
                        terminus: 'ταῖς', 
                        analysis_morphologicus_zh: '定冠詞：陰性、複數、與格。', 
                        significationes: { zh: '(定冠詞)' } 
                    },
                    { 
                        id_verbi: 'v4_5', 
                        terminus: 'πόλεσι', 
                        analysis_morphologicus_zh: '名詞：陰性、複數、與格。', 
                        significationes: { zh: '城邦 (原型: ἡ πόλις)' } 
                    },
                    { 
                        id_verbi: 'v4_6', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v4_7', 
                        terminus: 'αἷς', 
                        analysis_morphologicus_zh: '關係代名詞：陰性、複數、與格。', 
                        significationes: { zh: '在那個... (原型: ὅς, ἥ, ὅ)' } 
                    },
                    { 
                        id_verbi: 'v4_8', 
                        terminus: 'βασιλεὺς', 
                        analysis_morphologicus_zh: '名詞：陽性、單數、主格。', 
                        significationes: { zh: '國王 (原型: ὁ βασιλεύς)' } 
                    },
                    { 
                        id_verbi: 'v4_9', 
                        terminus: 'ἄρχει.', 
                        analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', 
                        significationes: { zh: '統治 (原型: ἄρχω)' } 
                    }
                ]
            },
            {
                id_orationis: 'o5',
                textus_graecus: "διαρχία ἐστὶν ἐν ταῖς πόλεσι ἐν αἷς δύο βασιλεῖς ἄρχουσιν.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 雙王制，就是由兩位國王（在城邦中）進行統治。'
                },
                verba: [
                    { 
                        id_verbi: 'v5_1', 
                        terminus: 'διαρχία', 
                        analysis_morphologicus_zh: '名詞：陰性、單數、主格。', 
                        significationes: { zh: '雙王制 (原型: ἡ διαρχία)' } 
                    },
                    { 
                        id_verbi: 'v5_2', 
                        terminus: 'ἐστὶν', 
                        analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', 
                        significationes: { zh: '是 (原型: εἰμί)' } 
                    },
                    { 
                        id_verbi: 'v5_3', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v5_4', 
                        terminus: 'ταῖς', 
                        analysis_morphologicus_zh: '定冠詞：陰性、複數、與格。', 
                        significationes: { zh: '(定冠詞)' } 
                    },
                    { 
                        id_verbi: 'v5_5', 
                        terminus: 'πόλεσι', 
                        analysis_morphologicus_zh: '名詞：陰性、複數、與格。', 
                        significationes: { zh: '城邦 (原型: ἡ πόλις)' } 
                    },
                    { 
                        id_verbi: 'v5_6', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v5_7', 
                        terminus: 'αἷς', 
                        analysis_morphologicus_zh: '關係代名詞：陰性、複數、與格。', 
                        significationes: { zh: '在那個... (原型: ὅς, ἥ, ὅ)' } 
                    },
                    { 
                        id_verbi: 'v5_8', 
                        terminus: 'δύο', 
                        analysis_morphologicus_zh: '數詞：(陽/陰/中)、複數、主格。', 
                        significationes: { zh: '二 (原型: δύο)' } 
                    },
                    { 
                        id_verbi: 'v5_9', 
                        terminus: 'βασιλεῖς', 
                        analysis_morphologicus_zh: '名詞：陽性、複數、主格。', 
                        significationes: { zh: '國王們 (原型: ὁ βασιλεύς)' } 
                    },
                    { 
                        id_verbi: 'v5_10', 
                        terminus: 'ἄρχουσιν.', 
                        analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', 
                        significationes: { zh: '統治 (原型: ἄρχω)' } 
                    }
                ]
            },
            {
                id_orationis: 'o6',
                textus_graecus: "τυραννίς ἐστὶν ἐν ταῖς πόλεσι ἐν αἷς τύραννος ἄρχει.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 僭主制，就是由一位僭主（在城邦中）進行統治。'
                },
                verba: [
                    { 
                        id_verbi: 'v6_1', 
                        terminus: 'τυραννίς', 
                        analysis_morphologicus_zh: '名詞：陰性、單數、主格。', 
                        significationes: { zh: '僭主制 (原型: ἡ τυραννίς)' } 
                    },
                    { 
                        id_verbi: 'v6_2', 
                        terminus: 'ἐστὶν', 
                        analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', 
                        significationes: { zh: '是 (原型: εἰμί)' } 
                    },
                    { 
                        id_verbi: 'v6_3', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v6_4', 
                        terminus: 'ταῖς', 
                        analysis_morphologicus_zh: '定冠詞：陰性、複數、與格。', 
                        significationes: { zh: '(定冠詞)' } 
                    },
                    { 
                        id_verbi: 'v6_5', 
                        terminus: 'πόλεσι', 
                        analysis_morphologicus_zh: '名詞：陰性、複數、與格。', 
                        significationes: { zh: '城邦 (原型: ἡ πόλις)' } 
                    },
                    { 
                        id_verbi: 'v6_6', 
                        terminus: 'ἐν', 
                        analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } 
                    },
                    { 
                        id_verbi: 'v6_7', 
                        terminus: 'αἷς', 
                        analysis_morphologicus_zh: '關係代名詞：陰性、複數、與格。', 
                        significationes: { zh: '在那個... (原型: ὅς, ἥ, ὅ)' } 
                    },
                    { 
                        id_verbi: 'v6_8', 
                        terminus: 'τύραννος', 
                        analysis_morphologicus_zh: '名詞：陽性、單數、主格。', 
                        significationes: { zh: '僭主 (原型: ὁ τύραννος)' } 
                    },
                    { 
                        id_verbi: 'v6_9', 
                        terminus: 'ἄρχει.', 
                        analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', 
                        significationes: { zh: '統治 (原型: ἄρχω)' } 
                    }
                ]
            },
            {
                id_orationis: 'o7',
                textus_graecus: "Ὁ πολίτης καλεῖται ὁ ἀνὴρ ὃς ἐν πατρίᾳ πόλει οἰκεῖ.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 居住在祖國城邦的男人，被稱為公民。'
                },
                verba: [
                    { id_verbi: 'v7_1', terminus: 'Ὁ', analysis_morphologicus_zh: '定冠詞：陽性、單數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v7_2', terminus: 'πολίτης', analysis_morphologicus_zh: '名詞：陽性、單數、主格 (作述語)。', significationes: { zh: '公民 (原型: ὁ πολίτης)' } },
                    { id_verbi: 'v7_3', terminus: 'καλεῖται', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、中間/被動。', significationes: { zh: '被稱為 (原型: καλέω)' } },
                    { id_verbi: 'v7_4', terminus: 'ὁ', analysis_morphologicus_zh: '定冠詞：陽性、單數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v7_5', terminus: 'ἀνὴρ', analysis_morphologicus_zh: '名詞：陽性、單數、主格 (主語)。', significationes: { zh: '男人 (原型: ὁ ἀνήρ)' } },
                    { id_verbi: 'v7_6', terminus: 'ὃς', analysis_morphologicus_zh: '關係代名詞：陽性、單數、主格。', significationes: { zh: '他/那個人 (原型: ὅς)' } },
                    { id_verbi: 'v7_7', terminus: 'ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v7_8', terminus: 'πατρίᾳ', analysis_morphologicus_zh: '形容詞：陰性、單數、與格。', significationes: { zh: '祖國的 (原型: πάτριος)' } },
                    { id_verbi: 'v7_9', terminus: 'πόλει', analysis_morphologicus_zh: '名詞：陰性、單數、與格。', significationes: { zh: '城邦 (原型: ἡ πόλις)' } },
                    { id_verbi: 'v7_10', terminus: 'οἰκεῖ.', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', significationes: { zh: '居住 (原型: οἰκέω)' } }
                ]
            },
            {
                id_orationis: 'o8',
                textus_graecus: "Ἐν Ἀθήναις οἱ πολῖται ἐν τῇ ἐκκλησίᾳ ἐκκλησιάζουσιν.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 在雅典，公民們在公民大會 (Ekklesia) 中集會。'
                },
                verba: [
                    { id_verbi: 'v8_1', terminus: 'Ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v8_2', terminus: 'Ἀθήναις', analysis_morphologicus_zh: '專有名詞：陰性、複數、與格。', significationes: { zh: '在雅典 (原型: αἱ Ἀθῆναι)' } },
                    { id_verbi: 'v8_3', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v8_4', terminus: 'πολῖται', analysis_morphologicus_zh: '名詞：陽性、複數、主格 (主語)。', significationes: { zh: '公民們 (原型: ὁ πολίτης)' } },
                    { id_verbi: 'v8_5', terminus: 'ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', 
                        significationes: { zh: '在...之中' } },
                    { id_verbi: 'v8_6', terminus: 'τῇ', analysis_morphologicus_zh: '定冠詞：陰性、單數、與格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v8_7', terminus: 'ἐκκλησίᾳ', analysis_morphologicus_zh: '名詞：陰性、單數、與格。', significationes: { zh: '在公民大會 (原型: ἡ ἐκκλησία)' } },
                    { id_verbi: 'v8_8', terminus: 'ἐκκλησιάζουσιν.', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們集會 (原型: ἐκκλησιάζω)' } }
                ]
            },
            {
                id_orationis: 'o9',
                textus_graecus: "Τὸ συνέδριον πάντων τῶν Ἀθηναίων πολιτῶν ἐκκλησία ἐκαλεῖτο.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 所有雅典公民的會議（當時）被稱為「公民大會」(Ekklesia)。'
                },
                verba: [
                    { id_verbi: 'v9_1', terminus: 'Τὸ', analysis_morphologicus_zh: '定冠詞：中性、單數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v9_2', terminus: 'συνέδριον', analysis_morphologicus_zh: '名詞：中性、單數、主格 (主語)。', significationes: { zh: '會議 (原型: τὸ συνέδριον)' } },
                    { id_verbi: 'v9_3', terminus: 'πάντων', analysis_morphologicus_zh: '形容詞：陽性、複數、所有格。', significationes: { zh: '所有的 (原型: πᾶς)' } },
                    { id_verbi: 'v9_4', terminus: 'τῶν', analysis_morphologicus_zh: '定冠詞：陽性、複數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v9_5', terminus: 'Ἀθηναίων', analysis_morphologicus_zh: '形容詞：陽性、複數、所有格。', significationes: { zh: '雅典的 (原型: Ἀθηναῖος)' } },
                    { id_verbi: 'v9_6', terminus: 'πολιτῶν', analysis_morphologicus_zh: '名詞：陽性、複數、所有格。', significationes: { zh: '公民的 (原型: ὁ πολίτης)' } },
                    { id_verbi: 'v9_7', terminus: 'ἐκκλησία', analysis_morphologicus_zh: '名詞：陰性、單數、主格 (作述語)。', significationes: { zh: '公民大會 (原型: ἡ ἐκκλησία)' } },
                    { id_verbi: 'v9_8', terminus: 'ἐκαλεῖτο.', analysis_morphologicus_zh: '動詞：第三人稱、單數、未完成時、直陳語氣、中間/被動。', significationes: { zh: '被稱為 (原型: καλέω)' } }
                ]
            },
            {
                id_orationis: 'o10',
                textus_graecus: "Αἱ δὲ Ἀθηναῖαι πολίτιδες οὐκ ἠκκλησίαζον.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 然而，雅典的女性公民們（當時）不參加公民大會。'
                },
                verba: [
                    { id_verbi: 'v10_1', terminus: 'Αἱ', analysis_morphologicus_zh: '定冠詞：陰性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v10_2', terminus: 'δὲ', analysis_morphologicus_zh: '助詞 (postpositive)。', significationes: { zh: '然而' } },
                    { id_verbi: 'v10_3', terminus: 'Ἀθηναῖαι', analysis_morphologicus_zh: '形容詞：陰性、複數、主格。', significationes: { zh: '雅典的 (原型: Ἀθηναῖος)' } },
                    { id_verbi: 'v10_4', terminus: 'πολίτιδες', analysis_morphologicus_zh: '名詞：陰性、複數、主格 (主語)。', significationes: { zh: '女性公民們 (原型: ἡ πολῖτις)' } },
                    { id_verbi: 'v10_5', terminus: 'οὐκ', analysis_morphologicus_zh: '副詞 (否定)。', significationes: { zh: '不' } },
                    { id_verbi: 'v10_6', terminus: 'ἠκκλησίαζον.', analysis_morphologicus_zh: '動詞：第三人稱、複數、未完成時、直陳語氣、主動。', significationes: { zh: '她們參加集會 (原型: ἐκκλησιάζω)' } }
                ]
            },
            {
                id_orationis: 'o11',
                textus_graecus: "Ἡ πολῖτις καλεῖται ἡ γυνὴ ἣ ἐν πατρίᾳ πόλει οἰκεῖ.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 居住在祖國城邦的女人，被稱為女性公民。'
                },
                verba: [
                    { id_verbi: 'v11_1', terminus: 'Ἡ', analysis_morphologicus_zh: '定冠詞：陰性、單數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v11_2', terminus: 'πολῖτις', analysis_morphologicus_zh: '名詞：陰性、單數、主格 (作述語)。', significationes: { zh: '女性公民 (原型: ἡ πολῖτις)' } },
                    { id_verbi: 'v11_3', terminus: 'καλεῖται', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、中間/被動。', significationes: { zh: '被稱為 (原型: καλέω)' } },
                    { id_verbi: 'v11_4', terminus: 'ἡ', analysis_morphologicus_zh: '定冠詞：陰性、單數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v11_5', terminus: 'γυνὴ', analysis_morphologicus_zh: '名詞：陰性、單數、主格 (主語)。', significationes: { zh: '女人 (原型: ἡ γυνή)' } },
                    { id_verbi: 'v11_6', terminus: 'ἣ', analysis_morphologicus_zh: '關係代名詞：陰性、單數、主格。', significationes: { zh: '她/那個人 (原型: ὅς)' } },
                    { id_verbi: 'v11_7', terminus: 'ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v11_8', terminus: 'πατρίᾳ', analysis_morphologicus_zh: '形容詞：陰性、單數、與格。', significationes: { zh: '祖國的 (原型: πάτριος)' } },
                    { id_verbi: 'v11_9', terminus: 'πόλει', analysis_morphologicus_zh: '名詞：陰性、單數、與格。', significationes: { zh: '城邦 (原型: ἡ πόλις)' } },
                    { id_verbi: 'v11_10', terminus: 'οἰκεῖ.', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', significationes: { zh: '居住 (原型: οἰκέω)' } }
                ]
            },
            {
                id_orationis: 'o12',
                textus_graecus: "Ἐν τῇ ἑορτῇ τῶν Παναθηναίων πάντες οἱ Ἀθηναῖοι πολῖται μέτοικοί τε καὶ δοῦλοι τῇ θεᾷ Ἀθηνᾷ ἑορτάζουσιν.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 在泛雅典娜節的慶典上，所有的雅典公民、外邦僑民和奴隸都（一起）為女神雅典娜慶祝。'
                },
                verba: [
                    { id_verbi: 'v12_1', terminus: 'Ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v12_2', terminus: 'τῇ', analysis_morphologicus_zh: '定冠詞：陰性、單數、與格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v12_3', terminus: 'ἑορτῇ', analysis_morphologicus_zh: '名詞：陰性、單數、與格。', significationes: { zh: '在慶典中 (原型: ἡ ἑορτή)' } },
                    { id_verbi: 'v12_4', terminus: 'τῶν', analysis_morphologicus_zh: '定冠詞：中性、複數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v12_5', terminus: 'Παναθηναίων', analysis_morphologicus_zh: '專有名詞：中性、複數、所有格。', significationes: { zh: '泛雅典娜節的 (原型: τὰ Παναθήναια)' } },
                    { id_verbi: 'v12_6', terminus: 'πάντες', analysis_morphologicus_zh: '形容詞：陽性、複數、主格。', significationes: { zh: '所有的 (原型: πᾶς)' } },
                    { id_verbi: 'v12_7', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v12_8', terminus: 'Ἀθηναῖοι', analysis_morphologicus_zh: '形容詞：陽性、複數、主格。', significationes: { zh: '雅典的 (原型: Ἀθηναῖος)' } },
                    { id_verbi: 'v12_9', terminus: 'πολῖται', analysis_morphologicus_zh: '名詞：陽性、複數、主格。', significationes: { zh: '公民們 (原型: ὁ πολίτης)' } },
                    { id_verbi: 'v12_10', terminus: 'μέτοικοί', analysis_morphologicus_zh: '名詞：陽性、複數、主格。', significationes: { zh: '外邦僑民 (原型: ὁ μέτοικος)' } },
                    { id_verbi: 'v12_11', terminus: 'τε', analysis_morphologicus_zh: '連接詞 (enclitic)。', significationes: { zh: '與' } },
                    { id_verbi: 'v12_12', terminus: 'καὶ', analysis_morphologicus_zh: '連接詞。', significationes: { zh: '和' } },
                    { id_verbi: 'v12_13', terminus: 'δοῦλοι', analysis_morphologicus_zh: '名詞：陽性、複數、主格。', significationes: { zh: '奴隸們 (原型: ὁ δοῦλος)' } },
                    { id_verbi: 'v12_14', terminus: 'τῇ', analysis_morphologicus_zh: '定冠詞：陰性、單數、與格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v12_15', terminus: 'θεᾷ', analysis_morphologicus_zh: '名詞：陰性、單數、與格 (間接受詞)。', significationes: { zh: '為女神 (原型: ἡ θεά)' } },
                    { id_verbi: 'v12_16', terminus: 'Ἀθηνᾷ', analysis_morphologicus_zh: '專有名詞：陰性、單數、與格。', significationes: { zh: '為雅典娜 (原型: ἡ Ἀθηνᾶ)' } },
                    { id_verbi: 'v12_17', terminus: 'ἑορτάζουσιν.', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們慶祝 (原型: ἑορτάζω)' } }
                ]
            },
            {
                id_orationis: 'o13',
                textus_graecus: "Τοῖς πλουσίοις Ἀθηναίοις προσήκει πολλοὺς πολίτας δέχεσθαι ἐν ταῖς οἰκίαις.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 富有的雅典人理應在他們的家中接待許多公民。'
                },
                verba: [
                    { id_verbi: 'v13_1', terminus: 'Τοῖς', analysis_morphologicus_zh: '定冠詞：陽性、複數、與格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v13_2', terminus: 'πλουσίοις', analysis_morphologicus_zh: '形容詞：陽性、複數、與格。', significationes: { zh: '富有的 (原型: πλούσιος)' } },
                    { id_verbi: 'v13_3', terminus: 'Ἀθηναίοις', analysis_morphologicus_zh: '名詞：陽性、複數、與格。', significationes: { zh: '雅典人 (原型: ὁ Ἀθηναῖος)' } },
                    { id_verbi: 'v13_4', terminus: 'προσήκει', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動 (無人稱)。', significationes: { zh: '理應 (原型: προσήκω)' } },
                    { id_verbi: 'v13_5', terminus: 'πολλοὺς', analysis_morphologicus_zh: '形容詞：陽性、複數、直接受格。', significationes: { zh: '許多的 (原型: πολύς)' } },
                    { id_verbi: 'v13_6', terminus: 'πολίτας', analysis_morphologicus_zh: '名詞：陽性、複數、直接受格。', significationes: { zh: '公民 (原型: ὁ πολίτης)' } },
                    { id_verbi: 'v13_7', terminus: 'δέχεσθαι', analysis_morphologicus_zh: '動詞：現在時、不定詞、中間/被動。', significationes: { zh: '去接待 (原型: δέχομαι)' } },
                    { id_verbi: 'v13_8', terminus: 'ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v13_9', terminus: 'ταῖς', analysis_morphologicus_zh: '定冠詞：陰性、複數、與格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v13_10', terminus: 'οἰκίαις.', analysis_morphologicus_zh: '名詞：陰性、複數、與格。', significationes: { zh: '在家中 (原型: ἡ οἰκία)' } }
                ]
            },
            {
                id_orationis: 'o14',
                textus_graecus: "Τίνες μετέχουσι τῆς ἀρχῆς τῆς πόλεως ἐν δημοκρατίᾳ;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 在民主制中，是誰參與城邦的治理呢？'
                },
                verba: [
                    { id_verbi: 'v14_1', terminus: 'Τίνες', analysis_morphologicus_zh: '疑問代名詞：陽性/陰性、複數、主格 (主語)。', significationes: { zh: '誰？ (原型: τίς)' } },
                    { id_verbi: 'v14_2', terminus: 'μετέχουσι', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動 [+所有格]。', significationes: { zh: '他們參與 (原型: μετέχω)' } },
                    { id_verbi: 'v14_3', terminus: 'τῆς', analysis_morphologicus_zh: '定冠詞：陰性、單數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v14_4', terminus: 'ἀρχῆς', analysis_morphologicus_zh: '名詞：陰性、單數、所有格 (動詞的受詞)。', significationes: { zh: '治理權 (原型: ἡ ἀρχή)' } },
                    { id_verbi: 'v14_5', terminus: 'τῆς', analysis_morphologicus_zh: '定冠詞：陰性、單數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v14_6', terminus: 'πόλεως', analysis_morphologicus_zh: '名詞：陰性、單數、所有格。', significationes: { zh: '城邦的 (原型: ἡ πόλις)' } },
                    { id_verbi: 'v14_7', terminus: 'ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v14_8', terminus: 'δημοκρατίᾳ;', analysis_morphologicus_zh: '名詞：陰性、單數、與格。', significationes: { zh: '在民主制中 (原型: ἡ δημοκρατία)' } }
                ]
            },
            {
                id_orationis: 'o15',
                textus_graecus: "Πάντες οἱ Ἀθηναῖοι.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 所有的雅典人（都參與）。'
                },
                verba: [
                    { id_verbi: 'v15_1', terminus: 'Πάντες', analysis_morphologicus_zh: '形容詞：陽性、複數、主格。', significationes: { zh: '所有的 (原型: πᾶς)' } },
                    { id_verbi: 'v15_2', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v15_3', terminus: 'Ἀθηναῖοι.', analysis_morphologicus_zh: '名詞：陽性、複數、主格。', significationes: { zh: '雅典人 (原型: ὁ Ἀθηναῖος)' } }
                ]
            },
            {
                id_orationis: 'o16',
                textus_graecus: "Πῶς δὲ πολιτεύονται;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 那麼，他們如何管理城邦事務呢？'
                },
                verba: [
                    { id_verbi: 'v16_1', terminus: 'Πῶς', analysis_morphologicus_zh: '疑問副詞。', significationes: { zh: '如何？' } },
                    { id_verbi: 'v16_2', terminus: 'δὲ', analysis_morphologicus_zh: '助詞。', significationes: { zh: '那麼' } },
                    { id_verbi: 'v16_3', terminus: 'πολιτεύονται;', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、中間/被動。', significationes: { zh: '他們管理政務 (原型: πολιτεύομαι)' } }
                ]
            },
            {
                id_orationis: 'o17',
                textus_graecus: "Οἱ μὲn τὰ τῆς πόλεως κοινὰ χρήματα λέγουσιν, οἱ δὲ νομοθετοῦσιν, οἱ δὲ δικάζουσι καὶ οἱ δὲ βουλεύουσιν ἐν τῇ βουλῇ.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 有些人管理城邦的公共財產，有些人制定法律，有些人擔任法官，還有些人則在議會 (Boule) 中議事。'
                },
                verba: [
                    { id_verbi: 'v17_1', terminus: 'Οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '有些人' } },
                    { id_verbi: 'v17_2', terminus: 'μὲn', analysis_morphologicus_zh: '助詞 (相關)。', significationes: { zh: '(...一方面)' } },
                    { id_verbi: 'v17_3', terminus: 'τὰ', analysis_morphologicus_zh: '定冠詞：中性、複數、直接受格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v17_4', terminus: 'τῆς', analysis_morphologicus_zh: '定冠詞：陰性、單數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v17_5', terminus: 'πόλεως', analysis_morphologicus_zh: '名詞：陰性、單數、所有格。', significationes: { zh: '城邦的 (原型: ἡ πόλις)' } },
                    { id_verbi: 'v17_6', terminus: 'κοινὰ', analysis_morphologicus_zh: '形容詞：中性、複數、直接受格。', significationes: { zh: '公共的 (原型: κοινός)' } },
                    { id_verbi: 'v17_7', terminus: 'χρήματα', analysis_morphologicus_zh: '名詞：中性、複數、直接受格。', significationes: { zh: '財產 (原型: τὸ χρῆμα)' } },
                    { id_verbi: 'v17_8', terminus: 'λέγουσιν,', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們談論/管理 (原型: λέγω)' } },
                    { id_verbi: 'v17_9', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '另一些人' } },
                    { id_verbi: 'v17_10', terminus: 'δὲ', analysis_morphologicus_zh: '助詞 (相關)。', significationes: { zh: '(...另一方面)' } },
                    { id_verbi: 'v17_11', terminus: 'νομοθετοῦσιν,', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們制定法律 (原型: νομοθετέω)' } },
                    { id_verbi: 'v17_12', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '另一些人' } },
                    { id_verbi: 'v17_13', terminus: 'δὲ', analysis_morphologicus_zh: '助詞 (相關)。', significationes: { zh: '(...另一方面)' } },
                    { id_verbi: 'v17_14', terminus: 'δικάζουσι', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們審判 (原型: δικάζω)' } },
                    { id_verbi: 'v17_15', terminus: 'καὶ', analysis_morphologicus_zh: '連接詞。', significationes: { zh: '和' } },
                    { id_verbi: 'v17_16', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '還有一些人' } },
                    { id_verbi: 'v17_17', terminus: 'δὲ', analysis_morphologicus_zh: '助詞 (相關)。', significationes: { zh: '(...另一方面)' } },
                    { id_verbi: 'v17_18', terminus: 'βουλεύουσιν', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們議事 (原型: βουλεύω)' } },
                    { id_verbi: 'v17_19', terminus: 'ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v17_20', terminus: 'τῇ', analysis_morphologicus_zh: '定冠詞：陰性、單數、與格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v17_21', terminus: 'βουλῇ.', analysis_morphologicus_zh: '名詞：陰性、單數、與格。', significationes: { zh: '在議會中 (原型: ἡ βουλή)' } }
                ]
            },
            {
                id_orationis: 'o18',
                textus_graecus: "Τί δὲ ποιοῦσιν οἱ ἐκκλησιάζοντες ἐν ἐκκλησίᾳ;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 那麼，在公民大會上集會的人們（都）做什麼呢？'
                },
                verba: [
                    { id_verbi: 'v18_1', terminus: 'Τί', analysis_morphologicus_zh: '疑問代名詞：中性、單數、直接受格 (受詞)。', significationes: { zh: '什麼？ (原型: τίς)' } },
                    { id_verbi: 'v18_2', terminus: 'δὲ', analysis_morphologicus_zh: '助詞。', significationes: { zh: '那麼' } },
                    { id_verbi: 'v18_3', terminus: 'ποιοῦσιν', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們做 (原型: ποιέω)' } },
                    { id_verbi: 'v18_4', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v18_5', terminus: 'ἐκκλησιάζοντες', analysis_morphologicus_zh: '分詞(作名詞用)：現在時、主動、陽性、複數、主格 (主語)。', significationes: { zh: '那些集會的人 (原型: ἐκκλησιάζω)' } },
                    { id_verbi: 'v18_6', terminus: 'ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v18_7', terminus: 'ἐκκλησίᾳ;', analysis_morphologicus_zh: '名詞：陰性、單數、與格。', significationes: { zh: '在公民大會 (原型: ἡ ἐκκλησία)' } }
                ]
            },
            {
                id_orationis: 'o19',
                textus_graecus: "Τὰ περὶ τῆς πόλεως κοινὰ πράγματα λέγουσιν, κρίνουσι καὶ ψηφίζονται.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 他們討論、裁決並投票表決城邦的公共事務。'
                },
                verba: [
                    { id_verbi: 'v19_1', terminus: 'Τὰ', analysis_morphologicus_zh: '定冠詞：中性、複數、直接受格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v19_2', terminus: 'περὶ', analysis_morphologicus_zh: '介詞 (搭配所有格)。', significationes: { zh: '關於' } },
                    { id_verbi: 'v19_3', terminus: 'τῆς', analysis_morphologicus_zh: '定冠詞：陰性、單數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v19_4', terminus: 'πόλεως', analysis_morphologicus_zh: '名詞：陰性、單數、所有格。', significationes: { zh: '城邦的 (原型: ἡ πόλις)' } },
                    { id_verbi: 'v19_5', terminus: 'κοινὰ', analysis_morphologicus_zh: '形容詞：中性、複數、直接受格。', significationes: { zh: '公共的 (原型: κοινός)' } },
                    { id_verbi: 'v19_6', terminus: 'πράγματα', analysis_morphologicus_zh: '名詞：中性、複數、直接受格 (受詞)。', significationes: { zh: '事務 (原型: τὸ πρᾶγμα)' } },
                    { id_verbi: 'v19_7', terminus: 'λέγουσιν,', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們討論 (原型: λέγω)' } },
                    { id_verbi: 'v19_8', terminus: 'κρίνουσι', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們裁決 (原型: κρίνω)' } },
                    { id_verbi: 'v19_9', terminus: 'καὶ', analysis_morphologicus_zh: '連接詞。', significationes: { zh: '並且' } },
                    { id_verbi: 'v19_10', terminus: 'ψηφίζονται.', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、中間。', significationes: { zh: '他們投票 (原型: ψηφίζομαι)' } }
                ]
            },
            {
                id_orationis: 'o20',
                textus_graecus: "Ποῦ γίγνεται ἡ ἐκκλησία;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 公民大會在哪裡舉行？'
                },
                verba: [
                    { id_verbi: 'v20_1', terminus: 'Ποῦ', analysis_morphologicus_zh: '疑問副詞。', significationes: { zh: '在哪裡？' } },
                    { id_verbi: 'v20_2', terminus: 'γίγνεται', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、中間/被動。', significationes: { zh: '舉行 (原型: γίγνομαι)' } },
                    { id_verbi: 'v20_3', terminus: 'ἡ', analysis_morphologicus_zh: '定冠詞：陰性、單數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v20_4', terminus: 'ἐκκλησία;', analysis_morphologicus_zh: '名詞：陰性、單數、主格 (主語)。', significationes: { zh: '公民大會 (原型: ἡ ἐκκλησία)' } }
                ]
            },
            {
                id_orationis: 'o21',
                textus_graecus: "Οἱ Ἀθηναῖοι ἐκκλησίαν ποιοῦσιν ἐν τῇ καλουμένῃ Πνυκί.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 雅典人在被稱為「普尼克斯」(Pnyx) 的地方舉行公民大會。'
                },
                verba: [
                    { id_verbi: 'v21_1', terminus: 'Οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v21_2', terminus: 'Ἀθηναῖοι', analysis_morphologicus_zh: '名詞：陽性、複數、主格 (主語)。', significationes: { zh: '雅典人 (原型: ὁ Ἀθηναῖος)' } },
                    { id_verbi: 'v21_3', terminus: 'ἐκκλησίαν', analysis_morphologicus_zh: '名詞：陰性、單數、直接受格 (受詞)。', significationes: { zh: '公民大會 (原型: ἡ ἐκκλησία)' } },
                    { id_verbi: 'v21_4', terminus: 'ποιοῦσιν', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們舉行 (原型: ποιέω)' } },
                    { id_verbi: 'v21_5', terminus: 'ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v21_6', terminus: 'τῇ', analysis_morphologicus_zh: '定冠詞：陰性、單數、與格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v21_7', terminus: 'καλουμένῃ', analysis_morphologicus_zh: '分詞：現在時、中間/被動、陰性、單數、與格。', significationes: { zh: '被稱為...的 (原型: καλέω)' } },
                    { id_verbi: 'v21_8', terminus: 'Πνυκί.', analysis_morphologicus_zh: '專有名詞：陰性、單數、與格。', significationes: { zh: '在普尼克斯 (原型: ἡ Πνύξ)' } }
                ]
            },
            {
                id_orationis: 'o22',
                textus_graecus: "Πῶς καλεῖται τὸ συνέδριον τῶν βουλευτῶν;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 議會成員 (Bouleutai) 的會議被稱為什麼？'
                },
                verba: [
                    { id_verbi: 'v22_1', terminus: 'Πῶς', analysis_morphologicus_zh: '疑問副詞。', significationes: { zh: '如何？稱為什麼？' } },
                    { id_verbi: 'v22_2', terminus: 'καλεῖται', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、中間/被動。', significationes: { zh: '被稱為 (原型: καλέω)' } },
                    { id_verbi: 'v22_3', terminus: 'τὸ', analysis_morphologicus_zh: '定冠詞：中性、單數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v22_4S', terminus: 'συνέδριον', analysis_morphologicus_zh: '名詞：中性、單數、主格 (主語)。', significationes: { zh: '會議 (原型: τὸ συνέδριον)' } },
                    { id_verbi: 'v22_5', terminus: 'τῶν', analysis_morphologicus_zh: '定冠詞：陽性、複數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v22_6', terminus: 'βουλευτῶν;', analysis_morphologicus_zh: '名詞：陽性、複數、所有格。', significationes: { zh: '議會成員的 (原型: ὁ βουλευτής)' } }
                ]
            },
            {
                id_orationis: 'o23',
                textus_graecus: "Βουλὴ καλεῖται.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: （它）被稱為「議會」(Boule)。'
                },
                verba: [
                    { id_verbi: 'v23_1', terminus: 'Βουλὴ', analysis_morphologicus_zh: '名詞：陰性、單數、主格 (述語)。', significationes: { zh: '議會 (原型: ἡ βουλή)' } },
                    { id_verbi: 'v23_2', terminus: 'καλεῖται.', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、中間/被動。', significationes: { zh: '被稱為 (原型: καλέω)' } }
                ]
            },
            {
                id_orationis: 'o24',
                textus_graecus: "Ποῦ δὲ συνεδρεύουσιν οἱ βουλευταί;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 那麼，議會成員在哪裡開會？'
                },
                verba: [
                    { id_verbi: 'v24_1', terminus: 'Ποῦ', analysis_morphologicus_zh: '疑問副詞。', significationes: { zh: '在哪裡？' } },
                    { id_verbi: 'v24_2', terminus: 'δὲ', analysis_morphologicus_zh: '助詞。', significationes: { zh: '那麼' } },
                    { id_verbi: 'v24_3', terminus: 'συνεδρεύουσιν', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們開會 (原型: συνεδρεύω)' } },
                    { id_verbi: 'v24_4', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v24_5', terminus: 'βουλευταί;', analysis_morphologicus_zh: '名詞：陽性、複數、主格 (主語)。', significationes: { zh: '議會成員 (原型: ὁ βουλευτής)' } }
                ]
            },
            {
                id_orationis: 'o25',
                textus_graecus: "Ἐν τῷ καλουμένῳ Βουλευτηρίῳ.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 在被稱為「議會廳」(Bouleuterion) 的地方。'
                },
                verba: [
                    { id_verbi: 'v25_1', terminus: 'Ἐν', analysis_morphologicus_zh: '介詞 (搭配與格)。', significationes: { zh: '在...之中' } },
                    { id_verbi: 'v25_2', terminus: 'τῷ', analysis_morphologicus_zh: '定冠詞：中性、單數、與格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v25_3', terminus: 'καλουμένῳ', analysis_morphologicus_zh: '分詞：現在時、中間/被動、中性、單數、與格。', significationes: { zh: '被稱為...的 (原型: καλέω)' } },
                    { id_verbi: 'v25_4', terminus: 'Βουλευτηρίῳ.', analysis_morphologicus_zh: '專有名詞：中性、單數、與格。', significationes: { zh: '在議會廳 (原型: τὸ Βουλευτήριον)' } }
                ]
            },
            {
                id_orationis: 'o26',
                textus_graecus: "Αἱ τῶν Ἀθηναίων ἀρχαὶ πολλαί εἰσιν.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 雅典的官職有很多。'
                },
                verba: [
                    { id_verbi: 'v26_1', terminus: 'Αἱ', analysis_morphologicus_zh: '定冠詞：陰性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v26_2', terminus: 'τῶν', analysis_morphologicus_zh: '定冠詞：陽性、複數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v26_3', terminus: 'Ἀθηναίων', analysis_morphologicus_zh: '名詞：陽性、複數、所有格。', significationes: { zh: '雅典人的 (原型: ὁ Ἀθηναῖος)' } },
                    { id_verbi: 'v26_4', terminus: 'ἀρχαὶ', analysis_morphologicus_zh: '名詞：陰性、複數、主格 (主語)。', significationes: { zh: '官職 (原型: ἡ ἀρχή)' } },
                    { id_verbi: 'v26_5', terminus: 'πολλαí', analysis_morphologicus_zh: '形容詞：陰性、複數、主格 (述語)。', significationes: { zh: '許多的 (原型: πολύς)' } },
                    { id_verbi: 'v26_6', terminus: 'εἰσιν.', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '是 (原型: εἰμί)' } }
                ]
            },
            {
                id_orationis: 'o27',
                textus_graecus: "Αἱ πλεῖσται κληρωταí εἰσιν, ὥσπερ οἱ βουλευταí, οἱ ἄρχοντες καὶ οἱ θεσμοθέται.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 大多數（官職）是抽籤選出的，例如議會成員、執政官 (Archons) 和立法者 (Thesmothetai)。'
                },
                verba: [
                    { id_verbi: 'v27_1', terminus: 'Αἱ', analysis_morphologicus_zh: '定冠詞：陰性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v27_2', terminus: 'πλεῖσται', analysis_morphologicus_zh: '形容詞(最高級)：陰性、複數、主格 (主語)。', significationes: { zh: '大多數 (原型: πλεῖστος)' } },
                    { id_verbi: 'v27_3', terminus: 'κληρωταí', analysis_morphologicus_zh: '形容詞：陰性、複數、主格 (述語)。', significationes: { zh: '抽籤選出的 (原型: κληρωτός)' } },
                    { id_verbi: 'v27_4', terminus: 'εἰσιν,', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '是 (原型: εἰμί)' } },
                    { id_verbi: 'v27_5', terminus: 'ὥσπερ', analysis_morphologicus_zh: '副詞。', significationes: { zh: '如同' } },
                    { id_verbi: 'v27_6', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v27_7', terminus: 'βουλευταí,', analysis_morphologicus_zh: '名詞：陽性、複數、主格。', significationes: { zh: '議會成員 (原型: ὁ βουλευτής)' } },
                    { id_verbi: 'v27_8', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v27_9', terminus: 'ἄρχοντες', analysis_morphologicus_zh: '名詞：陽性、複數、主格。', significationes: { zh: '執政官 (原型: ὁ ἄρχων)' } },
                    { id_verbi: 'v27_10', terminus: 'καὶ', analysis_morphologicus_zh: '連接詞。', significationes: { zh: '和' } },
                    { id_verbi: 'v27_11', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v27_12', terminus: 'θεσμοθέται.', analysis_morphologicus_zh: '名詞：陽性、複數、主格。', significationes: { zh: '立法者 (原型: ὁ θεσμοθέτης)' } }
                ]
            },
            {
                id_orationis: 'o28',
                textus_graecus: "Πόσους βουλευτὰς λαγχάνουσιν οἱ Ἀθηναῖοι;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 雅典人抽籤選出多少名議會成員？'
                },
                verba: [
                    { id_verbi: 'v28_1', terminus: 'Πόσους', analysis_morphologicus_zh: '疑問形容詞：陽性、複數、直接受格。', significationes: { zh: '多少？ (原型: πόσος)' } },
                    { id_verbi: 'v28_2', terminus: 'βουλευτὰς', analysis_morphologicus_zh: '名詞：陽性、複數、直接受格 (受詞)。', significationes: { zh: '議會成員 (原型: ὁ βουλευτής)' } },
                    { id_verbi: 'v28_3', terminus: 'λαγχάνουσιν', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們抽籤選出 (原型: λαγχάνω)' } },
                    { id_verbi: 'v28_4', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v28_5', terminus: 'Ἀθηναῖοι;', analysis_morphologicus_zh: '名詞：陽性、複數、主格 (主語)。', significationes: { zh: '雅典人 (原型: ὁ Ἀθηναῖος)' } }
                ]
            },
            {
                id_orationis: 'o29',
                textus_graecus: "Πεντακοσίους, τοῦτ’ ἐστιν, πεντήκοντα ἀπὸ φυλῆς ἑκάστης.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 五百名。也就是說，從每一個部落（選出）五十名。'
                },
                verba: [
                    { id_verbi: 'v29_1', terminus: 'Πεντακοσίους,', analysis_morphologicus_zh: '數詞：陽性、複數、直接受格。', significationes: { zh: '五百 (原型: Πεντακόσιοι)' } },
                    { id_verbi: 'v29_2', terminus: 'τοῦτ’', analysis_morphologicus_zh: '(τοῦτο) 代名詞：中性、單數、主格。', significationes: { zh: '這' } },
                    { id_verbi: 'v29_3', terminus: 'ἐστιν,', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', significationes: { zh: '是 (原型: εἰμί)' } },
                    { id_verbi: 'v29_4', terminus: 'πεντήκοντα', analysis_morphologicus_zh: '數詞 (不可變)。', significationes: { zh: '五十' } },
                    { id_verbi: 'v29_5', terminus: 'ἀπὸ', analysis_morphologicus_zh: '介詞 (搭配所有格)。', significationes: { zh: '從...' } },
                    { id_verbi: 'v29_6', terminus: 'φυλῆς', analysis_morphologicus_zh: '名詞：陰性、單數、所有格。', significationes: { zh: '部落 (原型: ἡ φυλή)' } },
                    { id_verbi: 'v29_7', terminus: 'ἑκάστης.', analysis_morphologicus_zh: '形容詞：陰性、單數、所有格。', significationes: { zh: '每一個 (原型: ἕκαστος)' } }
                ]
            },
            {
                id_orationis: 'o30',
                textus_graecus: "Τίνων ἐπιμελεῖται ἡ βουλή;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 議會 (Boule) 負責管理哪些事務？'
                },
                verba: [
                    { id_verbi: 'v30_1', terminus: 'Τίνων', analysis_morphologicus_zh: '疑問代名詞：(中/陽/陰)、複數、所有格 (受詞)。', significationes: { zh: '什麼的？ (原型: τίς)' } },
                    { id_verbi: 'v30_2', terminus: 'ἐπιμελεῖται', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、中間/被動 [+所有格]。', significationes: { zh: '它照管 (原型: ἐπιμελέομαι)' } },
                    { id_verbi: 'v30_3', terminus: 'ἡ', analysis_morphologicus_zh: '定冠詞：陰性、單數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v30_4', terminus: 'βουλή;', analysis_morphologicus_zh: '名詞：陰性、單數、主格 (主語)。', significationes: { zh: '議會 (原型: ἡ βουλή)' } }
                ]
            },
            {
                id_orationis: 'o31',
                textus_graecus: "... δίδωσι τῇ ἐκκλησίᾳ, τὰς ἀρχὰς κρίνει τὰς πλείστας, καὶ μάλισθ’ ὅσαι χρήματα διαχειρίζουσιν· δοκιμάζει δὲ καὶ τοὺς ἐννέα ἄρχοντας.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: ...（議會）向公民大會... [提交議案]，它審核大多數的官職，特別是那些管理財政的官職；此外，它還審查九位執政官 (Archons)。'
                },
                verba: [
                    { id_verbi: 'v31_1', terminus: '...', analysis_morphologicus_zh: '(省略)', significationes: { zh: '...' } },
                    { id_verbi: 'v31_2', terminus: 'δίδωσι', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', significationes: { zh: '它給予 (原型: δίδωμι)' } },
                    { id_verbi: 'v31_3', terminus: 'τῇ', analysis_morphologicus_zh: '定冠詞：陰性、單數、與格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v31_4', terminus: 'ἐκκλησίᾳ,', analysis_morphologicus_zh: '名詞：陰性、單數、與格 (間接受詞)。', significationes: { zh: '給公民大會 (原型: ἡ ἐκκλησία)' } },
                    { id_verbi: 'v31_5', terminus: 'τὰς', analysis_morphologicus_zh: '定冠詞：陰性、複數、直接受格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v31_6', terminus: 'ἀρχὰς', analysis_morphologicus_zh: '名詞：陰性、複數、直接受格 (受詞)。', significationes: { zh: '官職 (原型: ἡ ἀρχή)' } },
                    { id_verbi: 'v31_7', terminus: 'κρίνει', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', significationes: { zh: '它審核 (原型: κρίνω)' } },
                    { id_verbi: 'v31_8', terminus: 'τὰς', analysis_morphologicus_zh: '定冠詞：陰性、複數、直接受格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v31_9', terminus: 'πλείστας,', analysis_morphologicus_zh: '形容詞(最高級)：陰性、複數、直接受格。', significationes: { zh: '大多數的 (原型: πλεῖστος)' } },
                    { id_verbi: 'v31_10', terminus: 'καὶ', analysis_morphologicus_zh: '連接詞。', significationes: { zh: '並且' } },
                    { id_verbi: 'v31_11', terminus: 'μάλισθ’', analysis_morphologicus_zh: '(μάλιστα) 副詞 (最高級)。', significationes: { zh: '尤其是' } },
                    { id_verbi: 'v31_12', terminus: 'ὅσαι', analysis_morphologicus_zh: '關係代名詞：陰性、複數、主格 (主語)。', significationes: { zh: '那些...的 (原型: ὅσος)' } },
                    { id_verbi: 'v31_13', terminus: 'χρήματα', analysis_morphologicus_zh: '名詞：中性、複數、直接受格 (受詞)。', significationes: { zh: '錢財 (原型: τὸ χρῆμα)' } },
                    { id_verbi: 'v31_14', terminus: 'διαχειρίζουσιν·', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們管理 (原型: διαχειρίζω)' } },
                    { id_verbi: 'v31_15', terminus: 'δοκιμάζει', analysis_morphologicus_zh: '動詞：第三人稱、單數、現在時、直陳語氣、主動。', significationes: { zh: '它審查 (原型: δοκιμάζω)' } },
                    { id_verbi: 'v31_16', terminus: 'δὲ', analysis_morphologicus_zh: '助詞。', significationes: { zh: '並且' } },
                    { id_verbi: 'v31_17', terminus: 'καὶ', analysis_morphologicus_zh: '副詞。', significationes: { zh: '也' } },
                    { id_verbi: 'v31_18', terminus: 'τοὺς', analysis_morphologicus_zh: '定冠詞：陽性、複數、直接受格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v31_19', terminus: 'ἐννέα', analysis_morphologicus_zh: '數詞 (不可變)。', significationes: { zh: '九' } },
                    { id_verbi: 'v31_20', terminus: 'ἄρχοντας.', analysis_morphologicus_zh: '名詞：陽性、複數、直接受格 (受詞)。', significationes: { zh: '執政官 (原型: ὁ ἄρχων)' } }
                ]
            },
            {
                id_orationis: 'o32',
                textus_graecus: "Πόσοι δὲ ἄρχοντες καὶ θεσμοθέται κληροῦνται κατ’ ἔτος;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 那麼，每年有多少執政官 (Archons) 和立法者 (Thesmothetai) 是被抽籤選出的呢？'
                },
                verba: [
                    { id_verbi: 'v32_1', terminus: 'Πόσοι', analysis_morphologicus_zh: '疑問形容詞：陽性、複數、主格。', significationes: { zh: '多少？ (原型: πόσος)' } },
                    { id_verbi: 'v32_2', terminus: 'δὲ', analysis_morphologicus_zh: '助詞 (postpositive)。', significationes: { zh: '那麼' } },
                    { id_verbi: 'v32_3', terminus: 'ἄρχοντες', analysis_morphologicus_zh: '名詞：陽性、複數、主格。', significationes: { zh: '執政官 (原型: ὁ ἄρχων)' } },
                    { id_verbi: 'v32_4', terminus: 'καὶ', analysis_morphologicus_zh: '連接詞。', significationes: { zh: '和' } },
                    { id_verbi: 'v32_5', terminus: 'θεσμοθέται', analysis_morphologicus_zh: '名詞：陽性、複數、主格。', significationes: { zh: '立法者 (原型: ὁ θεσμοθέτης)' } },
                    { id_verbi: 'v32_6', terminus: 'κληροῦνται', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、中間/被動。', significationes: { zh: '被抽籤選出 (原型: κληρόω)' } },
                    { id_verbi: 'v32_7', terminus: 'κατ’', analysis_morphologicus_zh: '(κατὰ) 介詞 (搭配直接受格)。', significationes: { zh: '每' } },
                    { id_verbi: 'v32_8', terminus: 'ἔτος;', analysis_morphologicus_zh: '名詞：中性、單數、直接受格。', significationes: { zh: '年 (原型: τὸ ἔτος)' } }
                ]
            },
            {
                id_orationis: 'o33',
                textus_graecus: "Θεσμοθέται ἓξ κληροῦνται, ἄρχων, βασιλεύς καὶ πολέμαρχος ἀπὸ φυλῆς ἑκάστης.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: （有）六名立法者 (Thesmothetai) 被抽籤選出，（另外）一名執政官 (Archon)、一名大祭司 (Basileus) 和一名軍事執政官 (Polemarch) 則從每一個部落中（選出）。<br><br><strong>(教授註：此句的文法和歷史事實有出入)</strong>'
                },
                verba: [
                    { id_verbi: 'v33_1', terminus: 'Θεσμοθέται', analysis_morphologicus_zh: '名詞：陽性、複數、主格 (主語 1)。', significationes: { zh: '立法者 (原型: ὁ θεσμοθέτης)' } },
                    { id_verbi: 'v33_2', terminus: 'ἓξ', analysis_morphologicus_zh: '數詞。', significationes: { zh: '六' } },
                    { id_verbi: 'v33_3', terminus: 'κληροῦνται,', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、中間/被動。', significationes: { zh: '被抽籤選出 (原型: κληρόω)' } },
                    { id_verbi: 'v33_4', terminus: 'ἄρχων,', analysis_morphologicus_zh: '名詞：陽性、單數、主格 (主語 2)。', significationes: { zh: '執政官 (原型: ὁ ἄρχων)' } },
                    { id_verbi: 'v33_5', terminus: 'βασιλεύς', analysis_morphologicus_zh: '名詞：陽性、單數、主格 (主語 3)。', significationes: { zh: '大祭司/王者 (原型: ὁ βασιλεύς)' } },
                    { id_verbi: 'v33_6', terminus: 'καὶ', analysis_morphologicus_zh: '連接詞。', significationes: { zh: '和' } },
                    { id_verbi: 'v33_7', terminus: 'πολέμαρχος', analysis_morphologicus_zh: '名詞：陽性、單數、主格 (主語 4)。', significationes: { zh: '軍事執政官 (原型: ὁ πολέμαρχος)' } },
                    { id_verbi: 'v33_8', terminus: 'ἀπὸ', analysis_morphologicus_zh: '介詞 (搭配所有格)。', significationes: { zh: '從...' } },
                    { id_verbi: 'v33_9', terminus: 'φυλῆς', analysis_morphologicus_zh: '名詞：陰性、單數、所有格。', significationes: { zh: '部落 (原型: ἡ φυλή)' } },
                    { id_verbi: 'v33_10', terminus: 'ἑκάστης.', analysis_morphologicus_zh: '形容詞：陰性、單數、所有格。', significationes: { zh: '每一個 (原型: ἕκαστος)' } }
                ]
            },
            {
                id_orationis: 'o34',
                textus_graecus: "Τίνων δ’ ἐπιμελοῦνται οἱ ἄρχοντες;",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 那麼，執政官們 (Archons) 負責管理哪些事務呢？'
                },
                verba: [
                    { id_verbi: 'v34_1', terminus: 'Τίνων', analysis_morphologicus_zh: '疑問代名詞：(中/陽/陰)、複數、所有格 (受詞)。', significationes: { zh: '什麼的？ (原型: τίς)' } },
                    { id_verbi: 'v34_2', terminus: 'δ’', analysis_morphologicus_zh: '(δὲ) 助詞 (postpositive)。', significationes: { zh: '那麼' } },
                    { id_verbi: 'v34_3', terminus: 'ἐπιμελοῦνται', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、中間/被動 [+所有格]。', significationes: { zh: '他們照管 (原型: ἐπιμελέομαι)' } },
                    { id_verbi: 'v34_4', terminus: 'οἱ', analysis_morphologicus_zh: '定冠詞：陽性、複數、主格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v34_5', terminus: 'ἄρχοντες;', analysis_morphologicus_zh: '名詞：陽性、複數、主格 (主語)。', significationes: { zh: '執政官們 (原型: ὁ ἄρχων)' } }
                ]
            },
            {
                id_orationis: 'o35',
                textus_graecus: "Τῶν ἑορτῶν ἐπιμελοῦνται, τῶν θυσιῶν καὶ τῶν πομπῶν.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 他們（執政官）負責管理節慶、獻祭和（宗教）遊行。'
                },
                verba: [
                    { id_verbi: 'v35_1', terminus: 'Τῶν', analysis_morphologicus_zh: '定冠詞：陰性、複數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v35_2', terminus: 'ἑορτῶν', analysis_morphologicus_zh: '名詞：陰性、複數、所有格 (受詞)。', significationes: { zh: '節慶的 (原型: ἡ ἑορτή)' } },
                    { id_verbi: 'v35_3', terminus: 'ἐπιμελοῦνται,', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、中間/被動。', significationes: { zh: '他們照管 (原型: ἐπιμελέομαι)' } },
                    { id_verbi: 'v35_4', terminus: 'τῶν', analysis_morphologicus_zh: '定冠詞：陰性、複數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v35_5', terminus: 'θυσιῶν', analysis_morphologicus_zh: '名詞：陰性、複數、所有格 (受詞)。', significationes: { zh: '獻祭的 (原型: ἡ θυσία)' } },
                    { id_verbi: 'v35_6', terminus: 'καὶ', analysis_morphologicus_zh: '連接詞。', significationes: { zh: '和' } },
                    { id_verbi: 'v35_7', terminus: 'τῶν', analysis_morphologicus_zh: '定冠詞：陰性、複數、所有格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v35_8', terminus: 'πομπῶν.', analysis_morphologicus_zh: '名詞：陰性、複數、所有格 (受詞)。', significationes: { zh: '遊行的 (原型: ἡ πομπή)' } }
                ]
            },
            {
                id_orationis: 'o36',
                textus_graecus: "Γραφαί τε καὶ δίκαι λαγχάνονται πρὸς αὐτούς, ἃς ἀνακρίναντες εἰς τὸ δικαστήριον εἰσάγουσιν.",
                translationes: { 
                    zh: '<strong>中文（繁體）</strong>: 公訴 (Graphai) 和私訴 (Dikai) 會被分配到他們（執政官）那裡；在（他們）審查這些訴訟後，會將其引入法庭。'
                },
                verba: [
                    { id_verbi: 'v36_1', terminus: 'Γραφαί', analysis_morphologicus_zh: '名詞：陰性、複數、主格 (主語)。', significationes: { zh: '公訴 (原型: ἡ γραφή)' } },
                    { id_verbi: 'v36_2', terminus: 'τε', analysis_morphologicus_zh: '連接詞 (enclitic)。', significationes: { zh: '與' } },
                    { id_verbi: 'v36_3', terminus: 'καὶ', analysis_morphologicus_zh: '連接詞。', significationes: { zh: '和' } },
                    { id_verbi: 'v36_4', terminus: 'δίκαι', analysis_morphologicus_zh: '名詞：陰性、複數、主格 (主語)。', significationes: { zh: '私訴 (原型: ἡ δίκη)' } },
                    { id_verbi: 'v36_5', terminus: 'λαγχάνονται', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、中間/被動。', significationes: { zh: '被分配 (原型: λαγχάνω)' } },
                    { id_verbi: 'v36_6', terminus: 'πρὸς', analysis_morphologicus_zh: '介詞 (搭配直接受格)。', significationes: { zh: '向' } },
                    { id_verbi: 'v36_7', terminus: 'αὐτούς,', analysis_morphologicus_zh: '人稱代名詞：陽性、複數、直接受格。', significationes: { zh: '他們 (原型: αὐτός)' } },
                    { id_verbi: 'v36_8', terminus: 'ἃς', analysis_morphologicus_zh: '關係代名詞：陰性、複數、直接受格 (受詞)。', significationes: { zh: '那些[訴訟] (原型: ὅς)' } },
                    { id_verbi: 'v36_9', terminus: 'ἀνακρίναντες', analysis_morphologicus_zh: '分詞：不定過去時、主動、陽性、複數、主格。', significationes: { zh: '在審查之後 (原型: ἀνακρίνω)' } },
                    { id_Vimbi: 'v36_10', terminus: 'εἰς', analysis_morphologicus_zh: '介詞 (搭配直接受格)。', significationes: { zh: '進入' } },
                    { id_verbi: 'v36_11', terminus: 'τὸ', analysis_morphologicus_zh: '定冠詞：中性、單數、直接受格。', significationes: { zh: '(定冠詞)' } },
                    { id_verbi: 'v36_12', terminus: 'δικαστήριον', analysis_morphologicus_zh: '名詞：中性、單數、直接受格。', significationes: { zh: '法庭 (原型: τὸ δικαστήριον)' } },
                    { id_verbi: 'v36_13', terminus: 'εἰσάγουσιν.', analysis_morphologicus_zh: '動詞：第三人稱、複數、現在時、直陳語氣、主動。', significationes: { zh: '他們引入 (原型: εἰσάγω)' } }
                ]
            } // (El último objeto no lleva coma)
        
        ] // <-- CORRECCIÓN: Se añade ']' para cerrar el array 'orationes'
    } // <-- CORRECCIÓN: Se añade '}' para cerrar el objeto 'paragrafus'
}; // <-- CORRECCIÓN: Se añade '};' para cerrar el objeto 'data_kz'

/* === Fin del Bloque (Sprint 7-36) === */
