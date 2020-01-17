import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/users';
//comps.
import Item from './Item';
import Search from './Search';


const Dashboard = ({ users: { users , loading } , getAllUsers }) => {
  useEffect(
    () => {
      getAllUsers();    
    }, 
  [getAllUsers])
  
  return (
    <>
     <h2>Dashboard</h2>
     <Search />
      {
        users.length > 0 && !loading && (
          users.map( u => <Item key={u._id} info={u} />)
        )
      }
    </>
  )
}
const mapStateToProps = state => ({
  users: state.users
})

export default connect(
  mapStateToProps ,
  { getAllUsers }
)(Dashboard);