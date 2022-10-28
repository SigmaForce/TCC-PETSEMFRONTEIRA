import React, { Component } from "react";

import petsImg from "../assets/pets.png";
import bgPetsImg from "../assets/bg-pets.svg";
import bgEllipse from "../assets/bg-ellipse.svg";

export const MainContent = () => {
  return (
    <>
      <main className="container p-0">
        <div className="row">
          <h1>Cadastrar Pet Para adoção</h1>
        </div>
        <div className="row">
          <div className="grid-6">
            <div className="mb-6">
              <strong className="text-7xl text-white block ">Não Compre</strong>
              <strong className="text-[#f8d629] text-7xl text-bold">
                Adote!
              </strong>
            </div>
            <span className="text-white text-2xl text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              risus, in enim semper. Luctus facilisi neque porttitor ullamcorper
              scelerisque gravida venenatis lectus neque.
            </span>
            <button className="mt-4 btn text-xl font-medium ">Adote</button>
          </div>
          <div className="grid-6 relative h-[80vh] ">
            <div className="">
              <img
                className="absolute top-0 mt-12 z-[11]"
                src={petsImg}
                alt=""
              />
            </div>
            <div className=" ">
              <img
                className="absolute top-0 w-[90%] z-[-8]"
                src={bgPetsImg}
                alt=""
              />
              <img className="absolute top-0 z-[-8]" src={bgEllipse} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="grid-2"></div>
          <div className="grid-8 p-0  ">
            <div className="z-8 bg-white p-12 flex justify-between ">
              <div className="text-center">
                <strong className="text-5xl block text-[#f8d629]">
                  +3.500
                </strong>
                <span className="text-xl text-center">Animais adotados</span>
              </div>
              <div className="text-center">
                <strong className="text-5xl block text-[#f8d629]">+15</strong>
                <span className="text-xl text-center">
                  Parceiros do Projeto
                </span>
              </div>
              <div className="text-center">
                <strong className="text-5xl block text-[#f8d629]">+10</strong>
                <span className="text-xl text-center">Anos no mercado</span>
              </div>
            </div>
          </div>
          <div className="grid-2"></div>
        </div>
      </main>
    </>
  );
};
