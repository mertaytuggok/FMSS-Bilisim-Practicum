import "./App.css";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import { Form } from "./Components/Main/Form";
import { List } from "./Components/Main/List";
import { FooterMain } from "./Components/Main/mainFooter";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Form />
        <List />
        <FooterMain />
      </section>
      <Footer />
    </>
  );
}

export default App;
