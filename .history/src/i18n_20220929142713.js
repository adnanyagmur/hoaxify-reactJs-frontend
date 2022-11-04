import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations:{
                "Sign Up" : "Sign Up",
                "Password mismatch" : "Password mismatch",
                "Password Repeat":"Password Repeat",
                "Password" : "Password",
                "Display Name" : "Display Name",
                "Username": "Username",
                "Login":"Login",
                "You have encountered an error. Please check your information.":"You have encountered an error. Please check your information."

            }
        },
        tr: {
            translations:{
                "Sign Up" : "Kayıt Ol",
                "Password mismatch" : "Aynı şifreyi giriniz.",
                "Password Repeat":"Şifreyi Tekrar Giriniz",
                "Password" : "Şifre",
                "Display Name" : "Tercih Edilen İsim",
                "Username": "Kullanıcı Adı",
                "Login":"Sisteme Giriş",
                "You have encountered an error. Please check your information.":"Bir hatayla karşılaştınız. Lütfen bilgilerinizi kontrol edin."
            }
            
        }
        
    },
    fallbackLng:'en',
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