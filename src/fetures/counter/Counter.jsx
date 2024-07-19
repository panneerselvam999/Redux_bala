import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
    const getCount = useSelector((state) => state.storeCounter.stateCount);
    const dispatch = useDispatch();

    const [addValue, setAddValue] = useState(0)

    const resetAll = () => {
        dispatch(reset())
        setAddValue(0)
    }



    return (
        <section className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl bg-slate-400 px-10 rounded-md text-white">{getCount}</h1>
                <div className="flex  gap-6 mt-7">
                    <button
                        onClick={() => dispatch(increment())}
                        className="flex h-11 w-11 items-center justify-center rounded-md border border-black text-3xl"
                    >
                        +
                    </button>
                    <button
                        onClick={() => dispatch(decrement())}
                        className="flex h-11 w-11 items-center justify-center rounded-md border border-black text-3xl"
                    >
                        -
                    </button>
                </div>
                <div>
                    <input type="number" className=" border-2 border-black" onChange={(e) => setAddValue(e.target.value)} />
                </div>
                <div>
                    <button
                        onClick={() => resetAll()}
                        className="flex  items-center justify-center rounded-md border border-black text-3xl"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => dispatch(incrementByAmount(addValue))}
                        className="flex  items-center justify-center rounded-md border border-black text-3xl"
                    >
                        set Increment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Counter;
