import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Moviespage from "./components/Moviespage.jsx"
import Details from "./components/Details.jsx"

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Moviespage />
          </div>
        }
      />
      <Route path="/movie/:imdbid" element={<Details/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;