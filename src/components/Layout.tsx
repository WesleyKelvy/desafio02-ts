import { login } from "../services/login"
import { Card } from "./Card"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header />
      { children }
      <Card onClick={login} details="Ooo" id={1} paragraph="text" />
      <Footer />
    </>
  )
}
