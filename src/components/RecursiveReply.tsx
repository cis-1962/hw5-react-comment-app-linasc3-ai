import React, { useState } from 'react';
import Forms from './Forms.tsx';

// define interface for type checking 
interface RecursiveReplyProps {
    content: {
      name: string;
      description: string;
    };
    level: number;
  }

  export const RecursiveReply: React.FC<RecursiveReplyProps> = ({ content, level }) => {
  const [replies, setReplies] = useState([]); // use an array to store the props 
  // we will just use the state from forms to hold reply content

  const [showReplyForm, setShowReplyForm] = useState(false); // manage that input form shown when ppl hit reply 

  // helper in order to update the array of replies for a given post  
  // take in name and description from input form 
  const addReply = ({name, description}) => { 
    if (replies.length < 3) { // check if the number of replies is less than 3 (acceptable)
      // if acceptable, add new reply to current list of replies (immutable bc .concat returns new array)
        // the entry to array is an object with the CONTENT of the reply aka name and description and the # of nested replies 
        setReplies(replies.concat({
          id: replies.length,
          name: name,
          description: description
        }));
      // reset handled in Forms function 
    }
  };

  // set the current state of the form visibility to the opposite of whatever it is 
  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

    // indent to show it is a reply (based on current level)
    // display the content of the reply
    // if the level is less than 3 and we're able to add a reply using form info, 
    // print the current reply and render it 
    return (
      <div style={{ marginLeft: `${level * 20}px`, marginTop: '10px' , marginBottom: '10px'}}>
        {/* Render the name and description from content prop */}
        <div>
          <h3>{content.name}</h3>
          <p>{content.description}</p>
        </div>
  
        {level < 3 && (
          <>
            <button onClick={toggleReplyForm}>Reply</button>
            {showReplyForm && (
              <Forms
                addReply={addReply}
                onSubmitSuccess={() => setShowReplyForm(false)}
              />
            )}
          </>
        )}
        {replies.map((reply, index) => (
          <RecursiveReply key={index} content={{ name: reply.name, description: reply.description }} level={level + 1} />
        ))}
      </div> 
    );
  
};


  
