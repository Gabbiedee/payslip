import Link from 'next/link'


const Page = () => {
 
  return (
    <div className="bg-indigo-500 w-screen border border-red-500 flex flex-col h-screen justify-center items-center text-white">
      <h2>Generate Seemless payslip</h2>
      <div className="p-5 m-3 bg-white rounded-md shadow-2xl text-black"><Link href="/Register">Register new Employee</Link></div>
      <div className="p-5 m-3 bg-white rounded-md shadow-2xl text-black"><Link href="/Generate">Generate Payslip for existing Employee</Link></div>
    </div>
  );
};

export default Page;
