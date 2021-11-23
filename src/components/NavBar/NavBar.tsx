//Import style classes
import classes from './NavBar.module.css'

//Import components
import NavBarHeader from './NavBarHeader'
import Logo from './NavBarLogo'
import ScheduleButton from '../UI/Button-Primary-Wire'

interface Props {
    toggleVisible: () => void
}

const NavBar: React.FC<Props> = (props) => {

//Render
    return (
        <nav className = {classes.navBar__container}>
            <div className = {classes.navBar__logo}>
                <Logo />
            </div>
            <div className = {classes.navBar__menu}>
                <NavBarHeader text="Who we serve" url="/" children={[
                    {text: "Credit Unions & Banks", url: "/"},
                    {text: "Fraternal Businesses", url: "/"}
                ]}/>
                <NavBarHeader text="Platform" url="/" children={[
                    {text: "Overview", url: "/"},
                    {text: "Architecture", url: "/"}
                ]}/>
                <NavBarHeader text="Why Co.tribute" url="/" children={[
                    {text: "Resources", url: "/"},
                    {text: "About", url: "/"}
                ]}/>
                <NavBarHeader text="Sign In" url="/" children={[]}/>
                <ScheduleButton text="Schedule Demo" toggleVisible={props.toggleVisible}/>
            </div>
        </nav>
    )
}

export default NavBar