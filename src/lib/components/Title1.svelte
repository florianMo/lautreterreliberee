<script lang="ts">
    export let cssClass: string = '';
    let h1Class = 'frankie text-center text-4xl mb-6 ' + cssClass;
</script>

<h1 class={h1Class}><slot></slot></h1>