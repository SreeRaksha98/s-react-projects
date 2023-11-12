import React, {useState} from 'react'
import ChildComp from './ChildComp'

const Upshift = () => {
    const [counter, setCounter] = useState(0)
    const handleClick = (count)=>{
        setCounter(count)
    }
  return (
    <div>
        <div className='counter'>
            count: {counter}
        </div>
        <div className='childComponent'>
            <ChildComp counter={counter} handleClick={handleClick} />
        </div> 
    </div>
  )
}

export default Upshift