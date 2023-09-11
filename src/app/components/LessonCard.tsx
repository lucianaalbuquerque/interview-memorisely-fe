import React from 'react'
import { LessonProps } from '../types/commonTypes'

const LessonCard = ({data}: {data: LessonProps}) => {
  return (
    <div>LessonCard
      <p>{data.tutor.name}</p>
    </div>
  )
}

export default LessonCard