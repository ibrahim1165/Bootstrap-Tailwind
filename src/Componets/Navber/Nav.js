import React, { useState } from 'react';
import LInk from '../Link/LInk';
import { MenuIcon, MenuIcone, XIcon } from '@heroicons/react/solid'

const Nav = () => {
    const [open,setopen]=useState(false)
    const routes =[
        {id:1,name:'home', link:'/home'},
        {id:2, name:'Shop', link:'/shop'},
        {id:3, name:'Deals', link:'/deals'},
        {id:4, name:'Groups', link:'/Grops'},
        {id:5, name:'Contact', link:'/Contact'}
    ];
    return (
        <nav className="bg-indigo-200">
            <div onClick={()=>setopen(!open)} className='w-6 h-6 md:hidden'>
                {open?<XIcon></XIcon>:<MenuIcon></MenuIcon>}
            </div>
           <ul className={`md:flex justify-center bg-indigo-200 w-full md:static absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-200px]'}`}>
             {
                 routes.map(route =><LInk key={route.id} route={route}></LInk>)
             }
           </ul>
        </nav>
    );
};

export default Nav;