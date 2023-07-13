import React, { useEffect, useState } from 'react'
import client from '../../../sanity/client';
import WhatToDoDescription from '../whatToDoDescription/WhatToDoDescription';

const MainWhatToDoInAyapel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const [allPostData, setAllPostData] = useState(null)
    useEffect(() => {
      client
        .fetch(
          `*[_type == "whatDoInAyapel"] {
            _id,
            backgroundImage{
              asset->{
                _id,
                url
              }
            },
            title,
            text,
            iconImage{
              asset->{
                _id,
                url
              }
              },
            componentSwiper[]{
              name,
              address,
              cellPhone,
              instagram,
              facebook,
              whatsapp,
              image{
                asset->{
                  _id,
                  url
                }},
              }
  
        }`
        )
        .then((data) => setAllPostData(data))
        .catch(console.error)
    }, [])
    console.log(allPostData)
    console.log('SOY AYAPEL')
  
    const WhatToDo = () => {
  
  
      const handleToComponent = ({ index }) => {
        console.log('voy a arepa');
        setActiveIndex(index);
      };
  
  
      return (
        <>
          <section className="whatToDo__container">
            <ul>
              {allPostData?.map((todo, index) => (
                <div
                  className={`whatToDo__list ${activeIndex === index ? 'active' : ''
                    }`}
                  key={index}
                  onClick={() => handleToComponent({ index })
                  }
                >
                  <figure>
                    {todo?.iconImage ?
                      <img src={todo?.iconImage?.asset.url} alt="" />
                      :
                      <img src={todo?.backgroundImage?.asset.url} alt="" />
                    }
                  </figure>
                  <li>{todo?.title}</li>
                </div>
              ))}
            </ul>
          </section>
        </>
      );
    };


    return (
        <div className='ayapel__container__ppl'>
              <article className='ayapel__container__columnLeft'>
                <WhatToDo />
              </article>
              <article className='ayapel__container__columnRight'>
                {allPostData &&
                  <WhatToDoDescription activeIndex={activeIndex} allPostData={allPostData} />
                }
              </article>
            </div>
    )
  
}

export default MainWhatToDoInAyapel