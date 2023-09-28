import Render from "../render/Render";
import { useState } from "react";

export default function SearchBar({ value, setValue, fn, fn2, cart, product, reset }) {
  const [on, setOn] = useState(true);

  const fnDelete = (id) => {
    const find = cart.find((a) => a.id == id);
    const index = cart.indexOf(find);
    find.quantity = 1;
    cart.splice(index, 1);

    setOn(!on);
  };

  let count = 0;
  const mapCart = cart.map((a) => {
    return (count += a.price * a.quantity);
  });

  const rest = (prod) => {
    const rtaId = cart.find((a) => a.id == prod);
    if (rtaId.quantity > 1) {
      rtaId.quantity--;
    }
    setOn(!on);
  };
  const plus = (prod) => {
    const rtaId = cart.find((a) => a.id == prod);

    rtaId.quantity++;
    setOn(!on);
  };
  return (
    <>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyUp={(e) => fn(e)}
        />
        <button type="submit" onClick={(e) => fn2(e, product)}>
          Ok
        </button>
      </form>
      {cart ? (
        cart.map((a) => {
          return (
            <Render
              key={a.id}
              title={a.title}
              price={a.price}
              quantity={a.quantity}
              fnDelete={fnDelete}
              fnRest={rest}
              fnPlus={plus}
              id={a.id}
            />
          );
        })
      ) : (
        <p>null</p>
      )}
      <p>Total ${mapCart.length > 0 ? mapCart[mapCart.length - 1] : 0}</p>
      <div>
        <button onClick={reset}>Terminar compra</button>
      </div>
    </>
  );
}
