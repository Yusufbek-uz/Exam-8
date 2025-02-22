import './header.css'

export function Header() {
    return (
        <header>
            <div className="container">
                <h1>Exclusive</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}