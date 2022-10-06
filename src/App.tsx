import "./css/main.css";
import petsImg from "./assets/pets.png";
import companheiro from "./assets/imagebody.png";
import bgPetsImg from "./assets/bg-pets.svg";
import bgEllipse from "./assets/bg-ellipse.svg";
function App() {
  return (
    <>
      <section className="container p-0 relative z-[-10] ">
        <div className="fixed left-0  bg-primary h-screen w-[50vw] "></div>
        <div className="fixed right-0 bg-secondary h-screen w-[50vw] "></div>
      </section>
      <section className="container p-0">
        <div className="row p-0 m-0">
          <div className="grid-7 ">
            <ul className="flex flex-space color-white text-xl font-bold">
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <a
                  className="cursor-pointer hover:text-black duration-500 ease-in-out"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:text-black duration-500 ease-in-out"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:text-black duration-500 ease-in-out"
                  href=""
                >
                  How to Help
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:text-black duration-500 ease-in-out"
                  href=""
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="grid-6">
            <div className="mb-6">
              <strong className="text-7xl text-white block ">Não Compre</strong>
              <strong className="text-[#f8d629] text-7xl text-bold">
                Adote!
              </strong>
            </div>
            <span className="text-white text-2xl text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              risus, in enim semper. Luctus facilisi neque porttitor ullamcorper
              scelerisque gravida venenatis lectus neque.
            </span>
            <button className="mt-4 btn text-xl font-medium ">Adote</button>
          </div>
          <div className="grid-6 relative h-[80vh] ">
            <div className="">
              <img
                className="absolute top-0 mt-12 z-[11]"
                src={petsImg}
                alt=""
              />
            </div>
            <div className=" ">
              <img
                className="absolute top-0 w-[90%] z-[-8]"
                src={bgPetsImg}
                alt=""
              />
              <img className="absolute top-0 z-[-8]" src={bgEllipse} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="grid-2"></div>
          <div className="grid-8 p-0  ">
            <div className="z-8 bg-white p-12 flex justify-between ">
              <div className="text-center">
                <strong className="text-5xl block text-[#f8d629]">
                  +3.500
                </strong>
                <span className="text-xl text-center">Animais adotados</span>
              </div>
              <div className="text-center">
                <strong className="text-5xl block text-[#f8d629]">+15</strong>
                <span className="text-xl text-center">
                  Parceiros do Projeto
                </span>
              </div>
              <div className="text-center">
                <strong className="text-5xl block text-[#f8d629]">+10</strong>
                <span className="text-xl text-center">Anos no mercado</span>
              </div>
            </div>
          </div>
          <div className="grid-2"></div>
        </div>
      </section>
      <section className=" h-screen bg-secondary">
        <div className="container p-0">
          <div className=""></div>
          <div className="row">
            <div className="grid-6">
              <img src={companheiro} alt="" />
            </div>
            <div className="grid-6">
              <h4 className="text-3xl text-[#F8F7FA] font-medium">Sobre nós</h4>
              <h1 className="text-6xl text-[#22c188] pt-4">
                Entenda quem somos e por que existimos
              </h1>
              <span className="text-lg text-[#F8F7FA] font-normal pt-6">
                Somos uma plataforma de adoção, e de resgate de animais
                perdidos. Facilitando o processo de busca e de divulgação de
                animais para adoção. Os animais precisam de um lar, e nós
                existimos com o propósito de auxiliar nos resgate desses
                animaizinhos e facilitar um novo lar para eles.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-primary w-screen">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </>
  );
}

export default App;
