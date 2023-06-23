import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import { useState, useEffect } from 'react';
import { editUser, getBlog } from '../service/api';
import { useNavigate , useParams} from "react-router-dom";



const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`

const defaultValue= {
    blogtitle: '',
    blogdescription: '',
    image: null
};



const ViewBlog = () => {
    const[user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async () => {
        const response = await getBlog(id)
        setUser(response.data)
    }




    return(
       <Container style={{width:'75%'}}>
        
           <h1> {user.blogtitle}</h1>
           
           <div><img width={'100%'} height={'450px'} src={`../images/${user.image}`}></img></div>
         
            <div>{user.blogdescription}</div>
      
  
       </Container>
    )
}
export default ViewBlog;