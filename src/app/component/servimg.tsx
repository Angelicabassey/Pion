import Image from 'next/image'

export default function Servimg() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/cuate.png"
      width={180}
      height={180}
      alt="Picture of the author"
      />
   </div>
  )
}
