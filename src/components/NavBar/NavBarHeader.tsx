import {useState} from 'react';
import { Link } from 'react-router-dom';

//Import style classes
import classes from './NavBarHeader.module.css'

//Import components
import NavBarDropDown from './NavBarDropDown'

//Define interface for props
interface Props {
    text: string
    url: string
    children?: [{text: string}, {url: string}]
}


const NavBarHeader: React.FC<Props> = props => {
    //Set initial state for dropdown menu beneath nav header to be false.
    const [dropDownVisibility, setDropDownVisibility] = useState(false);

    //Callback functions for displaying and hiding dropdown menus
    const mouseOver = () => {
        setDropDownVisibility(true);
    }
    const mouseLeave = () => {
        setDropDownVisibility(false);
    }
    

    //Page Render:
    return (
        <div className = {classes.header}
            onMouseEnter={mouseOver}
            onMouseLeave={mouseLeave}
        >
            <Link to={props.url}><h4>{props.text}</h4></Link>
            {dropDownVisibility && props.children![0] ? <NavBarDropDown children={props.children} /> : ""}
        </div>
    )
}

export default NavBarHeader