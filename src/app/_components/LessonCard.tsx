import React from 'react';
import { LessonProps } from '../_types/commonTypes';

const LessonCard = ({ data }: { data: LessonProps }) => {
	return (
		<div className='h-80 min-w-min w-[18.5rem] bg-gray-500'>
			{/* <Image height={16} width={16} src={data.thumbnail} alt={data.title}> */}
			<p>{data.language} - {data.difficulty} - {data.length}</p>
			<p>{data.title}</p>
			<p>{data.tutor.name}</p>
		</div>
	);
};

export default LessonCard;
