import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BellIcon } from '@heroicons/react/24/solid';
import "./css/style.css";
import Card from "./components/Card";
import CardLateral from "./components/CardLateral";
import DivContainer from "./components/DivContainer";
import DivNotifications from "./components/DivNotifications";
import BtnLook from "./components/BtnLook";
import Characters from "./components/Characters";

function App() {

  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results.slice(0, 3))); 
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <div className="">
        <div className="sticky flex h-screen flex-row gap-4 overflow-y-auto rounded-lg sm:overflow-x-hidden">

          {/* Menú */}
          <Navbar titulo1="Inicio" titulo2="Libros" titulo3="Editores" titulo4="Lectores" btnTitulo="Crear" widthSidebar="250px" />

          <div className="flex w-full flex-row flex-wrap gap-4 p-1">
            <div className="my-4 flex w-full gap-4">
              <div className="flex flex-col w-4/5">
                <div className="form-control relative w-full">

                  {/* Buscador */}
                  <input type="password" id="input-search" className="input input-lg  max-w-lg pl-10" style={{ fontSize: '13px' }} placeholder="Buscar por libros, personas o árticulos" />
                  <span className="absolute inset-y-0 left-3 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="gray" className="w-5 h-5 text-content3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </span>
                </div>

                {/* Card 1 */}
                <Card imagen="https://fastidious-bookkeeping-services.odoo.com/web_editor/shape/theme_bookstore/s_image_text.svg?c1=o-color-1" color="#E9A763" titulo="Hola, Andrés! Tienes ideas sobre un nuevo libro?" colorTitulo="#FFF"
                  colorParrafo="#FFF" fontSize="20px" letterSpace="0.5px" parrafo="Vuelve tus libros tendencia mundial!" tamañoParrafo="17px" parrafo2="Quieres empezar a escribir una vez más?" infoBoton="Crear Borrador" colorBtn="#343A3F" fontBtn="15px" widthBtn="220px" marginTop="5%" />

                <div className="flex w-full flex-row flex-wrap gap-4 p-1">
                  <div className="my-4 flex w-full gap-4">

                    <div className="flex flex-col w-4/5">
                      <div className="flex ">
                        <DivContainer titulo="Librería" cantidad="124" colorParrafo="#000" tamañoParrafo="22px" colorTitulo="#00009" fontSize="14px" />
                        <DivContainer titulo="Me Gusta" cantidad="155 k" colorParrafo="#000" tamañoParrafo="22px" colorTitulo="#00009" fontSize="14px" />
                        <DivContainer titulo="Lectores" cantidad="8 k" colorParrafo="#000" tamañoParrafo="22px" colorTitulo="#00009" fontSize="14px" />
                        <DivContainer titulo="Opiniones" cantidad="163 k" colorParrafo="#000" tamañoParrafo="22px" colorTitulo="#00009" fontSize="14px" />
                      </div>

                      <div className="containerAutors">

                        <BtnLook titulo="Autores" descripcion="Ver Todo" widthTitulo="380px"/>

                        <Characters characters={characters} parrafo2="Lectores" parrafo3="143 k" colorTitulo="#000" colorParrafo="#00009" tamañoParrafo="15px" fontCant="18px" fontSize="18px"/>
                      </div>
                    </div>

                    <div className="flex flex-col w-1/3" >

                      <div className="containerNotifications">
                        <BtnLook titulo="Reciente" descripcion="Ver Todo" widthTitulo="130px" />
                        <DivNotifications titulo="Victoria Evans" parrafo='ha comentado en "La Ciudadela"' contenido="May 7" />
                        <div className="divider"></div>
                        <DivNotifications titulo="Ethan Williams" parrafo='ha comentzado a seguirte' contenido="May 5" />
                        <div className="divider"></div>
                        <DivNotifications titulo="Nathan Fox" parrafo='le ha gustado "Inolvidable"' contenido="May 1" />
                        <div className="divider"></div>
                        <DivNotifications titulo="Megan Walsh" parrafo='ha comentzado a seguirte' contenido="April 29" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <Card imagen="https://www.icfes.gov.co/documents/39286/47085/presaber11.svg/ad88b203-092b-b35d-6ea7-effdb0d15e19?version=1.0&t=1642288992967&imagePreview=1" color="#343A3F" titulo="Andrés, nos gusta tu contenido y queremos darte los siguientes tips:" colorTitulo="#FFF"
                  colorParrafo="#FFF" fontSize="20px" letterSpace="0.5px" parrafo="1. Lee los comentarios de tus lectores." tamañoParrafo="17px" parrafo2="2. Elije el género que quieres para tu público." parrafo3="3. Busca siempre a un editor de confianza!" marginTop="1%" marginBottom="2%"/>
              </div>

              <div className="flex flex-col w-1/3">

                {/* Icono de notificación */}
                <div className="btn" id="button-bell" style={{ position: 'absolute', top: 15, right: 280 }}>
                  <BellIcon className="h-5 w-5 text" id="icon-bell" />
                </div>

                {/* Icono de mensajes */}
                <div className="btn" id="button-mess" style={{ position: 'absolute', top: 15, right: 230 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5" id="icon-mess">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>

                {/* Perfil: nombre y foto */}
                <h2 style={{ position: 'absolute', top: 25, right: 70, fontSize: '15px' }}>Andrés Vargas</h2>
                <div className="foto" style={{ position: 'absolute', top: 15, right: 10 }}>
                  <img className="perfil" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                </div>

                {/* Contenedor derecho */}
                <div className="contenedorLateral">

                  {/* Botón para ver todo */}
                  <BtnLook titulo="Lo último" descripcion="Ver Todo" widthTitulo="200px" />

                  {/* Menú: reciente-popular */}
                  <div className="navbar-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="5" stroke="currentColor" className="w-4 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <a className="navbar-item nav-1">Reciente</a>
                    <a className="navbar-item nav-2">Popular</a>
                  </div>

                  {/* Cards de Post */}
                  <CardLateral marginTop="3%" imagen="https://i0.wp.com/ejmbookkeeping.com/wp-content/uploads/2017/06/fern.jpeg?fit=1568%2C1045&ssl=1" widthImg="auto" borderImg="20px" titulo="La Ciudadela" fontSize="17px" colorTitulo="#000" parrafo="Descubre las maravillas escondidas en los bosques de Estados Unidos." colorParrafo="#0000005" parrafo2="May 6, 2020" titulo2="David Jones" imgIcon="https://www.denofgeek.com/wp-content/uploads/2020/03/chris-evans-knives-out.png?resize=400%2C400" tamañoParrafo="14px" />
                  <CardLateral marginTop="10%" imagen="https://woods.stanford.edu/sites/woods/files/styles/breakpoint_2xl_1x/public/media/image/14109578486_e6f497cc6e_o.webp?itok=Ws34VO0z" widthImg="auto" borderImg="20px" titulo="Space X" fontSize="17px" colorTitulo="#000" parrafo="Elon Musk, un emprendedor con otra visión multimillonaria." colorParrafo="#0000005" parrafo2="May 3, 2020" titulo2="Lauren Murphy" imgIcon="https://img.freepik.com/foto-gratis/elegante-mujer-posando-sobre-fondo-verde_23-2148321284.jpg?size=626&ext=jpg" tamañoParrafo="14px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;