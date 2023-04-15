import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Components/Header/Header";
import { DataProvider } from "./Context/DataContext";
import Main from "./Components/Main/Main";

function App() {
  return (
    <DataProvider>
      <Toaster />
      <div className=" flex h-[100vh] w-full flex-col items-center justify-center gap-24 bg-stone-200  ">
        <Header />
        <Main />{" "}
      </div>
    </DataProvider>
  );
}

export default App;
