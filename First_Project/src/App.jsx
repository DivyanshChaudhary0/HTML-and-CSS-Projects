
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RestaurantCard from "./Components/RestaurantCard";
import data from "./utils/mockData";

function App() {

  return (
    <div className="container w-full">
      <Header />
      <div className="w-full min-h-[100%] flex items-center justify-between flex-wrap gap-6 p-10">
        {data.map((cards, i) => (
          <RestaurantCard key={i} Cards={cards} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;