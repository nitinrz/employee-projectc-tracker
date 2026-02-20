import React from "react";
import A from "./A";
import C from "./C";
import F from "./F";
import Accept from "./Accept";




const TaskList = ({data}) => {
  return (
    <div className="flex overflow-x-auto  bg-gray-100 rounded-3xl no-scrollbar">
      {/* <A/> */}
      {data.tasks.map((e,idx)=>{
        if(e.active){
          return <Accept key={idx} data={e} />
        }
        if(e.newTask){
          return <A key={idx} data={e}/>
        }
        if(e.completed){
          return <C key={idx} data={e}/>
        }
        if(e.failed){
          return <F key={idx} data={e}/>
        }
      })}
      
     
      

    </div>
  );
};

export default TaskList;
