import classes from './Button-Primary-Filled.module.css'

interface Props {
    text: string
    func?: () => void
}

const Button: React.FC<Props> = (props) => {

  const func = props.func
  
  return (
    <div>
      <button 
        className={classes.button}
        onClick={func}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;