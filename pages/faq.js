import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

export default function faq() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="bg-blue-one flex justify-center items-center bg-sky-blue p-12">
          <h1 className="text-3xl xl:text-5xl font-bold text-white">
            Partner FAQs
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 place-items-stretch mt-12 mx-4 xl:mx-14 py-12">
        <Link href="#1">
          <div className="flex justify-between  p-6 transition-all rounded-xl border-2 border-sky-blue border-opacity-25 cursor-pointer hover:bg-sky-blue hover:bg-opacity-25">
            <p className="font-semibold text-md">Apa itu Digital Waiter</p>
            <img
              className="hidden xl:block"
              src="/panah.png"
              width="12"
              height="12"
              alt="click me"
            />
          </div>
        </Link>
        <Link href="#2">
          <div className="flex justify-between  p-6 transition-all rounded-xl border-2 border-sky-blue border-opacity-25 cursor-pointer hover:bg-sky-blue hover:bg-opacity-25">
            <p className="font-semibold text-md">
              Bagaimana cara membuat akun ?
            </p>
            <img
              className="hidden xl:block"
              src="/panah.png"
              width="12"
              height="12"
              alt="click me"
            />
          </div>
        </Link>
        <Link href="#3">
          <div className="flex justify-between  p-6 transition-all rounded-xl border-2 border-sky-blue border-opacity-25 cursor-pointer hover:bg-sky-blue hover:bg-opacity-25">
            <p className="font-semibold text-md">
              Bagaimana cara Login di Aplikasi ?
            </p>
            <img
              className="hidden xl:block"
              src="/panah.png"
              width="12"
              height="12"
              alt="click me"
            />
          </div>
        </Link>
        <Link href="#4">
          <div className="flex justify-between p-6 transition-all rounded-xl border-2 border-sky-blue border-opacity-25 cursor-pointer hover:bg-sky-blue hover:bg-opacity-25">
            <p className="font-semibold text-md">
              Bagaimana melihat informasi akun saya ?
            </p>

            <img
              className="hidden xl:block"
              src="/panah.png"
              width="12"
              height="12"
              alt="click me"
            />
          </div>
        </Link>
        <Link href="#5">
          <div className="flex justify-between  p-6 transition-all rounded-xl border-2 border-sky-blue border-opacity-25 cursor-pointer hover:bg-sky-blue hover:bg-opacity-25">
            <p className="font-semibold text-md">
              Bagaimana jika saya lupa PIN ?
            </p>
            <img
              className="hidden xl:block"
              src="/panah.png"
              width="12"
              height="12"
              alt="click me"
            />
          </div>
        </Link>
        <Link href="#6">
          <div className="flex justify-between  p-6 transition-all rounded-xl border-2 border-sky-blue border-opacity-25 cursor-pointer hover:bg-sky-blue hover:bg-opacity-25">
            <p className="font-semibold text-md">
              Bagaimana cara menjadi Merchant ?
            </p>
            <img
              className="hidden xl:block"
              src="/panah.png"
              width="12"
              height="12"
              alt="click me"
            />
          </div>
        </Link>
        <Link href="#7">
          <div className="flex justify-between  p-6 transition-all rounded-xl border-2 border-sky-blue border-opacity-25 cursor-pointer hover:bg-sky-blue hover:bg-opacity-25">
            <p className="font-semibold text-md">
              Keuntungan menjadi Merchant apa ?
            </p>
            <img
              className="hidden xl:block"
              src="/panah.png"
              width="12"
              height="12"
              alt="click me"
            />
          </div>
        </Link>
        <Link href="#8">
          <div className="flex justify-between  p-6 transition-all rounded-xl border-2 border-sky-blue border-opacity-25 cursor-pointer hover:bg-sky-blue hover:bg-opacity-25">
            <p className="font-semibold text-md">
              Bagaimana merubah info rekening saya ?
            </p>
            <img
              className="hidden xl:block"
              src="/panah.png"
              width="12"
              height="12"
              alt="click me"
            />
          </div>
        </Link>
        <Link href="#9">
          <div className="flex justify-between  p-6 transition-all rounded-xl border-2 border-sky-blue border-opacity-25 cursor-pointer hover:bg-sky-blue hover:bg-opacity-25">
            <p className="font-semibold text-md">
              Bagaimana cara mengatasi error ?
            </p>
            <img
              className="hidden xl:block"
              src="/panah.png"
              width="12"
              height="12"
              alt="click me"
            />
          </div>
        </Link>
      </div>

      <section id="1" className="pt-16 mb-20">
        <div className="bg-blue   bg-sky-blue flex flex-col xl:flex-row justify-center items-center xl:p-14">
          <div className="order-2 xl:order-1 xl:w-4/6 flex justify-center">
            <img src="hp1.png" width="270" alt="" />
          </div>
          <div className="order-1 xl:order-2 xl:w-3/6 pr-5">
            <div className="text-white xl:p-12 p-4 ">
              <p className="text-xl font-bold mb-4">Partner FAQs</p>
              <h2 className="text-4xl font-bold mb-9">
                Apa itu Digital Waiter ?
              </h2>
              <p>
                Aplikasi pelayan digital membantu pemilik restoran untuk
                meningkatkan pendapatan dengan mendigitalkan pengalaman
                bersantap dan membantu kostumer memesan makanan di meja restoran
                tanpa mengantri di kasir.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="2"
        className="flex flex-col xl:flex-row justify-center items-center  mb-20 pt-16 mx-4 xl:mx-36"
      >
        <div className="cursor-pointer order-2">
          <Image
            src="/SilviWinking (1).png"
            width="1200"
            height="1200"
            alt=""
          />
        </div>
        <div className="xl:mr-36 order-1">
          <h2 className="text-4xl font-bold mb-9">
            Bagaimana cara membuat akun ?
          </h2>
          <p className="text-2xl text-gray-600 mt-6 ">
            Jika pengguna ingin membuat akun, setelah puas dengan aplikasi kami,
            pengguna bisa langsung klik saja pada bagian fitur Daftar.
          </p>
          <ul className="mt-6 bg-gray-200 p-6 rounded-xl shadow-md">
            <li className="flex items-center">
              <img src="/ceklis.png" width="24" alt="" className="mr-3" /> Dapat
              potongan diskon sampai dengan 100%
            </li>
            <li className="flex items-center">
              <img src="/ceklis.png" width="24" alt="" className="mr-3" /> Dapat
              membayar secara digital (no cash)
            </li>
            <li className="flex items-center">
              <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
              Terintegrasi dengan sistem analisis
            </li>
          </ul>
          <button className="text-sky-blue flex transition-all rounded-3xl font-bold px-6 lg:px-9 py-3 lg:mr-4 mb-3">
            <Link href="/daftar">Daftar sekarang </Link>{" "}
            <img src="6.png" className="ml-4" width="24" alt="" />
          </button>
        </div>
      </section>
      <section
        id="3"
        className="bg-blue bg-sky-blue text-white flex flex-col xl:flex-row justify-center items-center  mb-20 pt-16 pb-16 px-4 xl:px-36"
      >
        <div className="cursor-pointer order-2 xl:order-1">
          <Image src="/SilviWinking3.png" width="1200" height="1200" alt="" />
        </div>
        <div className="xl:ml-20 order-1 xl:order-2">
          <h2 className="text-4xl font-bold mb-9">
            Bagaimana cara Login di Aplikasi ?
          </h2>

          <p className="mt-6 bg-white  bg-opacity-25 p-6 rounded-xl shadow-md">
            Anda cukup memasukan nomer handphone yang sebelumnya anda daftarkan,
            kemudian tekan tombol masuk. Setelah itu masukan kode PIN anda.
          </p>
        </div>
      </section>
      <section
        id="4"
        className="flex flex-col xl:flex-row justify-center items-center  mb-20 pt-16 mx-4 xl:mx-36"
      >
        <div className="cursor-pointer order-2">
          <Image src="/SilviHP.png" width="1200" height="1200" alt="" />
        </div>
        <div className="xl:mr-36 order-1">
          <h2 className="text-4xl font-bold mb-9">
            Bagaimana cara melihat informasi akun saya ?
          </h2>
          <p className="text-2xl text-gray-600 mt-6 ">
            Semua informasi tentang akun anda ada di profile. Untuk melihat
            profil anda, klik icon profil kemudian akan muncul informasi tentang
            akun anda.
          </p>

          <button className="text-sky-blue flex transition-all rounded-3xl font-bold  lg:y-9 py-3 lg:mr-4 mb-3">
            <Link href="/daftar">Daftar sekarang </Link>{" "}
            <img src="6.png" className="ml-4" width="24" alt="" />
          </button>
        </div>
      </section>
      <section
        id="5"
        className="bg-blue bg-sky-blue text-white flex flex-col xl:flex-row justify-center items-center  mb-20 pt-16 pb-16 px-4 xl:px-36"
      >
        <div className="cursor-pointer order-2 xl:order-1">
          <Image src="/silvi-forbidden.png" width="1400" height="1200" alt="" />
        </div>
        <div className="xl:ml-20 order-1 xl:order-2">
          <h2 className="text-4xl font-bold mb-9">
            Bagaimana jika saya lupa PIN ?
          </h2>

          <p className="mt-6 bg-white  bg-opacity-25 p-6 rounded-xl shadow-md">
            Anda cukup klik “Lupa Kata Sandi” lalu masukan nomer handphone yang
            Anda daftarkan sebelumnya, klik tombol “kirim”, kemudian masukan 6
            digit kode OTP yang yang kami kirimkan melalui SMS, setelah itu anda
            bisa memasukan PIN baru anda.
          </p>
        </div>
      </section>
      <section
        id="6"
        className="flex flex-col xl:flex-row justify-center items-center  mb-20 pt-16 mx-4 xl:mx-36"
      >
        <div className="cursor-pointer order-2">
          <Image src="/SIlvitemen.png" width="1510" height="1124" alt="" />
        </div>
        <div className="xl:mr-36 order-1">
          <h2 className="text-4xl font-bold mb-9">
            Bagaimana cara menjadi Merchant ?
          </h2>
          <p className="text-2xl text-gray-600 mt-6 ">
            Jika pengguna ingin membuat akun, setelah puas dengan aplikasi kami,
            pengguna bisa langsung klik saja pada bagian fitur Daftar.
          </p>
          <ul className="mt-6 bg-gray-200 p-6 rounded-xl shadow-md">
            <li className="flex items-center">
              <img src="/ceklis.png" width="24" alt="" className="mr-3" /> Isi
              form yang diberikan dari pihak Marketing secara lengkap.
            </li>
            <li className="flex items-center">
              <img src="/ceklis.png" width="24" alt="" className="mr-3" /> Unduh
              dan install aplikasi Merchant.
            </li>
            <li className="flex items-center">
              <img src="/ceklis.png" width="24" alt="" className="mr-3" /> Log
              in di aplikasi Merchant.
            </li>
          </ul>
          <button className="text-sky-blue flex transition-all rounded-3xl font-bold px-6 lg:px-9 py-3 lg:mr-4 mb-3">
            <Link href="/daftar">Daftar sekarang </Link>{" "}
            <img src="6.png" className="ml-4" width="24" alt="" />
          </button>
        </div>
      </section>
      <section id="7" className="pt-16 mb-20">
        <div className="bg-blue  bg-sky-blue p-9 xl:p-16 xl:px-36">
          <div className="text-white">
            <p className="text-xl mt-6 mb-2 ">Partner FAQs</p>
            <h2 className="text-4xl font-bold mb-3">
              Keuntungan apa yang jika menjadi Merchant ?
            </h2>
            <p className="text-2xl mb-9">
              Anda dapat menambah konsumen dan meningkatkan transaksi dalam
              bisnis anda.
            </p>
          </div>

          <div className="text-white flex flex-col justify-center items-center xl:flex-row">
            <div className="bg-white bg-opacity-20 rounded-3xl xl:w-4/12 p-6 mb-4 xl:mb-0  mx-2">
              <div className="flex mb-4">
                <img src="/boby.png" width="50" alt="" />
                <div className="ml-4">
                  <p className="font-bold">Beby Prasetyo</p>
                  <p>Duren Queen</p>
                </div>
              </div>
              <p>
                Saya sudah menggunakan Silvi POS ini 3 bulan dan sangat membantu
                mengelola usaha saya, dan Silvi POS ini udah lengkap dan gratis
                pula hahaha, sukses terus Silvi dalam membantu UMKM Indonesia
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-3xl xl:w-4/12 p-6 mb-4 xl:mb-0 mx-2">
              <div className="flex mb-4">
                <img src="/nadiv.png" width="50" alt="" />
                <div className="ml-4">
                  <p className="font-bold">Sinatrya</p>
                  <p>St. Fudge Cakery</p>
                </div>
              </div>
              <p>
                Usaha kue saya semakin lancar sejak pake Silvi. Income usaha
                saya jadi jelas kemana perginya dan omsetnya juga semakin naik.
                Silvi bener-bener bantu usaha kecil saya
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-3xl xl:w-4/12 p-6 mb-4 xl:mb-0 mx-2">
              <div className="flex mb-4">
                <img src="/sinatrya.png" width="50" alt="" />
                <div className="ml-4">
                  <p className="font-bold">Nadiv Arvy</p>
                  <p>Micasa Coffee</p>
                </div>
              </div>
              <p>
                Jualan kopi menggunakan Silvi telah melancarkan proses di Micasa
                Coffee. Dengan fitur manajemen produk yang mudah digunakan, tim
                dapat melaporkan penjualan secara instan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="8"
        className="flex flex-col xl:flex-row justify-center items-center  mb-20 pt-16 mx-4 xl:mx-36"
      >
        <div className="cursor-pointer order-2">
          <img src="/card4.png" width="1400" alt="" />
        </div>
        <div className="xl:mr-36 order-1">
          <h2 className="text-4xl font-bold mb-9">
            Bagaimana merubah info rekening saya ?
          </h2>
          <p className="text-2xl text-gray-600 mt-6 p-4 rounded-xl bg-gray-200 shadow-md ">
            Saldo anda akan ditransfer ke Rekening Bank anda secara otomatis
            setiap hari pukul 02.00 WIB.
          </p>

          <button className="text-sky-blue flex transition-all rounded-3xl font-bold  lg:y-9 py-3 lg:mr-4 mb-3">
            <Link href="/daftar">Daftar sekarang </Link>{" "}
            <img src="6.png" className="ml-4" width="24" alt="" />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
