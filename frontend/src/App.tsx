import { BrowserRouter , Route , Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Plinko from "./pages/Plinko";
function App() {

  return (
    <BrowserRouter>
         <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path="/play/plinko" element={<Plinko/>}/>
         </Routes>
    </BrowserRouter>
  )
}

export default App
