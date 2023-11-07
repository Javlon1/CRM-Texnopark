import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Loader from './Components/Ui/Loader/Loader';
import NotFound from './Components/Ui/404/404.jsx';
import Statistic from './Pages/Statistic/Statistic';
import LeftBar from './Components/layout/LeftBar/LeftBar';
import Lid from './Components/Page/Lids/Lids';

function App() {

  const [scrol, setScrol] = useState(false)
  const offSet = 100;
  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  const top = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  const [loading, setLoading] = useState(true)

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
      <LeftBar />

      <Routes>

        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Statistic />} />
        <Route path='/lid' element={<Lid />} />

      </Routes>
      
    </div>
  );
}

export default App;