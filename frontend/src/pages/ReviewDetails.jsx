import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ReviewDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(`/reviews/${id}`);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading....</p>;

  console.log(data);

  return (
    <div className="review-card">
      <div className="rating">{data.rating}</div>
      <h2>{data.title}</h2>
      <small>console list</small>
      <p>{data.body}</p>
    </div>
  );
};

export default ReviewDetails;
