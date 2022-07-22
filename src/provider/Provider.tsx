import React from 'react';
import TablesProvider from '../modules/contexts/CandidatesTablesContext';
import { SigninProvider } from '../modules/contexts/SigninContext';

type ProvidersProps = {
  children: JSX.Element;
};

const Providers = (props: ProvidersProps) => {
  return (
    <>
      <TablesProvider>
        <SigninProvider>{props.children}</SigninProvider>
      </TablesProvider>
    </>
  );
};

export default Providers;
