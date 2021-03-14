function TempTracker() {

    // initialize variables
    this.count = 0
    this.total = 0

    this.lowest = null
    this.highest = null
    this.average = null


    this.insert = function(t) {
        // insert new temperature
        if(this.count === 0) {
            this.lowest = t
            this.highest = t
        }
        if(t < this.lowest) this.lowest = t
        if(t > this.highest) this.highest = t
        this.total += t
        this.count++
        this.average = this.total / this.count

    };


    this.getHighest = function() {
        // return the highest temperature we’ve seen so far
        return this.highest
    };

    this.getLowest = function() {
        // return the lowest temperature we’ve seen so far
        return this.lowest
    };

    this.getAverage = function() {
        // return the average of all temps we've seen so far
        return this.average
    };

}