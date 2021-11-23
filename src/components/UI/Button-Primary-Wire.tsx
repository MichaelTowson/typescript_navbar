import classes from './Button-Primary-Wire.module.css'

interface Props {
    text: string
    toggleVisible: () => void
}

const Button: React.FC<Props> = (props) => {

  const toggleVisible = props.toggleVisible
  
  return (
    <div>
      <button 
        className={classes.button}
        onClick={toggleVisible}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;