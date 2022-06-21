import PropTypes from 'prop-types';

const Navigation = (props) => {
  return (
    <header>
        <h1>nav</h1>
    </header>
  )
}

Navigation.defaultProps = {
    firstName: "Kathy",
    lastName: "Morris"
}

Navigation.PropTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
}

export default Navigation