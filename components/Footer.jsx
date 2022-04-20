

const Footer = () => {
    return (  
        <footer className="container">
            <div className="footer">
                
                <div className="footer_sitio">
                    <p className="footer_p text-white font-P400 m-0">
                    Este sitio fue desarrolado con:
                    </p>
                    <div className="footer_animate">
                        <div id="react" className="footer_bg">
                            <img className="footer_img react" src="/images/react.png" alt="" />
                        </div>

                        <div id="next" className="footer_bg">
                            <img className="footer_img next" src="/images/next.png" alt="" />
                        </div>

                        <div id="css" className="footer_bg">
                            <img className="footer_img css" src="/images/css.png" alt="" />
                        </div>
                        
                    </div>
                </div>

                <p className="footer_p text-white font-P400">
                Todos los derechos reservados JulianDesign© 2022
                </p>

            </div>
            <style jsx>
                {`
                .footer{

                }
                .footer_sitio{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .footer_animate{
                    display: flex;
                }
                .footer_img{

                }
                .footer_bg{
                    background-color: #e3e3e32b;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    border-radius: 9999px;
                    margin-left: 10px;
                }
                .react{
                    width: 30px;
                }
                .next{
                    width: 30px;
                }
                .css{
                    width: 30px;
                }
                #react{
                    animation: bounce2 3.1s ease infinite;
                }
                #next{
                    animation: bounce2 3.15s ease infinite;
                }
                #css{
                    animation: bounce2 3.2s ease infinite;
                }

                @keyframes bounce2 {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-20px);}
                    60% {transform: translateY(-10px);}
                }

                .footer_p{
                    text-align: center;
                    font-size: 12px;
                    margin-top: 10px;
                    margin-bottom: 0px;
                }
                .m-0{
                    margin: 0px;
                }
                `}
            </style>
        </footer>
    );
}
 
export default Footer;

// Este sitio fue desarrollado con React Next CSS3