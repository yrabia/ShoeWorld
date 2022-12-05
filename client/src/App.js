import{BrowserRouter, Routes,Route,} from "react-router-dom";
import Inventory from "./pages/inventory";
import Add from "./pages/add";
import Update from "./pages/update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Inventory/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update/:SHOE_ID" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
