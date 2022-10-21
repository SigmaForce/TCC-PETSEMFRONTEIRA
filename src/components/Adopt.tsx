import adopt from "../assets/panqueca.png";
export const Adopt = () => {
  return (
    <section className="container p-0">
      <div className="row p-0">
        <div className="grid-12 p-0">
          <h1 className="text-5xl text-[#22c188] text-center mt-4">
            Animais para adocão responsavel
          </h1>
        </div>
        <div className="grid-12 p-0">
          <span className="text-2xl text-black text-center block">
            Os animais precisam de um lar, e nós existimos com o propósito de
            resgatar e facilitar um novo lar a eles.
          </span>
        </div>
      </div>
      <div className="row  p-0">
        <div className="grid-3">
          <a className="" href="">
            <img className="max-h-[26rem] object-contain" src={adopt} alt="" />
          </a>
        </div>
        <div className="grid-3">
          <a href="">
            <img className="max-h-[26rem]  object-contain" src={adopt} alt="" />
          </a>
        </div>
        <div className="grid-3">
          <a href="">
            <img className="max-h-[26rem] object-contain" src={adopt} alt="" />
          </a>
        </div>
        <div className="grid-3">
          <a href="">
            <img
              className="max-h-[26rem] w-full object-contain"
              src={adopt}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="row  p-0">
        <div className="grid-3"></div>
        <div className="grid-6">
          <button className="btn">Ver Outros Animais</button>
        </div>
        <div className="grid-3"></div>
      </div>
    </section>
  );
};
