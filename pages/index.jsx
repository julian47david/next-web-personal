import Layout from "../components/Layout";
import About from "../components/About";
import Skills from "../components/Skills";


const Index = () => {
    return (
        <Layout
        title= "JD | Home"
        description= "Portfolio de Frontend Developer"
        >
            
            <About/>

            <Skills/>

        </Layout>
    )
}
export default Index;