import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import A from './page/login';
import B from './page/signup';
import C from './page/home';
import D from './page/insert'
import E from './page/card'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<A/>}/>
          <Route path='/create' element={<B/>}/>
          <Route path='/main' element={<C/>}/>
          <Route path='/d' element={<D/>}/>
          <Route path='/e' element={<E/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
