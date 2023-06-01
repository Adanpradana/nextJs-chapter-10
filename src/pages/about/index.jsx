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
  return (
    <LandingPage>
            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
              <section className="relative py-20">
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
                      className="text-white fill-current"
                      points="2560 0 2560 100 0 100"
                    ></polygon>
                  </svg>
                </div>

                <div className="container mx-auto px-4">
                  <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                      <img
                        alt="..."
                        className="max-w-full rounded-lg shadow-lg"
                        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                      <div className="md:pr-12">
                        <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                          <i className="fas fa-rocket text-xl"></i>
                        </div>
                        <h3 className="text-3xl font-semibold">
                          A growing company
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                          The extension comes with three pre-built pages to help you
                          get started faster. You can change the text and images and
                          you're good to go.
                        </p>
                        <ul className="list-none mt-6">
                          <li className="py-2">
                            <div className="flex items-center">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                  <i className="fas fa-fingerprint"></i>
                                </span>
                              </div>
                              <div>
                                <h4 className="text-gray-600">
                                  Carefully crafted components
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="flex items-center">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                  <i className="fab fa-html5"></i>
                                </span>
                              </div>
                              <div>
                                <h4 className="text-gray-600">Amazing page examples</h4>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="flex items-center">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                  <i className="far fa-paper-plane"></i>
                                </span>
                              </div>
                              <div>
                                <h4 className="text-gray-600">Dynamic components</h4>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                      <h2 className="text-4xl font-semibold">
                        Here are our heroes
                      </h2>
                      <p className="text-lg leading-relaxed m-4 text-gray-600">
                        According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos, NSIDClead scentist, puts the
                        potentially record maximum.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    {/* profile 1 */}
                    <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-5">
                      <div className="px-6">
                        <Image
                          alt="..."
                          src={bg1}
                          className="shadow-lg rounded-full max-w-full mx-auto"
                          style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                          <h5 className="text-xl font-bold">
                            Auda
                          </h5>
                          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Web Develaper
                          </p>
                          <div className="mt-6">
                            <button
                              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-twitter"></i>
                            </button>
                            <button
                              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </button>
                            <button
                              className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-dribbble"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* profile 2 */}
                    <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-5">
                      <div className="px-6">
                        <Image
                          alt="..."
                          src={bg2}
                          className="shadow-lg rounded-full max-w-full mx-auto"
                          style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                          <h5 className="text-xl font-bold">
                            Adan
                          </h5>
                          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Kang Narik Kabel
                          </p>
                          <div className="mt-6">
                            <button
                              className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-google"></i>
                            </button>
                            <button
                              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* profile 3 */}
                    <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-5">
                      <div className="px-6">
                        <Image
                          alt="..."
                          src={bg3}
                          className="shadow-lg rounded-full max-w-full mx-auto"
                          style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                          <h5 className="text-xl font-bold">
                            Labib
                          </h5>
                          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Specialist Card Game
                          </p>
                          <div className="mt-6">
                            <button
                              className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-google"></i>
                            </button>
                            <button
                              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-twitter"></i>
                            </button>
                            <button
                              className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-instagram"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* profile 4 */}
                    <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-5">
                      <div className="px-6">
                        <Image
                          alt="..."
                          src={bg1}
                          className="shadow-lg rounded-full max-w-full mx-auto"
                          style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                          <h5 className="text-xl font-bold">
                            Mirza
                          </h5>
                          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Founder and CEO tokopedei
                          </p>
                          <div className="mt-6">
                            <button
                              className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-dribbble"></i>
                            </button>
                            <button
                              className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-google"></i>
                            </button>
                            <button
                              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-twitter"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* profile 5 */}
                    <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-5">
                      <div className="px-6">
                        <Image
                          alt="..."
                          src={bg1}
                          className="shadow-lg rounded-full max-w-full mx-auto"
                          style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                          <h5 className="text-xl font-bold">
                            Vincent
                          </h5>
                          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Directur Supermie
                          </p>
                          <div className="mt-6">
                            <button
                              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-twitter"></i>
                            </button>
                            <button
                              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </button>
                            <button
                              className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-dribbble"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-5">
                      <div className="px-6">
                        <Image
                          alt="..."
                          src={bg1}
                          className="shadow-lg rounded-full max-w-full mx-auto"
                          style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                          <h5 className="text-xl font-bold">
                            Akmal
                          </h5>
                          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Pendamping karaoke
                          </p>
                          <div className="mt-6">
                            <button
                              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-twitter"></i>
                            </button>
                            <button
                              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </button>
                            <button
                              className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-dribbble"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </main>
    </LandingPage>
  )
}
