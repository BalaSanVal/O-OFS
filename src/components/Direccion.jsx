import React from "react";

function Direccion() {
  return (
    <div className="w-full max-w-xs md:max-w-lg lg:max-w-xl h-72 md:h-96 lg:h-[32rem] rounded-2xl shadow-lg overflow-hidden">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.2638620704234!2d-99.2399057!3d19.496250099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20302ebfae32b%3A0x750e0492a5129665!2sOne%26One%20fitness%20studio!5e0!3m2!1ses!2smx!4v1738965587231!5m2!1ses!2smx" 
      className="rounded-2xl shadow-lg w-full h-full"
      style={{border: "0"}} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade" >

      </iframe>
    </div>
  );
}

export default Direccion;
