import React from 'react'
import { Link } from 'react-router-dom'

const BottomAddproject = () => {
  return (
    <div>
        <Link to={'/addproject'}>
        <div data-dial-init class="fixed end-6 bottom-6 group">
            <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 focus:outline-none ">
                <svg class="w-5 h-5 transition-transform " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
            </button>
        </div>
        </Link>
    </div>
  )
}

export default BottomAddproject
