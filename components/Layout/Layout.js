import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { SpeedInsights } from "@vercel/speed-insights/react"


const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <Header />
      <SpeedInsights />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};


export default Layout;
