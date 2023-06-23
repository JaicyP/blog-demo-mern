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



const EditBlog = () => {
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
   
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        // Perform further actions with the selected file
        setUser({...user, [event.target.name]:file.name})
        console.log(event.target.name,file);
        console.log(user);
    };
   
   const onValueChange = (e) => {
    console.log(e.target.name, e.target.value)
    setUser({...user, [e.target.name]:e.target.value})
    console.log(user);
   }

   const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
   }



    return(
       <Container>
        <Typography variant="h4">Edit Blog</Typography>
         <FormControl>
            <InputLabel>Blog Title</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="blogtitle" value={user.blogtitle}/>
         </FormControl>
         <FormControl>
            <InputLabel>Blog Description</InputLabel>
            <Input  onChange={ (e) => onValueChange(e)} multiline={true} name="blogdescription" value={user.blogdescription}/>
         </FormControl>
         <FormControl>
              <InputLabel>Upload Image</InputLabel>
              <Input type="file"accept="image/jpeg, image/png, image/gif"onChange={handleFileInputChange} name="image" />
         </FormControl>
         <FormControl>
            <Button variant="contained" onClick={() => editUserDetails()}>Update Blog</Button>
         </FormControl>
       </Container>
    )
}
export default EditBlog;