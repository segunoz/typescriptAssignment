class car{
    engineType: String;
    chassisType: String;
    isEngineRunning: Boolean;
    isEngineFaulty: Boolean;

    constructor(engineType: String, chassisType: String, isEngineRunning: Boolean,  isEineFaulty: Boolean){
        this.engineType = engineType;
        this.chassisType = chassisType;
        this.isEngineRunning =  isEngineRunning;
        this.isEngineFaulty = isEngineRunning;

    }



    displayCarDetails(): void{
        let carDetails: String = "This car has a ${this.engineType} engine and a ${this.chassis}";
        console.log(carDetails);
    }
    
    checkEngineRunning(): Boolean{
         console.log(isEngineRunning);  
    }
    
    checkEngineFaulty(): Boolean{
        console.log(isEngineFaulty);
    }
    

}

let toyota = new car("v6", "outmoded", true, false);
toyota.displayCarDetails();
toyota.checkEngineRunning;
toyota.checkEngineFaulty;
