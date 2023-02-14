import { Outlet } from 'react-router';
import Header from '../common/Header';
import Footer from '../common/Footer';

const GlobalContainer = () => {
    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default GlobalContainer;