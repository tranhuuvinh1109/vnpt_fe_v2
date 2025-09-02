import { MonitorCheck } from "lucide-react";
import { useState } from "react";
import { useSignIn } from "../../api";
import Logo from "../../assets/images/logo.png";
import { E_LOCAL_STORAGE } from "../../enum";
import { useAppContext } from "../../provider/context";
import { LoadingPage } from "../Loading";
import { Modal } from "../Modal";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useAppContext();

  const { mutate: signIn, isPending: isPendingSignIn } = useSignIn();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) return;
    signIn(formValue, {
      onSuccess: (data) => {
        localStorage.setItem(E_LOCAL_STORAGE.APP_NAME, JSON.stringify(data));
        setUser(data);
      },
      onError: (e) => {
        console.log(e);
      },
    });
  };

  return (
    <>
      <LoadingPage isPending={isPendingSignIn} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:flex md:w-2/5 md:items-center md:justify-center md:rounded-l-xl md:bg-blue-500 md:text-white">
            <img src={Logo} alt="logo" className="mx-auto max-w-48 md:hidden" />
            <h1 className="text-center font-montserrat text-xl font-semibold text-blue-600 md:hidden ">Đăng nhập</h1>
            <div className="hidden md:block">
              <MonitorCheck size={60} />
            </div>
          </div>
          <form className="flex flex-col gap-4 md:flex-1" onSubmit={handleSubmit}>
            <div className=" hidden md:block ">
              <img src={Logo} alt="logo" className="mx-auto hidden max-w-48 md:block md:pb-10" />
              <h1 className="text-center font-montserrat text-xl font-semibold text-blue-600">Đăng nhập</h1>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-base font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                className=" rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-base font-medium text-gray-700">
                Mật khẩu:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
                className=" rounded-md border border-gray-300 p-2"
              />
            </div>
            <button className="mt-6 rounded-md bg-blue-900 px-4 py-3 font-semibold text-white" type="submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
