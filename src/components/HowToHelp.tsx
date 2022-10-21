import Remedio from "../assets/remedios.svg";
import Apadrinhe from "../assets/apadrinhe.svg";
import Voluntario from "../assets/voluntario.svg";
export const HowToHelp = () => {
  return (
    <section className="container  w-screen p-0">
      <div className="row">
        <div className="grid-12">
          <h1 className="text-[#f8d629] text-center text-8xl font-medium">
            Como Ajudar?
          </h1>
          <span className="text-white text-2xl block w-[70%] mt-4 m-auto">
            Se voce não puder adotar um animalzinho, tudo bem, veja outras
            formas que voce pode fazer a diferenca ajudando.
          </span>
        </div>
      </div>
      <div className="row">
        <div className="grid-1"></div>
        <div className="grid-10">
          <div className="row">
            <div className="grid-4 mt-4">
              <div className=" ">
                <div className="flex items-center justify-center mb-4">
                  <img className="w-36" src={Apadrinhe} alt="" />
                </div>
                <div className="mb-2">
                  <h2 className="text-[#f8d629] text-2xl  font-medium">
                    Apadrinhe
                  </h2>
                </div>
                <div className="h-[8rem]">
                  <span className="text-white text-lg">
                    Apadrinhe um animalzinho, voce pode contribuir mensalmente
                    para os cuidados essenciais dele.
                  </span>
                </div>
                <button className="mt-4 btn text-xl font-medium ">
                  Apadrinhar
                </button>
              </div>
            </div>
            <div className="grid-4 mt-4">
              <div className="">
                <div className="flex items-center justify-center  mb-6">
                  <img className="w-36" src={Remedio} alt="" />
                </div>
                <div className="mb-2">
                  <h2 className="text-[#f8d629] text-2xl  font-medium">
                    Remedios
                  </h2>
                </div>
                <div className="h-[8rem]">
                  <span className="text-white text-lg">
                    Voce pode doar medicamentos para o tratamento dos animais.
                  </span>
                </div>
                <button className="mt-4 btn text-xl font-medium ">Doar</button>
              </div>
            </div>
            <div className="grid-4 mt-4">
              <div className="">
                <div className="flex items-center justify-center  mb-5">
                  <img className="w-36" src={Voluntario} alt="" />
                </div>
                <div className="mb-2">
                  <h2 className="text-[#f8d629] text-2xl  font-medium">
                    Voluntario
                  </h2>
                </div>
                <div className="h-[8rem]">
                  <span className="text-white text-lg">
                    Seja um voluntario, doe o seu tempo como voluntario e ajude
                    a cuidar dos animais resgatados.
                  </span>
                </div>
                <button className="mt-4 btn text-xl font-medium ">
                  Voluntariar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-1"></div>
      </div>
    </section>
  );
};
