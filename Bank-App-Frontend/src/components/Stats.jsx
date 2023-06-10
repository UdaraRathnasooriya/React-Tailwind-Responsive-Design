import React, { Fragment } from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <Fragment>
      <section className='flex items-center justify-center flex-row flex-wrap mb-6 sm:mb-20'>
        {stats.map((stat)=>{
          return (
            <div key={stat.id} className='flex flex-row flex-1 m-3 items-center justify-center'>
              <p className='font-poppins font-semibold text-[30px] xs:text-[40px]'>{stat.value}</p>
              <p className='font-poppins text-[15px] xs:text-[20px]'>{stat.title}</p>
            </div>
          )
        })}


      </section>
    </Fragment>
  )
}

export default Stats