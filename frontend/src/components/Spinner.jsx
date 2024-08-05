import React from 'react';
import {ClipLoader} from "react-spinners";

function Spinner() {
  return (
    <>
    <section
     style={{
      minHeight:"525px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
     }}>
      <ClipLoader size={150} />

    </section>
    </>
  )
}

export default Spinner
