import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}
