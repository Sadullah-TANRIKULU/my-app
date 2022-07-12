import { BiDollar } from "react-icons/bi";


const Menu = ({menuItems}) => {
    // console.log(menuItems);
    return ( 
        <div className="menu grid grid-cols-2 gap-2 ">
            { menuItems.map((item) => {
                const {id, title, price, img, desc} = item
                return (
                    <div className="menuItem flex justify-start items-center w-50 border-black-200 border-2 gap-2 " key={id} >
                        <img className="h-40 " src={img} alt="meal-pic" />
                        <div className="info">
                            <header>
                                <h4 className="flex text-2xl font-serif mb-2 " > {title} </h4>
                                <h3 className="flex items-center " > <BiDollar/>{price} </h3>
                            </header>
                            <p className="flex flex-wrap" > {desc} </p>
                        </div>
                    </div>
                )
            }) }
        </div>
     );
}
 
export default Menu;