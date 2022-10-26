import React from 'react'
import './contestantsCards.style.css'
import {contestantInfo} from '../../utils/info'

function ContestandCards() {
  return (
    <div className='contestant-container'>
    {
        contestantInfo ? 
        contestantInfo.map((contestant, index) => (
            <div key={index} className='contestant-card'> 
            <img src={contestant.image}  className='image-profile'/>
                <p>{contestant.name} </p>
            </div>
        ))

        :null
    }

    </div>
  )
}

export default ContestandCards