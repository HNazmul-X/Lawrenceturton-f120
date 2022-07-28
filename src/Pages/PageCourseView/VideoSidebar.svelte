<script>
    import CourseCurriculamItem from "./../../Components/Others/CourseCurriculamItem.svelte";
</script>

<div class="c-scrollbar w-full lg:w-[20%] h-full lg:fixed right-0 flex-1 lg:flex flex-col lg:border-l border-gray-200 overflow-y-scroll">
    <!-- instructor detail -->
    <div class="py-[25px] border-b border-gray-200">
        <div class="lg:px-[40px]">
            <h1 class="text-[24px] font-medium text-[#222222]">About the Course</h1>
            <div class="py-5">
                <div class="flex items-center gap-[16px] mb-[25px]">
                    <img
                        class="w-[64px] h-[64px] rounded-full object-cover"
                        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&amp;dl=pexels-andrea-piacquadio-733872.jpg&amp;fm=jpg"
                        alt="image" />
                    <div>
                        <h2 class="text-[18px] font-medium text-[#222222]">Prof. Olivia Breaker</h2>
                        <p class="text-[16px] text-[#222222] opacity-50">MP Expert</p>
                    </div>
                </div>
                <div>
                    <p class="text-[16px] font-normal text-[#222222] opacity-80 inline">
                        This course is designed to help you for your practical day to day project management, to improve your project management knowledge...s
                    </p>
                    <a href="#" class="inline font-medium text-black">read more</a>
                </div>
            </div>
        </div>
    </div>

    <!-- course completion -->
    <div class="pt-[30px] pb-[25px]">
        <div class="lg:px-[40px]">
            <h1 class="text-[24px] font-medium text-[#222222]">Course Completion</h1>
            <div class="pt-[25px] relative">
                <div class="flex items-center justify-between mb-1">
                    <p class="text-[12px] font-medium text-[#222222]">33% Completed</p>
                    <p class="text-[12px] font-medium text-[#222222] opacity-50">5/15</p>
                </div>
                <!-- progress line -->
                <div class="relative w-full h-[1px] bg-[#2222221a] after:content-[''] after:absolute after:w-[33%] after:left-0 after:top-0 after:bg-[#222222] after:h-[2px] after:z-10"></div>
            </div>
        </div>
    </div>
    <!-- course chapters -->
    <!-- [c-scrollbar] using custom styles at top-->
    <div class="flex flex-col gap-[5px] overflow-y-scroll pb-[25px] c-scrollbar">
        <CourseCurriculamItem />
        <CourseCurriculamItem state="running" />
        <CourseCurriculamItem state="locked" />
    </div>
</div>
