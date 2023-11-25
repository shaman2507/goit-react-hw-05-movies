import { GlobalStyle } from "components/GlobalStyle";
import { Container, Header, Link } from "./Layout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <GlobalStyle />
            <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}; 