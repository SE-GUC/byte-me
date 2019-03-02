class Schedule {
    constructor(time,date) {
        this.time=time;
        this.date=date;
        this.booked=false;
        this.requested=false;
    };
}

module.exports = Schedule