import Image from 'next/image'

export default function Sideimg() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/logos_telegram.png"
      width={20}
      height={20}
      alt="Picture of the author"
      />
   </div>
  )
}
