import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
import styles from "../../pages/page.module.css";

const inter = Inter({
    subsets: ["latin"],
});

export default function Games() {
  return (
    <LandingPage>
            <main>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                style={{minHeight: "75vh" }}>
              <div className={`absolute top-0 w-full h-full bg-center bg-cover ${styles.BannerImage2}`}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
              </div>
              <div className="container relative mx-auto">
                  <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                      <div className="pr-12">
                        <h1 className="text-white font-semibold text-5xl">
                          Your story starts with us.
                        </h1>
                        <p className="mt-4 text-lg text-gray-300">
                          This is a simple example of a Landing Page you can build
                          using Tailwind Starter Kit. It features multiple CSS
                          components based on the Tailwindcss design system.
                        </p>
                      </div>
                    </div>

                  </div>
              </div>
              <div>
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>
        </main>
    </LandingPage>
  )
}
