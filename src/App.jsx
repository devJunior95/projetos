import MainLayout from './components/MainLayout';

import styles from './App.module.css';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <MainLayout>
        <div className={styles.container}>
          <Outlet />
        </div>
      </MainLayout>
    </>
  )
}

export default App
