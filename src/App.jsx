import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { MyContext } from "./Context/MyContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleCountry from "./pages/SingleCountry";
function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <MyContext.Provider value={{countries,setCountries}}>
        <Header></Header>
        <div className="App container max-w-screen-xl mx-auto px-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryName" element={<SingleCountry />} />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
