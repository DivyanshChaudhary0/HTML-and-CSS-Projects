
import {BASE_URL} from "../utils/constant";

function RestaurantCard({Cards}){
    return <div className="card w-[250px] border border-black rounded-lg bg-red-400 p-2">
            <div>
                <img src={BASE_URL + Cards.imageId} alt="" className="rounded-lg" />
            </div>
            <div>
                <p> NAME: {Cards.description}</p>
                <p> PRICE: {Cards.id/100}</p>
                <p></p>
            </div>
    </div>
}

export default RestaurantCard;