import React from 'react';

const LanguageSelector = () => {

    onChangeLanguage = language =>{
        const {i18n} =this.props;
        i18n.changeLanguage(language);
        changeLanguage(language)

    } 
    return (
        <div>
            <img className="mr-2" src="https://countryflagsapi.com/png/tr" height={24} alt="Turkish Flag" onClick={() => this.onChangeLanguage('tr')} style={{ cursor: 'pointer' }}></img>
            <img className="ml-2" src="https://countryflagsapi.com/png/us" height={24} alt="USA Flag" onClick={() => this.onChangeLanguage('en')} style={{ cursor: 'pointer' }}></img>
        </div>
    );
};

export default LanguageSelector;