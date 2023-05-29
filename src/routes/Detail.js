import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [currMovie, setCurrMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setCurrMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, [])
    return (
    <div>
        {loading ? (
            <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetail
            title={currMovie.title_long}
            src={currMovie.medium_cover_image}
            description={currMovie.description_full}
            genres={currMovie.genres}
            url={currMovie.url}
            rating={currMovie.rating}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;