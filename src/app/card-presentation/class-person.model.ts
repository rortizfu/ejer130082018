
export class persona {

  public name: string;
  public profile: string;
  public description: string;
  public like: number; 
  public dislike: number;
  public img: string
  public total: number;

  constructor(name, profile, description, like, dislike, img){
  this.name =  name;
  this.profile = profile;
  this.description =description; 
  this.like = like;
  this.dislike = dislike;
  this.img = img
}
/*public objPersona : Person = {
name: "Raul Ortiz", 
profile: "Ingeniero",
description: "Prueba",
like: 0,
dislike: 0
};*/

  addLike = (val: persona): void=>{
    (val.dislike > 0 ? val.dislike -=1  : 0 );
    val.like += 1;
  }  

  adddisLike = (val: persona): void=>{
    (val.like > 0 ? val.like -= 1 : 0 );
    val.dislike += 1;
  }        

}
