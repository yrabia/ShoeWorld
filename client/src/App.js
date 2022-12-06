import{BrowserRouter, Routes,Route,} from "react-router-dom";
import Inventory from "./pages/inventory";
import Add from "./pages/add";
import Update from "./pages/update";
import Home from "./Home/home";
import Customer from "./customerpages/customer";
import Supplier from "./supplierpages/supplier";
import Customerupdate from "./customerpages/customerupdate";
import Customerorders from "./customerpages/customerorders";
import Supplierupdate from "./supplierpages/supplierupdate";
import Supplierorders from "./supplierpages/supplierorders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update/:SHOE_ID" element={<Update/>}/>
      <Route path="/customer" element={<Customer/>}/>
      <Route path="/supplier" element={<Supplier/>}/>
      <Route path="/customerupdate/:CUSTOMER_ID" element={<Customerupdate/>}/>
      <Route path="/customerorders" element={<Customerorders/>}/>
      <Route path="/supplierorders" element={<Supplierorders/>}/>
      <Route path="/supplierupdate/:SUPPLIER_ID" element={<Supplierupdate/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
