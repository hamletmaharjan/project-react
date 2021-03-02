import {Link} from 'react-router-dom';

function ArticleItem(props) {
    
    const imgLink = 'http://localhost:8848' + props.article.image;
    const articleLink = '/articles/' + props.article.id;
    return (
       <div className="card">
           <img src={imgLink} class="card-img-top" alt="..." />
            <div class="card-body">
            <Link to={articleLink}><h5 class="card-title">{props.article.title}</h5></Link>
            <p class="card-text">{props.article.description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Created at {props.article.created_at}</small>
            </div>
       </div>
    )
}

export default ArticleItem;