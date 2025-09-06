import { LogOut } from "lucide-react";
import { Avatar } from "../../components";
import { useSignOut } from "../../hook";
import { useAppContext } from "../../provider/context";

const AccountPage = () => {
  const { user } = useAppContext();
  const { handleSignOut } = useSignOut();
  return (
    <div className="p-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
        <Avatar
          src={user?.avatar}
          alt={user?.email ?? ""}
          className=" mx-auto rounded-full border bg-white p-4 shadow-xl md:mx-0"
          size={48}
        />
        <div className="mt-10 flex flex-col gap-2 md:m-0">
          <div className="flex items-center gap-2">
            <span className=" w-2/5 text-sm md:w-32">Email:</span>
            <h1 className="text-base font-medium">{user?.email ?? "-"}</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className=" w-2/5 text-sm md:w-32">Tên Người dùng:</span>
            <h1 className="text-base font-medium">{user?.name ?? "-"}</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className=" w-2/5 text-sm md:w-32">Trạm:</span>
            <h1 className="text-base font-medium">{"Quy Nhơn"}</h1>
          </div>
        </div>
      </div>
      <div className="mt-10 block md:hidden">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-2 rounded-xl bg-red-600  p-3 text-white hover:bg-red-400"
        >
          <LogOut /> <span className="text-base font-medium">Đăng Xuất</span>
        </button>
      </div>
    </div>
  );
};
export default AccountPage;
