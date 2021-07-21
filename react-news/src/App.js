import { Fragment, useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import ListNews from './components/ListNews.jsx';

function App() {

  const [category, setCategory] = useState(''); 
  const [news, setNews] = useState([]);
  const LANG = 'us';

  useEffect(() => {
    const callAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${LANG}&category=${category}&apiKey=7eb5091aa8224147ae3bca0a18a76bb7
`;
      const response = await fetch(url);
      const news = await response.json()
      console.dir(news);
      setNews(news.articles)
    }
    callAPI();
  }, [category])


  return (
    <Fragment>
      <Header 
        title="News Search"
      />
      <div className="container white">
        <Form 
          setCategory={setCategory} 
        />
        <ListNews 
          news={news}
        />
      </div>

    </Fragment>
  );
}

export default App;
