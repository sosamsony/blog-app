import React from 'react';
import "./Title.scss";

const Title = ({title, color}) => {
  return (
    <div className='section-title'>
        <h3 style={{ color: `${color}` }}>{title}</h3>
        <div className='horz-line' style = {{background: `${color}`}}></div>
        <p style={{ color: `${color}`}}>I write articles to showcase creative design and development superpowers in a way that fosters community's growth and marketing efforts.</p>
    </div>
  )
}

export default Title