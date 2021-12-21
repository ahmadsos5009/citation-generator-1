import React, {
  Reducer, useCallback, useContext, useReducer,
} from 'react';
import { Author, DocumentCitation } from '../types';

export const StoreContext = React.createContext<{
  state: DocumentCitation
  dispatch: React.Dispatch<ICitationAction>
}>({
  state: {
    // @ts-ignore
    journal: {}, book: {}, report: {}, website: {},
  },
  dispatch: () => {},
});

interface ICitationAction {
  type: string;
  id: string;
  documentType: string;
  value: string | number | Author[]
}

const reducer = (state: DocumentCitation, action: ICitationAction): DocumentCitation => {
  const {
    type, id, value, documentType,
  } = action;
  switch (type) {
    case 'set':
      // @ts-ignore
      state[documentType][id] = value;
      return { ...state };
    default:
      throw new Error();
  }
};

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<DocumentCitation, ICitationAction>>(reducer, {
    // @ts-ignore
    journal: {}, book: {}, report: {}, website: {},
  });

  return (
    <StoreContext.Provider value={{
      state, dispatch,
    }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const callBack = (id: string, documentType: string) => {
  const { dispatch } = useContext(StoreContext);
  return useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch({
      type: 'set', id, documentType, value: e.target.value,
    });
  }, [dispatch]);
};
