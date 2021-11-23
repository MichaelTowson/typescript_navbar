import { useState } from "react"

import classes from "./ScheduleDemo.module.css"

const ScheduleDemo: React.FC = () => {

  //Set initial visibility state of component to be false.
    const [visible, setVisible] = useState(false);

    //Callback function for toggling visibility of component.
    const toggleVisible = () => {
      if(visible) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }

  return (
    <div>
      {visible ? <p>Form goes here</p> : ""}
    </div>
  )
}

export default ScheduleDemo