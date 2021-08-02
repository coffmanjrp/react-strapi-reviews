import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

const SiteHeader = () => {
  const { loading, error, data } = useQuery(CATEGORIES);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading....</p>;

  return (
    <div className="site-header">
      <Link to="/">
        <h1>React Reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter reviews by category:</span>
        {data.categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SiteHeader;
