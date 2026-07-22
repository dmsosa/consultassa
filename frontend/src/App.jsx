import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { BuyFormProvider } from "./context/buyContext";
import ContactForm from "./components/Form/ContactForm/ContactForm";
import Header from "./components/Header/Header";

function App() {
  return (
	<BuyFormProvider>
		<Header></Header>
		<main>
			<Outlet />
		</main>
		<ContactForm></ContactForm>
      	<Footer />
    </BuyFormProvider>
  );
}

export default App;
