import 'App.scss';
import 'bootstrap/dist/js/bootstrap.bundle'
import StateContextProvider from 'context/StateContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/Routes'
import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import LoadingAnimation from 'components/loading/LoadingAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

  }, []);

  return (
    <>
      <BrowserRouter>
        <StateContextProvider>
          {isLoading ? <LoadingAnimation /> : <Routes />}
          <ToastContainer />
        </StateContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
