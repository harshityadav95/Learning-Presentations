/*var batwing={
    status:"ready",
    rescueBatman: function()
    {
        document.write("Initiating launch sequence");
    }
}
if(batwing.status==="ready")
    {
        batwing.rescueBatman();
    }
    
var utilities={

    printAllMembers:function(targetObject)
    {
        for(i in targetObject)
            {
                document.write("<br>"+targetObject[i]);

            }
    }
}*/
//utilities.printAllMembers(batwing);
var planet = {
  id: 34,
  name: "Imtempesta Nox",
  faction: {
    factionId: 2,
    name: "Nex",
    notification: function() {
      document.write("Nex alliance ... unite!");
    }
  },
  cities: [
    { locationId: 15, name: "Gladius" },
    { locationId: 16, name: "Chalybs" },
    { locationId: 17, name: "Ensis" }
  ]
};
//planet.faction.notification(); 
/*
 document.write(planet.cities[1].name);  
 document.write("<br/>"+planet.name);
 planet.name="Vultus";
 document.write("<br/>"+planet.name);

 var z=planet;
 document.write(planet.name);

 // adding new Member in  already defined  method 

 if (typeof planet.defense==="undefined")
    {
     
        planet.defense="ION cannon";

    }
    document.write("<br/>"+planet.defense);

    for(member in planet)
        {

            document.write("</br>"+member+"==>"+planet[member]);
        }
*/
function car(make,model,year)
{
    this.make=make;
    this.model=model;
    this.year=year;
}
var myCar= new car("Eagle","Dodger",1992);
var myAnotherCar=new car("Tesla","Model 3",2017);

alert(myAnotherCar.model);
