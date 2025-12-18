import type { CSSProperties } from "react"

export const MyAwesomeApp = () => {

    const firstName = "Santiago"
    const lastName = "Cardona"

    const favoriteGame = ['Elden Ring', 'Battlefield', 'Call of Duty']
    const favortieFood = ['Bandeja Paisa', 'Chicharron', 'Perro', 'Hamburguesa']
    const isActive = false

    const address = {
        zipCode: "ACB123",
        country: 'Colombia'
    }

    const santo = {
        nombre: 'Santiago',
        apellido: 'Cardona',
        hobby: ['Trotar', 'Gym', 'Cine', 'Programacion', 'Estudiar']
    }

    const myStyles: CSSProperties = {
        backgroundColor: 'grey', 
        color: "white",
        margin: "10"
    }

    return (

        <>
            <h1>{firstName}</h1>
             <h2>{lastName}</h2>

            <p>{favoriteGame.join(', ' )}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p>
                {JSON.stringify(address)}
            </p>

            <p>{favortieFood.join('- ')}</p>

            <p style={myStyles}>{JSON.stringify(santo)}</p>

        </>

    )
}



// export  function MyAwasommeApp () {

//     return (
//         <>
//             <h1>Santiago</h1>
//             <h3>Cardona</h3>
        
//         </>
//     )

// }

