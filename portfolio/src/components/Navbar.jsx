import React from 'react'

const Navbar = () => {

    const menuLinks = [
        {name:'HOME', link: '#home'},
        {name:'ABOUT', link: '#about'},
        {name:'SKILLS', link: '#skills'},
        {name:'PROJECTS', link: '#about'},
        {name:'CONTACT', link: '#contact'},
    ]

  return (<nav className='text-white fixed w-full left-0 top-0 z-[999]'>
    <div className='flex item-center justify-between'>
        <div className="mx-7">
            <h4 className='text-4xl uppercase font-bold'>
                ni<span className=' text-gray-500'>co</span>las
            </h4> 
        </div>
        <div className='text-gray-900 md:block hidden px-7 py-2 font-medium bg-slate-100 rounded-bl-2xl '>
            <ul className='flex items-center gap-1 py-2 text-lg'>
                {
                menuLinks.map((menu,i)=>(
                    <li key={i} className='px-6 hover:text-gray-500'>
                        <a href={menu?.link}>{menu?.name}</a>
                    </li>
                ))
                }
            </ul>
        </div>
    </div>
  </nav>)
}

export default Navbar