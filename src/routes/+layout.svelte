<script>
    import { page } from '$app/state';

    let { children } = $props();
</script>

<header class="container">
    <nav>
        <ul>
            <li><strong>G-J van Rooyen</strong></li>
        </ul>
        <ul>
            <li>
                <a href="/" class:active={page.url.pathname === '/'}>About</a>
            </li>
            <li>
                <a href="/professional" class:active={page.url.pathname === '/professional'}>Professional</a>
            </li>
            <li>
                <a href="/personal" class:active={page.url.pathname === '/personal'}>Personal</a>
            </li>
            <li>
                <a href="/writing" class:active={page.url.pathname === '/writing'}>Writing</a>
            </li>
            <li>
                <a href="/#contact">Contact</a>
            </li>
        </ul>
    </nav>
</header>

<main class="container">{@render children()}</main>

<footer class="container">
    <p>© 2026 G-J van Rooyen</p>
</footer>
