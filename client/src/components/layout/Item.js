import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaInfo } from 'react-icons/fa'
const Item = ({info : { name , email , _id}}) => {
  return (  
    <div className="Item">
      <p>Name: <span> {name}</span></p>
      <p>Email: <span> {email}</span> </p>
      <Link to={`/dashboard/${_id}`}><FaInfo /></Link>
    </div>
  )
}

Item.propTypes = {
  info: PropTypes.object.isRequired,
}

export default Item
  