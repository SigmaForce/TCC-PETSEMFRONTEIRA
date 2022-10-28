export const RegisterPet = () => {
  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="form">
            <div className="grid-6">
              <div className="h-[50vh] w-full bg-slate-500 rounded"></div>
              <div className="flex flex-col">
                <label className="mt-2" htmlFor="pic">
                  Insira Fotos do Animal
                </label>
                <input
                  className="bg-slate-50 py-2 px-4 mt-2 rounded"
                  id="pic"
                  name="pic"
                  type="file"
                />
              </div>
            </div>
            <div className="grid-6 ">
              <div className="flex flex-col">
                <label className="mb-2" htmlFor="nome">
                  Nome
                </label>
                <input
                  className="px-3 py-2 rounded bg-slate-50  mb-3"
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Nome"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2" htmlFor="idade">
                  Idade
                </label>
                <input
                  className="px-3 py-2 rounded bg-slate-50  mb-3"
                  id="idade"
                  name="idade"
                  type="number"
                  placeholder="Idade"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2" htmlFor="cor">
                  Cor
                </label>
                <input
                  className="px-3 py-2 rounded bg-slate-50  mb-3"
                  id="cor"
                  name="cor"
                  type="text"
                  placeholder="Cor"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2" htmlFor="temperamento">
                  Temperamento
                </label>
                <textarea
                  className="px-3 py-2 rounded bg-slate-50 mb-3 "
                  id="temperamento"
                  name="temperamento"
                  placeholder="Temperamento"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2" htmlFor="about">
                  Conte-nos um pouco sobre ele(a)
                </label>
                <textarea
                  className="px-3 py-2 rounded bg-slate-50 mb-3"
                  id="about"
                  name="about"
                  placeholder="Uma breve historia sobre seu amiguinho"
                />
              </div>
              <button
                className="flex items-center justify-center w-100 bg-[#22c188] py-2 rounded"
                type="submit"
              >
                Colocar para Adoção
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
