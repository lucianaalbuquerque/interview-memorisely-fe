import { getData } from '@/services/axiosClient';
import Lessons from './components/Lessons';
import { LessonProps } from './types/commonTypes';

export default async function Home() {
  const lessonsList: LessonProps[] = await getData();
  console.log(lessonsList[0]);

  return (
    <main className="flex flex-col min-h-screen">
      <h2>Good morning, Luke</h2>
      <Lessons data={lessonsList} />
    </main>
  )
}
