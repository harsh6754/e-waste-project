import Link from 'next/link'
import {BiSearch, BiHomeAlt} from 'react-icons/bi'

const Navbar = () => {
    return(
        <div className='flex justify-between items-center py-1 px-1 bg-[#CFE8DD]'>
            <div>
                <Link href="/">
                    <p className='logo text-black font-inter text-2xl font-normal leading-normal'>My logo</p>
                </Link>
            </div>

            <nav className='nav-items'>
                <ul className='navbar-ul flex items-center gap-10'>
                    <li className='search w-3.5 h-1.5 shrink-0  '>
                        <BiSearch/>
                    </li>

                    <li className='home w-3.5 h-1.5 shrink-0'>
                        <BiHomeAlt/>
                    </li>

                   <li className='about text-green-900 font-inter text-base font-bold'>
                        <Link href="#">
                            <p>About Us</p>
                        </Link>
                   </li>

                   <li className='categories text-green-900 font-inter text-base font-bold'>
                        <Link href="#">
                            <p>Categories</p>
                        </Link>
                   </li>

                   <li>
                    <Link href='#'>
                        <button className='login-btn p-5.25 pr-11.25 pb-5 pl-10.25 rounded-lg border border-solid border-green-900 bg-green-900/10 text-green-900 font-inter text-base font-bold leading-normal'>
                            Log In
                        </button>
                    </Link>
                   </li>

                   <li>
                    <Link href='#'>
                        <button  className='signin-btn p-5.25 pr-11.25 pb-5 pl-10.25 rounded-lg border border-solid border-green-900 bg-green-900/10 text-green-900 font-inter text-base font-bold leading-normal'>
                            Sing In
                        </button>
                    </Link>
                   </li>


                </ul>
            </nav>
    
        </div>
    )
}

export default Navbar