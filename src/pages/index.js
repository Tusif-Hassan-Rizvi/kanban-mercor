import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div>
     {/* top navigation bar  */}
     <Navbar></Navbar>
     {/* side bar  */}
     <Sidebar></Sidebar>
     </div>
    </>
  )
}
