<script>
    import { page } from '$app/stores';
    let about = "";
    let professional = "";
    let personal = "";
    if ( $page.url.pathname==='/' ) { about="active" }
    else if ( $page.url.pathname==='/professional' ) { professional="active" }
    else if ( $page.url.pathname==='/personal' ) { personal="active" };
</script>

<header class="container">
    <nav>
        <ul>
            <li><strong>G-J van Rooyen</strong></li>
        </ul>
        <ul>
            <li>
                <a href="/" class="{about}">About</a>
            </li>
            <li>
                <a href="/professional" class="{professional}">Professional</a>
            </li>
            <li>
                <a href="/personal" class="{personal}">Personal</a>
            </li>
            <li>
                <a href="/#contact">Contact</a>
            </li>
        </ul>
    </nav>
</header>

<main class="container"><slot></slot></main>

<footer class="container">
    <p>© 2023 G-J van Rooyen</p>
</footer>

