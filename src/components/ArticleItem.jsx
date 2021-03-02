

function ArticleItem(props) {
    console.log(props.article);
    const imgLink = 'http://localhost:8848' + props.article.image;

    return (
       <div className="card">
           <img src={imgLink} class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">{props.article.title}</h5>
            <p class="card-text">{props.article.description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Created at {props.article.created_at}</small>
            </div>
       </div>
    )
}

export default ArticleItem;