import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArticleItem from '../components/ArticleItem';
import axios from 'axios';

function ShowArticle() {   
    let { id } = useParams(); 

    const [article, setArticle] = useState('');
    let user = JSON.parse(localStorage.getItem('user'));
    let editLink = '/articles/' + article.id + '/edit';

    useEffect(() => {
        fetch('http://localhost:8848/api/articles/' + id)
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            setArticle(data.data);
            // setIsLoading(false);
        })
        console.log(id);
    },[]);

    const handleDelete = (e)=> {
        let token = localStorage.getItem('token');
        let userInfo = JSON.parse(localStorage.getItem('user'));
        console.log(userInfo);
        let url = 'http://localhost:8848/api/users/' + userInfo.id + '/articles/' + article.id;
        axios.delete(url,
            {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(function (response) {
			console.log(response);
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
                    
                // <Link className="btn btn-success" to="/signup">Signup</Link>
                }

            </div>
            
        )
    }
    return <div>not found</div>
}


export default ShowArticle;