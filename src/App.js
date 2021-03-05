import "./App.css";
import Header from "./components/header/header";
import RouteContainer from "./components/routes";
function App() {
   return (
      <div className='App'>
         <Header />
         <RouteContainer />
      </div>
   );
}

export default App;
