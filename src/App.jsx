import React, { useState } from 'react';
import Header from './components/Header/Header';
import Options from './components/Options/Options';
import DropdownBox from './components/DropdownBox/DropdownBox';

import FormComponent from './components/form/form';
function App() {
  
  const [checked,setChecked]=useState(false);

  return (
   
   <>
  

   <DropdownBox />
   <FormComponent/>
  
   
   </>
   
  );
}

export default App;
