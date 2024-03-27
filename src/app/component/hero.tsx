import Image from 'next/image'

export default function hero() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/1 3.png"
      width={400}
      height={400}
      alt="Picture of the author"
      />
   </div>
  )
}

