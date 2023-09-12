'use client';
import React, { useEffect, useState } from 'react';
import { getData } from '../_services/axiosClient';
import Lessons from '../_components/Lessons';

const Lectures = () => {
	const [lectures, setLectures] = useState([]);

	const fetchLectures = async () => {
		const results = await getData();
		setLectures(results);
	};

	useEffect(() => {
		fetchLectures();
	}, []);

	return (
		<div>
			<h2 className='ml-20 mt-9 text-lg'>Lectures </h2>
			<p className='ml-20 text-sm'>An example of api call on client</p>
			<Lessons data={lectures} />
		</div>
	);
};

export default Lectures;
