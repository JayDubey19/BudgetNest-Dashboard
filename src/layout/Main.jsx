
//helper functions
//rrd imports
import { Outlet, useLoaderData } from "react-router-dom";
import wave from "../assets/wave.svg";

import { fetchData } from "../helpers";
//components
import Nav from "../components/Nav";

export function mainLoader(){
    const userName=fetchData("userName");
    return{userName}
}

const Main = ()=>{
    const {userName}=useLoaderData()
    return(
        <div className="layout">
            <Nav userName={userName} />
            <main>
            <Outlet/>
            </main>
            
        </div>
    )
}
export default Main