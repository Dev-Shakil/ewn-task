import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-fit py-2">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-100">
              DEK Express
            </Link>
          </div>
          <div className="flex space-x-8 items-center">
            
            <Link href="/sign-in" className="text-gray-100 bg-[#688129] px-4 py-2 rounded-sm font-semibold text-sm hover:text-green-600">
              Sign In
            </Link>
          </div>

          
          
        </div>
      </div>

      
    </nav>
  );
}
