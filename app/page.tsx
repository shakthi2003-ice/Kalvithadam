import About from "./_components/about";
import Career from "./_components/career";
import Faqs from "./_components/faqs";
import Footer from "./_components/footer";
import Main from "./_components/main";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Career />
      <About />
      <Faqs />
      <Footer />
    </div>
  );
}
