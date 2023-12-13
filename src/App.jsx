import Home from "./routes/home/home";
import { Route, Routes } from "react-router";
import Nav from "./routes/navigation/navigation";
import Explore from "./routes/explore park/explore";
import LeopardProfiles from "./routes/leopard-id/leopard-id";
import Footer from "./routes/footer/footer"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Footer />}>
          <Route index element={<Home />} />
          <Route path="explore-park" element={<Explore />} />
          <Route path="leopard-profiles" element={<LeopardProfiles />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
