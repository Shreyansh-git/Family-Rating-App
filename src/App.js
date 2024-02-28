import {React, useState} from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import Header from "./Header";
import Drag from "./Drag.js";
import Drop from "./Drop.js";
import values from "../constants";

const root = ReactDOM.createRoot(document.getElementById('root'));

const DragDrop = () =>{
    const [final, setFinal] = useState (values);
    const replay = () => {
        let finale = final.map((all)=>{
            all.type=""
            return all;
        })
        setFinal(finale);
    }
    console.log("this is final" ,final)
    return(
        <div>
            <Header />
            <Drag final={final}/>
            <Drop final={final} setFinal={setFinal}/>
            <div className="replayBtn">
                <button className="btnIn" onClick={replay}>PLAY AGAIN</button>
            </div>
        </div>
    )
}

root.render(
    <DragDrop />
    // <React.StrictMode>
    // </React.StrictMode>
);
