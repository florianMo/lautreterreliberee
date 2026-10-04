<script lang="ts">
    export let cssClass: string = '';
    $: h2Class = 'frankie text-2xl mb-4 ' + cssClass;
</script>

<h2 class={h2Class}><slot></slot></h2>