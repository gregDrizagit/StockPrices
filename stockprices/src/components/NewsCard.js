import React from 'react'; 
import {Card} from 'semantic-ui-react';

const NewsCard = (props) => {
    console.log(props)
    const article = props.article; 
    return(
        <Card>
            <Card.Content header={article.headline} />
            <Card.Content description={article.summary} />
            <Card.Content extra>
                Date: {new Date(article.datetime).toLocaleString()}
                Source: {article.source} 

            </Card.Content>
        </Card>
    )
}

export default NewsCard; 
