<script lang="ts">
    export let number: number;
    export let description: string;
    export let url: string | undefined = undefined;
</script>

<li id={`ref${number}`}>
    <a href={`#backRef${number}`}>↑</a>
    {description}
    {#if url}
        :&nbsp;<a target="_blank" rel="noopener noreferrer" href={url}>{url}</a>
    {/if}
</li>

<style>
    a {
        word-wrap: break-word;
    }
</style>