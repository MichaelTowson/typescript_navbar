//Import style classes
import classes from './NavBar.module.css'

//Import components
import NavBarHeader from './NavBarHeader'
import Logo from '../UI/Logo'
import Button from '../UI/Button'

const NavBar: React.FC = () => {

//Render
    return (
        <nav className = {classes.navBar}>
            <div className = {classes.navBar__logo}>
                <Logo />
            </div>
            <div className = {classes.navBar__menu}>
                <NavBarHeader text="Who we serve" url="/" children={[
                    {text: "Credit Union", url: "/"},
                    {text: "Fraternal Businesses", url: "/"}
                ]}/>
                <NavBarHeader text="Platform" url="/" children={[
                    {text: "Overview", url: "/"},
                    {text: "Architecture", url: "/"}
                ]}/>
                <NavBarHeader text="Why Contribute" url="/" children={[
                    {text: "Resources", url: "/"},
                    {text: "About", url: "/"}
                ]}/>
                <NavBarHeader text="Sign In" url="/" children={[]}/>
                <Button text="Demo"/>
            </div>
        </nav>
    )
}

export default NavBar