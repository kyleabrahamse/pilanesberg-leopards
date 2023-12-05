import Home from "./routes/home/home";
import { Route, Routes } from "react-router";
import Nav from "./routes/navigation/navigation";
import Explore from "./routes/explore park/explore";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="explore-park" element={<Explore />} />
        </Route>
      </Routes>
  );
}

export default App;
