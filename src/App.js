import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./pages/About";
import ItemPage from "./pages/ItemPage";

const App = () => {
  return (
    <div className="App">
      <Header />
        <ItemPage />
      <Footer />
    </div>
  );
}

export default App;
