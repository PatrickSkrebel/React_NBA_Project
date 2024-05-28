import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import '../css/home.css';


function Home () {
    const { data, error, loading } = useFetch('news');
    const [selectedArticle, setSelectedArticle] = useState(null);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!data) {
        return <p>No data found.</p>;
    }

    const news = data;

    console.log('News articles:', data);

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };


    return(
        <>
            <div className="home-container">
                <h1 className="title">NBA News</h1>
                <div className="articles-container">
                    <div className="side-articles">
                        {news.map(article => (
                            <div key={article.id} className="article-summary" onClick={() => handleArticleClick(article)}>
                                <h2>{article.headline}</h2>
                                <p>{article.abstract}</p>
                            </div>
                        ))}
                    </div>
                    <div className="main-article">
                        {selectedArticle ? (
                            <>
                                <h2>{selectedArticle.headline}</h2>
                                <p>{selectedArticle.abstract}</p>
                                <div dangerouslySetInnerHTML={{ __html: selectedArticle.body }} />
                                <p>Author: {selectedArticle.author}</p>
                                <p>Section: {selectedArticle.section}</p>
                                <p>Date: {new Date(selectedArticle.date).toLocaleDateString()}</p>
                                <a href={selectedArticle.article_uri}>Read more</a>
                            </>
                        ) : (
                            <p>Please select an article to read</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;