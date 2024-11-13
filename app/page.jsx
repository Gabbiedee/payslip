import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const height = "100";
  const width = "100";

  return (
    <div className="flex  h-screen justify-center items-center text-white">
      <div className="relative w-1/2 h-screen">
        <Image
          src="/LandingPage.jpg"
          alt="Business Img"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-1/2 h-screen bg-gray-800 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold my-3">
          Welcome to Generate Seemless payslip
        </h2>
        <div className="p-5 m-3 bg-white w-3/5 rounded-md shadow-2xl text-black text-lg font-bold text-center">
          <Link href="/Auth/signup">Sign Up</Link>
        </div>
        <div className="p-5 m-3 bg-white w-3/5  rounded-md shadow-2xl text-black text-lg font-bold text-center">
          <Link href="/Auth/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
