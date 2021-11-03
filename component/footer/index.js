import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-sky-blue  flex flex-col justify-center items-center lg:block lg:px-28 pt-12 pb-12 text-white">
        <div className="font-nunito flex flex-col lg:flex-row mt-16">
          <div className="contact-us lg:w-3/12 flex flex-col justify-center items-center lg:block">
            <h4 className="text-main-color text-2xl font-bold mb-6 lg:mb-9 lg:mt-0 ">
              Logo
            </h4>
          </div>
          <div className="solution lg:w-3/12 flex flex-col justify-center items-center lg:block">
            <h4 className="text-main-color text-2xl font-bold mt-9 mb-6 lg:mb-9 lg:mt-0 ">
              Tentang
            </h4>
            <div className="flex flex-col lg:flex-row w-full">
              <ul className="flex flex-col justify-center items-center lg:block lg:mr-28">
                <li className="flex mb-2 lg:mb-4">
                  <a className="hover:text-main-color hover:underline" href="">
                    Tentang Kami
                  </a>
                </li>
                <li className="flex mb-2 lg:mb-4">
                  <a className="hover:text-main-color hover:underline" href="">
                    Karir
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="solution lg:w-3/12 flex flex-col justify-center items-center lg:block">
            <h4 className="text-main-color text-2xl font-bold mt-9 mb-6 lg:mb-9 lg:mt-0  ">
              Bantuan
            </h4>
            <ul className="flex flex-col justify-center items-center lg:block">
              <li className="flex mb-2 lg:mb-4">
                <a className="hover:text-main-color hover:underline" href="">
                  Syarat & Ketentuan
                </a>
              </li>
              <li className="flex mb-2 lg:mb-4">
                <a className="hover:text-main-color hover:underline" href="">
                  Kebijakan Privasi
                </a>
              </li>
              <li className="flex mb-2 lg:mb-4">
                <a className="hover:text-main-color hover:underline" href="">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="solution lg:w-3/12 flex flex-col justify-center items-center lg:block">
            <h4 className="text-main-color text-2xl font-bold mt-9 mb-6 lg:mb-9 lg:mt-0 ">
              Ikuti Kami
            </h4>
            <div className="flex flex-col lg:flex-row w-full">
              <ul className="flex flex-col justify-center items-center lg:block lg:mr-28"></ul>
            </div>
          </div>
          <div className="solution lg:w-3/12 flex flex-col justify-center items-center lg:block">
            <h4 className="text-main-color text-2xl font-bold mt-9 mb-6 lg:mb-9 lg:mt-0 ">
              Download
            </h4>
            <div className="flex flex-col lg:flex-row w-full">
              <ul className="flex flex-col justify-center items-center lg:block lg:mr-28"></ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
