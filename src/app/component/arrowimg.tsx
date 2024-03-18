import Image from 'next/image'

export default function Arrowimg() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/arrow-right.png"
      width={20}
      height={20}
      alt="Picture of the author"
      />
   </div>
  )
}
