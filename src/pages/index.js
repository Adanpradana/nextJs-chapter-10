import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
import styles from "../pages/page.module.css";
import Image from "next/image";
const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <LandingPage>
      <div>
        <h1>test home</h1>
      </div>
    </LandingPage>
  );
}
