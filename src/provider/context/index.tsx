import { createContext, PropsWithChildren, useContext, useState } from "react";
import { SIDEBARS } from "../../constant";
import { UserType } from "../../type";

type AppContextType = {
  pathActive: string;
  setPathActive: React.Dispatch<React.SetStateAction<string>>;
  user?: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
};

const APP_CONTEXT = createContext<AppContextType>({
  pathActive: "",
  setPathActive: () => {},
  user: undefined,
  setUser: () => {},
});

type AppContextProps = PropsWithChildren & {};
export const AppContext = ({ children }: AppContextProps) => {
  const [pathActive, setPathActive] = useState(SIDEBARS[0].url);
  const [user, setUser] = useState<UserType | undefined>();

  return (
    <APP_CONTEXT.Provider
      value={{
        pathActive,
        setPathActive,
        user,
        setUser,
      }}
    >
      {children}
    </APP_CONTEXT.Provider>
  );
};

export const useAppContext = () => useContext(APP_CONTEXT);
