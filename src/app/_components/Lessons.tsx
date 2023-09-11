import React from 'react';
import LessonCard from './LessonCard';
import { LessonProps } from '../_types/commonTypes';

const Lessons = ({ data }: { data: LessonProps[] }) => {
	return (
		<div className='max-w-7xl flex flex-wrap ml-20 my-4 gap-6'>
			{data && data.map((lesson) => <LessonCard key={lesson.title} data={lesson} />	)}
		</div>
	);
};

export default Lessons;
