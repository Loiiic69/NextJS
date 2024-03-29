import Link from 'next/link';
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <Image height={56} width={56} src="/logo.png" alt="Logo" className="w-14 h-14 mb-8 rounded-lg " />
      <div className="text-center bg-gray-100 p-12 rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-black mb-12">UrbAide - Banking</h1>
        <div className="mb-6">
          <Link href="/login">
            <span className="hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg mr-8 cursor-pointer">Login</span>
          </Link>
          <Link href="/register">
            <span className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg cursor-pointer">Register</span>
          </Link>
        </div>
          <Link href="/home">
              <span className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg cursor-pointer">Home</span>
          </Link>
      </div>
    </div>
  );
};

export default HomePage;
