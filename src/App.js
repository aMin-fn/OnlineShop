import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes.js';

function App() {
  const route = useRoutes(routes);
  return (
    <div className='font-iranyekan'>
       {route}
    </div>
  );
}

export default App;
