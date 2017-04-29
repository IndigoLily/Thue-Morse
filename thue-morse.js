function thueMorse(itterations) {
    this.itterations = itterations;
    this.sequence = [];
    this.generate = function() {
        // console.log("Generate "+this.itterations);
        var abba = ['a'];
        for(var i = 0; i < this.itterations; i++) {
            //make new array that's the inverse of abba
            var abba2 = [];
            for(var j = 0; j < abba.length; j++) {
                if(abba[j] === 'a') {
                    abba2[j] = 'b';
                } else {
                    abba2[j] = 'a';
                }
            }
            abba = abba.concat(abba2, abba2, abba);
        }
        this.sequence = abba;
        return this.sequence;
    }
    this.generate();
    this.getElement = function(element) {
        if(element >= this.sequence.length) {
            this.itterations++;
            this.generate();
        }
        return this.sequence[element];
    }
}
