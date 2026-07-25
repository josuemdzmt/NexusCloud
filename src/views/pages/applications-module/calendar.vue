<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Calendar</h1>
            </div>

            <!-- Start grid -->
            <div class="grid grid-cols-1 calendar-wrapper">
                <div class="bg-white p-5 border border-border-color rounded-lg">
                    <FullCalendar ref="calendarEl" :options="calendarOptions" />
                </div>
            </div>
            <!-- End grid -->

            <!-- Event details popup -->
            <div v-if="selectedEvent"
                class="fc-event-popup fixed z-[9999] top-0 left-0 size-full overflow-x-hidden overflow-y-auto flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm flex-wrap"
                @click.self="closePopup">
                <div class="max-w-[400px] min-w-[300px] w-full p-6 bg-white border border-border-color rounded-lg shadow-xl">
                    <div class="flex justify-between items-center mb-5 pb-5 border-b border-border-color">
                        <h4>Event Details</h4>
                        <button type="button"
                            class="popup-close size-7 inline-flex justify-center items-center rounded-full border border-border-color bg-white text-gray-900 text-base hover:bg-danger hover:border-danger hover:text-white dark:hover:text-dark focus:outline-hidden focus:bg-danger cursor-pointer"
                            @click="closePopup">
                            <i class="icon-x"></i>
                        </button>
                    </div>
                    <div class="mb-5 pb-5 border-b border-border-color">
                        <p class="font-semibold text-dark mb-2">{{ selectedEvent.title }}</p>
                        <p class="mb-4 text-sm text-gray-600">An in company training workshop focused on enhancing employee skills through practical, hands on learning.</p>
                        <p class="flex items-center gap-2 mb-3 text-sm">
                            <i class="icon-calendar text-dark"></i>
                            <span>{{ formattedDate }}</span>
                        </p>
                        <p class="flex items-center gap-2 mb-3 text-sm">
                            <i class="icon-clock text-dark"></i>
                            {{ formattedTime }}
                        </p>
                        <p class="flex items-center gap-2 text-sm">
                            <i class="icon-map-pin text-dark"></i>
                            Room 2A
                        </p>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="avatar-list-stacked">
                            <img src="@/assets/img/avatar/avatar-27.jpg" alt="JS" class="w-6 h-6 inline-flex items-center justify-center hover:-translate-y-[0.188rem] hover:z-1 transition-transform duration-150 ease-in-out -me-3.5 rounded-full border border-border-color">
                            <img src="@/assets/img/avatar/avatar-28.jpg" alt="AR" class="w-6 h-6 inline-flex items-center justify-center hover:-translate-y-[0.188rem] hover:z-1 transition-transform duration-150 ease-in-out -me-3.5 rounded-full border border-border-color">
                            <img src="@/assets/img/avatar/avatar-29.jpg" alt="KM" class="w-6 h-6 inline-flex items-center justify-center hover:-translate-y-[0.188rem] hover:z-1 transition-transform duration-150 ease-in-out -me-3.5 rounded-full border border-border-color">
                            <span class="w-6 h-6 inline-flex items-center justify-center hover:-translate-y-[0.188rem] text-[12px] bg-light text-dark -me-3.5 rounded-full border border-border-color"> 1+ </span>
                        </div>
                        <div class="flex items-center gap-2">
                            <button data-hs-overlay="#edit-event"
                                class="size-7 text-sm flex items-center cursor-pointer justify-center bg-white border border-border-color text-dark hover:text-primary rounded-full">
                                <i class="icon-pencil-line"></i>
                            </button>
                            <a href="#"
                                class="size-7 text-sm flex items-center justify-center bg-white border border-border-color text-dark hover:text-danger rounded-full">
                                <i class="icon-trash-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <calendar-modal></calendar-modal>
</template>

<script>
// FullCalendar imports
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
    components: {
        FullCalendar,
    },
    data() {
        return {
            selectedEvent: null,
            calendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                initialView: "dayGridMonth",
                height: 650,
                contentHeight: 620,
                handleWindowResize: true,
                expandRows: true,
                eventDisplay: "block",
                events: this.buildEvents(),
                customButtons: {
                    fcToday: {
                        text: "Today",
                        click: () => {
                            this.$refs.calendarEl.getApi().today();
                        },
                    },
                    addEvent: {
                        text: "+ New Event",
                        click: () => {
                            document.querySelector('[data-hs-overlay="#add-event"]')?.click();
                        },
                    },
                },
                eventClick: this.handleEventClick,
                headerToolbar: {
                    start: "prev,title,next",
                    center: "dayGridMonth,dayGridWeek,dayGridDay",
                    end: "fcToday addEvent",
                },
                views: {
                    dayGridMonth: {
                        displayEventTime: false,
                        dayMaxEvents: true,
                    },
                    dayGridWeek: {
                        displayEventTime: true,
                    },
                    dayGridDay: {
                        displayEventTime: true,
                    },
                },
                eventDidMount: this.handleEventDidMount,
            },
        };
    },
    computed: {
        formattedDate() {
            if (!this.selectedEvent) return "";
            return this.selectedEvent.start.toLocaleDateString("en-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        },
        formattedTime() {
            if (!this.selectedEvent) return "";
            return this.selectedEvent.allDay
                ? "All Day"
                : this.selectedEvent.start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        },
    },
    methods: {
        formatDate(date) {
            return date.toISOString().split("T")[0];
        },
        addDays(days) {
            const today = new Date();
            const date = new Date(today);
            date.setDate(today.getDate() + days);
            return this.formatDate(date);
        },
        buildEvents() {
            return [
                {
                    title: "Team Hall YT",
                    start: this.addDays(0),
                    backgroundColor: "#EEF2FF",
                    borderColor: "#6366F1",
                    textColor: "#4338CA",
                },
                {
                    title: "Training Workshop",
                    start: `${this.addDays(1)}T09:30:00`,
                    end: `${this.addDays(1)}T10:30:00`,
                    backgroundColor: "#FCE7F3",
                    borderColor: "#EC4899",
                    textColor: "#BE185D",
                },
                {
                    title: "Wellness Session",
                    start: this.addDays(2),
                    backgroundColor: "#ECFEFF",
                    borderColor: "#06B6D4",
                    textColor: "#0E7490",
                },
                {
                    title: "Team Activity",
                    start: this.addDays(3),
                    backgroundColor: "#FFF7ED",
                    borderColor: "#F97316",
                    textColor: "#9A3412",
                },
                {
                    title: "Weekly Sync",
                    start: this.addDays(4),
                    allDay: true,
                    backgroundColor: "#F0FDF4",
                    borderColor: "#22C55E",
                    textColor: "#15803D",
                },
                {
                    title: "Weekly Sync",
                    start: `${this.addDays(4)}T09:00:00`,
                    end: `${this.addDays(4)}T10:00:00`,
                    backgroundColor: "#F0FDF4",
                    borderColor: "#22C55E",
                    textColor: "#15803D",
                },
                {
                    title: "Project Demo",
                    start: this.addDays(5),
                    allDay: true,
                    backgroundColor: "#FAF5FF",
                    borderColor: "#A855F7",
                    textColor: "#7E22CE",
                },
                {
                    title: "Project Demo",
                    start: `${this.addDays(5)}T09:00:00`,
                    end: `${this.addDays(5)}T10:30:00`,
                    backgroundColor: "#FAF5FF",
                    borderColor: "#A855F7",
                    textColor: "#7E22CE",
                },
            ];
        },
        handleEventClick(info) {
            info.jsEvent.preventDefault();
            this.selectedEvent = info.event;
        },
        closePopup() {
            this.selectedEvent = null;
        },
        handleEventDidMount(info) {
            const isMonthTab = info.view.type === "dayGridMonth";
            const title = info.event.title;

            if (isMonthTab && !info.event.allDay && (title === "Weekly Sync" || title === "Project Demo")) {
                info.el.style.display = "none";
                return;
            }

            if (isMonthTab && (title === "Strategy Meeting" || title === "Tech Review")) {
                info.el.style.display = "none";
                return;
            }

            info.el.style.backgroundColor = info.event.backgroundColor;
            info.el.style.borderColor = info.event.borderColor;
            info.el.style.color = info.event.textColor;
            info.el.style.borderRadius = "6px";

            const frame = info.el.querySelector(".fc-event-main");
            if (frame) {
                frame.style.padding = "2px 4px";
                frame.style.fontWeight = "600";
            }
        },
    },
};
</script>

<style scoped>
:deep(#calendar),
:deep(.fc) {
    overflow: hidden;
}
</style>
