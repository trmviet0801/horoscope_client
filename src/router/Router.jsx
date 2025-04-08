import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import OverviewPage from "../pages/Overview";
import LovePage from "../pages/LovePage";
import LoveResult from "../pages/LoveResult";
import PostPage from "../pages/PostPage";
import SpecificPostPage from "../pages/SpecificPostPage";

const RouterWrapper = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/daily/:id" element={<OverviewPage />} />
                <Route path="/love" element={<LovePage />} />
                <Route path="/love/result/:firstId/:secondId" element={<LoveResult />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/post/:postId" element={<SpecificPostPage />} />

                <Route path="*" element={<ErrorPage    />} />
            </Routes>
        </Router>
    )
}

export default RouterWrapper;