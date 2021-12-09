import Rating from '../Rating/Rating';
import Grade from '../Grade/Grade';
import user from './img/reviewsuser.png';

function ReviewItem(props) {
    const {
        name,
        date,
        time,
        color,
        textReview,
            } = props.items;
    return (
        <div className="b-review-item">
            <div className="review-item__photo">
            <img src={user} alt="Пользователь" />
            </div>
            <div className="review-item__content">
            <div className="review-item__header">
                <a className="review-item__name" href="#">{name}</a>
                <span className="review-item__date"><span>{date} </span><span>{time}</span></span>
            </div>
            <div className="review-item__wrap">
                <Rating props={props.items} />
                <span className="review-item__color"><span>Цвет: </span><span>{color}</span></span>
            </div>
            <div className="review-item__text">
                {textReview}
            </div>
            <div className="review-item__bottom">
                <div className="review-item__bottom-links">
                <a className="review-item__complaint" href="#">Пожаловаться на отзыв</a>
                <a className="review-item__complaint review-item__complaint--mobile" href="#"></a>
                <a className="review-item__answer" href="#">Ответить</a>
                </div>
                <Grade props={props.items} />
            </div>
            </div>
        </div>
    );
  }
  
  export default ReviewItem;
  