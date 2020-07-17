var name = prompt("Enter Your Name?");
userenteredname=name;
switch(userenteredname){
  case "subis":
  document.getElementById("alu2").innerHTML =`${name} ta muji bhalu ho tero chak ma baitha sir ko 12 ota lado xa bujis.Ta chiney kina janmeko k ta najanmeko vaya kamse kam eauta rani ko ta kami huntyo duniya ma`;   
    break;
  case "kritesh":
  document.getElementById("alu2").innerHTML =`${name} ta muji kukur chikuwa muji khate lado khani manxe tero chak ma hati ko hoina dainosour ho lado xa ta muji duniya ko number 1 mall ho ta.Talai sabaile le free ma chikxa kamser kam 1-2 rs ta rakh muji afno price`; 
    break;
    case "aayush":
    document.getElementById("alu2").innerHTML =`${name} ta muji madarchot valu khate randi mall tero turi jeera vanda sano xa muji ta muji afnai lado ma pipe chirara afnai chak ma pipe chiraune manxe ho bhujis`;
  case "samir":
  document.getElementById("alu2").innerHTML =`${name} yor are the most handsom,talanted,and powerfull men of the world`
	break;  
  default:
  document.getElementById("alu2").innerHTML =`${name} you are the most usless person of the world`;
    // code block
}