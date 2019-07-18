import React from 'react'

function ArticleTitle(props){
    console.log(props)
    return(
        <div className = 'title'>
            <h2>
                <time>
                    {props.title}
                </time>
            </h2>
        </div>
    )
}

export default ArticleTitle