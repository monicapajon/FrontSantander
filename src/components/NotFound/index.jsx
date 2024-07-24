import React from 'react'
import './style.css';

export const NotFound = ({title}) => {
    return (
        <div role='not-found' className="not-found">
        <h1 className="error">404</h1>
        <div className="page">{title}</div>
      </div>
    )
}
