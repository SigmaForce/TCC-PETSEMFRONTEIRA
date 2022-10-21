export const Success = () => {
  return (
    <div className="bg-primary">
      <section className="container">
        <div className="row">
          <div className="grid-4">
            <img src="" alt="" />
          </div>
          <div className="grid-4">
            <h1 className="text-4xl font-bold text-amber-300 mb-3 text-center">
              Senha resetada
            </h1>
            <span className="text-white font-medium text-lg mb-4">
              Sua senha foi resetada com sucesso, clique abaixo para fazer
              login.
            </span>
            <button className="btn font-medium">Continuar</button>
          </div>
          <div className="grid-4"></div>
        </div>
      </section>
    </div>
  );
};
