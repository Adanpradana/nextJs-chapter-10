import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
import bg1 from "../../../public/banner1.jpg";
import bg2 from "../../../public/banner2.jpg";
import bg3 from "../../../public/banner3.jpg";
import Image from "next/image";
import imgPlay from "../../../public/jippe-joosten-0gNzcMqd0sw-unsplash.jpg";

export default function AboutUs() {
  return (
    <LandingPage>
      <main className="flex  justify-center items-center  bg-white">
        <div className="w-full grid grid-cols-2 bg-red-50 py-16 px-32">
          <div className="bg-white">
            <Image src={imgPlay} width={640} height={512} alt="yes" />
          </div>
          <div className="relative flex items-center">
            <div className="absolute -left-4 bg-gray-500 text-black">
              <div className="p-10">
                <h1>Our Mission</h1>
                <p>
                  we focus on several key principles. First and foremost, we prioritize gameplay innovation and
                  creativity. We constantly push the boundaries of game design, seeking fresh ideas and innovative
                  mechanics that make our games stand out in the industry. By embracing new technologies and platforms,
                  we ensure that our games offer cutting-edge experiences to players. Additionally, we are committed to
                  inclusivity and diversity in our games. We strive to create characters, stories, and worlds that
                  resonate with a wide range of players, representing diverse backgrounds, cultures, and perspectives.
                  We believe that video games have the potential to bring people together, and we aim to foster a sense
                  of belonging and connection through our games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LandingPage>
  );
}
