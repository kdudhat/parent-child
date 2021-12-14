import logo from './logo.svg';
import './App.css';
import ParentWithoutOpt from './components/WithOutOptimized/ParentWithoutOpt';
import ParentWithOpt from './components/Optimized/ParentWithOpt';
import ChildWithOpt from './components/Optimized/ChildWithOpt';

function App() {
  return (
    <div className="App">
      {/* without optimized */}
      {/* <ParentWithoutOpt /> */}

      {/* with optimized */}
      <ParentWithOpt>
        <ChildWithOpt />
      </ParentWithOpt>
    </div>
  );
}

export default App;
