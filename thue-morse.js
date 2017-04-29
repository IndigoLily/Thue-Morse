function thueMorse(itterations) {
    this.itterations = itterations;
    this.sequence = [];
    this.generate = function() {
        // console.log("Generate "+this.itterations);
        var abba = ['a'];
        for(var i = 0; i < this.itterations; i++) {
            //make a copy of abba
            abba1 = abba;
            //make new array that's the inverse of abba
            var abba2 = [];
            for(var j = 0; j < abba.length; j++) {
                if(abba[j] === 'a') {
                    abba2[j] = 'b';
                } else {
                    abba2[j] = 'a';
                }
            }
            abba = abba1.concat(abba2, abba2, abba1);
        }
        return abba;
    }
    this.sequence = this.generate();
    this.getElement = function(element) {
        if(element >= this.sequence.length) {
            this.itterations++;
            this.sequence = this.generate();
        }
        return this.sequence[element];
    }
}
