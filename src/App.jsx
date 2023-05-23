import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Hamburger from './components/Hamburger/Hamburger';
import ExampleTwo from './examples/ExampleTwo';


const App = () => {

  return (
    <div>
      <Hamburger/>
      <Header title="Testowa aplikacja w React" />
      <Navigation />
      <ExampleTwo/>
    </div>
  );
};

export default App;
