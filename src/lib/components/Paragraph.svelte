<script lang="ts">
    export let cssClass: string = '';
    $: pClass = 'my-2 ' + cssClass;
</script>

<p class={pClass}><slot></slot></p>