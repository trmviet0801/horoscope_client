import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const RouterWrapper = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default RouterWrapper;