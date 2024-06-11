import React, { useContext } from 'react';
import { TranslationContext } from './TranslationProvider';

const Translate = () => {
  const { setTranslatedContent, language, setLanguage } = useContext(TranslationContext);

  const capturePageText = () => {
    const body = document.body;
    const textNodes = [];
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null, false);

    let node;
    while ((node = walker.nextNode())) {
      if (node.parentNode.tagName !== 'SCRIPT' && node.parentNode.tagName !== 'STYLE') {
        textNodes.push(node);
      }
    }
    return textNodes;
  };

  const replacePageText = (textNodes, translatedText) => {
    textNodes.forEach((node, index) => {
      node.nodeValue = translatedText[index];
    });
  };

  const translatePageContent = async (targetLanguage) => {
    const textNodes = capturePageText();
    const textContent = textNodes.map(node => node.nodeValue);

    try {
      const response = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: textContent,
          source: "auto",
          target: targetLanguage,
          format: "text",
          api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
      });

      const translations = await response.json();
      const translatedText = translations.map(t => t.translatedText);

      replacePageText(textNodes, translatedText);
      setLanguage(targetLanguage);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const handleLanguageChange = (e) => {
    translatePageContent(e.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
    
    </select>
  );
};

export default Translate;
