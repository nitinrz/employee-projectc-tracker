import React from "react";
import AcceptTask from "./AcceptTask";

import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import A from "./A";




const TaskList = ({data}) => {
  return (
    <div className="flex overflow-x-auto  bg-gray-100 rounded-3xl no-scrollbar">
      {/* <A/> */}
      {data.tasks.map((e,idx)=>{
        if(e.active){
          return <AcceptTask key={idx} data={e}/>
        }
        if(e.newTask){
          return <A key={idx} data={e}/>
        }
        if(e.completed){
          return <CompleteTask  key={idx} data={e}/>
        }
        if(e.failed){
          return <FailedTask  key={idx} data={e}/>
        }
      })}
      
     
      

    </div>
  );
};

export default TaskList;
