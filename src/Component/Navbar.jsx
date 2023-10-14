import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className=' z-20 px-40 absolute top-0 left-0 flex items-center justify-between w-full h-20'>

      <div className='flex items-center justify-center'>
        <img src={logo} alt="Logo" />
        <ul className=' flex justify-center items-center font-bold text-xl'>
          <li className=' mx-6'>Solutions </li>
          <li className='mx-6'>Features</li>
          <li className='mx-6'>Blogs</li>
          <li className='mx-6'>About</li>
        </ul>
      </div>

      <div>
        <button className=' border-sky-400 text-sky-400 font-bold border-2 px-6 mx-2 py-2 rounded-lg'> Login </button>
        <button className=' text-white bg-sky-400 font-bold border-sky-400 border-2 px-6 mx-2 py-2 rounded-lg'> Register </button>
      </div>

    </div>
  )
}

export default Navbar