import Layout from "../components/Layout";

const Contact = () => {
    return ( 

        <Layout
        title= "JD | Proyectos"
        description= "Portfolio de Frontend Developer"
        >
            
            <section className="container">
                <h3 className="font-P500 text-white cont_h3">
                    Contacto
                </h3>
                <p className="font-P400 text-white cont_p">
                Estoy disponible para trabajo Freelance o en Relacion de Dependencia.
                <br />
                Puedes contactarme por Gmail o LinkedIn.
                </p>
                <div className="cont_div">
                    <div className="sgv_cont">
                        <a className="btn" target="_blank" rel="noopener noreferrer" href="mailto:juliansk832147@gmail.com?subject=Interesado%20Dev%20Frontend">
                            <img src="/images/logo-gmail.svg" alt="" /> 
                        </a>
                    </div>
                    <div className="sgv_cont">
                        <a className="btn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juliansosa1/">
                            <img src="/images/logo-linkdin.svg" alt="" /> 
                        </a>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                .cont_h3{
                    margin: 0px;
                    text-align: center;
                    font-size: 30px;
                }
                .cont_p{
                    width: 20rem;
                    text-align: center;
                    margin: auto;
                    font-size: 15px;
                    margin-top: 20px;
                }
                .cont_div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .sgv_cont{
                    margin: 15px 10px 0 10px;
                }
                a > img{
                    width: 60px;
                }
                .btn{
                    text-decoration: none;
                }
                a > img{
                    transition: 1s ease;
                }

                a > img:hover{
                    transform: scale(1.2);
                }

                `}
            </style>
        </Layout>

    );
}
 
export default Contact;