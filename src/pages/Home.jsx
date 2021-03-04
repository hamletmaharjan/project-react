import React, { useEffect, useState } from "react";

import ArticleItem from '../components/ArticleItem.jsx';
import * as articleService from '../services/article';

function Home() {
  const [articles, setArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(0);

  useEffect(() => {
    // setIsLoading(true);
    articleService.fetchArticles()
    .then(data=> {
        console.log(data);
        setArticles(data.data);
        // setIsLoading(false);
    })
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="card-deck">
          {
            articles.map((article, index) => {
              return (
                <div key={index} className="col-sm-4">
                  <ArticleItem article={article}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
      
  )
}


export default Home;
