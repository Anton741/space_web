const Article = ({title, text, isOpened, onOpen}) => {
  return (
    <>
      <li
        className={
          isOpened ? 'main__article main__article-active' : 'main__article'
        }
        key={title}
        onClick={() => onOpen(title)}
      >
        <div className="article__title">{title}</div>
        <div
          className={
            isOpened ? 'main__arrow main__arrow-active' : 'main__arrow'
          }
        ></div>
        <div
          className={
            isOpened ? 'article__text article__text-active' : 'article__text'
          }
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `${text.replace(/<header>([\s\S]+?)<\/header>/, '')}`,
            }}
          ></div>
        </div>
      </li>
    </>
  );
}
export default Article;