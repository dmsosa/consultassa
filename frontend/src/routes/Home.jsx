import BannerContainer from "../components/BannerContainer";
import BuyPreview from "../components/Form/BuyForm/BuyPreview";
import Index from "../components/Home/Index";
import ItemsArray from "../components/ItemsArray/ItemsArray";
import { Container } from "react-bootstrap";

function Home() {

  return (
	<>
        <BannerContainer>
          <h1 className="logo-font">Consultas S.A.</h1>
          <p><span className="text-italic text-emphasis">El puente hacia tus sueños.</span></p>
          <p>Un lugar para mejorar tu negocio</p>
        </BannerContainer>
		<Container>
        	<Index></Index>
		</Container>
		<Container>
			<BuyPreview></BuyPreview>
			<ItemsArray></ItemsArray>
		</Container>
	</>
  );
}

export default Home;
