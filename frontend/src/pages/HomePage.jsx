import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const REVIEWS = gql`
  query GetReviews {
    reviews {
      id
      title
      rating
      body
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading....</p>;

  console.log(data);

  return (
    <div>
      {data.reviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>
          <small>console list</small>
          <p>{review.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
