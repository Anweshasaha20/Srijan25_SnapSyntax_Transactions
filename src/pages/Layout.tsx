import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className='flex justify-center min-h-screen bg-gradient-to-b from-primary to-secondary'>
    <Navbar />
    <Outlet />
    </div>
  )
}

export default Layout