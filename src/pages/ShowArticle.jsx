import { useParams, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArticleItem from '../components/ArticleItem';
import axios from 'axios';
import * as articleService from '../services/article';

function ShowArticle() {   
    let { id } = useParams(); 
    let history = useHistory();

    const [article, setArticle] = useState('');
    let user = JSON.parse(localStorage.getItem('user'));
    let editLink = '/articles/' + article.id + '/edit';

    useEffect(() => {
        articleService.fetchArticle(id)
        .then(data=> {
            console.log(data);
            setArticle(data.data);
            // setIsLoading(false);
        })
        console.log(id);
    },[]);

    const handleDelete = (e)=> {
        articleService.deleteArticle(id)
        .then(function (response) {
			console.log(response);
            history.push('/');
		  })
		  .catch(function (error) {
			console.log(error);
		  });

    }

    if(article){
        return (
            <div>
                <ArticleItem article={article} />
                {article.user_id === user.id &&
                    <div>
                        <Link to={editLink} className="btn btn-secondary">Edit</Link>
                        <Link className="btn btn-danger" onClick={handleDelete}>Delete</Link>
                    </div>
                  
                }

            </div>
            
        )
    }
    return <div>not found</div>
}


export default ShowArticle;