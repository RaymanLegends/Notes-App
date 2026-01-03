import React from 'react'
import {Link} from "react-router";
import {PlusIcon} from "lucide-react"

const Navbar = () => {
  return (
    //the component definition and strucutre
    //base-300 sets it slightly darker than rest of background, border-b creates bottom border of the header, and border-base-content/10 sets that border to less opacity
    <header className='bg-base-300 border-b border-base-content/30'> 
    {/*mx-auto auto cetners, max-w-6xl puts space between the two, p-4 is vertical spacing*/}
        <div className = 'mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>ThinkBoard</h1>
                <div className='flex items-center gap-4'>
                    <Link to={"/create"} className = "btn btn-primary">
                    <PlusIcon className='size-5'/>
                    <span> New Note </span>
                    </Link>

                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
