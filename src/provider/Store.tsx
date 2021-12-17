import React, {
  Dispatch, SetStateAction, useCallback, useContext, useState,
} from 'react';
import { Citation } from '../types';

export const StoreContext = React.createContext<{
  citation: Citation | {}
  setCitation: Dispatch<SetStateAction<Citation | {}>>
}>({
  citation: {},
  setCitation: () => {},
});

export const StoreProvider: React.FC = ({ children }) => {
  const [citation, setCitation] = useState<Citation | {}>({});

  return (
    <StoreContext.Provider value={{ citation, setCitation }}>
      {children}
    </StoreContext.Provider>
  );
};

export const callBack = (id: string) => {
  const { citation, setCitation } = useContext(StoreContext);
  return useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // @ts-ignore
    citation[id] = e.target.value;
    setCitation(citation);
  }, [citation, setCitation]);
};
