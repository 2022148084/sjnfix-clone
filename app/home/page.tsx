import Navbar from "../components/Navbar";
import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";

export default function HomePage() {
    return (
        <>
        <MovieVideo />
        <h1 className="text-3xl font-bold ">Recently Added</h1>
       <RecentlyAdded />
       </>
    )
}