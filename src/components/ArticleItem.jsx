import {Link} from 'react-router-dom';
import moment from 'moment';

function ArticleItem(props) {
  const imgLink = 'http://localhost:8848' + props.article.image;
  const articleLink = '/articles/' + props.article.id;

  return (
    <div className="card">
      <img src={imgLink} className="card-img-top" alt="..." />
      <div className="card-body">
        <Link to={articleLink}><h5 className="card-title">{props.article.title}</h5></Link>
        <p className="card-text">{props.article.description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Created {moment(props.article.created_at).fromNow()}</small>
      </div>
    </div>
  )
}

export default ArticleItem;
