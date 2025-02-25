import { Route, Routes } from "react-router";
import { routes } from "./routes/routes";
import Navbar from "./components/shared/Navbar";
const App = () => {
  return (
    <>
      {/* Wrap with Layout */}
      <Navbar />
      <Routes>
        {routes.map(({ path, Element, id }) => (
          <Route key={id} path={path} element={<Element />}>
            {/* {subRoute &&
              subRoute.map(({ id, index, path, Element }) => (
                <Route key={id} {...(index ? { index: true } : { path })} element={<Element />}></Route>
              ))} */}
          </Route>
        ))}
      </Routes>
      {/* Wrap with Layout */}
    </>
  );
};
export default App;
