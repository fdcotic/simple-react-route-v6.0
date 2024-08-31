import Navbar from "./componentes/Navbar";

import { Routes , Route} from "react-router-dom";

import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";

const App = () => {

  return (
    <>
      <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<LayoutPublic></LayoutPublic>}>
            <Route element={<Inicio />} index></Route>
            <Route element={<Contacto />} path="/Contacto"></Route>
            <Route element={<Blog />} path="/Blog"></Route>
            <Route element={<BlogDetails />} path="/Blog/:id"></Route>
          </Route>
          <Route element={<NotFound></NotFound>} path="*"></Route>
        </Routes>
    </>
  );

} 

export default App;