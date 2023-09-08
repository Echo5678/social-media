import Link from "next/link";

export default function Footer({}) {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black mt-20 px-12 py-4 flex justify-between w-full items-center">
      <Link href="/" className="text-xl font-bold hover:cursor-pointer">
        Co-Dev
      </Link>
      <ul className="flex flex-col md:flex-row items-center space-x-2">
        <li>Support</li>
        <li className="md:border-l md:pl-2">Privacy Policy</li>
        <li className="md:border-l md:pl-2">Terms of Use</li>
        <li className="md:border-l md:pl-2">
          <span className="mr-2">&copy;</span>
          CoDev Software LLC
        </li>
      </ul>
    </footer>
  );
}
