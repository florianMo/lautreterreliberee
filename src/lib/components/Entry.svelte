<script lang="ts">
    export let author: string = '';
    export let authorLink: string = '';
    export let title: string = '';
    export let titleLink: string = '';
    export let edition: string = '';
    export let extract: string = '';
    export let imageName: string = '';
    export let imageAlt: string = '';
    export let highlight = false;
    $: imagePath = `/images/bibliographie/${imageName}`;

    let liClass = highlight ? 'bg-atl-red text-white py-2 px-4 my-2' : '';
    let extractClass = highlight ? 'text-sm text-white' : 'text-sm my-2 py-2 px-4 bg-atl-black text-white';
</script>

<li class={liClass}>
    <p class="text-lg">
        {#if author}
            {#if authorLink}
                <a href="{authorLink}" target="_blank">{author}</a>,
            {:else}
                {author},
            {/if}
        {/if}

        <span class="italic font-bold">
            {#if titleLink}
                <a href="{titleLink}" target="_blank">{title}</a>,&nbsp;
            {:else}
                {title},&nbsp;
            {/if}
        </span>

        {#if edition}{edition}{/if}
    </p>
    {#if extract}
        <p class={extractClass}>{extract}</p>
    {/if}
    {#if imageName}
        <div class="flex justify-center my-4">
            <img loading="lazy" decoding="async" class="max-h-96 border-4 border-atl-black" src="{imagePath}" alt="{imageAlt}"/>
        </div>
    {/if}
</li>

<style>
    li::marker {
        color: #2C2E35 ! important;
    }
</style>