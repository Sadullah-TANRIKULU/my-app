import { useState } from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Menus from "../components/Menus";
import data from '../data';

const allCategories = ["All",...new Set(data.map((item)=> {
    return item.category
}))];
// console.log(allCategories);

const Home = () => {
    
    const [menuItems, setMenuItems] = useState(data);

    const filterItems = (categoryItem) => {
        if (categoryItem === "All") {
            setMenuItems(data);
        } else {
            const filtered = data.filter((item) => item.category === categoryItem)
            setMenuItems(filtered);
        }
    }

    

    return ( 
        <div className="home flex flex-col gap-4 justify-center items-center ">
            <Header />
            <Categories allCategories={allCategories} filterItems={filterItems} />
            <Menus menuItems={menuItems} />
        </div>
     );
}
 
export default Home;