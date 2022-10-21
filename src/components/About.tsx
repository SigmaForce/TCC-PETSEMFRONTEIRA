import companheiro from "../assets/imagebody.png";
import ellipse from "../assets/Ellipse.svg";
import paw from "../assets/paw.svg";
import bone from "../assets/Bone.svg";
import ellipsePaw from "../assets/lipaw.svg";
import plus from "../assets/+.svg";
export const About = () => {
  return (
    <>
      <div className="absolute w-screen h-screen">
        <img
          className="absolute w-64 top-[6rem] right-14 "
          src={ellipsePaw}
          alt=""
        />
        <img
          className="absolute w-[26rem] top-[5%] left-[-12%] "
          src={ellipse}
          alt=""
        />
        <img className="absolute w-32 top-[20%] left-[1%] " src={plus} alt="" />
        <img
          className="absolute w-[20rem] top-[35%] left-[15%] "
          src={ellipse}
          alt=""
        />
        <img
          className="absolute w-[12rem] top-[60%] left-[2%] "
          src={paw}
          alt=""
        />
        <img className="absolute w-32  right-[25%] " src={bone} alt="" />
      </div>

      <section className="container mt-16">
        <div className="row">
          <div className="grid-6">
            <img src={companheiro} alt="" />
          </div>
          <div className="grid-6">
            <h4 className="text-3xl text-[#F8F7FA] font-medium">Sobre nós</h4>
            <h1 className="text-6xl text-[#22c188] pt-4">
              Entenda quem somos e por que existimos
            </h1>
            <span className="text-lg text-[#F8F7FA] font-normal pt-6">
              Somos uma plataforma de adoção, e de resgate de animais perdidos.
              Facilitando o processo de busca e de divulgação de animais para
              adoção. Os animais precisam de um lar, e nós existimos com o
              propósito de auxiliar nos resgate desses animaizinhos e facilitar
              um novo lar para eles.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
