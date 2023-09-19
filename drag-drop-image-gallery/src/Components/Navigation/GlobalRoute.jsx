import Home from "../Contents/Home";
import {Route, Routes} from 'react-router-dom';

const GlobalRoute = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </>
    )
}

export default GlobalRoute;