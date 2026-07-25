<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="mb-4">
                <h1 class="text-gray-900 text-xl font-bold mb-1">Profile</h1>
            </div>

            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 lg:col-span-4">
                    <div class="bg-white border border-border-color rounded-md p-4 text-center">
                        <img src="@/assets/img/avatar/avatar-01.jpg" class="size-24 rounded-full mx-auto mb-3" alt="user">
                        <h2 class="text-base font-semibold text-title mb-2">Jamie Anderson</h2>
                        <p class="text-sm text-default mb-3">Senior Administrator</p>
                        <div class="text-sm text-default text-left space-y-4 pt-3 border-t border-border-color">
                            <div class="flex justify-between"><span>Email</span><span class="text-gray-900 font-semibold">jamie@dreamserp.com</span></div>
                            <div class="flex justify-between"><span>Phone</span><span class="text-gray-900 font-semibold">+1 202 555 0173</span></div>
                            <div class="flex justify-between"><span>Department</span><span class="text-gray-900 font-semibold">Engineering</span></div>
                            <div class="flex justify-between"><span>Joined</span><span class="text-gray-900 font-semibold">11 Jan 2024</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-8">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-sm font-semibold text-title mb-4">Personal Information</h2>
                        <form class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div class="col-span-1">
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">First Name</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Jamie">
                            </div>

                            <div class="col-span-1">
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Last Name</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Anderson">
                            </div>

                            <div class="col-span-1">
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Email</label>
                                <input type="email" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="jamie@dreamserp.com">
                            </div>

                            <div class="col-span-1">
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="+1 202 555 0173">
                            </div>

                            <div class="col-span-1 sm:col-span-2">
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Bio</label>
                                <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4">Senior Administrator at Dreams ERP managing engineering operations.</textarea>
                            </div>

                            <div class="col-span-1 sm:col-span-2 flex justify-end gap-2">
                                <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">
                                    Cancel
                                </button>
                                <button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>
