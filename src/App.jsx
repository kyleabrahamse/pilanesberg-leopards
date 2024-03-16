import Home from "./routes/home/home";
import { Route, Routes } from "react-router";
import Nav from "./navigation/navigation";
import LeopardProfiles from "./routes/leopard-id/leopard-id";
import Footer from "./routes/footer/footer";
import LeopardIdCard from "./components/leopard-id-card/leopard-id-card";
import leopardIdCardsSorted from "./leopard-profiles";
import LeopardIdCardPage from "./routes/leopard-portfolios/leopard-id-card-page";
import GalleryPage from "./routes/gallery-page/gallery-page";
import Sightings from "./routes/sightings/sightings";
import Conservation from "./routes/conservation/conservation";
import Tours from "./routes/tours/tours";
import Contact from "./routes/contact/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Footer />}>
          <Route index element={<Home />} />
          <Route path="tours" element={<Tours />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="leopard-profiles" element={<LeopardProfiles />} />
          <Route path="sightings" element={<Sightings />} />
          <Route path="conservation" element={<Conservation />} />
          <Route path="contact" element={<Contact />} />
          {leopardIdCardsSorted.map((leopard, index) => (
            <Route
              key={index}
              path={leopard.name.toLowerCase()}
              element={<LeopardIdCardPage leopard={leopard} />}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
