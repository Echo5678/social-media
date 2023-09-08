import HomePageNavbar from "@/components/home-navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomePageNavbar />
      <main className="flex-grow px-6 mt-10 xl:mt-12">{children}</main>
      <Footer />
    </>
  );
}
