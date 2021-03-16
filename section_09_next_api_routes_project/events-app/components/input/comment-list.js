import classes from './comment-list.module.css';

function CommentList({list}) {
  return (
    <ul className={classes.comments}>
      {list.map(cm => <li key={cm.id}>
        <p>{cm.comment}</p>
        <div>
          By <address>{cm.author.name}</address>
        </div>
      </li>)}
    </ul>
  );
}

export default CommentList;
