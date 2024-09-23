import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';



const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();

    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children ;
    }
    return <Navigate  state={{form: location}} replace to={'/login'}></Navigate>
};

export default PrivateRoute;