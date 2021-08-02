import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

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

  return (
    <div className="review-card">
      <div className="rating">{data.review.rating}</div>
      <h2>{data.review.title}</h2>
      {data.review.categories.map((category) => (
        <small key={category.id}>{category.name}</small>
      ))}
      <ReactMarkdown>{data.review.body}</ReactMarkdown>
    </div>
  );
};

export default ReviewDetails;
