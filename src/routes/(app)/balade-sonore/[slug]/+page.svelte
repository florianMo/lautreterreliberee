<script>
    export let data;
    $: audioPath = `/audio/${data.ardoise.numero}.mp3`;
</script>

<svelte:head>
    <title>{data.ardoise.titre} — L'autre terre libérée</title>
</svelte:head>

<div class="max-w-screen-lg m-auto pl-6 pr-6">
    <h5 class="frankie text-2xl">Ardoise {data.ardoise.numero}</h5>
    <h1 class="frankie text-4xl">{data.ardoise.titre}</h1>
    <div class="mb-4">
        <a href="/balade-sonore" class="frankie text-2xl mb-6">Carte de la balade</a>
    </div>
    <audio controls src={audioPath} class="w-full mb-6"/>

    <div class="balade-nav flex justify-between frankie text-4xl mt-8 mb-8 ml-3 mr-3">
        {#if data.previous}
            <a href={`/balade-sonore/${data.previous.numero}`} class="previous" title="Ardoise précédente"/>
        {/if}
        {#if data.next}
            <a href={`/balade-sonore/${data.next.numero}`} class="next ml-auto" title="Ardoise suivante"/>
        {/if}
    </div>

    <div class="text-lg lg:text-2xl mb-6">
        {#each data.ardoise.texteArdoise as paragraph}
            <p class="mb-2">{@html paragraph}</p>
        {/each}
    </div>
    <div class="text-base lg:text-xl">
        <h5 class="frankie text-2xl mb-6">Transcription</h5>
        {#each data.ardoise.texteAudio as paragraph}
            <p class="mb-3">{@html paragraph}</p>
        {/each}
    </div>

    <div class="text-center mt-8 italic">
        <p>Moyens techniques : <a href="https://masaoproductions.fr/" target="_blank">MASAO Productions</a></p>
        <p>Voix narrateur : Christophe Gaillard</p>
        <p>Voix Louis Rimbault : <a href="http://www.jean-barat.com/" target="_blank">Jean Barat</a></p>
        <p>Voix Nadaud : Marie-Désirée Martins</p>
        <p>Musique : Florian Motteau</p>
        <p>Stagiaires enregistrement sons : Albane Gaillard, Olive Motteau-Martins</p>
    </div>
</div>

<style lang="scss">
  .balade-nav {
    display: flex;
    align-items: center;

    a {
      border-right: 10px solid #12133b;
      border-bottom: 10px solid #12133b;
      width: 30px;
      height: 30px;
      transform: rotate(-45deg);

      &.previous {
        transform: rotate(135deg);
      }
    }
  }
</style>
