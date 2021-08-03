import { useParams } from "react-router-dom"


function Character() {

    const paramsPort = useParams()

    console.log(paramsPort)

    return (
    <div>
        <h1>My Character</h1>
       <h2>Test characters</h2>
           
    </div>
    )

}


export default Character