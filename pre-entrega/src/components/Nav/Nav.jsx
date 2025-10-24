import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext/useCartContext";


export const Nav = () => {

    const { getTotalItems } = useCartContext();
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/coronas">Coronas</Link>
            </li>
            <li>
                <Link to="/category/notebooks">Notebooks</Link>
            </li>
            <li>
                <Link to="/cart">Carrito</Link>
                {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                )}
            </li>
        </ul>
    </nav>
}