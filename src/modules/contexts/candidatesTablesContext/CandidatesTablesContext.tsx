import { useReducer, createContext, useContext, useState, Dispatch, SetStateAction, FC, PropsWithChildren } from "react";

let isLogged = true;




const TablesContext = createContext<boolean>(true);


// export function createCtx<A>(defaultValue: A) {
//     type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
//     const defaultUpdate: UpdateType = () => defaultValue;
    
//     const ctx = createContext({
//       state: defaultValue,
//       update: defaultUpdate,
//     });
  
//     function Provider(props: PropsWithChildren<{}>) {
//       const [state, update] = useState(defaultValue);
//       return <ctx.Provider value={{ state, update }} {...props} />;
//     }
//     return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
//   }

const tableReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED":
      return (state = true);
    case "UNLOGGED":
      return (state = false);

    default:
      throw new Error("Something went wrong admin!");
  }
};



const TablesProvider: FC= ( {children} ) => {
  const [state, update] = useReducer(tableReducer, isLogged);


  return (
    <TablesContext.Provider value={{state, update}}>
      {children}
    </TablesContext.Provider>
  );
};



export default TablesProvider;

export const useTables = () => useContext(TablesContext);