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
			Lectures - Example of api call on client
			<Lessons data={lectures} />
		</div>
	);
};

export default Lectures;
