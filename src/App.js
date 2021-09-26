import "./App.css";
import Cart from "./Components/AddChacter/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
        <Cart />
        <Footer />
      </div>
    </div>
  );
}

export default App;
