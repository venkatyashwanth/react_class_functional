import Functional from './components/Functional';
import Classcomp from './components/Classcomp';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Class and Functional Components</h1>
      <hr/>
      <h2>Functional Component</h2>
      <Functional/>
      <hr/>
      <h2>Class Component</h2>
      <Classcomp/>
      <hr/>
      <h2>Counter through class component</h2>
      <Counter/>
    </div>
  );
}

export default App;
