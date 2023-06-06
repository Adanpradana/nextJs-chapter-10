import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
import BgGames from "../../components/game/BgGames"

const inter = Inter({
  subsets: ["latin"],
});

export default function Games() {
  return (
    <LandingPage>
      <BgGames/>
    </LandingPage>  
  )
}
