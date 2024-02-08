import Image from "next/image";
const Navbar: React.FC = () => {
    return (
      <nav className="flex items-center justify-between bg-white p-4">
        <div className="flex items-center space-x-20">
          <Image  height={56} width={56} src="/logo.png" alt="" className="h-15 w-15" />
          <Image  height={56} width={56} src="/icon1.png" alt="Icon 1" className="h-15 w-15" />
          <Image  height={56} width={56} src="/icon2.png" alt="Icon 2" className="h-15 w-15" />
          <Image  height={56} width={56} src="/icon3.png" alt="Icon 3" className="h-15 w-15" />
          <Image  height={56} width={56} src="/icon4.png" alt="Icon 4" className="h-15 w-15" />
        </div>
        <Image  height={56} width={56} src="/icon5.png" alt="Icon 5" className="h-15" />
      </nav>
    );
  };

  export default Navbar;
