import React, { useEffect } from "react";
import { connect } from 'react-redux';

import ArticleItem from '../components/ArticleItem.jsx';
import * as articleService from '../services/article';
import { addArticles } from '../actions/articleAction';

function Home(props) {
  useEffect(() => {
    articleService.fetchArticles()
    .then(data=> {
      props.addArticles(data.data);
    })
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="card-deck">
          {
            props.articles.map((article, index) => {
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
