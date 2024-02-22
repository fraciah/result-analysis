import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/routes"
import Container from "./layouts/Container"

function App() {
  
  return (
      <Routes>
        {routes?.map((route) => (
          <Route 
            key={route.path}
            path={route.path}
            element={<Container route={route}/>}
          />
        ))}
      </Routes>
  );
}

export default App;
