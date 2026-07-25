<template>
    <!-- 1. Select Authentication Method -->
    <div id="popup-select-auth" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Select Option</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#popup-select-auth"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4">
                    <p class="text-sm font-semibold text-title mb-1">How would you like to get your codes?</p>
                    <p class="text-sm text-default mb-4">You'll need an authentication code when signing in to your account.</p>
                    <div class="space-y-3">
                        <div class="flex items-start justify-between gap-3 border border-primary bg-primary-transparent rounded-md p-3 cursor-pointer">
                            <div>
                                <p class="text-sm font-semibold text-title mb-1">SMS text message</p>
                                <p class="text-sm text-default mb-0">Receive a text message to your mobile device when signing in.</p>
                            </div>
                            <i class="ph-bold ph-check text-primary text-lg"></i>
                        </div>
                        <div class="flex items-start justify-between gap-3 border border-border-color rounded-md p-3 cursor-pointer hover:border-primary">
                            <div>
                                <p class="text-sm font-semibold text-title mb-1">Email Authentication</p>
                                <p class="text-sm text-default mb-0">Receive a Email to your Registered Email Address</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-select-auth">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#popup-select-auth" onclick="setTimeout(function(){window.HSOverlay&&HSOverlay.open('#popup-add-phone')},250)">Continue</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 2. Add SMS Authentication (Phone Number) -->
    <div id="popup-add-phone" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Add SMS Authentication</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#popup-add-phone"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4">
                    <p class="text-sm text-default mb-4">We'll send a time sensitive authentication code to your mobile phone via text message when you're signing in.</p>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone Number <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div class="flex justify-between items-center p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-add-phone">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#popup-add-phone" onclick="setTimeout(function(){window.HSOverlay&&HSOverlay.open('#popup-sms-code')},250)">Add Phone Number</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 3. SMS Code Verification -->
    <div id="popup-sms-code" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Add SMS Authentication</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#popup-sms-code"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4">
                    <p class="text-sm text-default mb-4">We'll send a time sensitive authentication code to your mobile phone via text message when you're signing in.</p>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone Number <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="6713894208" readonly>
                    <a href="#" class="text-sm text-primary underline mb-3 inline-block">Edit Phone Number</a>
                    <p class="text-sm text-gray-900 font-semibold mb-2 mt-3">We've sent a 6 digit verification code to the number above <span class="text-danger">*</span></p>
                    <div class="grid grid-cols-6 gap-2 mb-3">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:border-primary focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:border-primary focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:border-primary focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:border-primary focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:border-primary focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:border-primary focus:ring-0">
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Didn't receive code? <a href="#" class="text-primary underline">Resend code</a></p>
                        <span class="text-[10px] bg-danger-transparent text-danger px-2 py-0.5 rounded">01:00</span>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-sms-code">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#popup-sms-code">Verify Code &amp; Enable</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 4. Add Email Authentication -->
    <div id="popup-add-email" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Add Email Authentication</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#popup-add-email"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4">
                    <p class="text-sm text-default mb-4">We'll send a time sensitive authentication code to your email message when you're signing in.</p>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Email Address <span class="text-danger">*</span></label>
                    <input type="email" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="">
                </div>
                <div class="flex justify-between items-center p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-add-email">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#popup-add-email" onclick="setTimeout(function(){window.HSOverlay&&HSOverlay.open('#popup-email-code')},250)">Add Email Address</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 5. Email Code Verification -->
    <div id="popup-email-code" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Add Email Authentication</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#popup-email-code"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4">
                    <p class="text-sm text-default mb-4">We'll send a time sensitive authentication code to your email message when you're signing in.</p>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Email Address <span class="text-danger">*</span></label>
                    <input type="email" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0 mb-1" value="stevenosborne@example.com" readonly>
                    <a href="#" class="text-sm text-primary underline mb-3 inline-block">Edit Email Address</a>
                    <p class="text-sm text-gray-900 font-semibold mb-2 mt-3">We've sent a 6 digit verification code to the email above <span class="text-danger">*</span></p>
                    <div class="grid grid-cols-6 gap-2 mb-3">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-primary rounded-md bg-white focus:outline-none focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <input type="text" maxlength="1" class="aspect-square text-center text-base border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Didn't receive code? <a href="#" class="text-primary underline">Resend code</a></p>
                        <span class="text-[10px] bg-danger-transparent text-danger px-2 py-0.5 rounded">01:00</span>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-email-code">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#popup-email-code">Verify Code &amp; Enable</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 6. Change Phone Number -->
    <div id="popup-change-phone" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Change Phone Number</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#popup-change-phone"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4 space-y-3">
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Current Phone Number <span class="text-danger">*</span></label>
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">New Phone Number <span class="text-danger">*</span></label>
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <p class="text-[11px] text-default mt-1"><i class="ph ph-info"></i> New phone number only updated once you verified</p>
                    </div>
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Current Password <span class="text-danger">*</span></label>
                        <div class="relative">
                            <input id="hs-toggle-password3" type="password" class="form-input form-input-icon w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:border-border-color focus:ring-0" placeholder="************" value="">
                            <span class="absolute start-0 top-2 ms-3"><i class="icon icon-lock"></i></span>
                            <button type="button" data-hs-toggle-password="{ &quot;target&quot;: &quot;#hs-toggle-password3&quot; }" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer rounded-e-md focus:outline-hidden focus:text-blue-600">
                                <i class="icon icon-eye hidden hs-password-active:block"></i>
                                <i class="icon icon-eye-off hs-password-active:hidden"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-change-phone">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#popup-change-phone">Save Changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 7. Change Email Address -->
    <div id="popup-change-email" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Change Email Address</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#popup-change-email"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4 space-y-3">
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Current Email <span class="text-danger">*</span></label>
                        <input type="email" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Placeholder">
                    </div>
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">New Email <span class="text-danger">*</span></label>
                        <input type="email" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Placeholder">
                        <p class="text-[11px] text-default mt-1"><i class="ph ph-info"></i> New email only updated once you verified</p>
                    </div>
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Current Password <span class="text-danger">*</span></label>
                        <div class="relative">
                            <input id="hs-toggle-password4" type="password" class="form-input form-input-icon w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:border-border-color focus:ring-0" placeholder="************" value="">
                            <span class="absolute start-0 top-2 ms-3"><i class="icon icon-lock"></i></span>
                            <button type="button" data-hs-toggle-password="{ &quot;target&quot;: &quot;#hs-toggle-password4&quot; }" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer rounded-e-md focus:outline-hidden focus:text-blue-600">
                                <i class="icon icon-eye hidden hs-password-active:block"></i>
                                <i class="icon icon-eye-off hs-password-active:hidden"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-change-email">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#popup-change-email">Save Changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 8. Delete Account -->
    <div id="popup-delete-account" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Delete Account</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#popup-delete-account"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4">
                    <p class="text-sm font-semibold text-title mb-1">Why Are You Deleting Your Account?</p>
                    <p class="text-sm text-default mb-4">We're sorry to see you go! To help us improve, please let us know your reason for deleting your account</p>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Reason <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Not using anymore</option>
                        <option>Privacy concerns</option>
                        <option>Found alternative</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="flex justify-between items-center p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-delete-account">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#popup-delete-account">Delete Account</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 9. Change Password -->
    <div id="popup-change-password" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Change Password</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#popup-change-password"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4 space-y-3">
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Current Password <span class="text-danger">*</span></label>
                        <div class="relative">
                            <input id="hs-toggle-password6" type="password" class="form-input form-input-icon w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:border-border-color focus:ring-0" placeholder="************" value="">
                            <span class="absolute start-0 top-2 ms-3"><i class="icon icon-lock"></i></span>
                            <button type="button" data-hs-toggle-password="{ &quot;target&quot;: &quot;#hs-toggle-password6&quot; }" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer rounded-e-md focus:outline-hidden focus:text-blue-600">
                                <i class="icon icon-eye hidden hs-password-active:block"></i>
                                <i class="icon icon-eye-off hs-password-active:hidden"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">New Password <span class="text-danger">*</span></label>
                        <div class="relative">
                            <input id="hs-toggle-password7" type="password" class="form-input form-input-icon w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:border-border-color focus:ring-0" placeholder="************" value="">
                            <span class="absolute start-0 top-2 ms-3"><i class="icon icon-lock"></i></span>
                            <button type="button" data-hs-toggle-password="{ &quot;target&quot;: &quot;#hs-toggle-password7&quot; }" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer rounded-e-md focus:outline-hidden focus:text-blue-600">
                                <i class="icon icon-eye hidden hs-password-active:block"></i>
                                <i class="icon icon-eye-off hs-password-active:hidden"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Confirm Password <span class="text-danger">*</span></label>
                        <div class="relative">
                            <input id="hs-toggle-password8" type="password" class="form-input form-input-icon w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:border-border-color focus:ring-0" placeholder="************" value="">
                            <span class="absolute start-0 top-2 ms-3"><i class="icon icon-lock"></i></span>
                            <button type="button" data-hs-toggle-password="{ &quot;target&quot;: &quot;#hs-toggle-password8&quot; }" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer rounded-e-md focus:outline-hidden focus:text-blue-600">
                                <i class="icon icon-eye hidden hs-password-active:block"></i>
                                <i class="icon icon-eye-off hs-password-active:hidden"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-change-password">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#popup-change-password">Save Changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
