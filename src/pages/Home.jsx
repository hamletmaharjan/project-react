import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';

import ArticleItem from '../components/ArticleItem.jsx';
import * as articleService from '../services/article';
import { addArticles } from '../actions/articleAction';

function Home(props) {
  const [articles, setArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(0);

  useEffect(() => {
    // setIsLoading(true);
    articleService.fetchArticles()
    .then(data=> {
        setArticles(data.data);
        props.addArticles(data.data);
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


// export default Home;


const mapStateToProps = (state) => {
  return {
    articles: state.articleReducer.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticles: (articles) => dispatch(addArticles(articles))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
