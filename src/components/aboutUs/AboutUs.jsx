import AboutElement from '../aboutElement/AboutElement';
import'./aboutUs.scss';
import data from '../../data';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <h1>About Us</h1>
        <div className="items">
          {
            data.map((item, index) => (
              <AboutElement key={index} data={item} />
            ))
          }
        </div>
    </div>
  )
}

export default AboutUs;