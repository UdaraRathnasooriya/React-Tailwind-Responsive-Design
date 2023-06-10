import React, { Fragment } from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <Fragment>
      <section className='flex  items-center justify-center'>
        <div className='w-full flex flex-col space-y-8 flex-wrap sm:space-x-8 sm:flex-row sm:justify-center sm:items-center items-center sm:space-y-0'>
          {clients.map((client)=>{
            return(
              <img src={client.logo} className='w-48'/>
            )
          })}
        </div>

      </section>
    </Fragment>
  )
}

export default Clients