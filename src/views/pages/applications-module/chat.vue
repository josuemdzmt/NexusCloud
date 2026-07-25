<template>
    <main>
				
        <div class="p-3 lg:py-6 lg:px-0">

            <!-- Header -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Chat</h1>
                <div class="flex items-center gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i> Print</button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <i class="icon-download font-normal"></i>  Export <i class="icon-chevron-down"></i>
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1"> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as PDF
                                </a>
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as Excel
                                </a>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Start grid -->
            <div class="chat-wrapper flex gap-6 w-full relative">

                <!-- Chats sidebar -->
                <div class="sidebar-group bg-white border border-border-color rounded-lg w-full xl:w-[340px]! shrink-0 chat-user-nav">
                    <div id="chats" class="sidebar-content active overflow-x-hidden" data-simplebar>
                        <simplebar class="w-full xl:w-[340px]! overflow-x-hidden" data-simplebar>
                            <div class="chat-search-header p-5 border-b border-border-color">                            
                                <div class="header-title flex items-center justify-between">
                                    <h2 class="mb-3 text-[16px]">Chats</h2>
                                </div>
                                <!-- Chat Search -->
                                <div class="search-wrap">
                                    <form @submit.prevent="submitForm">
                                        <div class="relative">
                                            <input type="text" name="hs-table-search" id="hs-table-search" class="block w-full py-2 ps-8 pe-3 rounded-md text-sm! border border-border-color bg-white text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Search Agents" >
                                            <div class="absolute top-1/2 start-3 -translate-y-1/2 pointer-events-none flex">
                                                <i class="icon-search text-gray-600"></i>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- /Chat Search --> 
                            </div>       
                            
                            <!-- Start Users -->
                            <div class="sidebar-body chat-body p-4 sm:p-5" id="chatsidebar">
                                <div class="chat-users-wrap flex flex-col gap-4">

                                    <!-- User Item 1 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-02.jpg" alt="Jack Michalak" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-center w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">Jack Michalak</h3>
                                                <span class="text-[11px] text-gray-500 truncate">Typing...</span>
                                            </div>
                                            <div class="items-center text-end">
                                                <p class="text-[11px] text-gray-600 mb-1">09:20 AM</p>
                                                <span class="text-success flex items-center justify-end text-[12px]"><i class="icon-check-check"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- User Item 2 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-01.jpg" alt="Lara Curtin" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-danger border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-center w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">Lara Curtin</h3>
                                                <span class="text-[11px] text-gray-500 truncate">Awesome, thanks!</span>
                                            </div>
                                            <div class="text-end">
                                                <p class="text-[11px] text-gray-600 mb-1">5 mins ago</p>
                                                <div class="flex items-center justify-center w-4 h-4 ml-auto rounded-full bg-dark text-white dark:text-white! text-[10px] font-medium leading-0">
                                                    2
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- User Item 3 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-03.jpg" alt="Brian Fulton" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-center w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">Brian Fulton</h3>
                                                <span class="text-[11px] text-gray-500 truncate flex items-center"> <i class="icon-image me-1 text-sm"></i> Image</span>
                                            </div>
                                            <div class="text-end">
                                                <p class="text-[11px] text-gray-600 mb-1">5 mins ago</p>
                                                <span class="text-gray-600 flex items-center justify-end text-[12px]"><i class="icon-check"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- User Item 4 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-04.jpg" alt="Trudy Heintz" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-start w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">Trudy Heintz</h3>
                                                <span class="text-[11px] text-gray-500 truncate flex items-center"> <i class="icon-phone-missed me-1 text-sm"></i> Missed Call</span>
                                            </div>
                                            <div class="text-end">
                                                <p class="text-[11px] text-gray-600 mb-0">10 mins ago</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- User Item 5 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-06.jpg" alt="Roger Tucker" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-start w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">Roger Tucker</h3>
                                                <span class="text-[11px] text-gray-500 truncate flex items-center"> Pease check the design..</span>
                                            </div>
                                            <div class="text-end">
                                                <p class="text-[11px] text-gray-600 mb-0">yesterday</p>
                                                <span class="text-success flex items-center justify-end text-[12px]"><i class="icon-check-check"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- User Item 6 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-05.jpg" alt="Leona Daniels" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-start w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">Leona Daniels</h3>
                                                <span class="text-[11px] text-gray-500 truncate flex items-center"> <i class="icon-phone-missed me-1 text-sm"></i> Missed Call</span>
                                            </div>
                                            <div class="text-end">
                                                <p class="text-[11px] text-gray-600 mb-0">yesterday</p>
                                                <span class="text-success flex items-center justify-end text-[12px]"><i class="icon-check-check"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- User Item 7 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-07.jpg" alt="William Bailey" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-danger border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-start w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">William Bailey</h3>
                                                <span class="text-[11px] text-gray-500 truncate flex items-center"> Shall I submit tomorrow...</span>
                                            </div>
                                            <div class="text-end">
                                                <p class="text-[11px] text-gray-600 mb-0">12 Jan2026</p>
                                                <span class="text-success flex items-center justify-end text-[12px]"><i class="icon-check-check"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- User Item 8 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-08.jpg" alt="Doris Hiller" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-start w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">Doris Hiller</h3>
                                            <span class="text-[11px] text-gray-500 truncate flex items-center"><i class="icon-phone-missed me-1 text-sm"></i>Audio Call</span>
                                            </div>
                                            <div class="text-end">
                                                <p class="text-[11px] text-gray-600 mb-0">12 Jan2026</p>
                                                <span class="text-success flex items-center justify-end text-[12px]"><i class="icon-check-check"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- User Item 9 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-09.jpg" alt="Frank Hidalgo" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-warning border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-start w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">Frank Hidalgo</h3>
                                            <span class="text-[11px] text-gray-500 truncate flex items-center"> Complete the pages...</span>
                                            </div>
                                            <div class="text-end">
                                                <p class="text-[11px] text-gray-600 mb-0">11 Jan2026</p>
                                                <span class="text-success flex items-center justify-end text-[12px]"><i class="icon-check-check"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- User Item 10 -->
                                    <div class="user-item flex items-center gap-3 p-3 bg-white border border-border-color rounded-lg w-full hover:shadow-lg transition">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-10.jpg" alt="Allison Mayne" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-danger border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-start w-full">
                                            <div class="items-baseline">
                                                <h3 class="text-sm font-medium text-dark truncate mb-1">Allison Mayne</h3>
                                            <span class="text-[11px] text-gray-500 truncate flex items-center"><i class="icon-mic me-1 text-sm"></i>Audio</span>
                                            </div>
                                            <div class="text-end">
                                                <p class="text-[11px] text-gray-600 mb-0">10 Jan2026</p>
                                                <span class="text-success flex items-center justify-end text-[12px]"><i class="icon-check-check"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Users -->
                        </simplebar>
                    </div>
                </div>
                <!-- / Chats sidebar -->					

                <!-- Start Chat -->
                <div class="chat chat-messages hide-chatbar show bg-white border border-border-color rounded-lg w-full" id="middle">
                <div>
                    <!-- Chat Header -->
                    <div class="chat-header border-b border-border-color p-5">
                            <div class="bg-light border border-border-color px-4 py-3 rounded-sm md:rounded-full flex flex-wrap gap-3 items-center justify-between">
                                <div class="user-details flex items-center  gap-3">
                                    <div class="xl:hidden block">
                                        <a class="text-muted chat-close" href="#">
                                            <i class="icon-arrow-left"></i>
                                        </a>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <div class="relative shrink-0">
                                            <img src="@/assets/img/avatar/avatar-02.jpg" alt="Jack Michalak" class="w-9 h-9 rounded-full object-cover">
                                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success border-2 border-white rounded-full"></span>
                                        </div>
                                        <div class="flex justify-between items-center w-full flex-wrap gap-3">
                                            <h4 class="text-[16px] font-bold text-dark truncate mb-0 flex items-center flex-wrap gap-2">
                                                Jack Michalak  
                                                <span class="inline-flex items-center text-[11px] font-medium bg-success-transparent text-success px-2 py-0.5 rounded-md border border-success"> <span class="w-1.5 h-1.5 bg-success rounded-full block me-2"></span> Online</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-options flex items-center gap-3">
                                    <!-- Drop Down -->
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color rounded-full text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i></button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-volume-off"></i>Muted Notification 
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-clock"></i>Disappearing Message
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-circle-x"></i>Clear Message
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-trash-2"></i>Delete Chat
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-blocks"></i>Block
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                        <!-- Chat Body -->
                    <simplebar class="chat-body chat-page-group p-5" data-simplebar>
                        <div class="messages">

                                <!-- Chat Messages left 1 -->
                                <div class="chats flex items-start gap-2 ">
                                    <div class="chat-avatar shrink-0">
                                        <img src="@/assets/img/avatar/avatar-02.jpg" alt="Jack Michalak" class="w-8 h-8 rounded-full object-cover shrink-0">
                                    </div>
                                    <div class="chat-content">
                                        <div class="chat-info">
                                            <div class="message-content bg-light p-3 border border-border-color rounded-lg rounded-bl-none mb-1.5 text-sm">
                                                Hi John, I wanted to update you on a new company policy regarding remote work.
                                            </div>
                                            <p class="text-[11px] mb-0">08:40 PM</p>
                                        </div>											
                                    </div>
                                </div>
                                <!--/Chat Messages left 1 -->

                                <!-- Line -->
                                <div class="flex items-center my-6">
                                    <div class="flex-grow h-px bg-gray-200"></div>
                                    <span class="flex-none mx-4 px-4 py-1 bg-light text-dark text-sm font-medium rounded-full">
                                        Today
                                    </span>
                                    <div class="flex-grow h-px bg-gray-200"></div>
                                </div>
                                <!-- Line -->

                                <!-- Chat Messages Right 1 -->
                                <div class="chats chats-right flex items-start justify-end gap-2 mb-6">
                                    <div class="chat-content">
                                        <div class="chat-info">
                                            <div class="message-content bg-light p-3 border border-border-color rounded-lg rounded-br-none mb-1.5 text-sm">
                                                Hi John, I wanted to update you on a new company policy regarding remote work.
                                            </div>
                                            <p class="text-[11px] mb-0 flex items-center justify-end  gap-2"><i class="icon-check-check text-succes text-[11px]"></i>09:00 PM</p>
                                        </div>											
                                    </div>
                                    <div class="chat-avatar shrink-0">
                                        <img src="@/assets/img/avatar/avatar-01.jpg" alt="Jack Michalak" class="w-8 h-8 rounded-full object-cover shrink-0">
                                    </div>
                                </div>
                                <!--/Chat Messages Right 1 -->

                                <!-- Chat Messages left 2 -->
                                <div class="chats flex items-start gap-2 mb-6">
                                    <div class="chat-avatar shrink-0">
                                        <img src="@/assets/img/avatar/avatar-02.jpg" alt="Jack Michalak" class="w-8 h-8 rounded-full object-cover shrink-0">
                                    </div>
                                    <div class="chat-content">
                                        <div class="chat-info">
                                            <div class="message-content bg-light p-3 border border-border-color rounded-lg rounded-bl-none mb-1.5 text-sm">
                                                Oh yeah, I noticed that too. I was thinking of shrinking them a bit.
                                            </div>
                                            <p class="text-[11px] mb-0">09:01 AM</p>
                                        </div>											
                                    </div>
                                </div>
                                <!--/Chat Messages left 1 -->

                                <!-- Chat Messages Right 2 -->
                                <div class="chats chats-right flex items-start justify-end gap-2 mb-6">
                                    <div class="chat-content">
                                        <div class="chat-info">
                                            <div class="message-content bg-light p-3 border border-border-color rounded-lg rounded-br-none mb-1.5 text-sm">
                                                Good idea. Also, the “Export” button feels kinda hidden. Maybe make it more visible?
                                            </div>
                                            <p class="text-[11px] mb-0 flex items-center justify-end  gap-2"><i class="icon-check-check text-succes text-[11px]"></i>09:03 PM</p>
                                        </div>											
                                    </div>
                                    <div class="chat-avatar shrink-0">
                                        <img src="@/assets/img/avatar/avatar-01.jpg" alt="Jack Michalak" class="w-8 h-8 rounded-full object-cover shrink-0 block">
                                    </div>
                                </div>
                                <!--/Chat Messages Right 2 -->

                                <!-- Chat Messages left 3 -->
                                <div class="chats flex items-start gap-2 mb-6">
                                    <div class="chat-avatar shrink-0">
                                        <img src="@/assets/img/avatar/avatar-02.jpg" alt="Jack Michalak" class="w-8 h-8 rounded-full object-cover shrink-0">
                                    </div>
                                    <div class="chat-content">
                                        <div class="chat-info">
                                            <div class="message-content bg-light p-3 border border-border-color rounded-lg rounded-bl-none mb-1.5 text-sm">
                                                Agreed. I’ll try a brighter color and see how it looks.
                                            </div>
                                            <p class="text-[11px] mb-0">09:05 AM</p>
                                        </div>											
                                    </div>
                                </div>
                                <!--/Chat Messages left 3 -->

                                <!-- Chat Messages Right 4 -->
                                <div class="chats chats-right flex items-start justify-end gap-2 mb-6">
                                    <div class="chat-content">
                                        <div class="chat-info">
                                            <div class="message-content bg-light p-3 border border-border-color rounded-lg rounded-br-none mb-1.5 text-sm">
                                                Cool. By the way, did you test it on mobile yet?
                                            </div>
                                            <p class="text-[11px] mb-0 flex items-center justify-end  gap-2"><i class="icon-check-check text-succes text-[11px]"></i>09:03 PM</p>
                                        </div>											
                                    </div>
                                    <div class="chat-avatar shrink-0">
                                        <img src="@/assets/img/avatar/avatar-01.jpg" alt="Jack Michalak" class="w-8 h-8 rounded-full object-cover shrink-0">
                                    </div>
                                </div>
                                <!--/Chat Messages Right 4 -->

                                <!-- Chat Messages left 4 -->
                                <div class="chats flex items-start gap-2 ">
                                    <div class="chat-avatar shrink-0">
                                        <img src="@/assets/img/avatar/avatar-02.jpg" alt="Jack Michalak" class="w-8 h-8 rounded-full object-cover shrink-0">
                                    </div>
                                    <div class="chat-content">
                                        <div class="chat-info">
                                            <div class="message-content bg-light p-3 border border-border-color rounded-lg rounded-bl-none mb-1.5 text-sm">
                                                Typing...
                                            </div>
                                        </div>											
                                    </div>
                                </div>
                                <!--/Chat Messages left 4 -->
                                            
                        </div>
                    </simplebar>
                </div>

                <!-- Start Chat Footer -->
                <div class="chat-footer px-2 sm:px-5 pb-5">
                    <form class="footer-form mt-6 pt-6 border-t border-border-color">
                        <div class="flex items-center w-full p-2 mx-auto bg-light rounded-full border border-border-color">
                                <div class="flex items-center space-x-1 px-0 sm:px-2">

                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color size-8 rounded-full text-gray-900 flex items-center justify-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>

                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1"> 
                                                <a class="flex items-center px-2 py-1.5 gap-2 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-camera"></i>Camera
                                                </a>
                                                <a class="flex items-center px-2 py-1.5 gap-2 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-image me-2"></i>Gallery
                                                </a>  
                                                <a class="flex items-center px-2 py-1.5 gap-2 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-headphones"></i>Audio
                                                </a>
                                                <a class="flex items-center px-2 py-1.5 gap-2 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-map-pin"></i>Location
                                                </a>
                                                <a class="flex items-center px-2 py-1.5 gap-2 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-contact"></i>Contact
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="w-8 h-8 rounded-full bg-white text-dark dark:text-dark! border border-border-color hover:bg-primary transition hover:text-white hover:border-primary dark:text-white flex items-center justify-center cursor-pointer"><i class="icon-smile"></i></button>
                                    <button class="w-8 h-8 rounded-full bg-white text-dark dark:text-dark! border border-border-color hover:bg-primary transition hover:text-white hover:border-primary dark:text-white flex items-center justify-center cursor-pointer"><i class="icon-mic"></i></button>
                                </div>
                                <div class="h-4 w-px bg-gray-400 mx-2"></div>
                                <input type="text" placeholder="Type your message here..." class="flex-1 bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-500 px-2 outline-none">
                                <button class="flex items-center justify-center w-8 h-8 bg-primary cursor-pointer hover:bg-primary-800 text-white rounded-full text-[14px] transition-all ml-2 shrink-0">
                                    <i class="icon-send"></i>
                                </button>
                            </div>                       
                    </form>
                </div>
                <!-- End Chat Footer -->

                </div>
                <!-- Start Chat -->

            </div>
            <!-- End Grid -->


        </div>
    </main>

</template>

<script>
import { all_routes } from '@/router/all_routes';
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

export default {
    components: {
        simplebar,
    },
    setup() {
        const submitForm = () => {
            router.push("/applications/chat");
        };

        return { 
            all_routes,
            submitForm
        };
    },
}
</script>
