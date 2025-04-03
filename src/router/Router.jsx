import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const RouterWrapper = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </Router>
    )
}

export default RouterWrapper;