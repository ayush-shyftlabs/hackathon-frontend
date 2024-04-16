import Wrapper from "../../layout";
import {useEffect} from "react";
import { useNavigate} from 'react-router-dom';
const HomePage=()=>{
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/campaign");
    }, []);
    return <></>
}


// const HomePage=Wrapper(Home);

export default HomePage;