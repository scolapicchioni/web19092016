export class Trip{
    
    get description() {
        return this._description;
    }
    set description(v) {
        this._description = v;
    }
    
    get destination(){
        return this._destination;
    }
    set destination(v) {
        this._destination = v;
    }
    
    get date() {
        return this._date;
    }
    set date(v) {
        this._date = v;
    }
    
    get rating(){
        return this._rating;
    }
    set rating(v) {
        this._rating = v;
    }
    
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }

    constructor(id, destination, description, date, rating){
        this.id = id || 0;
        this.destination = destination || "";
        this.description = description || "";
        this.date = date || "";
        this.rating = rating || 6;
    }
}