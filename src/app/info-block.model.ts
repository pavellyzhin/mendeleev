
export class chemicalElementModel {
    id: number;
    symbol: string;
    title: string;
    name: string;
    group:number;
    weight: number;
    period: number[];
    type:string;
    ab: boolean;
    lantanoid: number | null;

    constructor(id:number=0,symbol:string='',title:string='',name:string='',group:number=0,weight:number=0,period:number[]=[],type:string='',ab:boolean=false,lantanoid:number|null=null){
        this.id = id;
        this.symbol = symbol;
        this.title = title;
        this.name = name;
        this.group = group;
        this.weight = weight;
        this.period = period;
        this.type= type;
        this.ab = ab;
        this.lantanoid = lantanoid;
    }
}

export class chemicalELementContentModel {
    id: number;
    content: string;
    images: string[];
    videos: [];

    constructor(id:number=0,content:string='',images:string[]=[],videos:[]=[]){
        this.id = id;
        this.content = content;
        this.images = images;
        this.videos = videos;
    }
}