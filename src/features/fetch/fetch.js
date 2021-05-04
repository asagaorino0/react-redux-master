import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectData, fetchData } from './fetchSlice';
// import styles from './fetch.module.css';
export function Fetch() {
    const data = useSelector(selectData);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchUserData();
    },
        // eslint-disable-next-line 
        []);

    const fetchUserData = async () => {
        await dispatch(fetchData());
        console.log('fetch:', data);
    };
    return (
        <div>
            <button
                // className={styles.button}
                aria-label="fetch"
                onClick={fetchUserData}
            >
                fetch
         </button>
        </div>
    )
}
