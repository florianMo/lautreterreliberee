<script lang="ts">
    export let cssClass: string = '';
    let h2Class = 'frankie text-2xl mb-4 ' + cssClass;
</script>

<h1 class={h2Class}><slot></slot></h1>