function  Character(name,attact,defence,hp,critRate){
    this.name = name;
    this.attact = attact;
    this.defence =defence;
    this.hp=hp;
    this.critRate = critRate;
    this.print = function(){
        console.log(`${this.name} 生命 ${this.hp} 攻击${this.attact} 防御${this.defence} 暴击率${this.critRate}`);
    }
    this.hit =function(ob){
        var damage = this.attact - ob.defence;
        var baojiRate = critRate/100;
        var panduan = Math.random();
        var iscrit =false;
        if(baojiRate>=panduan){
            iscrit=true;
            damage*=2
           
        }
        console.log(damage)
        if(damage<1){
            damage =1;
        }
      
        ob.hp -=damage;
        if(ob.hp<0){
            ob.hp=0;
        }
        console.log(`${iscrit?'暴击':''}   ${this.name}攻击${ob.name}造成了${damage}伤害，对方血量为${ob.hp}`)
        return ob.hp===0;

    }
}

 var hero  =new Character('成哥',100,20,520,50);
 hero.print();

 var monster = new  Character('邓哥',120,40,380,30);
 monster.print();

while(true){
    if( hero.hit(monster)){
        break
    }
    if(monster.hit(hero)){
        break
    }
}
hero.print();
monster.print()