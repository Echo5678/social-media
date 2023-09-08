import Link from "next/link";

export default function HomePageNavbar() {
  return (
    <header className="py-4 flex justify-between items-center fixed top-0 w-full px-8 backdrop-blur-md">
      <Link href="/" className="text-2xl font-semibold">
        Co-Dev
      </Link>
      <nav className="flex space-x-6 font-semibold items-center text-[#444444] dark:text-[#B1B1B1]">
        <Link href="/" className="hover:text-white">
          About
        </Link>
        <Link href="/" className="hover:text-white">
          Log in
        </Link>
        <Link
          href="/"
          className="dark:text-[#1e1e1e] text-white bg-black dark:bg-white py-1.5 px-4 rounded-md hover:bg-zinc-100 active:shadow-inner"
        >
          Sign up
        </Link>
      </nav>
    </header>
  );
}
