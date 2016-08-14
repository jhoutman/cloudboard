import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import '../styles/header.scss'

export default function Header({ board }) {
  return (
    <div className="header">
      <h1 className="header--title">
        <Link to="/">Cloudboard</Link>
      </h1>
      {board && <span className="header--board-name">
        <span className="header--board-name-prefix">Board: </span>
        <strong>{board}</strong>
      </span>}
    </div>
  )
}

Header.propTypes = {
  board: PropTypes.string.isRequired
}
