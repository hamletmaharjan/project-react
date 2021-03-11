import { useParams, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as articleService from '../services/article';
import * as authService from '../services/auth';

function ShowArticle() {   
  let { id } = useParams(); 
  let history = useHistory();

  const [article, setArticle] = useState('');
  let user = authService.getUserInfo();
  let editLink = '/articles/' + article.id + '/edit';
  const imgLink = 'http://localhost:8848' + article.image;

  useEffect(() => {
    articleService.fetchArticle(id)
    .then(data=> {
        setArticle(data.data);
    })
  },[id]);

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
                <button className="btn btn-danger" style={{marginLeft: 15}} onClick={handleDelete}>Delete</button>
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
