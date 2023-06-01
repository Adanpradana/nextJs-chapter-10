import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
const inter = Inter({
    subsets: ["latin"],
});

export default function AboutUs() {
  return (
    <LandingPage>
            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                hello About Us
            </main>
    </LandingPage>
  )
}
