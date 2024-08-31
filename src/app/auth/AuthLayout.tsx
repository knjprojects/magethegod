import React from "react";
import Image from "next/image";
import Login from "../../../public/next.svg";
const AuthLayout = ({ children }: any) => {
  return (
    <div className="flex flex-row bg-slate-50 justify-center items-center">
      <div>{children}</div>
      <div className="flex-wrap">
        <Image src={Login} alt="login" height={300} width={300} />
      </div>
    </div>
  );
};

export default AuthLayout;
