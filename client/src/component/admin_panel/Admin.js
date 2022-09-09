import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Divider } from '@mui/material'
import {Link, Outlet, useNavigate} from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate("")
  const logout=()=>{
    sessionStorage.removeItem("admin");
    navigate("/")
  }
  return (
    <div className="main" style={{display:"flex", minHeight:"84vh"}}>

        <div className='d-flex flex-column text-center' style={{width:"20%", backgroundColor:'black', color:"white"}}>
        <div className='my-3 d-flex justify-content-center '>
        <Avatar sx={{ bgcolor: deepOrange[500] }} style={{height:"120px" , width:"100px"}}/>
        </div>
        <Link to="/admin/home" style={{textDecoration:"none"}}><p style={{color:"#fff"}}>Home</p></Link> 
        <Divider className='my-2' style={{backgroundColor:"#fff",marginLeft:"50px", width:"70%"}}/>
        <Link to="/admin/subject" style={{textDecoration:"none"}}><p style={{color:"#fff"}}>Subject</p></Link>
        <Divider className='my-2' style={{backgroundColor:"#fff",marginLeft:"50px", width:"70%"}}/>
        <Link to="/admin/exam" style={{textDecoration:"none"}}><p style={{color:"#fff"}}>Exam</p></Link>
        <Divider className='my-2' style={{backgroundColor:"#fff",marginLeft:"50px", width:"70%"}}/>
        <Link to="/admin/result" style={{textDecoration:"none"}}><p style={{color:"#fff"}}>Result</p></Link>
        <Divider className='my-2' style={{backgroundColor:"#fff",marginLeft:"50px", width:"70%"}}/>
        <Link to="/admin/list" style={{textDecoration:"none"}}><p style={{color:"#fff"}}>Student List</p> </Link>
        <Divider className='my-2' style={{backgroundColor:"#fff",marginLeft:"50px", width:"70%"}}/>
        <p onClick={logout} style={{color:"#fff",cursor:"pointer"}}>Logout</p>
      </div>
      <Outlet/>
    </div>
  )
}

export default Admin