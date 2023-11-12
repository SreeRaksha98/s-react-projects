import React from 'react'

function ChildComp({counter, handleClick}) {

  return (
    <div>ChildComp <button 
        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none card-btn' 
        onClick={()=>handleClick(counter+1)}
    >Update to {`->${counter+1}`}</button>

    </div>
  )
}

export default ChildComp