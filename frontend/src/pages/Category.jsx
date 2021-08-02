import { Link, useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      name
      id
      reviews {
        title
        body
        rating
        id
        categories {
          id
          name
        }
      }
    }
  }
`;

const Category = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, { variables: { id } });

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading....</p>;

  return (
    <div>
      <h2>{data.category.name}</h2>
      {data.category.reviews.map((review) => (
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

export default Category;
