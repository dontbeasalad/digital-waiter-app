import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center fixed bg-white w-full justify-evenly flex-wrap p-6 shadow-md px-36">
        <div className="hidden lg:flex items-center flex-shrink-0 text-black mr-12">
          <span className="font-semibold text-xl tracking-tight">Logo</span>
        </div>
        <div className="w-full text-base lg:text-xl flex-grow flex lg:items-center justify-center lg:w-auto">
          <div className="lg:flex-grow ">
            <ul className="flex">
              <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-blue mr-6">
                <Link href="#fitur">Fitur</Link>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-blue mr-6">
                <Link href="#harga">Harga</Link>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-blue mr-6">
                <Link href="#testimonial">Testimonial</Link>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-blue mr-6">
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sky-blue font-bold mt-4 lg:mt-0"
            >
              Daftar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
