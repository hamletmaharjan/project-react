import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import * as authService from '../../services/auth';
import * as articleService from '../../services/article';

import URLS from '../../constants/urls';

import { addArticle } from '../../actions/articleAction';


function ShowArticle(props) {   
  const { id } = useParams(); 
  const history = useHistory();

  const [article, setArticle] = useState('');
  const user = authService.getUserInfo();
  const editLink = '/articles/' + article.id + '/edit';
  const imgLink = URLS.baseUrl + article.image;

  useEffect(() => {
    console.log(editLink, imgLink);
    if(props.article){
      setArticle(props.article);
    }
    else {
      articleService.fetchArticle(id)
      .then(data => {
        props.addArticle(data.data);
      });
    }
    
  },[id, props]);

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


// export default ShowArticle;

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id);
  console.log(id);
	return {
	  article: state.articleReducer.articles.find(article => article.id === id)
	}
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowArticle);
