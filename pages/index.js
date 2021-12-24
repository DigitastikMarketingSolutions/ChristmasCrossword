import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/WhatsAppLogo.png";
import retrologo from "../public/retrologo.png";
import { useState } from "react";
import axios from "../utils/axios";
import { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.development";

export default function Home() {
    const router = useRouter()
    const [data, setData] = useState({ name: "", phone: "" });
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        document.addEventListener("load", function() {
            var viewport = document.querySelector("meta[name=viewport]");
            viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
        })
    }, [])

    const handleSubmit = () => {
        if(data.name && data.phone.length===10){
            setDisable(true);
            axios({
                method: 'post',
                data: data,
                url: '',
                headers: {'Access-Control-Allow-Origin': '*'}
            }).then(res => {
                if(res.data.messageCode==="success"){
                    router.push(`/game?phone=${data.phone}`)
                } else if(res.data.messageCode==="user-exists") {
                    alert("We've already received an entry from this number!");
                }
            })
            .catch(err => console.error(err))
        } else if(!data.name) {
            alert("Enter your name, please!")
        } else if(data.phone.length!==10) {
            alert("Please enter a valid Number!")
        }
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Merry Christmas by Retro Lounge</title>
                <meta
                    name="description"
                    content="Play the Christmas Crossword Puzzle, win Offers!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.heading}>
                <h1>CHRISTMAS GAMES</h1>
                <h3>Register with your WhatsApp Number{" "}
                <Image src={logo} alt="" width={23} height={23} />
                That&apos;s where we&apos;ll send you the offer coupon!</h3>
            </div>
            <div className={styles.register}>
                <div className={styles.input}>
                    <h3>Name</h3>
                    <input
                        type={"text"}
                        value={data.name}
                        onChange={(e) => {
                            setData((curr) => ({
                                ...curr,
                                name: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div className={styles.input}>
                    <h3>Phone Number</h3>
                    <input
                        type={"text"}
                        value={data.phone}
                        onChange={(e) => {
                            if (!e.target.value.match(/\D/g)) {
                                setData((curr) => ({
                                    ...curr,
                                    phone: e.target.value,
                                }));
                            }
                        }}
                    />
                </div>
                <button  className={styles.registerButton} onClick={handleSubmit}>Register &amp; Start</button>
            </div>
            <div className={styles.footer}>
                Presented by{" "}
                <Image src={retrologo} alt="" width={180} height={96} />
            </div>
        </div>
    );
}
