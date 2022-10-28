import { User, ArrowLeft, MagnifyingGlass } from "phosphor-react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Panqueca from "../assets/group.png";
import Adopt from "../assets/Adopt.png";

export const Inicio = () => {
  return (
    <div className="container p-0">
      <div className="row">
        <div className="grid-1"></div>
        <div className="grid-7 flex justify-between">
          <div className="div mr-6">
            <img className="rounded-full w-24 h-24" src={Panqueca} alt="" />
          </div>
          <div className="div flex flex-col">
            <h1 className="text-3xl font-black text-[#22c188]">
              {" "}
              Hello, Leonardo Lucas
            </h1>
            <span className="text-lg text-gray-400">
              Welcome to the plataform, find a pet and share your moments whit
              peoples.{" "}
            </span>
          </div>
        </div>
        <div className="grid-4 ">
          <div className="flex justify-between">
            <button className="btn mx-4 flex items-center justify-center bg-none text-[#22c188]">
              <span className="mr-3">
                <ArrowLeft size={20} weight="bold" />
              </span>
              <div>Sign out</div>
            </button>
            <button className="btn mx-4 flex items-center justify-center text-[#22c188]">
              <span className="mr-3">
                <User size={20} weight="bold" />
              </span>
              <div>Profile</div>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="grid-7">
          <div className="row">
            <div className="grid-12 p-0">
              <h1 className="text-3xl font-black text-gray-800">
                Adopt a Pet{" "}
              </h1>
              <span className="text-lg font-medium">
                From more than 1000 Animal shelters & rescues.
              </span>
            </div>
          </div>
          <div>
            <form action="">
              <div className="row">
                <div className="grid-12 p-0">
                  <label className="sr-only" htmlFor="">
                    Cidade
                  </label>
                  <input
                    className="w-100 px-3 py-2"
                    type="text"
                    placeholder="State, City"
                  />
                </div>
              </div>
              <div className="row p-0">
                <div className="grid-6 p-0">
                  <label className="sr-only" htmlFor="">
                    Idade
                  </label>
                  <input
                    className="w-100 px-3 py-2"
                    type="text"
                    placeholder="Idade"
                  />
                </div>

                <div className="grid-6 p-0">
                  <label className="sr-only" htmlFor="">
                    Sexo
                  </label>
                  <input
                    className="w-100 px-3 py-2"
                    type="text"
                    placeholder="Sexo"
                  />
                </div>
              </div>
              <div className="row p-0">
                <div className="grid-12 p-0">
                  <button
                    className="flex items-center justify-center  w-100 py-3 bg-[#22c188] rounded transition-colors hover:opacity-90"
                    type="submit"
                  >
                    {" "}
                    <span>
                      <MagnifyingGlass
                        className="text-white mr-4"
                        weight="bold"
                        size={20}
                      />
                    </span>
                    <div className="text-white font-medium">Buscar</div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="grid-5">
          <div className="flex items-center justify-center">
            <img src={Adopt} className="w-52" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="grid-12">
          <h1 className="text-3xl font-black text-[#22c188] ">
            Featured Pets{" "}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="grid-3">
          <div className="border border-black rounded">
            <div>
              <img src={Panqueca} alt="" />
            </div>
            <div className="mb-3 ml-3">
              <h1 className="text-2xl font-semibold text-[#22c188] mt-2 ">
                {" "}
                Penny
              </h1>
              <span className="block">Femaly, Senior</span>
              <span>Ponta Porã - MS</span>
            </div>
          </div>
        </div>
        <div className="grid-3">
          <div className="border border-black rounded">
            <div>
              <img src={Panqueca} alt="" />
            </div>
            <div className="mb-3 ml-3">
              <h1 className="text-2xl font-semibold text-[#22c188] mt-2 ">
                {" "}
                Penny
              </h1>
              <span className="block">Femaly, Senior</span>
              <span>Ponta Porã - MS</span>
            </div>
          </div>
        </div>
        <div className="grid-3">
          <div className="border border-black rounded">
            <div>
              <img src={Panqueca} alt="" />
            </div>
            <div className="mb-3 ml-3">
              <h1 className="text-2xl font-semibold text-[#22c188] mt-2 ">
                {" "}
                Penny
              </h1>
              <span className="block">Femaly, Senior</span>
              <span>Ponta Porã - MS</span>
            </div>
          </div>
        </div>
        <div className="grid-3">
          <div className="border border-black rounded">
            <div>
              <img src={Panqueca} alt="" />
            </div>
            <div className="mb-3 ml-3">
              <h1 className="text-2xl font-semibold text-[#22c188] mt-2 ">
                {" "}
                Penny
              </h1>
              <span className="block">Femaly, Senior</span>
              <span>Ponta Porã - MS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="grid-3">
          <div className="border border-black rounded">
            <div>
              <img src={Panqueca} alt="" />
            </div>
            <div className="mb-3 ml-3">
              <h1 className="text-2xl font-semibold text-[#22c188] mt-2 ">
                {" "}
                Penny
              </h1>
              <span className="block">Femaly, Senior</span>
              <span>Ponta Porã - MS</span>
            </div>
          </div>
        </div>
        <div className="grid-3">
          <div className="border border-black rounded">
            <div>
              <img src={Panqueca} alt="" />
            </div>
            <div className="mb-3 ml-3">
              <h1 className="text-2xl font-semibold text-[#22c188] mt-2 ">
                {" "}
                Penny
              </h1>
              <span className="block">Femaly, Senior</span>
              <span>Ponta Porã - MS</span>
            </div>
          </div>
        </div>
        <div className="grid-3">
          <div className="border border-black rounded">
            <div>
              <img src={Panqueca} alt="" />
            </div>
            <div className="mb-3 ml-3">
              <h1 className="text-2xl font-semibold text-[#22c188] mt-2 ">
                {" "}
                Penny
              </h1>
              <span className="block">Femaly, Senior</span>
              <span>Ponta Porã - MS</span>
            </div>
          </div>
        </div>
        <div className="grid-3">
          <div className="border border-black rounded">
            <div>
              <img src={Panqueca} alt="" />
            </div>
            <div className="mb-3 ml-3">
              <h1 className="text-2xl font-semibold text-[#22c188] mt-2 ">
                {" "}
                Penny
              </h1>
              <span className="block">Femaly, Senior</span>
              <span>Ponta Porã - MS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="grid-2"></div>
        <div className="grid-8">
          <MapContainer
            className="max-h-[400px]"
            center={[0, 0]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="grid-2"></div>
      </div>
    </div>
  );
};
