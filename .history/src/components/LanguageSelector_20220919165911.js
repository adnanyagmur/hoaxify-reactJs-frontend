import React from 'react';
import { withTranslation } from "react-i18next";

const LanguageSelector = (props) => {

  const  onChangeLanguage = language =>{
        const {i18n} =props;
        i18n.changeLanguage(language);
        changeLanguage(language)

    } 
    return (
        <div>
            <img className="mr-2" 
            src="https://countryflagsapi.com/png/tr"
            height={24} alt="Turkish Flag" 
            onClick={() => onChangeLanguage('tr')} 
            style={{ cursor: 'pointer' }}></img>
            <img className="ml-2" 
            src="https://countryflagsapi.com/png/us" 
            height={24} alt="USA Flag" 
            onClick={() => onChangeLanguage('en')} 
            style={{ cursor: 'pointer' }}></img>
        </div>
    );
};

export default withTranslation()(LanguageSelector);