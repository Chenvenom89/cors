import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

export default function Root() {
  return (
      <div>< Navbar></Navbar>
      <Outlet/>
      </div>
  )
}
