import NavBar from "../components/NavBar";
import Wallpaper from "../assets/Wallpaper.png"
import Homecontents from "../components/Homecontents";

function Home(){
    return(
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6  md:px-10 lg:px-16 xl:24" style={{background:`url(${Wallpaper})`, margin:"0px",}}>
            <div className="pt-28 md:pt-32 lg:pt-36">
                <Homecontents />
            </div>
        </div>
    )
}

export default Home