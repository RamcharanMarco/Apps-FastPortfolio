import { BrowserRouter, Routes, Route } from "react-router-dom"

/*import layouts*/
import MainLayout from "../layouts/MainLayout"
import AuthLayout from "../layouts/AuthLayout"
import UserLayout from "../layouts/UserLayout"
import ResumeLayout from "../layouts/ResumeLayout"

/*import mainpages*/
import Home from "../pages/Home"
import About from "../pages/About"

/*import authpages*/
import Login from "../pages/Login"
import Signup from "../pages/Signup"

/*import userpages*/
import Console from "../pages/Console"
import AddResume from "../pages/AddResume"
import EditResume from "../pages/EditResume"
import MyResume from "../pages/MyResume"
import PublicResume from "../pages/PublicResume"
import Settings from "../pages/Settings"
import ResumeSettings from "../pages/ResumeSettings"
import { Docs } from "../pages/Docs"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='docs' element={<Docs/>}/>
          <Route path='resume/:id' element={<PublicResume/>}/>
        </Route>
        <Route path='/auth/' element={<AuthLayout/>}>
          <Route path="login" element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Route>
        <Route path='/user/console/' element={<UserLayout/>}>
          <Route index element={<Console/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='resume/settings' element={<ResumeSettings/>}/>
        </Route>
        <Route path='/user/resume/' element={<ResumeLayout/>}>
          <Route index element={<Console/>}/>
          <Route path='add' element={<AddResume/>}/>
          <Route path='edit' element={<EditResume/>}/>
          <Route path='myresume' element={<MyResume/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}
