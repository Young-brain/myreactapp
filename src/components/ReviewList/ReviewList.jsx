import ReviewItem from '../ReviewItem/ReviewItem';

const data = [
  {
    name: "Анастасия",
    date: "22 сентября",
    time: "18:30",
    color: "черный",
    textReview: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Безопасную взобравшись пустился толку! Домах от всех диких он продолжил переписывается.",
    like: 32,
    dislike: 9,
    status: true,
    stars: 2,
  },
  {
    name: "Вова",
    date: "13 сентября",
    time: "13:30",
    color: "серый",
    textReview: "безопасную взобравшись пустился толку! Домах от всех диких он продолжил переписывается.",
    like: 5,
    dislike: 19,
    status: true,
    stars: 4,
  },
  {
    name: "Катя",
    date: "3 сентября",
    time: "13:30",
    color: "красный",
    textReview: "безопасную взобравшись пустился толку! безопасную взобравшись пустился толку! Домах от всех диких он продолжил переписывается. Домах от всех диких он продолжил переписывается.",
    like: 15,
    dislike: 1,
    status: false,
    stars: 5,
  },
  {
    name: "Георгий",
    date: "3 сентября",
    time: "13:30",
    color: "красный",
    textReview: "безопасную взобравшись пустился толку! безопасную взобравшись пустился толку! Домах от всех диких он продолжил переписывается. Домах от всех диких он продолжил переписывается.",
    like: 1435,
    dislike: 1,
    status: false,
    stars: 1,
  },
  {
    name: "Елена",
    date: "3 сентября",
    time: "13:30",
    color: "красный",
    textReview: "безопасную взобравшись пустился толку! безопасную взобравшись пустился толку! Домах от всех диких он продолжил переписывается. Домах от всех диких он продолжил переписывается.",
    like: 3,
    dislike: 133,
    status: true,
    stars: 3,
  },
]

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