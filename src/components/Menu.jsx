const Menu = ({menuItems}) => {
    return ( 
        <div className="menu">
            { menuItems.map((item) => {
                const {id, title, price, img, desc} = item
                return (
                    <div className="menuItem" key={id} >
                        <img src={img} alt="meal" />
                        <div className="info">
                            <header>
                                <h4> {title} </h4>
                                <h3> ${price} </h3>
                            </header>
                            <p> {desc} </p>
                        </div>
                    </div>
                )
            }) }
        </div>
     );
}
 
export default Menu;