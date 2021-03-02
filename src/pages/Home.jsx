import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

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
       
                <div className="content">
                    <div className="list-wrapper">
                        <ul className="list">
                            {
                                articles.map((article, index) => {
                                
                                    return <li key={article.id}><h1>{article.title}</h1></li>
                                
                                })
                            }
                        </ul>
                    </div>
                </div>
            

        
    )
}


export default Home;