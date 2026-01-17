class BottleMake{
    private capacity: number;
    constructor(capacity: number){
        this.capacity = capacity;
    }
}

class Bottle extends BottleMake{
    constructor(capacity: number){
        super(capacity);
    }

    getValue(){
    console.log(this.capacity) //red comming because private property cannot be accessed but it renders neverthless
}
}



let b1 = new Bottle(100);
b1.getValue();