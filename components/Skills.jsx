
const Skills = () => {
    return (
        <section id="skills" className="container">
            <div className="subtitle text-white">
                <h3 className="font-P500 text-white skills_h3">
                Skills
                </h3>
                <div className="skills_div">
                    <p className="font-P400 skills_p">
                    Aqui algunas de las herramientas y tecnologias que uso
                    </p>

                    <div className="skills_logos">
                        <div className="skills_box">
                            <div className="skills_logo">
                                <img className="skills_img html" src="/images/html.png" alt="" />
                            </div>
                            <div className="skills_logo">
                                <img className="skills_img css" src="/images/css.png" alt="" />
                            </div>
                            <div className="skills_logo">
                                <img className="skills_img js" src="/images/js.png" alt="" />
                            </div>
                        </div>
                        
                        <div className="skills_box">
                            <div className="skills_logo">
                                <img className="skills_img react" src="/images/react.png" alt="" />
                            </div>
                            <div className="skills_logo">
                                <img className="skills_img vue" src="/images/vue.png" alt="" />
                            </div>
                            <div className="skills_logo">
                                <img className="skills_img next" src="/images/next.png" alt="" />
                            </div>
                        </div>

                        <div className="skills_box">
                            <div className="skills_logo">
                                <img className="skills_img sass" src="/images/sass.png" alt="" />
                            </div>
                            <div className="skills_logo">
                                <img className="skills_img bootstrap" src="/images/logo-bootstrap.png" alt="" />
                            </div>
                            <div className="skills_logo">
                                <img className="skills_img vscode" src="/images/vscode.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <style jsx>
                {`
                .skills_h3 {
                    font-size: 30px;
                    margin-top: 0;
                    text-align: center;
                }
                .skills_p{
                    text-align: center;
                }
                .skills_logos{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .skills_box{
                    display: flex;
                    align-items: center;
                }
                .skills_logo{
                    margin: 10px 15px
                }   
                .skills_img{
                    background-color: #e3e3e32b;
                    border-radius: 8px;
                }
                .html{
                    width: 100px;
                    border: 2px solid rgb(198 46 7 / 53%);
                    padding: 5px 10px 0px 10px;
                }
                .css{
                    width: 100px;
                    border: 2px solid rgb(0 110 186 / 50%);
                    padding: 5px 10px 0px 10px;
                }
                .js{
                    width: 100px;
                    border: 2px solid rgb(193 162 10 / 50%);
                    padding: 5px 10px 0px 10px;
                }
                .react{
                    width: 100px;
                    border: 2px solid rgb(81 194 224 / 50%);
                    padding: 15px 10px;
                    
                }
                .vue{
                    width: 100px;
                    border: 2px solid rgb(65 184 131 / 50%);
                    padding: 29px 10px;
                }
                .next{
                    width: 100px;
                    border: 2px solid rgb(146 140 151 / 50%);
                    padding: 42px 10px;
                }
                .sass{
                    width: 100px;
                    border: 2px solid rgb(204 102 153 / 50%);
                    padding: 35px 10px;
                }
                .bootstrap{
                    width: 100px;
                    border: 2px solid rgb(138 86 216 / 50%);
                    padding: 30px 10px;
                }
                .vscode{
                    width: 100px;
                    border: 2px solid rgb(27 140 212 / 50%);
                    padding: 23px 10px;
                }
                `}
            </style>
        </section>
    )    
}
export default Skills;