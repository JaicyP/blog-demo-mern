
import { getBlogs ,deleteBlog} from "../service/api";
import {useEffect, useState} from 'react';
import { Box, List, ListItem, ListItemText, ImageList, ImageListItem, styled, Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const styledList =styled(List)`
  width: 90%;
  margin: 50px auto 0 auto;
`



const AllBlogs = () => {
   
   const[users, setUsers] = useState([]);


   useEffect(() => {
        getAllBlogs();
   },[]);

   const getAllBlogs = async () => {
        let response = await getBlogs();
        setUsers(response.data);
   }

  const deleteBlogDetails =  (id) =>  {
     deleteBlog(id);
     setTimeout(()=>{
      window.location.reload();
     },300)
    
    
  }


 return(
       <styledList>
        <List>
           {
             users.map(user =>(
               <ListItem style={{color:'black'}} divider >
                 <ImageList cols={1} >
                    <ImageListItem>
                       <img src={`images/${user.image}`}loading="lazy"/>
                       </ImageListItem>
                    </ImageList>
              
                 <div style={{ marginLeft: 20, marginRight:20 }}>
                    <ListItemText component={Link} ><NavLink style={{textDecoration:'none'}} to={`/view/${user._id}`} ><h1 style={{color:'black', textDecoration:'none'}}>{user.blogtitle}</h1></NavLink></ListItemText>
                    <ListItemText style={{ maxHeight: 90, overflowY:"hidden" }}>{user.blogdescription}</ListItemText>
                 </div>
                 <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                 <Button variant="contained" color="secondary" onClick={() => deleteBlogDetails(user._id)}>Delete</Button>
               </ListItem>
             ))
           }
       </List>

       </styledList>
    )
}
export default AllBlogs;