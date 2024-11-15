import { useState } from 'react'
import AppRouter from './router';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppRouter />
    </div>
  );    
};
export default App;
