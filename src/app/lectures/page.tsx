'use client'
import { getData } from '@/services/axiosClient';
import React, {useEffect, useState} from 'react'
import Lessons from '../components/Lessons';

const Lectures = () => {
  const [lectures, setLectures] = useState([])
  
  const fetchLectures = async () => {
    const results = await getData()
    setLectures(results);
  }

  useEffect(() => { fetchLectures(); }, [])

  console.log('onclient', lectures[0])
  
  return (
    <div>Lectures
      <Lessons data={lectures} />
    </div>
  )
}

export default Lectures