import Home from "./Home";

const HomeContainer = () => {
    const phoneNumber = import.meta.env.VITE_NUMERO_TELEFONO;
    const message = import.meta.env.VITE_MENSAJE_WHATSAPP;
    const handleWhatsAppButtonClick = () => {
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappLink, "_blank");
    };
    return <Home handleWhatsAppButtonClick={handleWhatsAppButtonClick} />;
};

export default HomeContainer;
