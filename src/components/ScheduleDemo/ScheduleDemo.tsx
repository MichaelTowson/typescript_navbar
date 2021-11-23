import classes from "./ScheduleDemo.module.css"

interface Props {
  scheduleDemoVisibility: boolean
  toggleVisible: () => void
}

const ScheduleDemo: React.FC<Props> = (props) => {

let scheduleDemoVisibile = props.scheduleDemoVisibility
const toggleVisible: () => void = props.toggleVisible

  return (
    <button onClick={toggleVisible}>
      {scheduleDemoVisibile ?
        <div className={classes.container}> 
          <div className={classes.popUp__window}>
            <h1>Let's schedule a demo</h1> 
            <h2>Fill out the details below nad we'll schedule a demo for you with the right person.</h2>
            <button onClick={toggleVisible}>Close Window</button>
          </div>
        </div>
        : ""}
    </button>
  )
}

export default ScheduleDemo