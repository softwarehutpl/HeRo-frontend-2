import React, { createContext, FunctionComponent, useState } from 'react';

interface ISigninContext {
  isLogIn: boolean;
  setIsLogIn: (isLogIn: boolean) => void;
}

const defaultState = {
  isLogIn: false,
  setIsLogIn: () => {
    console.log('ok');
  },
};

type Props = {
  children: JSX.Element;
};

const SigninContext = createContext<ISigninContext>(defaultState);

export const SigninProvider: FunctionComponent<Props> = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(defaultState.isLogIn);

  return <SigninContext.Provider value={{ isLogIn, setIsLogIn }}>{children}</SigninContext.Provider>;
};

export default SigninContext;
