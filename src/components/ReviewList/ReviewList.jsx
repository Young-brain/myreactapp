import ReviewItem from '../ReviewItem/ReviewItem';
import data from '../../data/data.js';

function ReviewList() {
  const review = data.map((item, idx) => {
    const {status} = item;
    if (status === true) {
      return (
        <ReviewItem key={idx} items={item}/>
      )
    }
  })
  return (
    <div className="b-reviews">
      <div className="reviews__title">Отзывы</div>
      <div className="reviews__inner">
        <div className="reviews__list">
            {review}
        </div>
      </div>
    </div>
  );
}

export default ReviewList;
