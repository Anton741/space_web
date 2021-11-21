import React from "react";
import Article from "./article";

const ArticlesList = ({articles , onOpen}) => {
    return(
    <ul className="main__articles">
    {articles.map(article =>
      <Article title = {article.title} text = {article.content.__cdata} isOpened = {article.isOpened} onOpen = {onOpen}/>
      )
    }
  </ul>
  )
  }
export default ArticlesList;