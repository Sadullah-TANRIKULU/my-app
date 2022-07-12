import Menu from "./Menu";


const Menus = ({menuItems}) => {
    // console.log(menuItems);
    return ( 
        <div className="menus flex ">
            <Menu menuItems={menuItems} />
        </div>
     );
}
 
export default Menus;