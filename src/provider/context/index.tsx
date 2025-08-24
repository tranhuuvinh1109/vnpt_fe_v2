import { createContext, PropsWithChildren, useContext, useState } from "react";
import { SIDEBARS } from "../../constant";

type AppContextType = {
  pathActive: string;
  setPathActive: React.Dispatch<React.SetStateAction<string>>;
};

const APP_CONTEXT = createContext<AppContextType>({
  pathActive: "",
  setPathActive: () => {},
});

type AppContextProps = PropsWithChildren & {};
export const AppContext = ({ children }: AppContextProps) => {
  const [pathActive, setPathActive] = useState(SIDEBARS[0].url);

  return (
    <APP_CONTEXT.Provider
      value={{
        pathActive,
        setPathActive,
      }}
    >
      {children}
    </APP_CONTEXT.Provider>
  );
};

export const useAppContext = () => useContext(APP_CONTEXT);
