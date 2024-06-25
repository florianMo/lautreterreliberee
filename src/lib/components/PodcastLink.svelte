<script lang="ts">
    export let number: string = '';
</script>

<a href="/balade-sonore/{number}">podcast {number}</a>

<style lang="scss">
    a {
        display: inline-block;
        text-align: center;
        height: 24px;
        line-height: 24px;
        font-weight: bold;
        border-radius: 12px;
        margin-left: 4px;
        margin-right: 4px;
        padding-left: 8px;
        padding-right: 8px;
        background-color: theme('colors.atl-brown');
        color: white;
        font-size: 10px;

        &:hover {
            text-decoration: none;
        }
    }
</style>