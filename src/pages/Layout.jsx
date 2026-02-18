import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto pt-24 bg-[#171717]">
      {children}
    </div>
  );
}

export default Layout