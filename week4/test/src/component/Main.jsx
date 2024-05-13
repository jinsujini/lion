import React, {useState} from 'react';

const Main =(props) => {
const [myName,setName] = useState("최수진");
    function ChangeName(){
        setName(myName === "최수진" ? "sujin" : "최수진");
        }

    return (
        <div>
            <h1>안녕하세요. {myName}입니다. </h1>
            <button onClick={ChangeName}>Change</button>
        </div>
    );
};

export default Main;