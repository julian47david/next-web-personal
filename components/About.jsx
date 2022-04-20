import SvgComponent from "./SvgDev";

const About = () => {
    return (
        <section id="about" className="container">
            <div className="subtitle text-white">
                <h3 className="font-P500 about_h3">
                Sobre mi
                </h3>
                <div className="about_div">
                    <div className="about_svg">
                        <SvgComponent/>
                    </div>

                    <p className="font-P400 about_p">
                    Soy Frontend Developer y estoy busqueda de nuevos y desafiantes proyectos para poner a prueba mis conocimientos e implentar nuevas tecnologias. 
                    <br />Me describo como una persona organizada, creativa y responsable.
                    <br />
                    <br />
                    Aqui algunos de los cursos que hice: HTML5, CSS3, SASS, JavaScript, Bootstrap 4 y UX.
                    <br />
                    <br />
                    Actualmente me encuentro especializandome en React y Next.
                    <br />
                    Estoy ancioso de formar parte de un equipo y poder crear cosas nuevas.
                    </p>
                    
                </div>
            </div>
            <style jsx>
                {`
                .about_h3 {
                    font-size: 30px;
                    margin-top: 0;
                    text-align: center;
                }
                .about_div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
                .about_p{
                    width: 80%;
                    text-align: left;
                    font-size: 15px;
                }
                .about_svg{

                }
                `}
            </style>
        </section>
    )
    
}
export default About;