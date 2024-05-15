import './App.css'
import { DesktopMenu } from './components/desktopmenu'
import { MobileMenu } from './components/mobilemenu'
import { MyOrder } from './components/myorder'


function App() {

  return (
    <>
      <DesktopMenu></DesktopMenu>
      <MobileMenu></MobileMenu>
      <MyOrder></MyOrder>
    </>
  )
}

export default App
