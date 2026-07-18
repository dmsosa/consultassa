import ContactForm from "../components/Form/ContactForm";
import BannerContainer from "../components/BannerContainer";
import Index from "../components/Home/Index";
import RegisterForm from "../components/Form/RegisterForm/RegisterForm";
// import PopularTags from "./../components/PopularTags";

function Home() {

  return (
    <div className="home-page">
        <BannerContainer>
          <h1 className="logo-font">Consultas S.A.</h1>
          <p><span className="text-italic text-emphasis">El puente hacia tus sueños.</span></p>
          <p>Un lugar para mejorar tu negocio</p>
        </BannerContainer>
		<RegisterForm></RegisterForm>
        <Index></Index>
        <ContactForm></ContactForm>
    </div>
  );
}

export default Home;
