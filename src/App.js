import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./pages/About";
import ItemPage from "./pages/ItemPage";
import TransferPage from "./pages/TransferPage";
import DetailsPage from "./pages/DetailsPage";
const App = () => {
  return (
    <div className="App">
      <Header />
        {/* <About /> */}
        <DetailsPage />
      <Footer />
    </div>
  );
}

export default App;
