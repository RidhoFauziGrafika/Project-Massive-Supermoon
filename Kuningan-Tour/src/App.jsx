import Login from "./pages/Authentikasi/Login/Login";
import Register from "./pages/Authentikasi/Register/Register";
import Beranda from "./pages/Beranda/Beranda";
import Kontak from "./pages/Kontak/Kontak";
import PaketWisata from "./pages/PaketWisata/PaketWisata";
import TentangKami from "./pages/TentangKami/TentangKami";
import Wisata from "./pages/Wisata/Wisata";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pembelian from "./pages/Pembelian/Pembelian";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/pembelian" element={<Pembelian/>} />
        </Routes>
      </Router>
      {/* <Beranda /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Kontak /> */}
      {/* <Wisata /> */}
      {/* <PaketWisata /> */}
      {/* <TentangKami /> */}
    </>
  );
}

export default App;
