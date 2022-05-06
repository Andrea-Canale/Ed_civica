<script lang="ts">
    export let command:string,commandcolor:string,background:string;
</script>

<div style={"background-color:" + background} class="terminal">

<p  style={"color:" + commandcolor}>{command}</p>
</div>

<style>
    .terminal{
        max-width: 700px;
    }
</style>