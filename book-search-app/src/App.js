import styles from "./App.module.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { BookProvider } from "./Context/BookContext";
import Main from "./Components/Main";

function App() {
  return (
    <BookProvider>
      <main className={styles.main}>
        <Toaster />
        <span className={styles.mainHeader}>
          <Header />
          <Input />
        </span>

        <div className={styles.center}>
          <Main />
        </div>

        <div>
          <Footer />
        </div>
      </main>
    </BookProvider>
  );
}

export default App;
