import {Outlet} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {GlobalContextProvider} from "./Components/utils/global.context";


function App() {
  return (
      <div className="App">
        <GlobalContextProvider >
          <Navbar/>
          <Outlet />
          <Footer/>
        </GlobalContextProvider>
      </div>
  );
}

export default App;
