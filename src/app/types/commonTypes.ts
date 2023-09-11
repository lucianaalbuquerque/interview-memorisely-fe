export interface LessonProps {
  tutor: { name: string },
  softwareTool: {
    icon: string,
    title: string
  },
  keyword: string,
  title: string,   
  thumbnail: string,
  difficulty: string,
  language: string,
  length: number,
  publishedAt: string,
  introVideo: string,
  introLength: number
}