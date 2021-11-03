export default function Testi() {
  return (
    <section id="testimonial" className="pt-16 mb-20">
      <div className="bg-blue  bg-sky-blue p-9 xl:p-16 xl:px-36">
        <div className="text-white">
          <p className="text-xl mt-6 ">CERITA MEREKA YANG PAKAI SILVI</p>
          <h2 className="text-4xl font-bold mb-9">
            Telah digunakan oleh 500+ <br /> UMKM di Jakarta
          </h2>
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
              Usaha kue saya semakin lancar sejak pake Silvi. Income usaha saya
              jadi jelas kemana perginya dan omsetnya juga semakin naik. Silvi
              bener-bener bantu usaha kecil saya
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
  );
}
