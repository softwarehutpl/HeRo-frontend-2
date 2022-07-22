import React from 'react';
import { createContext, useContext, useState, FC } from 'react';

enum CandidatesDisplayMode {
  TABLE,
  KABAN,
}

interface TablesCOntextInterface {
  value: CandidatesDisplayMode;
  setValue: (value: CandidatesDisplayMode) => void;
}

type Props = {
  children: JSX.Element;
};

const TablesContext = createContext<TablesCOntextInterface>({
  value: CandidatesDisplayMode.TABLE,
  setValue: () => {
    throw new Error('read only');
  },
});

const TablesProvider: FC<Props> = ({ children }) => {
  const [value, setValue] = useState<CandidatesDisplayMode>(CandidatesDisplayMode.TABLE);

  return <TablesContext.Provider value={{ value, setValue }}>{children}</TablesContext.Provider>;
};

export default TablesProvider;

export const useTables = () => useContext(TablesContext);
