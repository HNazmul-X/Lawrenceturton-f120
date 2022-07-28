<script lang="ts">
    import type { ComponentType } from "svelte";
    import { fade } from "svelte/transition";
    import TabDescription from "./TabDescription.svelte";
    import TabDiscussion from "./TabDiscussion.svelte";
    import TabInstructor from "./TabInstructor.svelte";
    import TabResource from "./TabResource.svelte";
    import TabReview from "./TabReview.svelte";

    interface Tab {
        id: string;
        tab: string;
        component: ComponentType;
    }
    const tabsData: Tab[] = [
        {
            id: "1VcWhJlow6ICgQC4z_6Z5",
            tab: "DESCRIPTION",
            component: TabDescription,
        },
        {
            id: "CAyQhi2vK_mRUS3lFnipG",
            tab: "REVIEW",
            component: TabReview,
        },
        {
            id: "CAyQhi2vK_mRUS$LTnipG",
            tab: "DISCUSSION",
            component: TabDiscussion,
        },
        {
            id: "CAyQhi2vK_mRUS$LT4EpG",
            tab: "RESOURCES",
            component: TabResource,
        },
        {
            id: "CAyLJTAi2vK_mRUS$LT4EpG",
            tab: "INSTRUCTOR",
            component: TabInstructor,
        },
    ];
    let selectedTab: Tab = tabsData[0];
    let tabActiveClass = "border-b-2 border-black text-[#222222]";
</script>

<div class="pt-[50px]">
    <div class="hide-scrollbar border-b border-gray-200 overflow-x-scroll">
        <ul class="items flex items-center gap-[40px] text-[#22222280]">
            {#each tabsData as tab}
                <li
                    data-container="description_container"
                    id="description"
                    on:click="{() => (selectedTab = tab)}"
                    class="relative cursor-pointer pb-[10px] text-[14px] font-semibold tracking-wider {selectedTab.id === tab.id ? tabActiveClass : ''} ">
                    {tab.tab}
                </li>
            {/each}
        </ul>
    </div>
    <!-- Tab container -->
    <div id="tabs_container" class="pt-[24px] pb-[28px]">
        {#each tabsData as tab (tab.id)}
            {#if tab.id === selectedTab.id}
                <div in:fade|local="{{ duration: 500 }}">
                    <svelte:component this="{selectedTab.component}" />
                </div>
            {/if}
        {/each}
    </div>
</div>
