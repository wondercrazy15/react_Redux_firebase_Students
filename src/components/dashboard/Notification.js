import React from 'react';

export const Notifications =(props) =>{
    const {notifications} = props;
    return(
        <div className="section">
           <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">Notifications</span>
                       <ul className="notifications">
                            {notifications && notifications.map(item =>{
                                return(
                                    
                                    <li key={item.id}>
                                        <div class="row">
                                         <span className="pink-text col s1">
                                             {item.user}
                                         </span>
                                         <span className="col s2">{item.content}</span>
                                         </div>
                                    </li>
                                )
                            })}
                       </ul>
                       
                  
               </div>
           </div>
        </div>
    )
}
