import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full bg-gradient-to-b from-blue-800 to-black px-4 py-7 text-white">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-6">
                {/* Sección de Contacto */}
                <div className="flex-1 text-lg">
                    <p className="mb-4 text-center md:text-left text-lg font-black">Contáctanos en:</p>

                    <div className="flex flex-col md:flex-row items-center md:justify-start mb-4 space-x-2 justify-center">
                        <p>Correo: </p>
                        <a
                            href="mailto:oneandonefitness@gmail.com"
                            className="hover:text-gray-300 transition"
                        > 
                            oneandonefitness@gmail.com
                        </a>
                        <a
                            href="mailto:oneandonefitness@gmail.com"
                            className="hover:text-gray-300 transition"
                        > 
                        <FaEnvelope className="text-2xl hover:text-red-500 transition" />
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-start mb-4 space-x-2 justify-center">
                        <p>Llámanos :</p>
                        <a
                            href="tel:+525512419799"
                            className="hover:text-gray-300 transition"
                        >
                            5512419799
                        </a>
                        <a
                            href="tel:+525512419799"
                            className="hover:text-gray-300 transition"
                        >
                            <FaPhone className="text-2xl hover:text-green-500 transition" />
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-start space-x-2 justify-center">
                        <p>Envía un Whatsapp:</p>
                        <a
                            href="https://wa.me/525512419799"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition"
                        >
                            +525512419799
                        </a>
                        <a
                            href="https://wa.me/525512419799"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition"
                        >
                            <FaWhatsapp className="text-2xl hover:text-green-500 transition" />
                        </a>
                    </div>
                </div>

                {/* Sección Redes Sociales */}
                <div className="flex-1 text-lg md:ml-20">
                    <p className="mb-4 text-center md:text-left text-lg font-bold">Síguenos en redes:</p>

                    <div className="flex flex-col md:flex-row items-center md:justify-start mb-4 space-x-2 justify-center">    
                        <a
                            href="https://www.facebook.com/profile.php?id=100065048497610"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition"
                        >
                            <FaFacebook className="text-2xl hover:text-blue-500 transition" />
                        </a>
                        
                        <a
                            href="https://www.facebook.com/profile.php?id=100065048497610"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition"
                        >
                            Facebook
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-start space-x-2 justify-center">
                        
                        <a
                            href="https://www.instagram.com/oneonefitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition"
                        >
                            <FaInstagram className="text-2xl hover:text-pink-500 transition" />
                        </a>
                        
                        <a
                            href="https://www.instagram.com/oneonefitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition "
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
