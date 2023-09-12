'use client'
 
export default function Error({error}: {error: Error}) {
 
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen bg-[#FAF9F6]'>
      <h2>Something went wrong!</h2>
    </div>
  )
}