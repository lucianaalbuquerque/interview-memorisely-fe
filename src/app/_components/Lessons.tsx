import React from 'react';
import LessonCard from './LessonCard';
import { LessonProps } from '../_types/commonTypes';

const Lessons = ({ data }: { data: LessonProps[] }) => {
	return (
		<div className='flex flex-wrap justify-center my-4 gap-6 max-w-7xl w-full'>
			{data && data.map((lesson) => <LessonCard key={lesson.title} data={lesson} />	)}
		</div>
	);
};

export default Lessons;
