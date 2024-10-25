import React, { ReactNode } from "react";

interface MainWrapProps {
  children: ReactNode;
}

const MainWrap: React.FC<MainWrapProps> = ({ children }) => {
  return (
    <main
      className={
        "relative text-center responsive-height max-h-[894px] w-[90vw] max-w-[400px] bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-white border-opacity-20 backdrop-blur-md transition-all duration-100 ease-in-out overflow-hidden"
      }
    >
      {children}
    </main>
  );
};

export default MainWrap;
