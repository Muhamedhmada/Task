import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../Components/Redux/LanguageSlice'; // Adjust path if necessary
import i18n from './i18'; // Ensure correct p

const LanguageSwitcher = () => {
  const dispatch = useDispatch()
  const currentLanguage = useSelector(state=>state.language)
  const switchLanguage = (lang)=>{
    i18n.changeLanguage(lang)
    dispatch(changeLanguage(lang))
  }

  return (
    <div className='switchBtns'>
      <button
        onClick={() => switchLanguage('en')}
        disabled={currentLanguage === 'en'}
      >
        English 
      </button>
      <button
        onClick={() => switchLanguage('es')}
        disabled={currentLanguage === 'es'}
      >
        Español
        </button>
      <button
        onClick={() => switchLanguage('ar')}
        disabled={currentLanguage === 'ar'}
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;
