import React from "react";
import { stats } from "../../constants";
export const Tickets = () => {
  return (
   
   <div className='stats-outer'>
    {stats.map((stat)=>(
      <div key={stat.id} className='stat-key'>
          <h4 className='stat-value '>
            {stat.value}
         </h4>
          <p className='stats-para'>{stat.title} </p>
      </div>
    ))}
  
     
    </div>
  );
};
export default Tickets
