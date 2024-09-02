import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex-grow bg-[#001f3f] flex flex-col items-center py-6 px-4">
      {children}
    </div>
  );
};

export default Container;
