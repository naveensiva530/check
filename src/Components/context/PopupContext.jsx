import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const PopupContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components -- Context hooks belong beside their provider.
export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupMounted, setIsPopupMounted] = useState(false);
  const closeTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(closeTimerRef.current), []);

  const openPopup = useCallback((e) => {
    if (e?.preventDefault) e.preventDefault();
    clearTimeout(closeTimerRef.current);
    setIsPopupMounted(true);
    setIsPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setIsPopupMounted(false), 400);
  }, []);

  return (
    <PopupContext.Provider value={{ isPopupOpen, isPopupMounted, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
