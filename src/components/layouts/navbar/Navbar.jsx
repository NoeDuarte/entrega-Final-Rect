import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "peru",
        padding: "20px",
      }}
    >
      <Link to="/">Mi tienda</Link>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
        }}
      >
        <Link to="/category/mujer">Mujeres</Link>
        <Link to="/category/hombre">Hombres</Link>
      </ul>
      {/* <a href="/cart">Carrito</a> */}
      <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
        <CartWidget />
      </Link>
    </nav>
  );
};