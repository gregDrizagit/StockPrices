import React from 'react'; 
import {Card} from 'semantic-ui-react';

const NewsCard = (props) => {
    console.log(props)
    const article = props.article; 
    return(
        <Card href={article.url}>
            <Card.Header>
                <h1>{article.headline}</h1>
                <Card.Meta>{new Date(article.datetime).toLocaleString()}</Card.Meta>
            </Card.Header> 

            <Card.Content description={article.summary} />

            <Card.Content extra>
                Source: {article.source} 
            </Card.Content>
        </Card>
    )
}

export default NewsCard; 
