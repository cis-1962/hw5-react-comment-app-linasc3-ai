import './app.css';
import Form from './components/Forms.tsx'; // import form component 


function App() {

  return (
    <>
    {/* header for app */}
      <header className="Header"> 
        <h1> Lina&#39;s Commenting Platform </h1>   
      </header> 

    {/* handle form submit. the recursive reply component is called in form, as is vote
    so everything should be handled here */}
    <Form /> 
  
    </>
  );
}

export default App;
