import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Divider } from '@mui/material'
import {Link, useNavigate, Outlet} from 'react-router-dom'

const Student = () => {
  const navigate = useNavigate("")
  const logout =()=>{
    sessionStorage.removeItem("user");
    navigate("/")
  }

  const mystyle={
    
    color:"#fff"
  }
  return (
    <div className="main" style={{display:"flex", minHeight:"84vh"}}>
        <div className='d-flex flex-column text-center' style={{width:"20%", backgroundColor:'black', color:"white"}}>
        <div className='my-3 d-flex justify-content-center '>
        <Avatar sx={{ bgcolor: deepOrange[500] }} style={{height:"120px" , width:"100px"}}/>
        </div>
        <Link to="/Student/home" style={{textDecoration:"none"}}><p style={mystyle}>Home</p></Link> 
        <Divider className='my-2' style={{backgroundColor:"grey",marginLeft:"50px", width:"70%"}}/>
        {/* <Link to="/Student/exam"><p>Exam</p></Link>
        <Divider className='my-2' style={{backgroundColor:"grey",marginLeft:"50px", width:"70%"}}/> */}
        <Link to="/Student/result" style={{textDecoration:"none"}}><p  style={mystyle}>Result</p></Link>
        <Divider className='my-2' style={{backgroundColor:"grey",marginLeft:"50px", width:"70%"}}/>
        <p  style={{cursor:"pointer"}} onClick={logout}>Logout</p>
      </div>
      <Outlet/>
    </div>
  )
}

export default Student