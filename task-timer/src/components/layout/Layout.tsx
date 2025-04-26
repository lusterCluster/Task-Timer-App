import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LayoutProps } from "../../types/layout.types";
import styles from "./Layout.module.css";

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <div className={styles.appLayout}>
        <main className={styles.appMain}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
