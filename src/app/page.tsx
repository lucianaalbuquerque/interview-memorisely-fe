import { getData } from '@/app/_services/axiosClient';
import Lessons from './_components/Lessons';
import { LessonProps } from './_types/commonTypes';

export default async function Home() {
  const lessonsList: LessonProps[] = await getData();  

	return (
		<main className='flex flex-col justify-center items-center w-full min-h-screen bg-[#FAF9F6]'>
      <div className='flex flex-start max-w-7xl w-full'>
        <h2 className='md:ml-20 xl:ml-0 mt-9 text-lg'>Good morning, Luke</h2>
      </div>
			{lessonsList.length && <Lessons data={lessonsList} />}
		</main>
	);
}
