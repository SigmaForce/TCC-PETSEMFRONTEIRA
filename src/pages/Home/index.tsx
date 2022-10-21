import { About } from "../../components/About";
import { Adopt } from "../../components/Adopt";
import { Contact } from "../../components/Contact";
import { Header } from "../../components/Header";
import { HowToHelp } from "../../components/HowToHelp";
import { Main } from "../../components/Main";

export const Home = () => {
  return (
    <>
      <section className="container p-0 relative z-[-10] ">
        <div className="fixed right-0 bg-secondary h-screen w-[50vw] "></div>
        <div className="fixed left-0  bg-primary h-screen w-[50vw] "></div>
      </section>

      <Header />
      <div className="w-[100vw] h-full">
        <Main />
      </div>
      <div className="w-[100vw] h-full bg-secondary">
        <About />
      </div>

      <div className="w-[100vw] h-full bg-primary">
        <HowToHelp />
      </div>
      <div className="w-[100vw] h-full bg-[#DCCBFF]">
        <Adopt />
      </div>
      <div className="w-[100vw] h-full">
        <Contact />
      </div>

      {/* 
      
      </section>
      <section className="container p-0"></section>
      

      {
        <section className="h-screen bg-primary w-screen">
          <div className="container">
            <div className="row"></div>
          </div>
        </section>
      */}
    </>
  );
};
