import React, { Fragment } from 'react'
import { features } from '../constants'
import styles , {layout} from '../style'
import Button from './Button'

const FeatureCard = ({icon,title,content,index}) =>{
  return (
    <div className='flex flex-row p-6 items-center '>
      <div className='bg-cyan-950 rounded-full w-[60px] h-[60px] p-4'>
        <img  src={icon} className='object-contain justify-center items-center flex '/>
      </div>
      <div className='flex flex-1 flex-col ml-3'>
        <p className='font-poppins text-xl font-semibold'>{title}</p>
        <p className='font-poppins'>{content}</p>

      </div>

    </div>
  )
}

const Business = () => {
  return (
    <Fragment>
      <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
          <p className={`${styles.heading2}`}>You do the Business <br/>We'll handle the money</p>
          <p className={`${styles.paragraph} max-w-[450px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, possimus ipsum? Sequi voluptates molestiae reprehenderit consequatur earum magni aperiam odio.</p>

          <Button styles={'mt-5'} />
        </div>

        <div className={`${layout.sectionImg} flex-col`} >
          {features.map((feature , index)=>{
            return (
              <div>
                <FeatureCard key={feature.id} {...feature} index={index}/>
              </div>
            )
          })}

        </div>

      </section>
    </Fragment>
  )
}

export default Business