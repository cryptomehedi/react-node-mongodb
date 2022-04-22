import { Route, Routes } from "react-router-dom";
import AddUser from "./Component/AddUser";
import Home from "./Component/Home";
import UpdateUser from "./Component/UpdateUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/user/add" element={<AddUser/>} />
        <Route path='/update/:id' element={<UpdateUser/>} />
      </Routes>
    </div>
  );
}

export default App;
