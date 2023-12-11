import React, {Suspense} from 'react';
import './App.css';
import Loader from './components/Loader';
import { generateMockUsers } from './utils/mockUsers';

function App() {

  let users = generateMockUsers(100);

  // setTimeout(() => ( users ), 5000)
  const MainComp = React.lazy(() => import('./components/RatingTable'))

  return (
    <div className="App">
      <div className='container'>
        <h1>Список пользователей</h1>
        <Suspense fallback={<Loader/>}>
        <MainComp users={users}/>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
