import Menu from "./Menu";


const Menus = ({menuItems}) => {
    return ( 
        <div className="menus">
            <Menu menuItems={menuItems} />
        </div>
     );
}
 
export default Menus;