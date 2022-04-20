import Link from 'next/link'

const Navbar = () => {
    return (  
        <nav>
            <div className='navbar_body'>
                <div className="navbar_nav">
                    <div className="nav_logos">
                        <Link href="/">
                            <a className='nav_a_img'><img className='img_icon' src="/images/logo_v2_rounded_b.png" alt="" /></a>
                        </Link>
                        <Link href="/">
                            <a className='nav_a_img'><img className='img_logo' src="/images/logo_v1_white.png" alt="" /></a>
                        </Link>
                        

                        
                    </div>

                    <ul className="nav_ul">
                        <li className="nav_li">
                            <Link href="/">
                                <a className='nav_a'>Home</a>
                            </Link>
                        </li>
                        <li className="nav_li">
                            <Link href="/work">
                                <a className='nav_a'>Trabajos</a>
                            </Link>
                        </li>
                        <li className="nav_li">
                            <Link href="/projects">
                                <a className='nav_a'>Proyectos</a>
                            </Link>
                        </li>
                        <li className="nav_li">
                            <Link href="/contact">
                                <a className='nav_a'>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {`
                .navbar_body{
                    background-color: #023541;
                    height: 75px;
                    width: 100%;
                    display: grid;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(6px)
                }
                .navbar_nav{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #121212;
                    width: 820px;
                    height: 55px;
                    margin: auto;
                    border-radius: 8px;
                    backdrop-filter: blur(6px)
                }
                .nav_logos{
                    margin-left: 30px;
                }
                .img_icon{
                    width: 30px;

                }
                .img_logo{
                    height: 30px;
                    margin-left: 10px;
                }

                .nav_ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    list-style: none;
                    padding: 0px;
                    margin-right: 30px;
                }
                .nav_li{
                    margin: 0 10px;
                }
                .nav_a{
                    text-decoration: none;
                    color: #E3E3E3;
                    text-transform: uppercase;
                    font-family: 'Poppins', sans-serif;
                    font-size: 15px;

                }
                
                @media (max-width: 840px) {
                    .navbar_nav{
                        width: 680px;
                    }
                    .nav_a{
                        font-size: 13px;
                    }

                }
                @media (max-width: 700px) {
                    .navbar_nav{
                        width: 95%;
                    }

                }

                `}
            </style>
        </nav>
    );
}
 
export default Navbar;