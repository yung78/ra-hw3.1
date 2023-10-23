import Star from './Star';

export default function Stars({ count }) {
  if ((parseInt(count) < 1) || (parseInt(count) > 5) || isNaN(parseInt(count))) {
    return (
      <ul className="card-body-stars u-clearfix">
        <li>Нет данных для рейтинга</li>
      </ul>
    );
  };

  return (
    <ul className="card-body-stars u-clearfix">
      <li>
        { [...Array(parseInt(count))].map((_, index) => <Star key={index} /> ) }
      </li>
    </ul>
  );
}

Stars.defaultProps = { count: 0 };
