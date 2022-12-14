import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations:{
                "Sign Up" : "Sign Up"

            }
        },
        tr: {
            translations:{
                "Sign Up" : "Kayıt Ol"
            }
            
        }
        
    },
    fallbackLng:'tr',
    ns:['translations'],
    defaultNS:'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait:true
    }
})

export default i18n;