import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStrorage'
import { AuthContext } from './context/AuthProvider'

// localStorage.clear()
const App = () => {

  useEffect(() => {
   const loggedInUser = localStorage.getItem('loggedInUser')
   if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
setLoggedInUserData(userData.data)
    
   }
  }, [])
  



  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
},[])

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
  
const authData = useContext(AuthContext)
// console.log(authData);



// useEffect(() => {
//   if(authData){
//      const loggedInUser = localStorage.getItem('loggedInUser')
//     if (loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   } 
// }, [authData])


const handleLogin = (email,password)=>{
if(email == 'admin@company.com' && password == '123'){
setUser('admin')
// setLoggedInUserData(admin)
localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
// console.log(user);

}else if (authData ){
  const employee = authData.employees.find((e)=> email == e.email && password == e.password)
  if (employee){
    setUser('employee')
    setLoggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}))
  }
  // console.log(user);
  
}
else{
  alert(`Invalid Credentials`)
}

}
  return (
    <>
      {!user ? <Login handleLogin = {handleLogin}/>: ''}
    {/* {user == 'admin' ? <AdminDashboard/> :( user == 'employee' ? <EmployeeDashboard data = {loggedInUserData}/> : null)} */}
    {user == 'admin' ? <AdminDashboard/> :( user == "employee" ? <EmployeeDashboard data = {loggedInUserData} /> : null)}
    </>
  )
}

export default App