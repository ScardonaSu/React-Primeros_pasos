import { ItemCounter } from "./shopping-card/itemCounter";



interface ItemInCart {
    productName: string
    quantity: number
}



const itemsInCart: ItemInCart[] = [

    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 2 },
    { productName: 'Super Smash', quantity: 5 }
]




//Estructura de Componente
export function FirstStepsApp() {

    return (

        <>
            <h1>Carrito de compras</h1>
            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity}></ItemCounter>
                ))

            }
           

        </>
    )

}

