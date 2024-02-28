import React, { useState } from 'react'; // import react and use state hook 
import Button from 'react-bootstrap/Button'; // import a nice looking button from React Bootstrap
import Form from 'react-bootstrap/Form'; // import boostrap form 
// import FormControl from 'react-bootstrap/FormControl'; // import form control 

export default function Forms() {
    const [name, setName] = useState(""); // take in user name; by default empty string
    const [description, setDescription] = useState(""); // user description; by default description is also empty string 
    const [posts, setPost] = useState([]) // array to hold posts after you hit submit. empty array as default 

    // Define function to specify what to do when user clicks submit 
     const handleSubmit = (evt) => {
        evt.preventDefault(); // Prevent the default form submission behavior

       // add the submitted name and description to posts array 
            // do we need to store count of likes/dislikes here? 
            // note: we are adding in array with nested object entries so we can name properties 
           
            // we use setPost instead of push to avoid mutating array and instead
            // return new array each time 
            // uses array spread syntax to easily populate array with everything from posts
          setPost( 
          [ 
            ...posts, 
            { name: name, description: description } 
          ]
        );

        // display the newly added content 

        setName(''); // need to set name and description back to blank after you've submitted 
        setDescription('');
     };

    return ( // get the name first, then the description. set state in both based on user input. use boostrap form element and button for formatting  
    <><Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(evt) => setName(evt.target.value)} placeholder="Enter a name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} onChange={(evt) => setDescription(evt.target.value)} placeholder="Enter a description" as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" style={{backgroundColor: "#FF1493"}} onSubmit={handleSubmit} type="submit">Submit</Button>
        </Form>

    <div> 
         <p>{posts[0].name}</p>
         <p>{posts[0].description}</p>
    </div> 
    </> 
    );
};
