import React , { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getUser } from '../../actions/users';

const User = ({ getUser , match , user }) => {
  useEffect(() => {
    getUser(match.params.id);  
  }, 
  [getUser , match.params.id])
  
  return (
    user !== null ? 
      <>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user._id}</p>
      </> 
      : 
      "Loading.."
  )
}

User.propTypes = {
  getUser: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  user: state.users.user
})
export default connect(
  mapStateToProps , 
  { getUser }
)(withRouter(User))
