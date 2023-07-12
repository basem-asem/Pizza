import React, { useState } from 'react';
import styles from "../styles/OrderDetails.module.css"

const OrderDetail = ({total, createOrder, setCash}) => {

    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const handleClick= () => {
        createOrder({customer, address, total, method:0})
        console.log("Done!");
    }
    const handleClose= () => {
        setCash(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay $12 after delivery.</h1>
                <div className={styles.item}>
                    <label className={styles.label}>
                        Name Surname
                    </label>
                    <input type="text" placeholder='John Deo' className={styles.input} onChange={(e)=>setCustomer(e.target.value)}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>
                        Phone Number
                    </label>
                    <input type="text" placeholder='+1 234 567 89' className={styles.input} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>
                        AddressName Surname
                    </label>
                    <textarea className={styles.textarea} type="text" placeholder='Elton St. 505 NY' cols="30" rows="5" onChange={(e)=>setAddress(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>Order</button>
            <button className={styles.close} onClick={handleClose}>X</button>
            </div>
        </div>
    );
};

export default OrderDetail;