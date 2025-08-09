import React from 'react';
import {NavLink} from 'react-router-dom';
export const Sidebar = () => {
    const getActive = ({isActive}) => {
        return isActive ? " bg-gray-400 flex align-center gap-3 p-3 rounded-tr-full rounded-br-full" : "hover:bg-gray-400 flex align-center gap-3 p-3 rounded-tr-full rounded-br-full";   
    }

    return (
        <aside className="bg-gray-200 p-4 flex flex-col h-screen p-4 w-48 gap-4 font-semibold">
            
            <NavLink className ={getActive}  to="/">
            <span className="material-symbols-outlined">home</span>
            <span>Home</span>
            </NavLink>
            <NavLink className ={getActive}  to="/important">
            <span className="material-symbols-outlined">star</span>
            <span>Important</span>
            </NavLink>
            <NavLink className ={getActive}  to="/archive">
            <span className="material-symbols-outlined"> archive </span>
            <span>Archive</span>
            </NavLink>
            <NavLink className ={getActive}  to="/bin">
            <span class="material-symbols-outlined"> delete </span>
            <span>Bin</span>
            </NavLink>
        </aside>
    )
}

export default Sidebar;