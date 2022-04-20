import Layout from "../components/Layout";

const Projects = () => {
    return ( 

        <Layout
        title= "JD | Proyectos"
        description= "Portfolio de Frontend Developer"
        >
            
            <section>
                <div className="container">
                    <h3 className="font-P500 text-white pro_h3">
                    Proyectos en React
                    </h3>

                    <div className="pro_div font-P400">
                        <div className="pro_left ">
                            <div className="pro_logo pulse">
                                <img src="/images/bitcoin.png" alt="" />
                            </div>
                            <div className="pro_text">
                                <h4 className="">
                                CriptoCotizador
                                </h4>
                                <p className="">
                                Style Components | Axios | API de Criptocompare
                                </p>
                            </div>
                            <div className="pro_btn">
                                <a className="btn font-P400" target="_blank" rel="noopener noreferrer" href="https://cripto-react-j47d.netlify.app/">

                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                    <span>Ver</span>
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className="pro_right">
                            <div className="pro_logo break_div pulse">
                                <img id="break_img" src="/images/break.png" alt="" />
                            </div>
                            <div className="pro_text">
                                <h4 className="">
                                Breaking Bad Quotes
                                </h4>
                                <p className="">
                                    Axios | API de Breaking Bad
                                </p>
                            </div>
                            <div className="pro_btn">
                                <a className="btn font-P400" target="_blank" rel="noopener noreferrer" href="https://breaking-bad-react-j47d.netlify.app/">

                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                    <span>Ver</span>
                                </a>
                            </div>
                        </div>
                        <hr />

                        <div className="pro_left ">
                            <div className="pro_logo pulse">
                                <img src="/images/weather.png" alt="" />
                            </div>
                            <div className="pro_text">
                                <h4 className="">
                                Clima
                                </h4>
                                <p className="">
                                React Hooks | API Open Weather Map
                                </p>
                            </div>
                            <div className="pro_btn">
                                <a className="btn font-P400" target="_blank" rel="noopener noreferrer" href="https://clima-react-j47d.netlify.app/">

                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                    <span>Ver</span>
                                </a>
                            </div>
                        </div>
                        <hr />

                        <div className="pro_right">
                            <div className="pro_logo pulse">
                                <img id="" src="/images/wallet.png" alt="" />
                            </div>
                            <div className="pro_text">
                                <h4 className="">
                                Wallet
                                </h4>
                                <p className="">
                                useState | useEffect
                                </p>
                            </div>
                            <div className="pro_btn">
                                <a className="btn font-P400" target="_blank" rel="noopener noreferrer" href="https://controlpresupuesto-react-j47d.netlify.app/">

                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                    <span>Ver</span>
                                </a>
                            </div>
                        </div>
                        <hr />

                        <div className="pro_left ">
                            <div className="pro_logo pulse">
                                <img src="/images/veterinaria.png" alt="" />
                            </div>
                            <div className="pro_text">
                                <h4 className="">
                                Admin. de Veterinaria
                                </h4>
                                <p className="">
                                    React Hooks | Local Storage
                                </p>
                            </div>
                            <div className="pro_btn">
                                <a className="btn font-P400" target="_blank" rel="noopener noreferrer" href="https://administrador-react-j47d.netlify.app/">

                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                    <span>Ver</span>
                                </a>
                            </div>
                        </div>
                        <hr />

                        <div className="pro_right">
                            <div className="pro_logo pulse">
                                <img id="" src="/images/seguro.jpg" alt="" />
                            </div>
                            <div className="pro_text">
                                <h4 className="">
                                Cotizador de Seguros
                                </h4>
                                <p className="">
                                    React Hooks | Style Components 
                                </p>
                            </div>
                            <div className="pro_btn">
                                <a className="btn font-P400" target="_blank" rel="noopener noreferrer" href="https://cotizador-react-j47d.netlify.app/">

                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                    <span>Ver</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                h4{
                    margin: 0;
                }
                p{
                    margin: 0;
                }
                .pro_h3{
                    text-align: center;
                    font-size: 30px;
                }
                .pro_div{
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                }
                .pro_logo > img{
                    width: 80px;
                    border-radius: 999px;
                }
                .pro_logo{
                    
                }

                .pro_left{
                    height: 80px;
                    color: #e3e3e3;
                    display: flex;
                    margin-top: 25px;
                    padding-bottom: 25px;
                    justify-content: space-between;
                    align-items: center;
                }
                .pro_right{
                    height: 80px;
                    color: #e3e3e3;
                    display: flex;
                    margin-top: 25px;
                    padding-bottom: 25px;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: row-reverse;
                }
                hr{
                    border: 1px solid hsl(191deg 94% 18%);
                    width: 50%;
                }
                .pro_right > .pro_text{
                    text-align: right;
                }
                .pro_text{
                    width: 20rem;
                }
                .break_div{
                    background-color: #9bbaaf;
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                }
                #break_img{
                    border-radius: 0px;
                    width: 60px;
                }
                .pro_btn{

                }
                .pulse {
                    animation: pulse 1s infinite ease-in-out alternate;
                }
                @keyframes pulse {
                    from { transform: scale(0.9); }
                    to { transform: scale(1); }
                }
                
                .btn {
                    display: flex;
                    align-items: center;
                    font-family: inherit;
                    font-weight: 500;
                    font-size: 17px;
                    padding: 0.8em 1.3em 0.8em 0.9em;
                    color: white;
                    background: transparent;
                    border: 1px solid hsl(191deg 94% 18%);
                    letter-spacing: 0.05em;
                    border-radius: 8px;
                    text-decoration: none;
                }

                .btn svg {
                    margin-right: 3px;
                    transform: rotate(30deg);
                    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
                }

                .btn span {
                    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
                }

                .btn:hover svg {
                    transform: translateX(5px) rotate(90deg);
                }

                .btn:hover span {
                    transform: translateX(7px);
                }
                `}
            </style>

        </Layout>

    );
}
 
export default Projects;