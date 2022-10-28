import Doguinho from "../assets/doguinho.png";

export const Profile = () => {
  return (
    <>
      <div className="container pt-3">
        <div className="row">
          <div className="grid-3 flex items-center justify-center">
            <img className="rounded-full w-36" src={Doguinho} alt="" />
          </div>
          <div className="grid-9">
            <h1 className="text-3xl font-bold text-gray-800">Nome</h1>
            <span className="text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              augue sit condimentum urna. A aliquet lorem ut est dui nulla.
              Facilisis urna, in vitae, leo. Lectus semper lectus neque, posuere
              id blandit.
            </span>
            <div className="flex gap-10 mt-2 font-medium ">
              <span className="text-gray-800">Sexo: Macho</span>
              <span className="text-gray-800">Idade: 2 Anos</span>
              <span className="text-gray-800">Castrado: Sim</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="grid-3 p-0 rounded">
            <a href="">
              <img src={Doguinho} alt="" className="rounded" />
            </a>
          </div>
          <div className="grid-3 p-0 rounded">
            <a href="">
              <img src={Doguinho} alt="" className="rounded" />
            </a>
          </div>
          <div className="grid-3 p-0 rounded">
            <a href="">
              <img src={Doguinho} alt="" className="rounded" />
            </a>
          </div>
          <div className="grid-3 p-0 rounded">
            <a href="">
              <img src={Doguinho} alt="" className="rounded" />
            </a>
          </div>
          <div className="grid-3 p-0 rounded">
            <a href="">
              <img src={Doguinho} alt="" className="rounded" />
            </a>
          </div>
          <div className="grid-3 p-0 rounded">
            <a href="">
              <img src={Doguinho} alt="" className="rounded" />
            </a>
          </div>
          <div className="grid-3 p-0 rounded">
            <a href="">
              <img src={Doguinho} alt="" className="rounded" />
            </a>
          </div>
          <div className="grid-3 p-0 rounded">
            <a href="">
              <img src={Doguinho} alt="" className="rounded" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
