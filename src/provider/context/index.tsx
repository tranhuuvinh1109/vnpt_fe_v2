import { createContext, PropsWithChildren, useContext, useState } from "react";
import { SIDEBARS } from "../../constant";
import { UserType } from "../../type";

type AppContextType = {
  pathActive: string;
  setPathActive: React.Dispatch<React.SetStateAction<string>>;
  user?: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  isOpenLoginModal: boolean;
  setIsOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const APP_CONTEXT = createContext<AppContextType>({
  pathActive: "",
  setPathActive: () => {},
  user: undefined,
  setUser: () => {},
  isOpenLoginModal: false,
  setIsOpenLoginModal: () => {},
});

type AppContextProps = PropsWithChildren & {};
export const AppContext = ({ children }: AppContextProps) => {
  const [pathActive, setPathActive] = useState(SIDEBARS[0].url);
  const [user, setUser] = useState<UserType | undefined>();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <APP_CONTEXT.Provider
      value={{
        pathActive,
        setPathActive,
        user,
        setUser,
        isOpenLoginModal,
        setIsOpenLoginModal,
      }}
    >
      {children}
    </APP_CONTEXT.Provider>
  );
};

export const useAppContext = () => useContext(APP_CONTEXT);
