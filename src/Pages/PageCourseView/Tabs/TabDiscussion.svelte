<script>
	import DiscussionCard from './../../../Components/Cards/DiscussionCard.svelte';
</script>

<div id="discussion_container" class="flex flex-col gap-[24px]">
    {#each [...new Array(10)] as item}
        <DiscussionCard/>
    {/each}
</div>
