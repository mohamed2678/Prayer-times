import React from 'react'

function PrayerTimes({name, time}) {
  return (
    <div className='prayer'>
    <p className='name_prayer'>{name}</p>
    <p className='time_prayer'>{time}</p>
    </div>
  )
}

export default PrayerTimes