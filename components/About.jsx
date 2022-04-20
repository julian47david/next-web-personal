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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro.
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

                }
                .about_svg{

                }
                `}
            </style>
        </section>
    )
    
}
export default About;