import'./aboutElement.scss';

const AboutElement = ({data}) => {
  return (
    <div className='aboutElement'>
      <img src={data.img} alt='kidsAtTable' />
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </div>
  )
}

export default AboutElement;
