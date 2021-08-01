import classNames from 'classnames';
import { useState } from 'react';
function Dropdown({ options, onOptionSelect }) {

  // Keep track of whether the dropdown is open or not.
  const [isActive, setActive] = useState(false);

  return (
    // Toggle the dropdown if the button is clicked
    <>
    <button onClick={() => setActive(!isActive)}>
      Options
    </button>
 
    <div className={classNames("origin-bottom-right absolute right-0 mt-2 w-56 rounded-md shadow-lg", {
      block: isActive,
      hidden: !isActive
    })}>{options.map((option) => <div key={option} onClick={(e) => onOptionSelect(option)}>{option}</div>)}
   </div>
   </>
  )
}

export default Dropdown;