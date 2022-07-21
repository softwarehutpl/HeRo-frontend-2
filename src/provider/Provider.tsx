import TablesProvider from "../modules/contexts/CandidatesTablesContext";
import { SigninProvider } from "../modules/contexts/SigninContext";

type ProvidersProps = {
  children: JSX.Element;
};

const Providers = (props: ProvidersProps) => {
  return (
    <>
      <TablesProvider>{props.children}</TablesProvider>
      <SigninProvider>{props.children}</SigninProvider>
    </>
  );
};

export default Providers;
