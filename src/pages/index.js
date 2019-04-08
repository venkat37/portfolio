import React from "react"
import img from './under_construction.svg';
import './styles.css';

export default () => {
  return (
    <div className="under-construction">
      <img src={img} width="450"/>
      <span>Site Under Construction</span>
    </div>
  )
}
