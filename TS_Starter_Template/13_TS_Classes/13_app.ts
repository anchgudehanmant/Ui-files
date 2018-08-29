// Create a simple class and usage
interface  Car{
    specification():string;
    hasAirBags():string;
    hasCamera():boolean;
}

class BMW implements Car{
    private color:string;
    private engineCapacity:string;
    private fuel:string;
    private seatingCapacity:number;


    constructor(color: string, engineCapacity: string, fuel: string, seatingCapacity: number) {
        this.color = color;
        this.engineCapacity = engineCapacity;
        this.fuel = fuel;
        this.seatingCapacity = seatingCapacity;
    }
        get

    specification(): string {
        let specification:string=`
                                   Color:${this.color},
                                   EnginerCapacity:${this.engineCapacity},
                                   fuel:${this.fuel},
                                   SeatingCapacity:${this.seatingCapacity},
                                   Has AirBags:${this.hasAirBags()},
                                   Has Camera:${}
        
        `
    }

    hasAirBags(): string {
        return null;
    }

    hasCamera(): boolean {
        return true;
    }

}
let cer1=new BMW('white','3000CC','Diesel',4);
let carSpec= car1.spacification();
console.log(carSpec);

// add a constructor to a class

// add methods to a class

// add getter and setter methods of a class

// Implement an interface and methods and variables of interface