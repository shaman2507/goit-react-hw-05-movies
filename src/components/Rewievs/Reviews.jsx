import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   console.log(movieId);
  useEffect(() => {
    const findMovieReview = async () => {
      try {
        setIsLoading(true);
        const res = await getMovieReviews(movieId);
        setReviews(res.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovieReview();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          {reviews.length ? (
            <ReviewsList>
              {reviews.map(review => (
                <li key={review.id}>
                  {review.author ? (
                    <b>Author: {review.author}</b>
                  ) : (
                    <b>No name</b>
                  )}
                  {review.content ? <p>{review.content}</p> : <p>No review</p>}
                </li>
              ))}
            </ReviewsList>
          ) : (
            <p>We don't have any reviews for this movie yet </p>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;