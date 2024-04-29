import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./testing.css";

function MySecAccordion({ item, index, firstCheck, secondCheck, thirdCheck, setThirdCheck }) {
    const [show, setShow] = useState(false);
    const [fourthCheckArray, setFourthCheckArray] = useState(new Array(item.length).fill(false));

    // Handle the change of third-level checkbox
    const handleThird = () => {
    

        const newThirdCheck = !thirdCheck;
        setThirdCheck(newThirdCheck);
        setFourthCheckArray(new Array(item.length).fill(newThirdCheck));
    };
    
    const handleFourth = (idx) => {
        setFourthCheckArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[idx] = !prevArray[idx];
            const allFourthChecked = newArray.every((checked) => checked);
            setThirdCheck(allFourthChecked);
            return newArray;
        });
    };
    
    // Review the `useEffect` hook
    // useEffect(() => {
    //     console.log('5');
    //     setThirdCheck(firstCheck || secondCheck);
    //     setFourthCheckArray(new Array(item.length).fill(firstCheck || secondCheck ||thirdCheck));
    // }, [firstCheck, secondCheck]);
    
    //if
    useEffect(()=>{
        if(thirdCheck){
         
         setFourthCheckArray(new Array(item.length).fill(true));
        }
     },[thirdCheck])

     useEffect(() => {
        console.log('4');
    
        const allFourthChecked = fourthCheckArray.every((checked) => checked);
        setThirdCheck(allFourthChecked);
        
    }, [fourthCheckArray]);
    

    return (
        <>
            <div className="activity-container">
                {show ? (
                    <ExpandLessIcon
                        className="toggle-icon"
                        onClick={() => setShow((prevShow) => !prevShow)}
                    />
                ) : (
                    <ExpandMoreIcon
                        className="toggle-icon"
                        onClick={() => setShow((prevShow) => !prevShow)}
                    />
                )}
                <input
                    className="check-box activity-check-box"
                    type="checkbox"
                    checked={firstCheck || secondCheck || thirdCheck}
                    onChange={handleThird}
                />
                <p>Activity {index + 1}</p>
            </div>
            <div className="work-container">
                {show && item.map((ele, idx) => (
                    <div key={idx} className="work-box">
                        <input
                            type="checkbox"
                            className="check-box work-check-box"
                            checked={firstCheck || secondCheck || thirdCheck || fourthCheckArray[idx]}
                            onChange={() => handleFourth(idx)}
                        />
                        <p>{ele}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MySecAccordion;
