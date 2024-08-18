import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Components/Header";
import Add from "./Components/Add"
import Watched from "./Components/Watched"
import WatchList from "./Components/WatchList"
import ContextProvider from "./Components/Context/GlobalContext";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Header/>
          <Routes>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/watched"  element={<Watched/>}></Route>
            <Route path="/" element={<WatchList/>}></Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}
