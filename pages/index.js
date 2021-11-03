import Head from "next/head";
import Image from "next/image";
import Navbar from "../component/navbar";
import Link from "next/link";
import Testi from "../component/testimonial";
import Footer from "../component/footer";

export default function Home() {
  return (
    <>
      <main className="text-text-color">
        <Navbar />

        <section className="pt-36 flex flex-col  lg:flex-row justify-center lg:mx-20 mx-4 mb-20 ">
          <div className="order-2 lg:order-1">
            <div>
              <p className="font-bold text-xl mb-4">
                APLIKASI ASISTEN WIRAUSAHA
              </p>
              <h1 className="font-extrabold text-5xl">
                Cara baru kelola bisnismu!
              </h1>
              <p className="text-2xl text-gray-600 mt-6">
                Pengelola transaksi pintar yang terintegrasi <br /> untuk segala
                bentuk bisnismu!
              </p>
            </div>
            <div className="mt-6 flex justify-center flex-col lg:block ">
              <button className="text-white transition-all rounded-3xl font-bold bg-sky-blue hover:text-sky-blue border hover:border-sky-blue hover:bg-white px-6 lg:px-9 py-3 lg:mr-4 mb-3">
                <Link href="/">Daftar sekarang</Link>
              </button>
              <button className="text-sky-blue rounded-3xl font-bold border border-sky-blue bg-white  px-6 lg:px-9 py-3 ">
                <Link href="/">Kenali lebih lanjut</Link>
              </button>
            </div>
            <ul className="mt-6">
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Pendaftaran cepet!
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Langsung jualan
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Bisa free trial
              </li>
            </ul>
          </div>
          <div className="order-1 mb-6 lg:mb-0">
            <img alt="Silvi Winking" src="/SilviWinking.png" width="450" />
          </div>
        </section>

        <section id="fitur" className="pt-16 mb-20">
          <div className="bg-blue   bg-sky-blue flex flex-col xl:flex-row justify-center items-center xl:p-16">
            <div className="mr-0 xl:mr-36 order-2 xl:order-1">
              <img src="hp1.png" width="250" alt="" />
            </div>
            <div className=" order-1 xl:order-2">
              <div className="text-white p-12 xl:p-0">
                <p className="text-xl font-bold mb-4">PELAJARI SILVI</p>
                <h2 className="text-4xl font-bold mb-9">
                  Kelola dalam genggaman
                </h2>
                <ul className="text-base font-bold">
                  <li className="transition-all my-4 py-4 px-7 hover:bg-white hover:bg-opacity-20 rounded-xl flex">
                    <img src="/1.png" className="mr-4" width="24" alt="" />
                    KASIR PINTAR
                  </li>
                  <li className="transition-all my-4 py-4 px-7 hover:bg-white hover:bg-opacity-20 rounded-xl flex">
                    <img src="/2.png" width="24" className="mr-4" alt="" />
                    MONITOR PESANAN
                  </li>
                  <li className="transition-all my-4 py-4 px-7 hover:bg-white hover:bg-opacity-20 rounded-xl flex">
                    <img src="/3.png" width="24" className="mr-4" alt="" />
                    KELOLA KARYAWAN
                  </li>
                  <li className="transition-all my-4 py-4 px-7 hover:bg-white hover:bg-opacity-20 rounded-xl flex">
                    <img src="/4.png" width="24" className="mr-4" alt="" />
                    ANALISIS PENJUALAN
                  </li>
                  <li className="transition-all my-2 py-4 px-7 hover:bg-white hover:bg-opacity-20 rounded-xl flex">
                    <img src="/5.png" width="24" className="mr-4" alt="" />
                    CONTACTLESS DINING
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row justify-center items-center mb-20 pt-16 mx-4 xl:mx-36">
          <div className="xl:mr-36">
            <h2 className="text-4xl font-bold mb-9">
              Kasir online pintar untuk catat transaksi tanpa ribet
            </h2>
            <p className="text-2xl text-gray-600 mt-6 ">
              Jika pengguna ingin membuat akun, setelah puas dengan aplikasi
              kami, pengguna bisa langsung klik saja pada bagian fitur Daftar.
            </p>
            <ul className="mt-6 bg-gray-200 p-6 rounded-xl shadow-md">
              <p className="font-bold text-gray-600 mb-4 ">
                Benefit yang di dapat
              </p>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Pencatatan otomatis
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Metode pembayaran lengkap
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Pembukuan rapi
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Terintegrasi dengan sistem analisis
              </li>
            </ul>
            <button className="text-sky-blue flex transition-all rounded-3xl font-bold px-6 lg:px-9 py-3 lg:mr-4 mb-3">
              <Link href="/">Daftar sekarang </Link>{" "}
              <img src="6.png" className="ml-4" width="24" alt="" />
            </button>
          </div>
          <div>
            <div className="flex">
              <div className="mr-4">
                <div className="w-full md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex mt-10 flex-col mb-3">
                  <img
                    src="/orek.webp"
                    alt="img"
                    title="img"
                    className="w-full h-auto object-cover rounded-t-lg"
                    id="whoobe-ixxe5"
                  />
                  <div
                    id="whoobe-1okdg"
                    className="w-full p-4 justify-start flex flex-col"
                  >
                    <p className="text-center" id="whoobe-950fw">
                      Tempe Orek
                    </p>
                    <p className="text-center">
                      <b>Rp 3.000</b>
                    </p>
                    <p className="text-center text-sm">Stok: 4</p>
                    <div className="flex justify-center mt-3 ">
                      <button className="bg-sky-blue px-3 font-bold text-white mx-2">
                        -
                      </button>
                      <p className="mx-4">1</p>
                      <button className="bg-sky-blue px-2 font-bold text-white mx-2 text-xl">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
                  <img
                    src="terong.webp"
                    alt="img"
                    title="img"
                    className="w-full h-auto object-cover rounded-t-lg"
                    id="whoobe-ixxe5"
                  />
                  <div
                    id="whoobe-1okdg"
                    className="w-full p-4 justify-start flex flex-col"
                  >
                    <p className="text-center" id="whoobe-950fw">
                      Terong Balado
                    </p>
                    <p className="text-center">
                      <b>Rp 5.000</b>
                    </p>
                    <p className="text-center text-sm">Stok: 3</p>

                    <button
                      value="button"
                      className="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-sky-blue rounded-3xl"
                      id="whoobe-jkkr2"
                    >
                      Tambah
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="w-full md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col mb-3">
                    <img
                      src="/ayam.webp"
                      alt="img"
                      title="img"
                      className="w-full h-auto object-cover rounded-t-lg"
                      id="whoobe-ixxe5"
                    />
                    <div
                      id="whoobe-1okdg"
                      className="w-full p-4 justify-start flex flex-col"
                    >
                      <p className="text-center" id="whoobe-950fw">
                        Ayam Goreng
                      </p>
                      <p className="text-center">
                        <b>Rp 8.000</b>
                      </p>
                      <p className="text-center text-sm">Stok: 10</p>
                      <div className="flex justify-center mt-3 ">
                        <button className="bg-sky-blue px-3 font-bold text-white mx-2">
                          -
                        </button>
                        <p className="mx-4">1</p>
                        <button className="bg-sky-blue px-2 font-bold text-white mx-2 text-xl">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 justify-center items-center bg-white shadow-lg  flex flex-col">
                    <img
                      src="/udang.webp"
                      alt="img"
                      title="img"
                      className="w-full h-auto object-cover rounded-t-lg"
                      id="whoobe-ixxe5"
                    />
                    <div
                      id="whoobe-1okdg"
                      className="w-full p-4 justify-start flex flex-col"
                    >
                      <p className="text-center" id="whoobe-950fw">
                        Udang Manis
                      </p>

                      <p className="text-center">
                        <b>Rp 8.000</b>
                      </p>
                      <p className="text-center text-sm">Stok: 4</p>
                      <button
                        value="button"
                        className="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-sky-blue rounded-3xl"
                        id="whoobe-jkkr2"
                      >
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="cursor-pointer"
              src="/checkout.png"
              width="700"
              alt=""
            />
          </div>
        </section>

        <section className="flex flex-col xl:flex-row justify-center items-cemter  mb-20 pt-16 mx-4 xl:mx-36">
          <div className="cursor-pointer order-2 xl:order-1 ">
            <img src="/card.png" width="1400" alt="" />
          </div>
          <div className="xl:ml-36 mb-6 order-1 xl:order-2">
            <h2 className="text-4xl font-bold mb-9">
              Monitor segala aktivitas pesananmu secara real-time
            </h2>
            <p className="text-2xl text-gray-600 mt-6 ">
              Dari pesanan baru masuk, dimasak, diantar, dan akhirnya disajikan,
              kamu bisa pantau!
            </p>
            <ul className="mt-6 bg-gray-200 p-6 rounded-xl shadow-md">
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Monitor sesuai posisi
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Status pemesanan real-time
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Notifikasi pengingat sesuai posisi
              </li>
            </ul>
            <button className="text-sky-blue flex transition-all rounded-3xl font-bold px-6 lg:px-9 py-3 lg:mr-4 mb-3">
              <Link href="/">Daftar sekarang </Link>{" "}
              <img src="6.png" className="ml-4" width="24" alt="" />
            </button>
          </div>
        </section>
        <section className="flex flex-col xl:flex-row justify-center items-center  mb-20 pt-16 mx-4 xl:mx-36">
          <div className="cursor-pointer order-2">
            <img src="/card2.png" width="1200" alt="" />
          </div>
          <div className="xl:mr-36 order-1">
            <h2 className="text-4xl font-bold mb-9">
              Self-Order buat para pelangganmu
            </h2>
            <p className="text-2xl text-gray-600 mt-6 ">
              Pelangganmu bisa pesen & bayar langsung hanya dengan scan QR Code
              di meja.
            </p>
            <ul className="mt-6 bg-gray-200 p-6 rounded-xl shadow-md">
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" /> Gak
                perlu ngantri
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" /> Gak
                ada lagi pesanan gak sesuai
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Pelanggan tau status pesanannya
              </li>
              <li className="flex items-center font-bold">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Mendukung protokol kesehatan
              </li>
            </ul>
            <button className="text-sky-blue flex transition-all rounded-3xl font-bold px-6 lg:px-9 py-3 lg:mr-4 mb-3">
              <Link href="/">Daftar sekarang </Link>{" "}
              <img src="6.png" className="ml-4" width="24" alt="" />
            </button>
          </div>
        </section>
        <section className="flex flex-col xl:flex-row justify-center items-center  mb-20 pt-16 mx-4 xl:mx-36">
          <div className="cursor-pointer order-2 xl:order-1">
            <img src="/card3.png" width="1400" alt="" />
          </div>
          <div className="xl:ml-20 order-1 xl:order-2">
            <h2 className="text-4xl font-bold mb-9">
              Kelola dan monitor karyawanmu
            </h2>
            <p className="text-2xl text-gray-600 mt-6 ">
              Kelola tugas-tugas karyawanmu dan monitor performa mereka
            </p>
            <ul className="mt-6 bg-gray-200 p-6 rounded-xl shadow-md">
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Atur posisi karyawan
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Monitor segala aktivitas karyawan
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Tugas karyawan lebih terstruktur
              </li>
            </ul>
            <button className="text-sky-blue flex transition-all rounded-3xl font-bold px-6 lg:px-9 py-3 lg:mr-4 mb-3">
              <Link href="/">Daftar sekarang </Link>{" "}
              <img src="6.png" className="ml-4" width="24" alt="" />
            </button>
          </div>
        </section>
        <section className="flex flex-col xl:flex-row justify-center  mb-20 pt-16 mx-4 xl:mx-36">
          <div className="cursor-pointer order-2">
            <img src="/card4.png" width="1400" alt="" />
          </div>
          <div className="xl:mr-20 order-1">
            <h2 className="text-4xl font-bold mb-9">
              Penjualanmu dianalisa secara otomatis
            </h2>
            <p className="text-2xl text-gray-600 mt-6 ">
              Semua penjualanmu tercatat dan dianalisa dalam laporan yang
              dikirim tiap bulan
            </p>
            <ul className="mt-6 bg-gray-200 p-6 rounded-xl shadow-md">
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" /> Gak
                perlu analisa manual lagi
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Lebih paham kesukaan pelanggan
              </li>
              <li className="flex items-center">
                <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                Minimalisir salah strategi bisnis
              </li>
            </ul>
            <button className="text-sky-blue flex transition-all rounded-3xl font-bold px-6 lg:px-9 py-3 lg:mr-4 mb-3">
              <Link href="/">Daftar sekarang </Link>{" "}
              <img src="6.png" className="ml-4" width="24" alt="" />
            </button>
          </div>
        </section>
        <Testi />

        <section id="harga" className="pt-20 mb-20 mx-4 xl:mx-36">
          <h2 className="text-4xl font-bold mb-9">
            Yuk! Ikutan berbagi cerita inspiratif dengan berlangganan
          </h2>
          <div className="flex flex-col xl:flex-row justify-center">
            <div className="p-12 rounded-3xl shadow-xl xl:w-5/12">
              <p className="text-right font-bold text-gray-600">Regular</p>
              <h3 className="font-bold text-4xl text-center mt-12">Rp 0,-</h3>
              <ul className="mt-20">
                <li className="flex items-center my-5">
                  <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                  Kasir online
                </li>
                <li className="flex items-center my-5">
                  <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                  Laporan penjualan
                </li>
                <li className="flex items-center my-5">
                  <img src="/silang.png" width="24" alt="" className="mr-3" />{" "}
                  Atur karyawan
                </li>
                <li className="flex items-center my-5">
                  <img src="/silang.png" width="24" alt="" className="mr-3" />{" "}
                  Monitor aktivitas pesanan
                </li>
                <li className="flex items-center my-5">
                  <img src="/silang.png" width="24" alt="" className="mr-3" />{" "}
                  Fitur Self-Order untuk pelanggan
                </li>
              </ul>
              <button className="text-sky-blue mt-24 rounded-3xl w-full font-bold border-2 border-sky-blue bg-white  px-6 lg:px-9 py-3 ">
                <Link href="/">Daftar</Link>
              </button>
            </div>
            <div className="p-12 rounded-3xl shadow-xl xl:w-5/12 xl:ml-6">
              <p className="text-right font-bold text-yellow-main">Plus</p>
              <h3 className="font-bold text-4xl text-center mt-12">
                Rp 299,000-
              </h3>
              <p className="text-center">SEKALI BAYAR</p>
              <ul className="mt-12">
                <li className="flex items-center my-5">
                  <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                  POS
                </li>
                <li className="flex items-center my-5">
                  <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                  Contactless Dining
                </li>
                <li className="flex items-center my-5">
                  <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                  Free training & maintenance
                </li>
                <li className="flex items-center my-5">
                  <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                  Backoffice (dashboard)
                </li>
                <li className="flex items-center my-5">
                  <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                  POSM (QR sticker per table)
                </li>
                <li className="flex items-center my-5">
                  <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                  Free transaction fee
                </li>
                <li className="flex items-center my-5">
                  <img src="/ceklis.png" width="24" alt="" className="mr-3" />{" "}
                  Priority customer service
                </li>
              </ul>
              <button className="text-white mt-6 rounded-3xl  w-full font-bold border-2 border-sky-blue bg-sky-blue  px-6 lg:px-9 py-3 ">
                <Link href="/">Hubungi</Link>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
