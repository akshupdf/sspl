import React, { createContext, useState } from 'react';

export const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [translatedContent, setTranslatedContent] = useState({});

    return (
        <TranslationContext.Provider value={{ language, setLanguage, translatedContent, setTranslatedContent }}>
            {children}
        </TranslationContext.Provider>
    );
};

export default TranslationProvider;