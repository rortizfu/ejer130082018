import { Injectable } from "@angular/core";
import { persona } from "../app/card-presentation/class-person.model";
import { Subject } from "rxjs";


@Injectable()
export class AppServices{

    public arrayPersonas = new Map<string,persona>();
    public a = new persona("Felipe","Pabon","ddd",0,0,"https://material.angular.io/assets/img/examples/shiba2.jpg");
    public b = new persona("Eduardo","Quintero","ddd",0,0,"https://material.angular.io/assets/img/examples/shiba2.jpg");
    public c = new persona("Raul","Ortiz","ddd",0,0,"https://material.angular.io/assets/img/examples/shiba2.jpg");

    constructor(){
        this.arrayPersonas.set(this.a.name, this.a);
        this.arrayPersonas.set(this.b.name, this.b);
        this.arrayPersonas.set(this.c.name, this.c);
    }
    

    getListCard(): Map<string,persona>{
        return this.arrayPersonas;
    }

    private objPersona: persona
    private observer = new Subject();
    public $obs = this.observer.asObservable();


    setPersona(val: persona){
        this.objPersona = val;
    }

    getPersona(){
        return {...this.objPersona};
    }

    addLike = (): void=>{
        (this.objPersona.dislike > 0 ? this.objPersona.dislike -=1  : 0 );
        this.objPersona.like += 1;
        this.observer.next(this.objPersona);
      }  
    
      adddisLike = (): void=>{
        (this.objPersona.like > 0 ? this.objPersona.like -= 1 : 0 );
        this.objPersona.dislike += 1;
        this.observer.next(this.objPersona);
      }        

      getCard(val: string): persona{
          return this.arrayPersonas.get(val);
      }


}