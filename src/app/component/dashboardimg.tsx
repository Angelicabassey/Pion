import Image from 'next/image'

export default function Dashboardimg() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/element-3.png"
      width={20}
      height={20}
      alt="Picture of the author"
      />
   </div>
  )
}
