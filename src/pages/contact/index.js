import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
const inter = Inter({
  subsets: ["latin"],
});

export default function ContactUs() {
  return <LandingPage>test contact</LandingPage>;
}
