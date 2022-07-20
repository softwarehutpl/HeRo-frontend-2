import React from 'react';
import TablesProvider from "../modules/contexts/CandidatesTablesContext";

type ProvidersProps = {
  children: JSX.Element;
  
}


const Providers = (props: ProvidersProps) => {
  return (
    <TablesProvider>{props.children}</TablesProvider>
  );
};

export default Providers;