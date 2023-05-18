import { ReactNode } from "react";
import Topbar from "../components/topbar";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className="relative w-screen h-screen flex flex-col">
      <Topbar />
      <main className="flex-grow overflow-x-hidden overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
