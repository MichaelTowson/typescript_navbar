import {Link} from "react-router-dom";

const Logo: React.FC = () => {
  return(
    <Link to="/">
      <img src={process.env.PUBLIC_URL + '/images/cotribute_dark-p-500.png'}></img>
    </Link>
  )
}

export default Logo