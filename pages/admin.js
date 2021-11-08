import Link from "next/link";
import Navbar from "../components/navbar";

export default function admin() {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex flex-col justify-center items-center p-4 text-center">
        <h1 className="text-2xl font-bold lg:text-5xl text-black">Welcome</h1>
        <h1 className="text-xl lg:text-5xl text-black">This is admin page</h1>
        <h1 className="text-xl lg:text-5xl text-black">
          Please sign in to the dashboard
        </h1>
        <button className="text-white transition-all mt-12 rounded-3xl font-bold bg-sky-blue hover:text-sky-blue border hover:border-sky-blue hover:bg-white px-6 lg:px-12 py-5 lg:mr-4 mb-3">
          <Link href="https://dashboard.tawk.to/">Go to dashboard</Link>
        </button>
      </div>
    </div>
  );
}
