import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../taskList/TaskList'

const EmployeeDashboard = ({data}) => {



  return (
    <div className='bg-gray-100 m-0 p-0'>
      
        <Header data = {data}/>
        <TaskListNumber data = {data}/>
        <TaskList data = {data}/>
    </div>
  )
}

export default EmployeeDashboard