import Navbar from "../component/Navbar"
import '../src/app/globals.css';



function MyApp({Component, pageProps}){
    return<>
    <Navbar/>
    <Component{...pageProps}/>
    </>
}
export default MyApp