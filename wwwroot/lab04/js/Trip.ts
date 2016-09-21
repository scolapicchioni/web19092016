export class Trip{
    
    private _description : string;
    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }
    
    private _destination : string;
    public get destination() : string {
        return this._destination;
    }
    public set destination(v : string) {
        this._destination = v;
    }
    
    
    private _date : string;
    public get date() : string {
        return this._date;
    }
    public set date(v : string) {
        this._date = v;
    }
    
    
    private _rating : number;
    public get rating() : number {
        return this._rating;
    }
    public set rating(v : number) {
        this._rating = v;
    }
    
    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    

    constructor(id:number, destination:string, description:string, date:string, rating:number){
        this.destination = destination;
        this.description = description;
        this.date = date;
        this.rating = rating;
        this.id = id;
    }
}