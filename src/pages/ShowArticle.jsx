import { useParams, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ArticleItem from '../components/ArticleItem';
import * as articleService from '../services/article';

function ShowArticle() {   
  let { id } = useParams(); 
  let history = useHistory();

  const [article, setArticle] = useState('');
  let user = JSON.parse(localStorage.getItem('user'));
  let editLink = '/articles/' + article.id + '/edit';
  const imgLink = 'http://localhost:8848' + article.image;
  const articleLink = '/articles/' + article.id;

  useEffect(() => {
    articleService.fetchArticle(id)
    .then(data=> {
        setArticle(data.data);
    })
  },[]);

  const handleDelete = (e)=> {
    articleService.deleteArticle(id)
    .then(function (response) {
      history.push('/');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  if(article){
    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
          </div>
          <div className="col-sm-8">
            <div className="row">
              <h1>{article.title}</h1>
              <img src={imgLink} className="main-img" alt="article"/>
              <p className="fs-2 mt-4 fw-bold">{article.description}</p>
            </div>
            <div className="row">
            {article.user_id === user.id &&
              <div className="mt-4">
                <Link to={editLink} className="btn btn-secondary">Edit</Link>
                <a className="btn btn-danger" style={{marginLeft: 15}} onClick={handleDelete}>Delete</a>
              </div>
            }
            </div>
          </div>
          <div className="col-sm-2">
          </div>
        </div>
      </div> 
    )
  }
  return <div>not found</div>
}


export default ShowArticle;
