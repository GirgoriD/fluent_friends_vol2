import { useState } from 'react';
import'./aboutElement.scss';

const AboutElement = ({data}) => {
  const [more, isMore] = useState(false);
  return (
    <div className='aboutElement'>
      <img src={data.img} alt='kidsAtTable' />
      <h2>{data.title}</h2>
      <p>
        {
        data.desc.length > 240 
        ? <span>
            {more ? data.desc : data.desc.slice(0,240)}<br/>
            <span onClick={() => isMore(prev => !prev)}>
              {more ? 'Read less...' : 'Read more...'}
            </span>
          </span>
        : data.desc
        }
      </p>
    </div>
  )
}

export default AboutElement;
