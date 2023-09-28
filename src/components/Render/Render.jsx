import './render.css'

export default function Render({ title, price, quantity, fnDelete, id, fnRest, fnPlus}) {
    
  return (
    <>
      <p>
        <button onClick={() => fnDelete(id)}>X</button>
        {quantity} {title} {price} ${price*quantity}
        <button onClick={() => fnPlus(id)}>+</button>
        <button onClick={() => fnRest(id)}>-</button>
      </p>
    </>
  );
}
