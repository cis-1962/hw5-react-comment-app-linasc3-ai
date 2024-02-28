import './app.css';
import Form from './components/Forms.tsx'; // import form component 
import Vote from './components/Vote.tsx'; // import vote component 

function App() {

  return (
    <>
    {/* header for app */}
      <header className="Header"> 
        <h1> Lina&#39;s Commenting Platform </h1>   
      </header> 

    {/* handle form submit */}
    <Form /> 
      <div className="card">
      <Vote /> 
      </div>
  
    </>
  );
}

export default App;
