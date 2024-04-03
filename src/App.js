import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { Provider } from "react-redux";
import Appstore from "./store/AppStore";
function App() {
  return (
    <div className="h-screen">
    <Provider store={Appstore}> 
    <AddToDo/>
      <ToDoList/>
    </Provider>
    
      </div>  
  );
}

export default App;
