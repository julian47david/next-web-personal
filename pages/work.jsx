import Layout from "../components/Layout";

const Works = () => {
    return ( 

        <Layout
        title= "JD | Trabajos"
        description= "Portfolio de Frontend Developer"
        >
            
            <section>
                <div className="container">
                    <h3 className="font-P500 text-white work_h3">
                    Trabajos (2019 - 2022)
                    </h3>

                    <div className="work_div font-P400">
                        <div className="work_left ">
                            <div className="work_logo pulse">
                                <img src="/images/hog.png" alt="" />
                            </div>
                            <div className="work_text">
                                <h4 className="">
                                    Frontend Developer en Hogarth Worldwide
                                </h4>
                                <p className="">
                                    Stack: HTML | CSS | JS | BOOTSTRAP | VUE
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="work_right">
                            <div className="work_logo gift_div pulse">
                                <img id="gift_img" src="/images/logo-m.png" alt="" />
                            </div>
                            <div className="work_text">
                                <h4 className="">
                                    Frontend Developer (Freelancer) en GiftMent
                                </h4>
                                <p className="">
                                    Stack: HTML | CSS
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div className="work_left ">
                            <div className="work_logo pulse">
                                <img src="/images/fa.png" alt="" />
                            </div>
                            <div className="work_text">
                                <h4 className="">
                                    Frontend Developer (Freelancer) en Fausto Aberturas
                                </h4>
                                <p className="">
                                    Stack: HTML | CSS | JS | BOOTSTRAP | FIREBASE
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div className="work_right">
                            <div className="work_logo oceano_div pulse">
                                <img id="oceano" src="/images/logo.png" alt="" />
                            </div>
                            <div className="work_text">
                                <h4 className="">
                                    Frontend Developer (Freelancer) en Oceano Medicina
                                </h4>
                                <p className="">
                                    Stack: HTML | CSS | Newsletter
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <a className="cta" href="#google">css modal</a>
                    <div id="google" className="modaloverlay">
                        <div className="modal">
                            <a href="#close" className="close">&times;</a>
                            <div>
                                <h1>Here is some content inside the Modal.</h1>
                                <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            </div>
                        </div>
                    </div> */}
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
                .work_h3{
                    text-align: center;
                    font-size: 30px;
                }
                .work_div{
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                }
                .work_logo > img{
                    width: 80px;
                    border-radius: 999px;
                }
                .work_logo{
                    
                }

                .work_left{
                    height: 80px;
                    color: #e3e3e3;
                    display: flex;
                    margin-top: 25px;
                    padding-bottom: 25px;
                    justify-content: space-between;
                    align-items: center;
                }
                .work_right{
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
                    border: 1px solid #970c08;
                    width: 50%;
                }
                .work_right > .work_text{
                    text-align: right;
                }
                .work_text{
                    width: 28rem;
                }
                .gift_div{
                    background-color: hsl(259deg 28% 70%);
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                }
                #gift_img{
                    border-radius: 0px;
                    width: 40px;
                    height: 40px;
                }
                .oceano_div{
                    background-color: #ffffff;
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                }
                #oceano{
                    border-radius: 0px;
                    width: 60px;
                }
                .pulse {
                    animation: pulse 1s infinite ease-in-out alternate;
                }
                @keyframes pulse {
                    from { transform: scale(0.9); }
                    to { transform: scale(1); }
                }

                .cta {
                    background-color: white;
                    border: 1px solid lightgrey;
                    border-radius: 6px;
                    color: tomato;
                    display: inline-block;
                    font-family: "Open Sans", sans-serif;
                    font-size: 1em;
                    font-weight: 700;
                    margin-bottom: 1em;
                    padding: 0.3em 1em;
                    text-decoration: none;
                }
                .cta:hover {
                    background-color: lightgrey;
                    color: slategrey;
                    text-decoration: none;
                }

                .modaloverlay {
                    background: rgba(0, 0, 0, 0.8);
                    bottom: 0;
                    left: 0;
                    opacity: 0;
                    pointer-events: none;
                    position: fixed;
                    right: 0;
                    top: 0;
                    -webkit-transition: opacity 400ms ease-in;
                    -moz-transition: opacity 400ms ease-in;
                    transition: opacity 400ms ease-in;
                    z-index: -1;
                    display: none;
                }
                .modaloverlay:target {
                    display: block;
                    opacity: 1;
                    pointer-events: auto;
                    z-index: 99999;
                }
                .modaloverlay .modal {
                    background-color: white;
                    height: 100%;
                    position: relative;
                    margin: 0 auto;
                    padding: 3em;
                    overflow-y: scroll;
                    -webkit-overflow-scrolling: touch;
                }
                @media (min-width: 60em) {
                .modaloverlay .modal {
                    height: 75%;
                    margin: 5% auto;
                    max-height: 57em;
                    max-width: 66em;
                    width: 85%;
                }
                }
                .modaloverlay .modal > iframe,
                .modaloverlay .modal > div {
                    border: none;
                    width: 100%;
                    height: 100%;
                }
                .modaloverlay .close {
                    background-color: turquoise;
                    color: white;
                    font-size: 24px;
                    padding: 8px 12px;
                    position: absolute;
                    right: 0;
                    text-align: center;
                    text-decoration: none;
                    top: 0;
                    z-index: 1;
                }
                `}
            </style>
        </Layout>

    );
}
 
export default Works;