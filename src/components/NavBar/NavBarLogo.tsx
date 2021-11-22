import classes from './NavBarLogo.module.css'

import {Link} from "react-router-dom";

const Logo: React.FC = () => {
  return(
    <Link to="/">
      <img
        className= {classes.logo__img}
        src={process.env.PUBLIC_URL + '/images/cotribute_dark-p-500.png'} 
        alt="Co.tribute Logo"
      />
    </Link>
  )
}

export default Logo