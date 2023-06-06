import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
import Banner from "@/components/Banner";
import PopularGame from "@/components/populargame/PopularGame";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <LandingPage>
      <Banner />
      <PopularGame />
    </LandingPage>
  );
}
