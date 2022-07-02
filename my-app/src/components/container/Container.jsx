import Header from '../header/Header'
import Transcript from '../transcript/Transcript'
import Footer from '../footer/Footer'

const Container = (props) => {
  return (
    <>
        <Header />
        <Transcript />
        <Footer />
    </>
  )
}

Container.defaultProps = {

}

export default Container