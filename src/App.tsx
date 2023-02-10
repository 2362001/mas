import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./components/Routes";
import { DefaultLayout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
