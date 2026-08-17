<script>
    import { page } from '$app/stores';

    let about = "";
    let professional = "";
    let personal = "";

    $: {
        about = $page.url.pathname === '/' ? 'active' : '';
        professional = $page.url.pathname === '/professional' ? 'active' : '';
        personal = $page.url.pathname === '/personal' ? 'active' : '';
    }
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
    <p>© 2026 G-J van Rooyen</p>
</footer>

