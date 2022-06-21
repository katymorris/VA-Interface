import PropTypes from 'prop-types';
import Navigation from './Navigation'

const Header = (props) => {
  return (
    <header>
        <h1>{props.firstName} {props.lastName}</h1>
        <Navigation />
    </header>
  )
}

Header.defaultProps = {
    firstName: "Kathy",
    lastName: "Morris"
}

Header.PropTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
}

export default Header