import { useEffect } from "react";
import FirstSection from "./components/first-section/FirstSection";
import FooterSection from "./components/footer-section/FooterSection";
import Menu from "./components/menu/Menu";
import ModalPartner from "./components/modal-partner/ModalPartner";
import OpinionSection from "./components/opinion-section/OpinionSection";
import SecondSection from "./components/second-section/SecondSection";
import ThirdSection from "./components/third-section/ThirdSection";
import { useModalStore } from "./store/modal.store";

function App() {
  const { openModal } = useModalStore();

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <main className={`relative h-full min-h-screen`}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <OpinionSection />
      <FooterSection />
      <Menu />
      <ModalPartner />
    </main>
  );
}

export default App;
