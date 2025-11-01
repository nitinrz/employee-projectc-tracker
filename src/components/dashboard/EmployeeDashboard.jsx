import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../taskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-gray-100 m-0 p-0'>
        <Header/>
        <TaskListNumber/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard