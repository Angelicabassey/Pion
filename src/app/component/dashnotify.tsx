import Image from 'next/image'

export default function Dashnotify() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/notification-bing.png"
      width={24}
      height={24}
      alt="Picture of the author"
      />
   </div>
  )
}
