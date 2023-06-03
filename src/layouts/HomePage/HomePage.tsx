import { Carousel } from "./components/Carousel"
import { ExploreTopBooks } from "./components/ExploreTopBooks"
import { LibraryServices } from "./components/LibraryServices"
import { Heros } from "./components/heros"

export const HomePage = () =>{
    return(
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
    )
}