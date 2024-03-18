import Image from 'next/image'

export default function Testimg() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/Group 195.png"
      width={40}
      height={40}
      alt="Picture of the author"
      />
   </div>
  )
}