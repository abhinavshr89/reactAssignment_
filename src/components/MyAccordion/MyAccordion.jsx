import React, { useState, useEffect } from "react";
import MySecAccordion from "../MySecAccordion/MySecAccordion";
import "./MyAccordion.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

function MyAccordion({
  ele,
  firstCheck,
  setFirstCheck,
  secondCheck,
  setSecondCheck,
}) {
  const [expanded, setExpanded] = useState(true);
  const [thirdCheckArray, setThirdCheckArray] = useState(
    new Array(ele.activity.length).fill(false)
  );

  const handleSecondChange = () => {
    const newSecondCheck = !secondCheck;
    setSecondCheck(newSecondCheck);
    // Update `thirdCheckArray` based on the new value of `secondCheck`
    setThirdCheckArray(new Array(ele.activity.length).fill(newSecondCheck));
};

// Adjust `useEffect` hooks to prevent unnecessary updates
// useEffect(() => {
//     console.log('3');

//     setSecondCheck(firstCheck);
//     setThirdCheckArray(new Array(ele.activity.length).fill(firstCheck));
// }, [firstCheck]);



useEffect(()=>{
   if(secondCheck){
    //make all the third Check true
    setThirdCheckArray(new Array(ele.activity.length).fill(true));
   }
},[secondCheck])


useEffect(() => {
    console.log('4');

    const allThirdChecked = thirdCheckArray.every((checked) => checked);
    setSecondCheck(allThirdChecked);
    
}, [thirdCheckArray]);


  return (
    <>
      <div className="civil-container">
        <div className="temp-container">
          <div className="civil-container-left">
            {expanded ? (
              <RemoveOutlinedIcon
                className="drop-icon"
                onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
              />
            ) : (
              <AddOutlinedIcon
                className="drop-icon"
                onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
              />
            )}
            <input
              className="check-box"
              type="checkbox"
              checked={firstCheck || secondCheck}
              onChange={handleSecondChange}
            />
            <p>{ele.name}</p>
          </div>
          <div className="civil-container-right">
            <div className="Rate box">{ele.rate}</div>
            <div className="Total box">₹{ele.total}</div>
          </div>
        </div>
      </div>

      {expanded &&
        ele.activity.map((item, index) => (
          <div key={index} className="activity-box">
            <MySecAccordion
              item={item}
              index={index}
              firstCheck={firstCheck}
              secondCheck={secondCheck}
              setSecondCheck={setSecondCheck}
              thirdCheck={thirdCheckArray[index]}
              setThirdCheck={(value) => {
                setThirdCheckArray((prevArray) => {
                  const newArray = [...prevArray];
                  newArray[index] = value;
                  const allThirdChecked = newArray.every((checked) => checked);
                  if (secondCheck !== allThirdChecked) {
                    setSecondCheck(allThirdChecked);
                  }
                  return newArray;
                });
              }}
            />
          </div>
        ))}
    </>
  );
}

export default MyAccordion;
