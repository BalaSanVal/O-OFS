import React from "react";
import instalacionesMain from "../assets/images/Instalaciones_main.jpg";
import FacebookVideo from "./FacebookVideo";
import Direccion from "./Direccion";


function BodyMain () {
    return (
        <div>
            {/* Bloque 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-10 bg-blue-800">
                <div className="flex-1 text-center">
                    <h1 className="text-3xl font-bold mb-4 text-white">¿Quiénes somos?</h1>
                    <p className="mb-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit et asperiores, atque ab cupiditate. Vitae reiciendis officiis quo quaerat voluptatem soluta deserunt commodi tempora voluptas, ut numquam dolore laboriosam!</p>
                    <a
                        href="#quienessomos" // Cambia la ruta según la página a la que quieras redirigir
                        className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                        Conócenos mejor
                    </a>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={instalacionesMain} alt="Instalaciones" className="w-96 h-auto rounded-lg shadow-lg"/>
                </div>
            </div>
            {/* Bloque 2 */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-10 bg-blue-700">
                <div className="flex-1 flex justify-center mt-12">
                    <FacebookVideo />
                </div>
                
                <div className="flex-1 text-center">
                    <h1 className="text-3xl font-bold mb-4 mt-5">Productos</h1>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti placeat quasi odio architecto minima praesentium facilis veniam. Dolorum est, ipsa eius modi optio quo libero ipsum, commodi quisquam consequatur ducimus?</p>
                    <a href="#Productos" className="bg-blue-900 py-2 px-6 rounded-lg  hover:bg-blue-600 transition"> Ver detalles</a>
                </div>
                
                
                
                
                
            </div>
            {/* Bloque 3 */}
            <div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-10 bg-blue-800">
                    <div className="flex-1 text-center">
                        <h1 className="text-3xl font-bold mb-4 text-white">Horarios disponibles</h1>
                        <p className="mb-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit et asperiores, atque ab cupiditate. Vitae reiciendis officiis quo quaerat voluptatem soluta deserunt commodi tempora voluptas, ut numquam dolore laboriosam!</p>
                        <a
                            href="#agendarcita" // Cambia la ruta según la página a la que quieras redirigir
                            className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                        >
                            Agendar cita
                        </a>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="https://scontent.fmex1-4.fna.fbcdn.net/v/t39.30808-6/476654438_1000274205484187_6660398713693286817_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5Vr0devPoGEQ7kNvwGQihsb&_nc_oc=Adn5NX9H8iXSR74dzEtUaDpbmBVyXSZAGik31LWPCpzpw8WG8dENbb4v-ninrn2BzJ0&_nc_zt=23&_nc_ht=scontent.fmex1-4.fna&_nc_gid=F7ZXgGcBsXBxBxaEkBUC9w&oh=00_AfLbyfVHNdPyi7KHpVBT0GfMVshJJkLstnSFHz2dRkwGVw&oe=683C54F7" alt="Horarios" className="w-96 h-auto rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
            {/* Bloque 4 */}
            <div>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-20 bg-blue-700">
                    <div className="flex-1 flex justify-center h-auto">
                        <Direccion />
                    </div>
                    
                    <div className="flex-1 text-center">
                        <h1 className="text-3xl font-bold mb-4 text-white">Ubicación</h1>
                        <p className="mb-6 text-white">Boulevard de la Santa Cruz 23, int 2b. Boulevares, Naucalpan Estado de México. Enfrente del Naucalli.</p>
                        <a
                            href="https://maps.app.goo.gl/7j6MUJumqiGaUjeD7" // Cambia la ruta según la página a la que quieras redirigir
                            target="_blank" 
                            className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                        >
                            Como llegar
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default BodyMain;