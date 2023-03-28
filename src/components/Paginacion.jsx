const Paginacion = ({setCurrentPage, currentPage, pokemonsPerPage, indexType, totalPokemonsPokemons, totalPokemonsAlls}) => {
    
    const pagesNumbers = []
    let total = 0

    if(indexType === null){
       total = totalPokemonsAlls 
    } else {
        total = totalPokemonsPokemons
    }

    console.log(total)

    for(let i = 1; i <= Math.ceil(total / pokemonsPerPage); i++){
        pagesNumbers.push(i)
    }

    const onNextPage = () => {
        if(currentPage < pagesNumbers.length){
            setCurrentPage(currentPage + 1)
        }
    }

    const onPrevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }



    return (
        <div>
            <button onClick={onPrevPage}>Prev</button>
            <ul>
                {
                   pagesNumbers.map(page=>{
                    return(
                        <li key={page}>{page}</li>
                    )
                   }) 
                }
            </ul>
            <button onClick={onNextPage}>Next</button>
        </div>
    );
}
 
export default Paginacion;