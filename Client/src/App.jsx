import Layout from "./componenets/Layout/Layout";
import {Routes , Route} from 'react-router-dom'
import Home from "./views/Home/Home";
import "./App.css";

function App() {
  return (
    <>
     <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
     </Layout>
    </>
  );
}

export default App;
