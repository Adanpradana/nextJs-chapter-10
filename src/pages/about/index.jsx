import { Inter } from "next/font/google";
import LandingPage from "@/layouts/LandingPage";
import { FaUsers, FaTrophy, FaClover } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import Image from "next/image";
import imgPlay from "../../../public/jippe-joosten-0gNzcMqd0sw-unsplash.jpg";

export default function AboutUs() {
  return (
    <LandingPage>
      <main>
        <div className="py-16 px-32">
          <div className="flex w-full justify-center items-center pb-16">
            <div className="text-center">
              <h1 className="font-semibold text-[2rem] pb-5">what we do</h1>
              <div className="flex justify-center">
                <hr className=" border-t-2 py-4 w-20 border-yellow-700 text-center" />
              </div>
              <p>
                we are passionate about creating and delivering exceptional video games that captivate players and
                provide them with unforgettable experiences. Our main focus is on developing innovative and engaging
                gameplay that challenges players&#39; skills and immerses them in rich, imaginative worlds. We believe
                that video games have the power to inspire, entertain, and bring joy to people of all ages and
                backgrounds. With this belief at the core of our mission, we strive to push the boundaries of game
                design and storytelling, constantly seeking new ways to engage and excite players.
              </p>
            </div>
          </div>
          <div className="flex py-16 justify-center items-center ">
            <div className="w-full grid grid-cols-2 bg-red-50 ">
              <div className="bg-white">
                <Image src={imgPlay} width={640} height={512} alt="yes" />
              </div>
              <div className="relative flex items-center">
                <div className="absolute -left-4 bg-[#3a4048] text-gray-100">
                  <div className="p-10 ">
                    <h1 className="font-semibold text-[2rem] pb-5">Our Mission</h1>
                    <hr className=" border-t-2 py-4 w-10 border-yellow-700" />
                    <p>
                      we focus on several key principles. First and foremost, we prioritize gameplay innovation and
                      creativity. We constantly push the boundaries of game design, seeking fresh ideas and innovative
                      mechanics that make our games stand out in the industry. By embracing new technologies and
                      platforms, we ensure that our games offer cutting-edge experiences to players. Additionally, we
                      are committed to inclusivity and diversity in our games.
                    </p>
                    <p className="text-end pt-5 text-[0.9rem] text-yellow-700">-akmal 2023-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center text-yellow-700">
                <div className="w-full flex justify-center">
                  <FaUsers className="text-[6rem]" />
                </div>
                <h1 className="font-semibold text-[2.5rem]">102 K </h1>
                <p className="uppercase">total player</p>
              </div>
              <div className="text-center text-yellow-700">
                <div className="w-full flex justify-center">
                  <FaTrophy className="text-[6rem]" />
                </div>
                <h1 className="font-semibold text-[2.5rem]">59 K </h1>
                <p className="uppercase">won awards</p>
              </div>
              <div className="text-center text-yellow-700">
                <div className="w-full flex justify-center">
                  <GiClover className="text-[6rem]" />
                </div>
                <h1 className="font-semibold text-[2.5rem]">12 K </h1>
                <p className="uppercase">happy player</p>
              </div>
              <div className="text-center text-yellow-700">
                <div className="w-full flex justify-center">
                  <FaUsers className="text-[6rem]" />
                </div>
                <h1 className="font-semibold text-[2.5rem]">102 K </h1>
                <p className="uppercase">total player</p>
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="grid grid-cols-3 gap-3 ">
              <div className="bg-red-50">1</div>
              <div className="bg-red-50">1</div>
              <div className="bg-red-50">1</div>
              <div className="bg-red-50">1</div>
              <div className="bg-red-50">1</div>
            </div>
          </div>
        </div>
      </main>
    </LandingPage>
  );
}
