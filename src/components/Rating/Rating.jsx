import cn from 'classnames'

function Rating(props) {
  const {stars} = props.props;
  const mainClass = 'b-rating';
  let starsClass;
    switch (stars) {
    case 1:
      starsClass = cn(mainClass, 'rating--star4');
      break;
    case 2:
      starsClass = cn(mainClass, 'rating--star3');
      break;
    case 3:
      starsClass = cn(mainClass, 'rating--star2');
      break;
    case 4:
      starsClass = cn(mainClass, 'rating--star1');
      break;
    }
  return (
    <div className={starsClass}></div>
  );
}

export default Rating;
