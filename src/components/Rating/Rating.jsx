import cn from 'classnames';

function Rating(props) {
  const {stars} = props.stars;
  
  return (
    <div className={cn('b-rating', 
      {'rating--star4': stars === 1},
      {'rating--star3': stars === 2},
      {'rating--star2': stars === 3},
      {'rating--star1': stars === 4},
    )}></div>
  );
}

export default Rating;
