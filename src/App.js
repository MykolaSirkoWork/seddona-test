import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./pages/About";
import ItemPage from "./pages/ItemPage";
import TransferPage from "./pages/TransferPage";
const App = () => {
  return (
    <div className="App">
      <Header />
        <About />
      <Footer />
    </div>
  );
}

export default App;
