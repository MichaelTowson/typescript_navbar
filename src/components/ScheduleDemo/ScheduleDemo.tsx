import classes from "./ScheduleDemo.module.css"
import ScheduleDemoForm from "./ScheduleDemoForm"

interface Props {
  scheduleDemoVisibility: boolean
  toggleVisible: () => void
}

const ScheduleDemo: React.FC<Props> = (props) => {

let scheduleDemoVisibile = props.scheduleDemoVisibility

const toggleVisible: () => void = props.toggleVisible

  return (
    <>
      
      {/* If scheduleDemo's state is set to visible, then... */}
      {scheduleDemoVisibile ?
        <div>

          {/* <Button> loads a blue background around the form, allowing the user to close the form by clicking. */}
          <button 
            onClick={toggleVisible}
            className={classes.container}
          />
          
          {/* POP-UP WINDOW/FORM */}
          <div className={classes.popUp__window}>
            
            {/* Exit Button */}
            <button 
              onClick={toggleVisible}
              className={classes.popUp__window_exitButton}
            >
              X
            </button>
            
            {/* Form Heading */}
            <h3 className={classes.popUp__window_header}>Let's schedule a demo.</h3> 
            <h4 className={classes.popUp__window_subtext}>Fill out the details below and we'll schedule a demo for you with the right person.</h4>
            
            {/* Form Component */}
            <ScheduleDemoForm 
              scheduleDemoVisibility={scheduleDemoVisibile}
              toggleVisible={toggleVisible}
            />
          
          </div>
    
        </div>
        : ""
      }
    
    </>
  )
}

export default ScheduleDemo