// 2 componente de finalizar compra

import { DataClient } from "../types/DataClient"

type Props = {
    dataClient: DataClient
}


export const finishBuy2 = ({dataClient}: Props) => {

    return (
        <div>
            finalizar compra 2 
            nome do cliente: {dataClient.name}
        </div>
    )
}