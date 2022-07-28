<script>
    import ResourseCard from "./../../../Components/Cards/ResourseCard.svelte";
</script>

<div id="resources_container" class="flex flex-col gap-[24px]">
    {#each [...new Array(10)] as i}
        <ResourseCard />
    {/each}
</div>
