import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header /> 
      <Outlet />      
      <Footer />
    </>
  )
}

export default App;


