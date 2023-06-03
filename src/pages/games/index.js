import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
import styles from "../../pages/page.module.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function Games() {
  return <LandingPage>test games</LandingPage>;
}
