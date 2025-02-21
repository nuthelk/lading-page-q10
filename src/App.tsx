import FirstSection from "./components/first-section/FirstSection";
import FooterSection from "./components/footer-section/FooterSection";
import Menu from "./components/menu/Menu";
import ModalPartner from "./components/modal-partner/ModalPartner";
import SecondSection from "./components/second-section/SecondSection";
import ThirdSection from "./components/third-section/ThirdSection";

function App() {
  return (
    <main className="h-full min-h-screen overflow-auto relative">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FooterSection />
      <Menu />
      <ModalPartner />
    </main>
  );
}

export default App;
