import React from 'react';




import Navbar from '../Navbar';


function AppContainer(props) {
  return (
    <>
        <Navbar/>
       
        {props.children}
      
    </>
  )
}


export default AppContainer;