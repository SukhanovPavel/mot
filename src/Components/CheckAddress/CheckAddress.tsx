'use client'

import styles from "./CheckAddress.module.css";
import {address as defaultAddress} from "@/address/address";
import {useState} from "react";
export const CheckAddress = () => {

    const [address, setAddress] = useState(defaultAddress);
    const [searchPanel, setSearchPanel] = useState(false);
    const [text, setText] = useState('');

    return (
        <form className={styles.leftCol}>
            <span>Проверить адрес:</span>
            <span className={styles.inputWrap}>
              <label>Начните вводить город или улицу: </label>
              <input
                  value={text}
                  onChange={({target: {value}}) => {
                      setSearchPanel(true);
                      setText(value);
                  }}
                  className={styles.input}
              />

              {searchPanel && text && <div className={styles.searchPanel}>
                {address.filter(item =>
                    item.address.toLowerCase().includes(text.toLowerCase())).map((item, index) =>
                    index < 50 ? <p key={item.id}>{item.address}</p> : null)}
              </div>}

            </span>








            {/*<span className={styles.inputWrap}>*/}
            {/*      <label>Улица: </label>*/}
            {/*      <input className={styles.input}/>*/}
            {/*</span>*/}
            {/*<div className={styles.wrap}>*/}
            {/*  <span>*/}
            {/*      <label>Дом:</label><input className={styles.input}/>*/}
            {/*  </span>*/}
            {/*    <span>*/}
            {/*      <label>Корпус:</label><input className={styles.input}/>*/}
            {/*  </span>*/}
            {/*</div>*/}
            <button type="submit" className={styles.searchButton}>Проверить</button>
        </form>
    )
}