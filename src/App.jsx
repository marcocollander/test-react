import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Hamburger from "./components/Hamburger/Hamburger";

const App = () => (
  <div>
    <Hamburger/>
    <Header title='Testowa aplikacja w React'/>
    <Navigation/>
  </div>
);

export default App;
