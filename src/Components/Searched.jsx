import Movie from "./Movie";


const Searched = ({data , genre , AllGenres}) => {

    // console.log(AllGenres);

    const data_is_empty = Object.keys(data).length === 0

    return ( 

        
        <>
            <>
            <div className="container p-2 animate__animated animate__fadeIn">
                <select class="form-select" aria-label="Default select example" name="GenreSelected" id="GenreSelected" onChange={ (e) => { try{ if( e.target.value.trim() === ''){  }else{ genre(e.target.value.trim())}   }catch{  }  }}>
                    <option key={0} value="nothing"> Choose ... </option>
                    { AllGenres.map( (genre) => {
                    return <option key={genre.id} value={genre.name}> {genre.name} </option> 
                    }  ) }
                </select>
                <h2 className="text-white m-3 "> </h2>
                <div className="container row ms-1 ">
                    {data_is_empty ?  '' : 
                        data.map( (movie) => {
                        return <Movie key={movie.id} data={movie} /> ; } )
                    }
                </div>
            </div>
        </>
        </>
     );
}
 
export default Searched;