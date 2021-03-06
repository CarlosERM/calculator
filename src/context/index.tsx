import React from "react";

interface ContextProviderProp {
  children: React.ReactNode;
}

interface ContextProps {
  toggle: number;
  handleToggle: () => void;
  calc: string;
  setCalc: React.Dispatch<React.SetStateAction<string>>;
}

const myContext = React.createContext({} as ContextProps);

export const ContextProvider = ({ children }: ContextProviderProp) => {
  const [toggle, setToggle] = React.useState(0);
  const [calc, setCalc] = React.useState("");

  function handleToggle() {
    setToggle(toggle + 1);
    if (toggle > 1) {
      setToggle(0);
    }
  }

  return (
    <myContext.Provider value={{ toggle, handleToggle, calc, setCalc }}>
      {children}
    </myContext.Provider>
  );
};

export function useMyContext() {
  const context = React.useContext(myContext);

  if (!context) {
    throw new Error("useUtils must be used within an UserProvider");
  }

  return context;
}
