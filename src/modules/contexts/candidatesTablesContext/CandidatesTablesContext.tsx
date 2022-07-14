import { useReducer, createContext, useContext, useState, Dispatch, SetStateAction, FC, PropsWithChildren } from "react";

let isListValue = true;




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


const TablesProvider: FC= ( {children} ) => {
  const [state, update] = useState(isListValue)

  return (
    <TablesContext.Provider value={{state, update}}>
      {children}
    </TablesContext.Provider>
  );
};



export default TablesProvider;

export const useTables = () => useContext(TablesContext);