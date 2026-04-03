import NavButton from "./NavButton";

export default function Topbar() {

    return(
        <nav className="p-3 flex justify-between bg-background border-b-3 border-foreground">
            <div>
                <NavButton href="/" text="Home" />
                <NavButton href="/gallery" text="Gallery" />
            </div>
            <div>
                <p>Hello there</p>
            </div>
        </nav>
    );
}