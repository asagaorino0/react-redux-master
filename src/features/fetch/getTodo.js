import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectData, getTodoData } from './getTodoSlice';
export function GetTodo() {
    const get = useSelector(selectData);
    const dispatch = useDispatch();
    useEffect(() => {
        getTodoUserData();
    },
        // eslint-disable-next-line 
        []);

    const getTodoUserData = async () => {
        await dispatch(getTodoData());
        console.log('getTodo:', get);
    };
    return (
        <div>
            <button
                aria-label="getTodo"
                onClick={getTodoUserData}
            >
                getTodo
         </button>
        </div>
    )
}
