import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import ArticleItem from '../components/ArticleItem.jsx';

function Home() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:8848/api/articles')
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            setArticles(data.data);
            setIsLoading(false);
        })
    },[]);

    return (
       
                <div className="container">
                    <div className="list-wrapper">
                        <div class="card-deck">
                            {
                                articles.map((article, index) => {
                                    return <ArticleItem article={article}/>
                                    // return <li key={article.id}><h1>{article.title}</h1></li>
                                
                                })
                            }
                        </div>
                    </div>
                </div>
            

        
    )
}


export default Home;