import React , { useRef } from 'react'
import PropTypes from 'prop-types'
import './search.scss';
import { searchUser, getAllUsers } from '../../actions/users';
import { connect } from 'react-redux';

const Search = ({ searchUser , getAllUsers }) => {
  const text = useRef('');

  const handleChange = () => {
    text.current.value.length > 0 ? 
    searchUser(text.current.value)
    :
    getAllUsers(); 
  }
  return <input id="search" 
            type="search" 
            required
            placeholder= 'Search ...'
            ref={text}
            onChange={handleChange}
          />
}

Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
}

export default connect(
  null ,
  { searchUser , getAllUsers}
)(Search)
