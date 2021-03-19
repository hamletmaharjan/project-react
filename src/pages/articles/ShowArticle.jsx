import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import * as authService from '../../services/auth';
import * as articleService from '../../services/article';

import URLS from '../../constants/urls';

import { addArticle } from '../../actions/articleAction';


function ShowArticle(props) {   
  const { id } = useParams(); 
  const history = useHistory();

  const user = authService.getUserInfo();
 
  useEffect(() => {
    if(!props.article){
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

  if(props.article){
    const editLink = '/articles/' + props.article.id + '/edit';
    const imgLink = URLS.baseUrl + props.article.image;
    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
          </div>
          <div className="col-sm-8">
            <div className="row">
              <h1>{props.article.title}</h1>
              <img src={imgLink} className="main-img" alt="article"/>
              <p className="fs-2 mt-4 fw-bold">{props.article.description}</p>
            </div>
            <div className="row">
            {props.article.user_id === user.id &&
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
