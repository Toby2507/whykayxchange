import { useCycle } from 'framer-motion';
import React, { useContext } from 'react';

const AppContext = React.createContext<{ isOpen: boolean; setIsOpen: () => void; }>({ isOpen: false, setIsOpen: () => {} });

export const AppProvider = ({ children }: { children: React.ReactNode; }) => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  return <AppContext.Provider value={{ isOpen, setIsOpen }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);