import { useEffect, useState } from 'react';
import { First } from 'react-bootstrap/esm/PageItem';
import { generatePath, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../src/css/App.css';
import Main from './components/main';
import Search from "./components/search";
import UseRefPlayer from './components/video';

function App() {
  const [state,setState] = useState([]);
  const [data, setData] = useState([]);
  const [offset, setoffset] = useState(0);

  const fetch = async () => {
    const axios = generatePath()
    const response = await axios.get(
    "https://matchday.ai/referee/champ/fixture/dummy-matches?page=0"
    );
    setData(response.data);
    setState(response.data);
  };
  useEffect(() => {
    fetch();
  })
  return (
    <div className="App">
      <h1>International Matches</h1>
      <Search></Search>
      <Main></Main>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<First></First>} />
          <Route path={'/video'}
          element={
            <>
            <h1>
              Video Analytics
              </h1>
              <UseRefPlayer>
                </UseRefPlayer></>
          }
>

          </Route>
          </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;