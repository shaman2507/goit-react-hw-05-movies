import PropTypes from 'prop-types';

const MovieQuery = ({ onSubmit, onChange, value }) => {
  return (
    <>
      <h3>Find your movie:</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type here..."
          value={value}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};


MovieQuery.propTypes = { onSubmit: PropTypes.func.isRequired };

export default MovieQuery;