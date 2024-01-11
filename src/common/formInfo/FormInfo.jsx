import "./FormInfo.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from "./../../assets/imagen1.jpeg";

const FormInfo = ({ settings, handleWhatsAppButtonClick }) => {
    return (
        <div className="container-form-info">
            <h1>Wall Panel</h1>
            <div className="separador"></div>
            <div className="container-info">
                <div
                    className="slider"
                    style={{
                        color: "black",
                        ".slick-prev": { color: "black !important" },
                        ".slick-next": { color: "black !important" },
                    }}
                >
                    <Slider {...settings}>
                        <img src={imagen1} alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </Slider>
                </div>
                <div className="info">
                    <p>
                        Es un material que combina material sintético y fibras
                        de madera. Se utiliza en aplicaciones de diseño
                        interior, decoración y acabados arquitectónicos. Está
                        diseñado para tener la apariencia y textura de la madera
                        natural a través de una película adherida a la
                        superficie. Poseen resistencia a la humedad y los
                        insectos.
                    </p>
                    <button onClick={handleWhatsAppButtonClick}>
                        Consultar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormInfo;
