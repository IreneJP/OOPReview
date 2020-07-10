
//Crear una clase llamada Mobile con las siguientes características:
//• Propiedades Publicas :§ name, § model, § trademark, § sdSize, § color, § is5G, § cameraNumber, § price
//• Constructor a través del cual pueda inicializar todos los atributos

export class Mobile {
        public name:string;
        public model:string;
        public trademark:string
        public sdSize:number
        public color:string
        public is5G:boolean
        public cameraNumber:number
        public price: number
    constructor(name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number)   
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark
        this.sdSize = sdSize
        this.color = color
        this.is5G = is5G
        this.cameraNumber = cameraNumber
        this.price = price
    }

public getName()
{
    return this.name  
}
public getModel()
{
                return this.model  
}     
public getTrademark()
{
                return this.trademark  
}  
public getSdSize()
{
                return this.sdSize  
}  
public getColor()
{
                return this.color  
}  
public getIs5G()
{
                return this.is5G  
}
public setIs5G(is5G:boolean)
{
    this.is5G = is5G
}
public getCamera()
{
        return this.cameraNumber  
}
public setCamera(cameraNumber:number)
{
    this.cameraNumber = cameraNumber
}
public getPrice()
{
                return this.price  
}



//• Mostrar por consola todos los atributos de cada objeto
    /*mostrarAtributos () {
        for (var i=0; i<this.hobblength; i++){
            return this.hobbies[i])
        }
    }*/
}