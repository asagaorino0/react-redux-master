import React, { useState } from 'react';
// const [event, setEvent] = useState('');
// const [day, setDay] = useState('');
// import styles from './PageA.module.css';

const PageA = () => {

    return (
        <div>
            <div>
                <span >pageA</span>
                <br />
                {/* <label >event : </label>
                <input
                    type="text"
                    name="event"
                    value="mm_dd"
                    autoFocus={true}
                    onChange={e => setEvent(e.target.value)}
                    value={event}
                />
                <br />
                <label >Day　: </label>
                <input
                    type="date"
                    name="limitt"
                    onChange={e => setDay(e.target.value)}
                    value={day}
                /> */}
            </div>


            <ul>

                {/* -------------------------
                    {
              todos
                .filter((todo) => todo.complete === false)
                .map(item => {
                  return (
                    <div key={item.id}>{item.id}:{item.todo}
                      <button
                        className={styles.button}
                        aria-label="Decrement value" onClick={() => done(item.id, item.complete)}>-</button>
                    </div>
                  )
                })
            } */}
            </ul>
        </div >
    );
}

export default PageA
