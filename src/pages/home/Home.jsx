import ContainerFormInfo from "../../common/formInfo/ContainerFormInfo";
import "./Home.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Home = ({ handleWhatsAppButtonClick }) => {
    return (
        <div className="container-home">
            <div className="home">
                <ContainerFormInfo
                    handleWhatsAppButtonClick={handleWhatsAppButtonClick}
                />
            </div>
            <button
                className="btn-whatsapp"
                onClick={handleWhatsAppButtonClick}
            >
                <WhatsAppIcon sx={{ fontSize: 50 }} />
            </button>
        </div>
    );
};

export default Home;
