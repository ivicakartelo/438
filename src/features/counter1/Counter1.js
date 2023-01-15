import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement } from './counter1Slice';

export default function Counter1() {
  const count = useSelector((state) => state.counter1.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      <h1>
        <span>{count}</span>
      </h1>
      
      <button
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
}