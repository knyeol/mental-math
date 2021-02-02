import { useState } from "react";
import { op, sign } from ".././lib/values";
import { toggleItems, randomItem } from ".././lib/manageArray";
import { store, storeItem, getItem } from ".././lib/storage";

export function Operations({ setOperation }) {
  const initialOperations = getItem(store.operations) || ["add"];
  const [operations, setOperations] = useState(initialOperations);

  function onClick(value) {
    const array = toggleItems(operations, value);
    const randomOperation = randomItem(array);

    setOperations([...array]);
    setOperation(randomOperation);
    storeItem(store.operations, array);
    storeItem(store.operation, randomOperation);
  }

  const getSelected = target => (operations.includes(target) ? "selected" : "");

  return (
    <div className="buttons-container op-buttons">
      <button className={getSelected(op.add)} onClick={() => onClick(op.add)}>
        {sign.add}
      </button>
      <button
        className={getSelected(op.subtract)}
        onClick={() => onClick(op.subtract)}
      >
        {sign.subtract}
      </button>
      <button
        className={getSelected(op.multiply)}
        onClick={() => onClick(op.multiply)}
      >
        {sign.multiply}
      </button>
      <button
        className={getSelected(op.divide)}
        onClick={() => onClick(op.divide)}
      >
        {sign.divide}
      </button>
    </div>
  );
}
