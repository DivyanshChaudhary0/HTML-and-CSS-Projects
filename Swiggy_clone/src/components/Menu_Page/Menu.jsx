
import { useParams } from "react-router-dom";
import useRestraunt from "../../utils/useRestraunt";
import Top_bar from "./Top_bar";

const Menu = () => {

    const {id} = useParams();

    // its a custom hook for fetching data
    const menuData = useRestraunt(id);

    // console.log(menuData?.cards[2]?.card?.card);

  return (
    menuData ? (
    <div className="w-[55%] h-screen mx-auto border border-black p-10">
      <Top_bar info={menuData.cards[2].card.card.info} />
      menubar
    </div>
    ) : <p className="w-full h-screen text-center text-4xl p-10">Loading...</p>
  )
}

export default Menu;