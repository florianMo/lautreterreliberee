<script lang="ts">
    export let cssClass: string = '';
    let pClass = 'text-md my-2 ' + cssClass;
</script>

<p class={pClass}><slot></slot></p>