<script lang="ts">
    export let number: number;
</script>

<sup id={'backRef' + number}>
    <a href={'#ref' + number}>{number}</a>
</sup>