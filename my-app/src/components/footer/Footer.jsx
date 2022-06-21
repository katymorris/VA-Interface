import PropTypes from 'prop-types';

const Footer = (props) => {
    const sendMessage = () => {
        console.log('click')
    }
  return (
    <footer>
        <input id="inputMessage" />
        <button onClick={sendMessage}>Send</button>
    </footer>
  )
}

export default Footer