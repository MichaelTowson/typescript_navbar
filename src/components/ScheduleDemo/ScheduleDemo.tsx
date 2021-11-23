import Fragment from 'react'
import classes from "./ScheduleDemo.module.css"

interface Props {
  scheduleDemoVisibility: boolean
  toggleVisible: () => void
}

const ScheduleDemo: React.FC<Props> = (props) => {

let scheduleDemoVisibile = props.scheduleDemoVisibility
const toggleVisible: () => void = props.toggleVisible

  return (
    <a onClick={toggleVisible}>
      {scheduleDemoVisibile ?
        <div className={classes.container}> 
          <div className={classes.popUp__window}>
            <p>Form goes here</p> 
            <button onClick={toggleVisible}>Close Window</button>
          </div>
        </div>
        : ""}
    </a>
  )
}

export default ScheduleDemo