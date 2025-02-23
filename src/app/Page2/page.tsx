import Menu from "../components/menu";
import Grid from "../components/grid";

export default function Page2() {
    return(
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center bg-white">
        <Menu></Menu>
        <Grid></Grid>
    </main>
    );
}