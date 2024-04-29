import React, { useState, useEffect } from "react";
import civilData from "../data";
import "./Accordion.css";
import MyAccordion from "../MyAccordion/MyAccordion";

function Accordion({ firstCheck, setFirstCheck }) {
  const [secondCheckArray, setSecondCheckArray] = useState(
    new Array(civilData.length).fill(false)
  );

  const updateSecondCheckArray = (index, value) => {
    setSecondCheckArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = value;
      return newArray;
    });

    // Update `firstCheck` if all `secondCheckArray` values are true
    const allSecondChecked = secondCheckArray.every((checked, idx) =>
      idx === index ? value : checked
    );
    setFirstCheck(allSecondChecked);
  };

 
  useEffect(() => {
    console.log('1');
    if (firstCheck) {
       
        setSecondCheckArray(new Array(civilData.length).fill(true));
    }
}, [firstCheck]);

useEffect(() => {
    const allSecondChecked = secondCheckArray.every((checked) => checked);
    setFirstCheck(allSecondChecked);
}, [secondCheckArray]);


  return (
    <div className="civil-container">
      {civilData.map((ele, indx) => (
        <MyAccordion
          key={ele.id}
          indx={indx}
          ele={ele}
          firstCheck={firstCheck}
          secondCheck={secondCheckArray[indx]}
          setSecondCheck={(value) => updateSecondCheckArray(indx, value)}
        />
      ))}
    </div>
  );
}

export default Accordion;
