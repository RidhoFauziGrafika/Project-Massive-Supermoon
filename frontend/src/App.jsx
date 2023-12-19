import { Routes, Route } from "react-router-dom";
import Login from "./pages/Authentikasi/Login/Login";
import Register from "./pages/Authentikasi/Register/Register";
import Beranda from "./pages/Beranda/Beranda";
import Kontak from "./pages/Kontak/Kontak";
import TentangKami from "./pages/TentangKami/TentangKami";
import Wisata from "./pages/Wisata/Wisata";
import Blog from "./pages/Blog/Blog";
import DetailBlog from "./pages/Blog/DetailBlog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./middleware/RequireAuth";
import PublicRoute from "./middleware/PublicRoute";
import useAuth from "./hooks/useAuth";

import IndexPaketWisata from "./pages/Admin/AdminDashboard/PaketWisata/IndexPaketWisata";
import EditPaketWisata from "./pages/Admin/AdminDashboard/PaketWisata/EditPaketWisata";
import BuatPaketWisata from "./pages/Admin/AdminDashboard/PaketWisata/BuatPaketWisata";
import DetilPaketWisata from "./pages/Admin/AdminDashboard/PaketWisata/DetilPaketWisata";

import IndexWisata from "./pages/Admin/AdminDashboard/Wisata/IndexWisata";
import BuatWisata from "./pages/Admin/AdminDashboard/Wisata/BuatWisata";
import EditWisata from "./pages/Admin/AdminDashboard/Wisata/EditWisata";
import DetilWisata from "./pages/Admin/AdminDashboard/Wisata/DetilWisata";

import IndexPenginapan from "./pages/Admin/AdminDashboard/Penginapan/IndexPenginapan";
import BuatPenginapan from "./pages/Admin/AdminDashboard/Penginapan/BuatPenginapan";
import EditPenginapan from "./pages/Admin/AdminDashboard/Penginapan/EditPenginapan";
import DetilPenginapan from "./pages/Admin/AdminDashboard/Penginapan/DetilPenginapan";

const ROLES = {
  CLIENT: "8912",
  ADMIN: "6501",
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Beranda />} />
          <Route
            path="/login"
            element={<PublicRoute element={<Login />} redirectTo="/" />}
          />
          <Route
            path="/register"
            element={<PublicRoute element={<Register />} redirectTo="/" />}
          />
          {/* STATIC */}
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/tentangkami" element={<TentangKami />} />

          {/* DYNAMIC */}
          {/* BLOG */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detil/:slug" element={<DetailBlog />} />
          {/* PAKET WISATA */}
          {/* <Route path="/paket-wisata" element={<PaketWisata />} /> */}
          <Route
            path="/dashboard/paket-wisata/detil/:slug"
            element={<DetilPaketWisata />}
          />
          {/* WISATA */}
          {/* <Route path="/wisata" element={<Wisata />} /> */}
          <Route
            path="/dashboard/wisata/detil/:slug"
            element={<DetilWisata />}
          />
          {/* <Route path="/wisata/detail-wisata/:slug" element={<DetilWisata />} /> */}
          {/* DETIL PENGINAPAN/KULINER */}
          {/* <Route path="/detail-penginapan/:id" element={<DetailPenginapan />} /> */}
          <Route
            path="/dashboard/penginapan/:id"
            element={<DetilPenginapan />}
          />

          {/* DAHSBOARD ADMIN */}
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            {/* PAKET WISATA */}
            <Route
              path="/dashboard/paket-wisata"
              element={<IndexPaketWisata />}
            />
            <Route
              path="/dashboard/paket-wisata/baru"
              element={<BuatPaketWisata />}
            />
            <Route
              path="/dashboard/paket-wisata/edit/:slug"
              element={<EditPaketWisata />}
            />

            {/* END PAKET WISATA */}
            {/* WISATA */}
            <Route path="/dashboard/wisata" element={<IndexWisata />} />
            <Route path="/dashboard/wisata/baru" element={<BuatWisata />} />
            <Route
              path="/dashboard/wisata/edit/:slug"
              element={<EditWisata />}
            />

            {/* END WISATA */}
            {/* KULINER */}
            {/* <Route path="/dashboard/kuliner" element={<IndexKuliner />} />
            <Route path="/dashboard/kuliner/baru" element={<BuatKuliner />} />
            <Route
              path="/dashboard/kuliner/edit/:id"
              element={<EditKuliner />}
            /> */}
            {/* <Route path="/dashboard/kuliner/detil" element={<DetilKuliner />} /> */}
            {/* END KULINER */}
            {/* PENGINAPAN */}
            <Route path="/dashboard/penginapan" element={<IndexPenginapan />} />
            <Route
              path="/dashboard/penginapan/baru"
              element={<BuatPenginapan />}
            />
            <Route
              path="/dashboard/penginapan/edit/:id"
              element={<EditPenginapan />}
            />
            <Route path="/dashboard/penginapan" element={<IndexPenginapan />} />
            {/* <Route path="/dashboard/penginapan/detil" element={<DetilWisataPenginapan />} /> */}
            {/* END PENGINAPAN */}
            {/* BLOG */}
            {/* <Route path="/dashboard/blog" element={<IndexBlog />} />
            <Route path="/dashboard/blog/baru" element={<BuatBlog />} />
            <Route path="/dashboard/blog/edit/:id" element={<EditBlog />} /> */}
            {/* END BLOG */}
            {/* USER */}
            {/* <Route path="/dashboard/user" element={<IndexUser />} />
            <Route path="/dashboard/user/baru" element={<BuatUser />} />
            <Route path="/dashboard/user/edit/:id" element={<EditUser />} />
            <Route path="/dashboard/user/detil/:id" element={<DetilUser />} /> */}
            {/* END USER */}
            {/* BANK */}
            {/* <Route path="/dashboard/bank" element={<IndexBank />} />
            <Route path="/dashboard/bank/baru" element={<BuatBank />} />
            <Route path="/dashboard/bank/edit/:id" element={<EditBank />} />
            <Route path="/dashboard/bank/detil/:id" element={<DetilBank />} /> */}
            {/* END BANK */}
            {/* TRANSAKSI */}
            {/* <Route path="/dashboard/transaksi" element={<IndexTransaksi />} />
            <Route
              path="/dashboard/transaksi/detil/:id"
              element={<DetilTransaksi />}
            /> */}
            {/* <Route path="/dashboard/transaksi/edit" element={<EditTransaksi />} /> */}
            {/* END TRANSAKSI */}
          </Route>
          {/* END OF DASHBOARD ADMIN */}

          {/* USERS */}
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.CLIENT]} />}>
            <Route path="profil" element={<IndexProfil />} />
            <Route path="profil/transaksi" element={<IndexUserTransaksi />} />
            <Route
              path="profil/transaksi/detil/:id"
              element={<DetilUserTransaksi />}
            />
            <Route path="profil/akun" element={<DetilUserTransaksi />} />
            <Route
              path="/paket-wisata/detil/:slug/beli"
              element={<BeliPaketWisata />}
            />
          </Route> */}
          {/* END OF USERS */}

          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
