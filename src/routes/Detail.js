import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";
function Detail () {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movie);
        console.log(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div>
            {loading? 
                <div className={styles.loader}></div>
                :
                <div className ={styles.detail}>
                <header>
                    <Link className={styles.logo} to ={`/movie/`}>
                    <i class="fas fa-film"></i>
                    <h1 className={styles.logoName}>MOVIES</h1>
                    </Link>
                </header>
                <main>
                    <section>
                        <h1 className={styles.title}>{movie.title}</h1>
                        <div className={styles.info}>
                            {movie.year === 0 ? 
                                <h3 className={styles.year}>Year : None</h3>
                                :
                                <h3 className={styles.year}>Year : {movie.year}</h3>
                            }
                            <h3 className={styles.rating}>Rate : {movie.rating === 0 ?
                                'None'
                                :
                                movie.rating
                                }</h3>
                            <h3 className={styles.runtime}> Run Time : {movie.runtime === 0 ?
                                'None'
                                :
                                movie.runtime
                                } mins</h3>
                            <ul className={styles.genres}>
                                {
                                    movie.genres && movie.genres.map(g => 
                                        <li className={styles.genre} key ={g}>
                                            {g}
                                        </li>
                                )}
                            </ul>
                        </div>
                        <p className={styles.description}>{movie.description_full}</p>
                    </section>
                    <section>
                        <img className={styles.coverImg} src={movie.large_cover_image}></img>
                    </section>
                </main>
                </div>
            }
            
        </div>
    )
}

export default Detail;