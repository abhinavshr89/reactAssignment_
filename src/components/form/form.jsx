import React, { useEffect, useState } from 'react';
import "./form.css"
function FormComponent({open}) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [client, setClient] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rfqCode, setRfqCode] = useState('');

  // Handle opening the overlay
  useEffect(()=>{
    setIsOverlayOpen(open)
  },[open])

  // Handle closing the overlay
  const handleDoneClick = () => {
    // Print the input data to the console
    console.log('Client:', client);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('RFQ Code:', rfqCode);

    // Close the overlay
    setIsOverlayOpen(!open);
  };

  return (
    <div>
     
      

     
      {isOverlayOpen && (
        <div className="overlay">
          <div className="overlay-content">
            <h3>Fill Further Details</h3>
            
            {/* Client dropdown */}
            <div>
              <label>Client:</label>
              <select value={client} onChange={(e) => setClient(e.target.value)}>
                <option value="">--Select--</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            
            {/* Date of commencement */}
            <div>
              <label>Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            
            {/* Date of completion */}
            <div>
              <label>End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            
            {/* RFQ Code */}
            <div>
              <label>RFQ Code:</label>
              <input
                type="text"
                value={rfqCode}
                onChange={(e) => setRfqCode(e.target.value)}
              />
            </div>
            
            {/* Done button */}
            <button onClick={handleDoneClick}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
