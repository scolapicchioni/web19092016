export class Person{
    constructor(name:string, surname:string, age:number){
        this.name = name;
        this.surname = "";
        this.age = 0;
    }

    sayHi(){
        console.log("hi!");
    }

    buyStuff(){

    }
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    
    private _age : number;
    public get age() : number {
        return this._age;
    }
    public set age(v : number) {
        this._age = v;
    }

    
    private _surname : string;
    public get surname() : string {
        return this._surname;
    }
    public set surname(v : string) {
        this._surname = v;
    }
    

}
