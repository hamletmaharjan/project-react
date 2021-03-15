import {Link} from 'react-router-dom';
import moment from 'moment';

import URLS from '../constants/urls';

function ArticleItem(props) {
  const imgLink =  URLS.baseUrl + props.article.image;
  const articleLink = '/articles/' + props.article.id;

  return (
    <div className="card">
      <img src={imgLink} className="card-img-top" alt="..." />
      <div className="card-body">
        <Link to={articleLink}><h5 className="card-title">{props.article.title.substr(0,30)}</h5></Link>
        <p className="card-text">{props.article.description.substr(0,50)} ...</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Created {moment(props.article.created_at).fromNow()}</small>
      </div>
    </div>
  )
}

export default ArticleItem;
