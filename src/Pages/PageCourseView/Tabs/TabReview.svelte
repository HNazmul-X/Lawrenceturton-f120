<script>
    import ReviewCard from "../../../Components/Cards/ReviewCard.svelte";
</script>

<div id="reviews_container" class="flex flex-col gap-[28px]">
    {#each [...new Array(10)] as item}
        <ReviewCard />
    {/each}
</div>
