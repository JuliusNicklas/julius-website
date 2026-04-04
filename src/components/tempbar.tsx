import NavButton from "./NavButton";

export default function Topbar() {

    return(
        <nav className="fixed top-0 z-50 w-full p-3 flex justify-between bg-background border-b-3 border-foreground">
            <div>
                <NavButton href="/" text="Home" />
                <NavButton href="/gallery" text="Gallery" />
            </div>
            <h1 className="text-foreground">
                julius.bivren
            </h1>
            <div>
                <p>Hello there</p>
            </div>
        </nav>
    );
}