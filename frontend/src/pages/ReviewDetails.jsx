import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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
`;

const ReviewDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, { variables: { id } });

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading....</p>;

  console.log(data);

  return (
    <div className="review-card">
      <div className="rating">{data.review.rating}</div>
      <h2>{data.review.title}</h2>
      {data.review.categories.map((category) => (
        <small key={category.id}>{category.name}</small>
      ))}

      <p>{data.review.body}</p>
    </div>
  );
};

export default ReviewDetails;
