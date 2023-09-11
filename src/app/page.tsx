import { getData } from '@/app/_services/axiosClient';
import Lessons from './_components/Lessons';
import { LessonProps } from './_types/commonTypes';

export default async function Home() {
  const lessonsList: LessonProps[] = await getData();  
  console.log(lessonsList.result)
	return (
		<main className='flex flex-col min-h-screen'>
			<h2 className='ml-20 mt-9'>Good morning, Luke</h2>
			{lessonsList.length && <Lessons data={lessonsList} />}
		</main>
	);
}
