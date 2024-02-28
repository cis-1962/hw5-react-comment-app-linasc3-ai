import React, { useState } from 'react'; // import react and use state hook 
import Button from 'react-bootstrap/Button'; // import a nice looking button from React Bootstrap
import Form from 'react-bootstrap/Form'; // import boostrap form 
import Vote from './Vote.tsx'; // import vote component 

// import FormControl from 'react-bootstrap/FormControl'; // import form control 

export default function Forms() {
    const [name, setName] = useState(""); // take in user name; by default empty string
    const [description, setDescription] = useState(""); // user description; by default description is also empty string 
    const [posts, setPost] = useState([]) // array to hold posts after you hit submit. empty array as default 
    const [validated, setValidated] = useState(false); // use state to check if form was validated

    // Define function to specify what to do when user clicks submit 
     const handleSubmit = (evt) => {
      evt.preventDefault(); // prevent page refresh 
      const form = evt.currentTarget; // get currently submitted data in whole form
      
      // reset state 
      setValidated(false); 

      if (form.checkValidity() === true) { 
      // check validity is a built in method for HTML elements to check if it satisifies its constraints based on the required html tag below
       // add the submitted name and description to posts array 
            // do we need to store count of likes/dislikes here? 
            // note: we are adding in array with nested object entries so we can name properties 
           
            // we use setPost instead of push to avoid mutating array and instead
            // return new array each time 
            // uses array spread syntax to easily populate array with everything from posts
          setPost( 
          [ 
            ...posts, 
            { names: name, descriptions: description } 
          ]
        );
        
        setName(''); // need to set name and description back to blank after you've submitted 
        setDescription('');
      } else {
        setValidated(true); // this will allow us to prove that we've already validated something, and apply boostrap's validation CSS info 
        // aka doesn't meet validation criteria 
      }
      
     };

    return ( // get the name first, then the description. set state in both based on user input. use boostrap form element and button for formatting 
    // use react boostrap validation. start w the form that is already validated. use required keyword
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            placeholder="Enter a name"
          />
          <Form.Control.Feedback type="invalid">
            You must enter a name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
            placeholder="Enter a description"
          />
          <Form.Control.Feedback type="invalid">
            You must enter a description.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" style={{ backgroundColor: "#FF1493" }} type="submit">
          Submit
        </Button>
      </Form>

        {/* use map to print each element in posts array. take index of array and the current item, then return div element with the name and description of that submission. we use key to keep track of which ones we've already rendered */}
        <div>
        {posts.map((post, index) => (
          <><div className = "card" key={index}>
            <h3>{post.names}</h3>
            <p>{post.descriptions}</p>
          </div><Vote /></>
        ))}
      </div>
    </> 
    );
};
