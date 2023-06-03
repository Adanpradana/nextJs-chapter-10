import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
import bg1 from "../../../public/banner1.jpg";
import bg2 from "../../../public/banner2.jpg";
import bg3 from "../../../public/banner3.jpg";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});

export default function AboutUs() {
  return <LandingPage>test about</LandingPage>;
}
