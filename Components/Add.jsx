import {useState} from 'react';
import styles from "../styles/Add.module.css";
import axios from 'axios';

const Add = ({setClose}) => {
    const [file, setFile] = useState(null); 
    const [title, setTitle] =useState(null); 
    const [desc, setDesc] = useState(null); 
    const [prices, setPrices] = useState([]); 
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);
    const changePrice = (e, size)=>{
        const curentPrices = prices
        curentPrices[size] = e.target.value
        setPrices(curentPrices);
    }
    const handleExtraInput = (e)=>{
        setExtra({...extra, [e.target.name]: e.target.value});
    }
    const handleExtra = ()=>{
        setExtraOptions((prev) => [...prev, extra])
    };
    const handleDelete = (id)=>{
        setExtraOptions((prevOptions) => prevOptions.filter((option) => option.id !== id));
    }
    // upload image to cloud storage called cloudinary
    const handleCreate = async ()=>{
        const data = new FormData();
        data.append("file", file)
        data.append("upload_preset", "uploads")
        try{
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dwgdiedev/image/upload", data);
            const {url} = uploadRes.data;
            const newProduct = {
                title,desc,prices,extraOptions,img:url,
            };
            await axios.post("https://alex-pizza.vercel.app/api/products", newProduct);
            setClose(true)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={()=>setClose(true)} className={styles.close}>X</span>
                <h1 className={styles.title}>Add a new Pizza</h1>
                <div className={styles.item}>
                    <label className={styles.label}> Choose an Image</label>
                    <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input type="text" className={styles.input} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Desc</label>
                    <textarea type="file" rows={4}className={styles.textarea} onChange={(e)=>setDesc(e.target.value)}/>
                </div>                
                <div className={styles.item}>
                    <label className={styles.label}>Prieces</label>
                    <div className={styles.prices}>
                    <input className={`${styles.input} ${styles.inputSm}`} type="number" placeholder='small' onChange={(e)=>changePrice(e,0)}/>
                    <input className={`${styles.input} ${styles.inputSm}`} type="number" placeholder='medium' onChange={(e)=>changePrice(e,1)}/>
                    <input className={`${styles.input} ${styles.inputSm}`} type="number" placeholder='large' onChange={(e)=>changePrice(e,2)}/>
                    </div>
                </div>                
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                    <input className={`${styles.input} ${styles.inputLg}`} type="text" placeholder='item' name='text' onChange={handleExtraInput}/>

                    <input className={`${styles.input} ${styles.inputLg}`} type="number" placeholder='price' name='price' onChange={handleExtraInput}/>

                    <button className={styles.extraButton} onClick={handleExtra}>Add</button>
                    </div>
                    <div className={styles.extraItems}>
                        {extraOptions.map(option=>(<span key={option.id} className={styles.extraItem} onClick={() =>handleDelete(option.id)}>{option.text}</span>))}
                    </div>
                </div>
                <button className={styles.addButton} onClick={handleCreate}>Create</button>
            </div>
        </div>
    );
};

export default Add;