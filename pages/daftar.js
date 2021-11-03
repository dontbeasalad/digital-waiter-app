import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

export default function faq() {
  return (
    <div>
      <Navbar />
      <section
        id="8"
        className="flex flex-col xl:flex-row justify-center  pt-24 mb-20  mx-4 xl:mx-36"
      >
        <div className="hidden lg:block cursor-pointer order-2 xl:w-3/6 ml-12">
          <img src="/SilviWinking (1).png" width="1200" alt="" />
        </div>
        <div className=" order-1 xl:w-3/6">
          <h2 className="text-3xl font-bold mb-9">
            Yuk, daftar dan dapatkan promonya!
          </h2>
          <form className="pb-8 mb-4 ">
            <div className="mb-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-500"
                for="lastName"
              >
                Nama
              </label>
              <input
                className="w-full py-2 text-sm leading-tight text-gray-700 border-b border-main-color appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Contoh: Pudding"
              />
            </div>

            <div className="mb-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-500"
                for="lastName"
              >
                Nama Restoran
              </label>
              <input
                className="w-full py-2 text-sm leading-tight text-gray-700 border-b border-main-color appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Nama Restaurant"
              />
            </div>
            <div className="mb-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-500"
                for="email"
              >
                Email
              </label>
              <input
                className="w-full py-2 mb-3 text-sm leading-tight text-gray-700 border-b border-main-color appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-500"
                for="email"
              >
                No. Hp
              </label>
              <input
                className="w-full py-2 mb-3 text-sm leading-tight text-gray-700 border-b border-main-color appearance-none focus:outline-none focus:shadow-outline"
                id="tel"
                type="tel"
                placeholder="Phone Number"
              />
            </div>

            <button
              className="bg-sky-blue float-right hover:bg-orange-dark flex text-white font-bold py-2 px-5 md:px-9 rounded-md focus:outline-none focus:shadow-outline"
              type="button"
            >
              <p className="md:mr-2 text-sm md:text-base text-right">Daftar</p>
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
