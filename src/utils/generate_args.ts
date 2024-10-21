export class GenerateArgs{
    public generate_card : boolean = false;
    public generate_typology: boolean = false;
    public generate_summary: boolean = false;

    constructor(generate_card: boolean,generate_typology: boolean, generate_summary: boolean, ){
        this.generate_card = generate_card;
        this.generate_typology = generate_typology;
        this.generate_summary = generate_summary;

    }

    getWhatNeedsToBeGenerated(){
        let returnData = [];
        if(this.generate_typology == true){
            returnData.push('generate_tyopology')
        }
        if(this.generate_summary == true){
            returnData.push('generate_summary')
        }
        if(this.generate_card == true){
            returnData.push('generate_card');
        }
        return returnData;    
    }

}