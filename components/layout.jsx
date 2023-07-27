'use client'
import Header from "./Header";
import Script from "next/script";
import { IsSsrMobileContext } from "@/utils/context";

const Layout = ({children}) => {
    return (
      <div>
        <IsSsrMobileContext.Provider>
          <Header />
          {children}
          <Script src="https://kit.fontawesome.com/4ef8c63dd7.js" crossorigin="anonymous"></Script>
        </IsSsrMobileContext.Provider>
      </div>
    )
  }
  
  export default Layout