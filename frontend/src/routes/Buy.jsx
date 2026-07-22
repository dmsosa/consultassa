import { Container } from "react-bootstrap";
import BannerContainer from "../components/BannerContainer";
import BuyForm from "../components/Form/BuyForm/BuyForm";

function Buy() {
  return (
	<>
        <BannerContainer>
          <h1 className="logo-font">Consultas S.A.</h1>
          <p><span className="text-italic text-emphasis">El puente hacia tus sueños.</span></p>
          <p>Un lugar para mejorar tu negocio</p>
        </BannerContainer>
		<Container>
			<BuyForm></BuyForm>
		</Container>
	</>
  );
}

export default Buy;
