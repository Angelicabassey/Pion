import Image from 'next/image'

export default function Sideimg() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/bro.png"
      width={240}
      height={240}
      alt="Picture of the author"
      />
   </div>
  )
}
