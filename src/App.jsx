import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Loader from './Components/Ui/Loader/Loader';
import NotFound from './Components/Ui/404/404.jsx';
import Statistic from './Pages/Statistic/Statistic';
import LeftBar from './Components/layout/LeftBar/LeftBar';
import Client from './Pages/Client/Client';
import Lid from './Pages/Lid/Lid';
import Profil from './Pages/Profil/Profil';
import { Finance } from './Pages/Finance/Finance';
import Employees from './Pages/Employees/Employees';
import Basement from './Pages/Basement/Basement';
import Expense from './Pages/Expense/Expense';

function App() {

  // 
  // document.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // });

  // document.onkeydown = (e) => {
  //   if (e.keyCode === 123) {
  //     return false;
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
  //     return false
  //   }
  // };
  //

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getCounteries = async () => {
      await fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/users')
      setLoading(false)
    }
    getCounteries()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="App">
      <div className="items">
        <LeftBar />

        <Routes>

          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Statistic />} />
          <Route path='/lid' element={<Lid />} />
          <Route path='/customer' element={<Client />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/finance' element={<Finance />} />
          <Route path='/expense' element={<Expense />} />
          <Route path='/warehouse' element={<Basement />} />
          <Route path='/employees' element={<Employees />} />

        </Routes>
      </div>
      <div className='mob'>
        <h2>не возможно управлять с вашего устройсто</h2>
      </div>
    </div>
  );
}

export default App;