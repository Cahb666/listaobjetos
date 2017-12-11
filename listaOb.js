function persona(){
    this.name = "";
    this.surname = "";
    this.fullName = function() {
       return this.name + " " + this.surname;
    }
}

function lista(){
    var _list=[];
    _list.length=0;
    this.max=5;
    this.isEmpty = function(){	
        var emp=true;
        if(this.size(_list)>0){	
            emp=false;  
        }
        return emp; 
    }
    this.isFull = function(){	
        var ful=false;
        if(this.size(_list)==this.max){	
            ful=true;  
        }
        return ful; 
    }
    this.size = function(){
        var siz=_list.length;
        return siz; 
    }
    this.add = function(element){
        if(element instanceof Object){  //------------------
            if(this.size(_list) < this.max){
                _list.push(element);
            }else{
                throw "ERROR in add: IS FULL";
            }
            return this.size(_list);
        }else{
            throw "ERROR no es un objeto";
        }
    }
    this.addAt = function(element,index){
        if(element instanceof Object){  //------------------
            if(this.size(_list) < this.max){
                if(index<=this.size(_list)){
                    _list.splice(index,0,element);
                    return this.size(_list);
                }else{
                    throw "ERROR in addAt: Indice fuera del limite";
                }
            }else{
                throw "ERROR in addAt: IS FULL";
            }
        }
    }
    this.get = function(index){
        var ind=parseInt(index);
        var elemento=_list[ind];
        if(ind>=this.size(_list)){
            throw "ERROR in get: Indice fuera del limite";
        }
        return elemento.fullName();     //------------------
    }
    this.toString = function(){
        var vector="";
        for(var i=0;i<this.size(_list);i++){
            vector+=_list[i].fullName();    //------------------
            if(i<this.size(_list)-1){
                vector=vector+"-";
            }
        }
        return vector;
    }
    this.indexOf = function(element){
        var posicion=_list.indexOf(element);
        return posicion;
    }
    this.lastIndexOf = function(element){
         var posicion=_list.lastIndexOf(element);
        return posicion;
    }
    this.capacity = function(){
        var capacidad=this.max;
        return capacidad;
    }
    this.clearr = function(){
        _list.length=0;
    }
    this.firstElement = function(){
        var primero=_list[0];
        if(this.size(_list)==0){
            throw "ERROR in firstElement: IS EMPTY";
        }
        return primero.fullName();
    }
    this.lastElement = function(){
        var ulti=_list[this.size(_list)-1];	
        if(this.size(_list)==0){
            throw "ERROR in lastElement: IS EMPTY";
        }
        return ulti.fullName();
    }
    this.remove = function(index){
        var ind=parseInt(index);
        if(ind<this.size(_list)){
            var borrado=_list[ind]
            _list.splice(ind,1);
        }else{
            throw "ERROR in remove: Indice fuera del limite";
        }	
        return borrado.fullName();
    }

    this.removeElement = function(element){		
        var vectorA=[];
        var esta=false;
        for(var i=0;i<this.size(_list);i++){    //Para comprobar si esta el elemento
            if(element==_list[i]){
                esta=true;
            }
        }
        if(esta){   //si esta el elemento
            var ind=0;
            for(var i=0;i<this.size(_list);i++){    //recorre hasta la posicion del elemento para ajustar un indice
                ind++;
                if(element==_list[i]){
                    i=this.size(_list);
                }
            }
            ind=ind-1;
            var borrado=_list[ind];
            for (var i=0;i<ind;i++){        //recorre el array hasta el elemento y lo guarda sin el
                vectorA[i]=_list[i];		
            }
            for (var i=ind;i<this.size(_list)-1;i++){    //apartir del elemento "borrado" sigue guardando el array
                vectorA[i]=_list[i+1];	
            }
            _list=vectorA;
        }else{
            throw "ERROR in removeElement: El elemento "+element+" no existe";
        }
        return esta; 
    }

    this.set = function(element,index){
        var vectorA=[];
        var ind=parseInt(index);
        if(ind<this.size(_list) ){
        var borrado=_list[ind];
            for (var i=0;i<this.size(_list);i++){
                vectorA[i]=_list[i];
                if(i==ind){
                    vectorA[i]=element;
                }			
            }
            _list=vectorA;
        }else{
            throw "ERROR in set: Indice fuera del limite";
        }    
       
        return borrado.fullName();
    }


}

var list = new lista();

var persona1 = new persona();
persona1.name="Antonio";
persona1.surname="Perez";
var persona2 = new persona();
persona2.name="Juan";
persona2.surname="Martin";
var persona3 = new persona();
persona3.name="Antonio";
persona3.surname="Martin";
var persona4 = new persona();
persona4.name="David";
persona4.surname="Garcia";
var persona5 = new persona();
persona5.name="Alberto";
persona5.surname="Garcia";

(function (){
    console.log("add persona1: "+list.add(persona1));
    console.log("toString: "+list.toString());
    console.log("add persona2: "+list.add(persona2));
    console.log("toString: "+list.toString());
    console.log("add persona3: "+list.add(persona3));
    console.log("toString: "+list.toString());
    console.log("addAt persona4 en 2: "+list.addAt(persona4,2));
    console.log("toString: "+list.toString());
    console.log("addAt persona5 en 0: "+list.addAt(persona5,0));
    console.log("toString: "+list.toString());
    console.log("get 0: "+list.get(0));
    console.log("get 1: "+list.get(1));
    console.log("get 2: "+list.get(2));
    console.log("get 3: "+list.get(3));
    console.log("get 4: "+list.get(4));
    console.log("indexOf persona1: "+list.indexOf(persona1));
    console.log("indexOf persona2: "+list.indexOf(persona2));
    console.log("indexOf persona3: "+list.indexOf(persona3));
    console.log("indexOf persona4: "+list.indexOf(persona4));
    console.log("indexOf persona5: "+list.indexOf(persona5));
    console.log("firstElement: "+list.firstElement());
    console.log("lastElement: "+list.lastElement());
    console.log("remove 1: "+list.remove(1));
    console.log("removeElement persona4: "+list.removeElement(persona4));
    console.log("toString: "+list.toString());
    console.log("set persona4 en 2: "+list.set(persona4,2));
    console.log("toString: "+list.toString());
}());