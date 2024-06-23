<script>
    import "../../app.css";
    import "../../lib/frankie/stylesheet.css";
    import "../../lib/css/style.scss";
    import logoSmall from "$lib/images/logo-small.jpg";
    import labelRenaissance from "$lib/images/label-renaissance-2023.jpg";
    import { page } from '$app/stores';

    const linkClasses = 'text-sm xl:text-lg';
    $: menuBgColor = $page.url.pathname.includes('/balade-sonore') ? 'bg-atl-brown' : 'bg-atl-red';
</script>

<div class="menu flex flex-wrap fixed top-0 w-full justify-center {menuBgColor}">
    <a href="/" class={linkClasses}>Événements</a>
    <a href="/association" class={linkClasses}>L'association</a>
    <a href="/balade-sonore" class={linkClasses}>Balade sonore</a>
    <a href="/bibliographie" class={linkClasses}>Bibliographie</a>
    <a href="https://www.facebook.com/lautreterreliberee/" target="_blank" class={linkClasses}>Facebook</a>
    <a href="/mentions-legales" class={linkClasses}>Mentions légales</a>
</div>

<div class="container p-4 pt-16">
    <div class="inner">
        <slot/>
    </div>
</div>
<footer class="mb-6">
    <div class="footer text-center">
        <img src={logoSmall} alt="Logo de l'association L'autre terre libérée à Luynes"/>
        <a href="https://www.centre-valdeloire.fr/lactualite-de-la-region-centre-valdeloire/lancement-des-nouvelles-renaissances-2023" target="_blank">
            <img src={labelRenaissance} alt="Label Renaissance(s) 2023"/>
        </a>
    </div>
</footer>