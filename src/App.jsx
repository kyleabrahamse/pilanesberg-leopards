import Home from "./routes/home/home";
import { Route, Routes } from "react-router";
import Nav from "./routes/navigation/navigation";
import Explore from "./routes/explore park/explore";
import LeopardProfiles from "./routes/leopard-id/leopard-id";
import Footer from "./routes/footer/footer";
import LeopardIdCard from "./components/leopard-id-card/leopard-id-card";
import leopardIdCardsSorted from "./leopard-profiles";
import LeopardIdCardPage from "./routes/leopard-portfolios/leopard-id-card-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Footer />}>
          <Route index element={<Home />} />
          <Route path="explore-park" element={<Explore />} />
          <Route path="leopard-profiles" element={<LeopardProfiles />} />
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
