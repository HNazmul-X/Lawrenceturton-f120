<script lang="ts">
    import MobileNavigation from "../Others/MobileNavigation.svelte";
    import SideNavbar from "./SideNavbar.svelte";
</script>

<main class="w-full min-h-screen flex flex-col overflow-hidden lg:flex-row font-['Poppins']">
    <!-- sidebar -->
    <SideNavbar />
    <!-- right content -->
    <section class="flex flex-col lg:flex-row w-full px-[25px] lg:px-0">
        <!-- Mobile Navigation -->
        <MobileNavigation />
        <slot />
    </section>
</main>
