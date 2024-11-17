<script lang="ts">
    export let number: number;
    export let description: string;
    export let url: string;
</script>

<li id={`ref${number}`}>
    <a href={`#backRef${number}`}>↑</a>
    {description}&nbsp;:&nbsp;<a target="_blank" href={url}>{url}</a>
</li>

<style>
    a {
        word-wrap: break-word;
    }
</style>