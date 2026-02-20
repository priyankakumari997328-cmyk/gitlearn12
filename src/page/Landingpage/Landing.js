import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Included from "./Service"
import { Box } from "@mui/material"
import Footer from "./Footer"
const Landing =()=>{
    return(
        <Box sx={{backgroundColor: "rgb(14, 36, 56)", position: "Absolute"}}>
            <Navbar/>
            <Home/>
            <About/>
            <Included/>
            <Footer/>
            
        </Box>
    )
}
export default Landing;