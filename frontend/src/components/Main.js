import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <h2>MyTinerary</h2>
      <h5>
        Find your perfect trip, designed by insiders who know and love their
        cities!
      </h5>

      <Link as={Link} to={"/Cities"} className="boton">
        {" "}
        <span id="span1"></span> Search Cities!!
      </Link>
    </main>
  );
};
export default Main;

// - Carrousel: debe haber un carrusel que cambie las slides
//  de forma automática (y que permita también al usuario cambiarla
//     de forma manual). El carrusel debe tener un título "Popular MYtineraries"
//      y debe contener 3 slides de 4 fotos cada una. Cada foto debe corresponder
//       a una ciudad del mundo y debe estar su nombre indicado en ella
//       (nombre en inglés). Son 12 ciudades repartidas en 3 slides
//        de 4 c/u. Esta información puede estar hardcodeada en el
//        componente dado que aún no disponemos de base de datos.
//         Lo que sí, su renderizado debe ser DINAMICO
//         (no puede estar hardcodeado el código que muestra las slides
//             con sus fotos).
