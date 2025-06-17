import React from 'react'
import aboutImg from "../assets/aboutimg.png";
import Banner from '../component/Banner';
import GTTalentsHealthcare from '../component/GTTalentsHealthcare';
const Training = () => {
  return (
    <div>
      <Banner img={aboutImg} title="Staffing Solutions" />

      <div className="px-5">
        <GTTalentsHealthcare />
      </div>
    </div>
  )
}

export default Training