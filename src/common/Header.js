import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='headerNav container-fluid fixed-top'>
            <nav className='navbar navbar-expand-lg'>
                <div className='navBrand navbar-brand'>
                    Portfolio
                </div>
                <div className='navbar-nav'>
                    <a className='nav-link text-end navLink' href='/'> About me </a>
                    <a className='nav-link text-end navLink' href='/'> Portfolio </a>
                    <a className='nav-link text-end navLink' href='/'> Contact </a>
                </div>
            </nav>
        </div>
    )
};

export default Header;