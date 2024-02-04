function Book(props) {
  const { img, title, author, price, h3 } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello It's Me!");
  };

  const clickMore = (price) => {
    console.log(price);
  };
  return (
    <article className="book" onMouseOver={() => console.log(author)}>
      <div className="span-1">
        <span>&#10029;</span>
        <span>&#10029;</span>
        <span>&#10029;</span>
        <span>&#10029;</span>
        <span>&#10029;</span>
      </div>
      <h3>{h3}</h3>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <p>{price}</p>
      <button type="button" onClick={clickHandler} className="btn">
        Click Me
      </button>

      <button type="button" onClick={() => clickMore(price)} className="btn-2">
        Click Price
      </button>
    </article>
  );
}
export default Book;
