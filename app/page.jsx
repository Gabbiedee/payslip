import Link from 'next/link'


const Page = () => {
 
  return (
    <div className="bg-indigo-500 w-screen  flex flex-col h-screen justify-center items-center text-white">
      <h2 className='text-2xl font-bold'>Generate Seemless payslip</h2>
      <div >
      <div className="p-5 m-3 bg-white rounded-md shadow-2xl text-black text-lg font-bold text-center"><Link href="/Auth/signup">Sign Up</Link></div>
      <div className="p-5 m-3 bg-white rounded-md shadow-2xl text-black text-lg font-bold text-center"><Link href="/Auth/login">Login</Link></div>
      </div>
     
    </div>
  );
};

export default Page;
