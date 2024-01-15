import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/mode-toogle'


export default function Home() {
  return (
    <>
      <p>Vartalap</p>
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle />
    </>
  )
}
