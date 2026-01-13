import NavBar from "../components/NavBar";
import Wallpaper from "../assets/Wallpaper.png"
import Homecontents from "../components/Homecontents";

function Home(){
    return(
        <div className="min-h-screen w-full bg-cover bg-center" style={{background:`url(${Wallpaper})`, margin:"0px",}}>
            <div className="pt-32">
                <Homecontents />
            </div>
        </div>
    )
}

export default Home