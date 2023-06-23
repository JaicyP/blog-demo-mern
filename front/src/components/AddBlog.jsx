import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import { useState } from 'react';
import { addUser } from '../service/api';
import { useNavigate } from "react-router-dom";


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



const AddBlog = () => {
    const[user, setUser] = useState(defaultValue);

    const navigate = useNavigate();
   
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

   const addUserDetails = async () => {
       await addUser(user);
       navigate('/all');
   }



    return(
       <Container>
        <Typography variant="h4">Add Blog</Typography>
         <FormControl>
            <InputLabel>Blog Title</InputLabel>
            <Input onChange={ (e) => onValueChange(e)} name="blogtitle"/>
         </FormControl>
         <FormControl>
            <InputLabel>Blog Description</InputLabel>
            <Input  onChange={ (e) => onValueChange(e)} multiline={true} name="blogdescription"/>
         </FormControl>
         <FormControl>
              <InputLabel>Upload Image</InputLabel>
              <Input type="file"accept="image/jpeg, image/png, image/gif"onChange={handleFileInputChange} name="image"/>
         </FormControl>
         <FormControl>
            <Button variant="contained" onClick={() => addUserDetails()}>Add Blog</Button>
         </FormControl>
       </Container>
    )
}
export default AddBlog;