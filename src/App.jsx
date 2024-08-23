import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// rewrite code above to modern version using createBrowserRouter, RouterProvider with 
// path and element structure in array
import Header from "./components/Header"
import Home from "./components/Home"
import Shop from "./components/Shop"

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/shop" element={<Shop/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App