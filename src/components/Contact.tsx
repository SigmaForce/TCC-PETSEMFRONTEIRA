import contact from "../assets/contact.png";
export const Contact = () => {
  return (
    <section className="container p-0">
      <div className="row">
        <div className="grid-6 p-0">
          <img className="object-fill" src={contact} alt="" />
        </div>
        <div className="grid-6 p-0">
          <div className="row p-0">
            <div className="grid-12 p-0">
              <h1 className="text-6xl font-bold mb-4 text-white">
                Entre em contato com a gente!
              </h1>
              <span className="text-2xl">Preencha o Formulario</span>
            </div>
          </div>

          <form action="">
            <div className="row p-0">
              <div className="grid-6 flex flex-col p-0">
                <label className="text-lg" htmlFor="">
                  Seu Nome
                </label>
                <input
                  className="outline-none py-3 px-4 mt-2 text-gray-800 rounded w-full bg-[#DCE9E2] focus-within:ring-2 ring-[#22c188]"
                  type="text"
                  placeholder="Informe seu nome"
                />
              </div>
              <div className="grid-6 flex flex-col p-0">
                <label className="text-lg" htmlFor="">
                  E-mail
                </label>
                <input
                  className="outline-none py-3 px-4 mt-2 text-gray-800 rounded w-full bg-[#DCE9E2] focus-within:ring-2 ring-[#22c188]"
                  type="text"
                  placeholder="Informe seu Email"
                />
              </div>
            </div>
            <div className="row p-0">
              <div className="grid-6 flex flex-col p-0">
                <label className="text-lg" htmlFor="">
                  Whatsapp
                </label>
                <input
                  className="outline-none py-3 px-4 mt-2 text-gray-800 rounded w-full bg-[#DCE9E2] focus-within:ring-2 ring-[#22c188]"
                  type="text"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="grid-6 flex flex-col p-0">
                <label className="text-lg" htmlFor="">
                  Assunto
                </label>
                <input
                  className="outline-none py-3 px-4 mt-2 text-gray-800 rounded w-full bg-[#DCE9E2] focus-within:ring-2 ring-[#22c188]"
                  type="text"
                  placeholder="Informe seu nome"
                />
              </div>
            </div>
            <div className="row p-0">
              <div className="grid-12 grid-6 flex flex-col p-0">
                <label className="text-lg" htmlFor="">
                  Mensagem
                </label>
                <textarea
                  className="outline-none py-3 px-4 mt-2 text-gray-800 rounded w-full bg-[#DCE9E2] focus-within:ring-2 ring-[#22c188]"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
            <div className="row p-0">
              <div className="grid-12 p-0">
                <button className="bg-[#22c188] py-4 px-8">
                  <span className="text-xl text-white text-semibold">
                    Enviar Mensagem
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
