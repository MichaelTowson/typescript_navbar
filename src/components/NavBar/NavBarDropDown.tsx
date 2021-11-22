import { Link } from "react-router-dom";

interface Props {
  children?: [{text: string, url: string}]
}

const NavBarDropDown: React.FC<Props> = props => {

  return (
    <ul>
      {props.children!.map((item) => (
        <li><Link to={item.url}>{item.text}</Link></li>
      ))}
    </ul>
  )
}

export default NavBarDropDown