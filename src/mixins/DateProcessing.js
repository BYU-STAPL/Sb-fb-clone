export const dateProcessing = {
    data() {
        return {
            dateFormatting: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
            dateNoYearFormatting: { weekday: 'long', month: 'long', day: 'numeric'},
            timeFormatting: { hour: "numeric", minute: "2-digit"},
        }
    },
    methods: {
        formatTime(time, prefix = "") {
            console.log(typeof time);
            console.log(time.toString());
            return typeof time == "object" ? prefix + time.toLocaleDateString() : "";
        },
        formatDateUppercase(date) {
            // return this.formatTime(date);
            // return date;
            return new Date(date).toLocaleDateString("en-US", this.dateFormatting).toUpperCase() + " AT " + new Date(date).toLocaleTimeString("en-US", this.timeFormatting)
        },
        formatDateNoYear(date) {
            // return this.formatTime(date);
            // return date;
            return new Date(date).toLocaleDateString("en-US", this.dateNoYearFormatting) + " at " + new Date(date).toLocaleTimeString("en-US", this.timeFormatting)
        },
    }
}