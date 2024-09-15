
import {LOGO_URL} from "../utils/constant"

function Header(){
    return <div className="w-full h-20 bg-red-300 flex items-center justify-between px-20">
        <div>
            <img src={ LOGO_URL } alt="" className="w-16 rounded-full object-cover object-center" />
        </div>
        <div className="flex items-center gap-20">
            <p>Home</p>
            <p>About US</p>
            <p>Contact</p>
            <p>Cart</p>
        </div>
    </div>
}

export default Header;