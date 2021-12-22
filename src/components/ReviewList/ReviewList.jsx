import ReviewItem from '../ReviewItem/ReviewItem';
import data from '../../data/data.js';

function ReviewList() {
  return (
    <div className="b-reviews">
      <div className="reviews__title">Отзывы</div>
      <div className="reviews__inner">
        <div className="reviews__list">
            {
              data.map((item, idx) => 
                item.status &&
                <ReviewItem key={idx} item={item}/>
              )
            }
        </div>
      </div>
    </div>
  );
}

export default ReviewList;
