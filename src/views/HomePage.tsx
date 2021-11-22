import classes from './HomePage.module.css'
import ContentGradientCentered from '../components/Layout/ContentGradientCentered'; 

const HomePage: React.FC = () => {

    return (
    <div className = {classes.view__container}>
        <ContentGradientCentered/>
    </div>
    )

}

export default HomePage;