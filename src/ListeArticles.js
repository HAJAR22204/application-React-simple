import PropTypes from 'prop-types';

function ListeArticles({ articles }) {
  return (
    <ul>
      {articles.map((article, index) => (
        <li key={index}>{article}</li>
      ))}
    </ul>
  );
}

ListeArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeArticles;