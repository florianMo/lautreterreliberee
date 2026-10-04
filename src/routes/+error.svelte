<script>
    import { page } from '$app/state';
    import rimbaultTransparent from "#lib/images/rimbault-transparent.png";
</script>

<svelte:head><title>Erreur {page.status} — L'autre terre libérée</title></svelte:head>

<div class="container">
    <div class="img-header text-center flex justify-center mt-10">
        <img src={rimbaultTransparent} alt="Portrait de Louis Rimbault"/>
    </div>
    <div class="text-center mt-10">
        <h1 class="frankie text-atl-red">{page.status}</h1>
        <h1 class="frankie">Ceci est une erreur...</h1>
        {#if page.status === 404}
            <h2 class="frankie">Il n'y a (encore) rien ici</h2>
        {:else}
            <h2 class="frankie">Quelque chose s'est mal passé...</h2>
        {/if}
        <a href="/" title="Retour à l'accueil" class="block mt-6">Retour à la page d'accueil</a>
    </div>
</div>
