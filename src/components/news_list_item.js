import React from 'react';
import { css } from 'glamor';

const NewsItem = ({item}) => {

    let news_item = css({
        padding: '23px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey',
        ':hover':{
            color: 'red'
        },
        '@media(max-width: 500px)':{
            color: "blue"
        }
    });

    let item_gray = css({
        background: 'lightgrey'
    });

    return(
        <div className={`${news_item} ${item_gray}`}>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>
    )
};

export default NewsItem;

