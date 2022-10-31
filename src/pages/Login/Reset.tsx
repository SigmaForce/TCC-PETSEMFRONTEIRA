import { Link } from "react-router-dom";
export const Reset = () => {
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
                <h1 className="text-4xl font-bold text-amber-300 text-center mb-4">
                  Resetar sua senha
                </h1>
                <span className="font-medium text-white block mb-2">
                  Preencha os campos abaixo
                </span>
              </div>
              <div>
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
                    className="mb-3 w-full rounded border px-3 py-2 text-gray-900 focus:border-[#F8D629] focus:outline-none focus:ring-[#F8D629] sm:text-sm"
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
                    className="mb-2 w-full rounded border px-3 py-2 text-gray-900 focus:border-[#F8D629] focus:outline-none focus:ring-[#F8D629] sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div>
                <button className="btn font-medium">Resetar senha</button>
                <span className="mt-2">
                  {" "}
                  <Link to="/" className="text-amber-300 font-medium">
                    Voltar a página inicial
                  </Link>{" "}
                </span>
              </div>
            </div>
            <div className="grid-4"></div>
          </div>
        </section>
      </div>
    </>
  );
};
