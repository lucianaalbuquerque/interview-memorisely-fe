import React from 'react';
import LessonCard from './LessonCard';
import { LessonProps } from '../types/commonTypes';

const Lessons = ({ data }: { data: LessonProps[] }) => {
	return (
		<div>
			Lessons
	{/* 		{data.map((lesson) => {
				<LessonCard data={lesson} />;
			})} */}
		</div>
	);
};

export default Lessons;
