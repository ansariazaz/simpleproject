import React from 'react'
import img from './asset/model.jpg'
import left from './asset/left.svg'
import right from './asset/right.svg'
import star from './asset/star.svg'
const Image = () => {
  return (
    <div className='image'>
      <img src={img} alt="image" className='img' />
      <div className='text'>
        <div className='text-content'>
          <h1 className='line1'>"We have been using untitled to kick start every new project and cann't imagine working without it"</h1>
          <div className='andi'>
            <h1>Andi Lane</h1>
            <p className='star'>
            <img src={star} alt='icon' className='left icon'/>
            <img src={star} alt='icon' className='left icon'/>
            <img src={star} alt='icon' className='left icon'/>
            <img src={star} alt='icon' className='left icon'/>
            <img src={star} alt='icon' className='left icon'/>
            </p>
          </div>
          <div className='cont line2'>
            <div>
              <p>Founder,Catalog</p>
              <p>Web Design Agency</p>
            </div>
            <div className='arrow'>
              <div className='round'>
                <img src={left} alt='icon' className='left icon'/>
              </div>
              <div className='round'>
                <img src={right} alt='icon' className='right icon'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image