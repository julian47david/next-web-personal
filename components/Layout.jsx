import Head from 'next/head';
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children, title, description}) => {
    return ( 
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"/>
            </Head>

            <Navbar/>
            
            <section className="container_title">
                <div className="c_title_1">
                    <h1 className="font-mono text-white">
                        Hola!
                        <br/>
                        <span className="">
                            Soy Julian
                        </span>
                    </h1>
                </div>

                <div className="c_title_2">
                    <svg className="svg_bar" xmlns="http://www.w3.org/2000/svg" width="7" height="196" viewBox="0 0 7 196">
                        <g id="Rectángulo_6" data-name="Rectángulo 6" fill="#970c08" stroke="#970c08" stroke-width="1">
                            <rect width="7" height="196" rx="1" stroke="none"/>
                            <rect x="0.5" y="0.5" width="6" height="195" rx="0.5" fill="none"/>
                        </g>
                    </svg>
                </div>
                
                <div className="c_title_3 text-white">
                    <h2 className="font-mono">
                        <span>Frontend</span> 
                        <br/> Developer &
                        <br/> Web Designer
                    </h2>
                </div>
            </section>

            <main>
                {children}
            </main>
            
            <Footer/>

            <style jsx global>
                {`
                html,
                body{
                    padding: 0px;
                    margin: 0px;
                    background-color: #121212;
                }
                html {
                    scroll-behavior: smooth;
                }

                .container{
                    max-width: 700px;
                    background-color: rgb(0 0 0 / 25%);
                    padding: 30px 30px;
                    margin: 12px auto 0 auto;
                    border-radius: 8px;
                }
                .subtitle{
                    
                }
                .font-P400{
                    font-family: 'Poppins', sans-serif;
                    font-weight: 400;
                }
                .font-P500{
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                }
                .font-mono{
                    font-family: 'Courier New', Courier, monospace;
                }
                .text-white{
                    color: #e3e3e3;
                }
                .text-dark{
                    color: #000000;
                }
                `}
            </style>
            <style jsx>
                {`
                .container_title{
                    max-width: 760px;
                    background-color: #023541;
                    padding: 30px 30px;
                    margin: 12px auto 0 auto;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(6px);
                    cursor: crosshair;
                }
                .c_title_1{
                    width: 250px;
                }
                .c_title_1 > h1{
                    text-align: right;
                    font-size: 35px;
                }
                h1 > span{
                    background-color: transparent;
                    border: 2px solid #970c08;
                    border-radius: 5px;
                    padding: 0 5px;
                }
                .c_title_2{

                }
                .c_title_3{
                    width: 250px;
                }
                .c_title_3 > h2{
                    text-align: left;
                    font-size: 30px;
                }
                h2 > span{
                    background-color: transparent;
                    border: 2px solid #970c08;
                    border-radius: 5px;
                    padding: 0 5px;
                }
                .svg_bar{
                    margin: 0 20px;
                }

                `}
            </style>
        </>
    );
}

Layout.defaultProps= {
    title: "JD | Home",
    description: "Portfolio de Frontend Developer"
};

export default Layout;