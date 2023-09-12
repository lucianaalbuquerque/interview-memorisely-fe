import React from 'react';
import { LessonProps } from '../_types/commonTypes';
import Image from 'next/image';
import Link from 'next/link';
import { capitalize } from '../_helpers/commons';

const LessonCard = ({ data }: { data: LessonProps }) => {
	return (
		<Link href={data.introVideo} className='flex flex-col h-80 min-w-min w-[18.5rem]'>
			<div className='h-[12rem] w-full relative'>
				<div className='flex items-center gap-1 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					<Image
						width={16}
						height={16}
						src={data.softwareTool.icon}
						alt={data.softwareTool.title}
					/>
					<p className='text-white'>{data.softwareTool.title}</p>
				</div>

				<Image
					layout='fill'
					objectFit='cover'
					src={data.thumbnail}
					alt={data.title}
					className={'blur-[2px] rounded-md'}
				/>
			</div>

			<div className='flex flex-col place-content-evenly h-[6rem] mt-2'>
				<p className='text-xs bold text-gray-500'>
					{capitalize(data.language)} - {capitalize(data.difficulty)} - {Math.round(data.length/60)}m
				</p>
				<p className='text-sm text-gray-700 font-bold'>{data.title}</p>
				<p className='text-xs text-gray-500'>{data.tutor.name}</p>
			</div>
		</Link>
	);
};

export default LessonCard;
