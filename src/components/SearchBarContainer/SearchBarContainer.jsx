import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function SearchBarContainer({ data }) {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState("");
  const [cart, setCart] = useState([]);

  const reset =()=>{
    setCart([])
  }

  const searchProduct = () => {
    const rtaId = data.find((a) => a.id == value);
    if (rtaId) {
      setProduct(rtaId);
      return rtaId;
    } else return false;
  };

  const submit = (e, prod) => {
    const rtaId = cart.find((a) => a.id == value);
    e.preventDefault();
    if (!rtaId && searchProduct()) {
      /* ver que condicional poner si no existe el producto en cart */
      setCart((prev) => [...prev, prod]);
    } else if (searchProduct()) {
      prod.quantity++;
    } else {
      alert("producto no encontrado");
    }
    setValue("");
  };

  return (
    <>
      <SearchBar
        value={value}
        setValue={setValue}
        fn={searchProduct}
        fn2={submit}
        product={product}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}
