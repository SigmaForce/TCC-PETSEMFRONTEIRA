import { Link } from "react-router-dom";
export const Recover = () => {
  return (
    <>
      <div className="w-full h-screen  bg-primary ">
        <section className="container">
          <div className="row">
            <div className="grid-4"></div>
            <div className="grid-4">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <strong className="text-4xl font-bold text-amber-300 mb-3 block">
                  Esqueceu sua senha?
                </strong>
                <span className="font-medium text-white block mb-2">
                  Informe seu email e enviaremos um link para você voltar a
                  acessar sua conta. 
                </span>
              </div>
              <div>
                <input
                  className="w-full py-2 rounded mb-2 px-3"
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div>
                <button className="btn font-medium">Enviar</button>
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
