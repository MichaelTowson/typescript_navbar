import { Link } from "react-router-dom";
import classes from "./NavBarDropDown.module.css";

interface Props {
  children?: {text: string, url:string}[]
}

const NavBarDropDown: React.FC<Props> = props => {

  return (
    <ul className={classes.dropdown__ul}>
      {props.children!.map((item) => (
        <li className={classes.dropdown__li}>
          <Link to={item.url}>{item.text}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBarDropDown