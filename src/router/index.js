import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Tasks from '../pages/Tasks';
// import Projects from '../pages/Projects';
// import Users from '../pages/Users';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            {/* <Sidebar /> */}
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/register" element={<Register />} /> */}
                {/* <Route path="/tasks" element={<Tasks />} /> */}
                {/* <Route path="/projects" element={<Projects />} /> */}
                {/* <Route path="/users" element={<Users />} /> */}
            </Routes>
            {/* <Footer /> */}
        </Router>
    );
};

export default AppRouter;