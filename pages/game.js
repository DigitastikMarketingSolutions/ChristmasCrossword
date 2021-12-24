import styles from "../styles/Game.module.css";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import initialState from "../data/initial";
import axios from '../utils/axios'

import sleigh from "../public/sleigh.png";
import reindeer from "../public/reindeer.png";
import tree from "../public/tree.png";
import star from "../public/star.png";
import santaclaus from "../public/santaclaus.png";
import cake from "../public/cake.png";
import jesus from "../public/jesus.png";
import present from "../public/present.png";
import { useRouter } from "next/router";

function GamePage() {
    const router = useRouter()

    const [result, setResult] = useState(initialState);
    const [modal, setModal] = useState([false, ""]);
    const [phone, setPhone] = useState("")
    const [time, setTime] = useState(null)
    useEffect(() => {
        setTime(Date.now())
    }, [])

    useEffect(() => {
        console.log(router.query.phone)
        setPhone(router.query.phone)
    }, [router.query.phone])


    const changeResult = (tag) => (value) => {
        setResult((curr) => {
            const newResult = { ...curr };
            newResult[tag][1] = value.toLowerCase();
            console.log(newResult);
            return newResult;
        });
    };

    const handleSubmit = () => {
        let correctCount = 0;
        for (const res in result) {
            if (result[res][0] === result[res][1]) {
                correctCount += 1;
            } else {
                console.log(result[res][0], " >>>> ", result[res][1]);
            }
        }
        console.log(correctCount, Object.keys(result).length);
        if (correctCount === Object.keys(result).length) {
            setModal((curr) => {
                let arr = [...curr];
                arr[0] = true;
                arr[1] =
                    "Great job! If you gave one of the 10 fastest entries, you'll win the Christmas Offer at The Retro Lounge!";
                return arr;
            });
            axios({
                method: 'put',
                url: `?phone=${phone}&time=${Date.now() - time}`,
                headers: {'Access-Control-Allow-Origin': '*'}
            }).then(_ => {
                console.log("Submitted")
            })
            .catch(err => console.error(err))
        } else {
            setModal((curr) => {
                let arr = [...curr];
                arr[0] = true;
                arr[1] = "Oops! Some entries are still wrong...";
                return arr;
            });
        }
    };

    return (
        <div className={styles.gamepage}>
            <Head>
                <title>Merry Christmas by Retro Lounge</title>
                <meta
                    name="description"
                    content="Play the Crossword Puzzle, win Offers!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.row}>
                <Image
                    className={styles.clue}
                    src={sleigh}
                    height={62}
                    width={90}
                    alt="/"
                />
                <Image
                    className={styles.clue}
                    src={reindeer}
                    height={110}
                    width={90}
                    alt="/"
                />
                <Image
                    className={styles.clue}
                    src={tree}
                    height={94}
                    width={90}
                    alt="/"
                />
                <Image
                    className={styles.clue}
                    src={star}
                    height={96}
                    width={90}
                    alt="/"
                />
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    placeholder="7"
                    value={result["1,6"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("1,6")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    placeholder="5"
                    value={result["2,2"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("2,2")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["2,6"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("2,6")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["3,2"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("3,2")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    placeholder="1"
                    value={result["3,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("3,4")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["3,5"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("3,5")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["3,6"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("3,6")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["3,7"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("3,7")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["3,8"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("3,8")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["3,9"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("3,9")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["4,2"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("4,2")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["4,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("4,4")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["4,6"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("4,6")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    placeholder="2"
                    value={result["5,1"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("5,1")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["5,2"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("5,2")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["5,3"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("5,3")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["5,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("5,4")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["5,5"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("5,5")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["5,6"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("5,6")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["5,7"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("5,7")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["5,8"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("5,8")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["6,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("6,4")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["6,6"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("6,6")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["7,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("7,4")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    placeholder="3"
                    value={result["7,6"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("7,6")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["7,7"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("7,7")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["7,8"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("7,8")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["7,9"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("7,9")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    placeholder="6"
                    value={result["8,2"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("8,2")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["8,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("8,4")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["9,2"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("9,2")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["9,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("9,4")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    placeholder="4"
                    value={result["10,2"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("10,2")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["10,3"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("10,3")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["10,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("10,4")(e.target.value);
                    }}
                />
                <input
                    className={styles.inputField}
                    value={result["10,5"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("10,5")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["11,2"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("11,2")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["11,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("11,4")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["12,2"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("12,2")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <input
                    className={styles.inputField}
                    value={result["12,4"][1].toUpperCase()}
                    onChange={(e) => {
                        changeResult("12,4")(e.target.value);
                    }}
                />
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
            </div>
            <div className={styles.row}>
                <Image
                    className={styles.clue}
                    src={santaclaus}
                    height={84}
                    width={90}
                    alt="/"
                />
                <Image
                    className={styles.clue}
                    src={cake}
                    height={79}
                    width={90}
                    alt="/"
                />
                <Image
                    className={styles.clue}
                    src={jesus}
                    height={78}
                    width={90}
                    alt="/"
                />
                <Image
                    className={styles.clue}
                    src={present}
                    height={89}
                    width={90}
                    alt="/"
                />
            </div>
            <button className={styles.submit} onClick={handleSubmit}>
                Submit &#128276;
            </button>
            <div
                className={styles.modal}
                style={{ display: modal[0] ? "flex" : "none" }}
            >
                <h1>{modal[1]}</h1>
                <button
                    className={styles.submit}
                    onClick={() => {
                        setModal((curr) => {
                            return [false, ""];
                        });
                        if(modal[1]==="Great job! If you gave one of the 10 fastest entries, you'll win the Christmas Offer at The Retro Lounge!"){
                            router.push('/');
                        }
                    }}
                >
                    CLOSE
                </button>
            </div>
        </div>
    );
}

export default GamePage;
