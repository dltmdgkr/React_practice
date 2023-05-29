function MovieDetail({ title, genres, rating, description, src, url }) {
    return (
        <div>
            <h2>
                <a href={url} target="_blank">{title}</a>
            </h2>
            <img src={src} alt={title} />
            <h4>description</h4>
            <p /> {description}
            <h4>Movie Rating: {rating}</h4>
            <div>
                <h4>genres</h4>
                <ul>
                    {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MovieDetail;