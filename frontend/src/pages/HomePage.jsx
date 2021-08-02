import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const REVIEWS = gql`
  query GetReviews {
    reviews {
      id
      title
      rating
      body
      categories {
        id
        name
      }
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(REVIEWS);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading....</p>;

  return (
    <div>
      {data.reviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>
          {review.categories.map((category) => (
            <small key={category.id}>{category.name}</small>
          ))}
          <p>{review.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
