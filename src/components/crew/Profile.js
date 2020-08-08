import React from 'react'
import Icon from '../utils/Icon'

export default function (title, iconSrc, description) {
  const style = {
    row: {
      height: '100px',
      display: 'flex',
      marginBottom: '20px'
    },
    description: {
      marginLeft: '20px',
      height: '100px',
      width: '100%',
      whiteSpace: 'pre'
    },
    img: {
      width: '100px'
    }
  }

  return (
    <article>
      <div>
        <h2>{title}</h2>
      </div>
      <div style={style.row}>
        <Icon src={iconSrc} style={style.img} />
        <div style={style.description}>{description}</div>
      </div>
    </article>
  )
}
