import { Link } from "react-router-dom";
export const Create = () => {
  return (
    <>
      <div className="bg-primary">
        <section className="container">
          <div className="row">
            <div className="grid-4"></div>
            <div className="grid-4">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h1 className="text-4xl text-amber-300 font-bold text-center mb-4">
                  Crie sua Conta
                </h1>
              </div>
              <div>
                <form action="">
                  <div>
                    <label className="sr-only">Nome</label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className="mb-2 w-full rounded border px-3 py-2 text-gray-900 focus:border-[#F8D629] focus:outline-none focus:ring-[#F8D629] sm:text-sm"
                      placeholder="Nome"
                    />
                  </div>
                  <div>
                    <label className="sr-only">Sobrenome</label>
                    <input
                      id="surname"
                      name="surname"
                      required
                      placeholder="Sobrenome"
                      type="text"
                      className="mb-2 w-full rounded border px-3 py-2 text-gray-900 focus:border-[#F8D629] focus:outline-none focus:ring-[#F8D629] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="mb-2 w-full rounded border px-3 py-2 text-gray-900 focus:border-[#F8D629] focus:outline-none focus:ring-[#F8D629] sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="confirmpassword"
                      name="confirmpassword"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="mb-3 w-full rounded border px-3 py-2 text-gray-900 focus:border-[#F8D629] focus:outline-none focus:ring-[#F8D629] sm:text-sm"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="font-medium text-white">
                    Concordo com os termos e condições
                  </div>
                  <div>
                    <button className="btn font-medium mt-2">
                      Criar Conta
                    </button>
                  </div>
                </form>
                <div>
                  <span className="text-white text-lg mt-2">
                    Já tem uma conta?{" "}
                    <Link
                      to="/login"
                      className="text-lg text-amber-300 font-bold hover:opacity-90 transition-colors"
                    >
                      Clique aqui para entrar
                    </Link>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid-4"></div>
          </div>
        </section>
      </div>
    </>
  );
};
