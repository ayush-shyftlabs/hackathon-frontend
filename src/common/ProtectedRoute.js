import {Navigate, Route} from "react-router-dom";

const isAuthenticated = () => {
    // Implement your authentication logic here
    // For example, check if there is a token in localStorage
    return localStorage.getItem('token') !== null;
};

// Custom Route component to protect routes
const ProtectedRoute = ({ element, ...rest }) => {
    return (
        <Route
            {...rest}
            element={isAuthenticated() ? element : <Navigate to="/login" replace />}
        />
    );
};

export default ProtectedRoute;