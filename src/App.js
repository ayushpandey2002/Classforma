import './App.css';
import FirstPage from "./components/firstpage";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import SecondPage  from "./components/secondpage";



function App() {
  return (
   <div>
    {/* <FirstPage/>
    <SecondPage/> */}
    <Routes>
      <Route exact path='/' element={<FirstPage/>}/>
      <Route exact path='/secondpage' element={<SecondPage/>}/>
    </Routes>
   </div>
  );
}

export default App;
