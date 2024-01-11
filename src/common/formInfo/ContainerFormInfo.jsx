import FormInfo from "./FormInfo";

const ContainerFormInfo = ({ handleWhatsAppButtonClick }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <FormInfo
            settings={settings}
            handleWhatsAppButtonClick={handleWhatsAppButtonClick}
        />
    );
};

export default ContainerFormInfo;
