import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    
    </div>
  );
}

export default App;
