import pets from "../../assets/pets.png";

export const Login = () => {
  return (
    <>
      <div className="w-full h-full  bg-primary ">
        <section className="container p-0 h-screen ">
          <div className="row">
            <div className="grid-4"></div>
            <div className="grid-4">
              <div className="flex items-center justify-center">
                <img src={pets} className="w-64" alt="" />
              </div>
              <div>
                <form action="">
                  <div>
                    <label className="sr-only">Email</label>
                    <input
                      className="w-full px-4 py-2 bg-slate-100 rounded mb-2"
                      type="text"
                      placeholder="Type your email address"
                    />
                  </div>
                  <div>
                    <label className="sr-only">Senha</label>
                    <input
                      className="w-full px-4 py-2 bg-slate-100 rounded mb-4"
                      type="password"
                      placeholder="*********"
                    />
                  </div>
                  <div>
                    <button className="btn font-medium">Entrar</button>
                  </div>
                </form>
              </div>
              <div className="flex justify-between mt-4">
                <a href="" className="text-white font-semibold text-lg">
                  Lembrar-me
                </a>
                <a href="" className="text-white font-semibold text-lg">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="div">
                <span className="text-white mt-2">
                  Não tem uma Conta?
                  <a
                    href="#"
                    className="text-[#F8D629] font-bold hover:text-white transition-colors"
                  >
                    Clique aqui para Registrar-se
                  </a>
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
