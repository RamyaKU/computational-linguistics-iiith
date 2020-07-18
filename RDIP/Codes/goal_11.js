var text1=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister",
"my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];



var text2=[
["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है",
"उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है",
"मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है",
"उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है",
"बताया मैंने उसे कि सो रहा है राम",
"बताया उसे मैंने कि राम सो रहा है",
"बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया",
"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता",
"कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को",
"सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ",
"बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ",
"वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];

var navButtons = document.getElementById("nav-buttons");
sentences='';
var formsen;
var totalb,i;
var count=0;
var x,y;
var getcrct;
var possibleanswers='';

function getoption()
{
    
    
    if(document.getElementById("selection").value === "english")
    {    
        randomsentenceEnglish(text1);
		document.getElementById("message").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("message1").innerHTML="(Select the buttons in proper order)";

    }
    else if(document.getElementById("selection").value=== "hindi")
    {   
        randomsentenceHindi();
		document.getElementById("message").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("message1").innerHTML="(Select the buttons in proper order)";
       
    }
	if(document.getElementById("selection").value === "null")
    {
        alert("Select  laguage");
    }

}
function  randomsentenceEnglish(text1)
 {       
     
     totalb=0;
     count=0;
   
    reformsen="";
    document.getElementById("refbtn").innerHTML=reformsen;
    

    
    x=Math.floor(Math.random() * 10);
    
    str1=text1[x][0]
    str3=randomwords(str1);
    var c='';
    var t='';
    navButtons.innerHTML='';      
     totalb=str3.length;
    for (i=0; i<totalb;i++)
    {
        c="<button id='btnid"+i+"' value='"+str3[i]+"' onclick='dispwords(this.value,this.id)'  >"+str3[i]+" </button>  ";
        t=t+c;
       
    }
    navButtons.innerHTML=t.trim();

}


function randomwords(st1)
{     
    var str2=st1.split(' ').sort(() => Math.floor(Math.random() * Math.floor(3)) - 1).join(' ')
    return str2.split(" ");
}

function  randomsentenceHindi()
{     
    
    totalb=0;
    count=0;
    navButtons.innerHTML='';
    
    reformsen="";
    document.getElementById("refbtn").innerHTML=reformsen;
   
   
    
  

     y=Math.floor(Math.random() * 7);
    chr1=text2[y][0];
   
    chr3= randomwords(chr1);
    var c='';
    var t='';   
       
     totalb=chr3.length;
    for ( i=0; i<totalb;i++)
   {
       c="<button id='btnid"+i+"' value='"+chr3[i]+"' onclick='dispwords(this.value,this.id)'>"+chr3[i]+" </button>  ";
       t=t+c;
}
   navButtons.innerHTML=t.trim();
    
      
}
 


function dispwords(val,id)
{    
    formsen= "<center><font color='Darkblue'>Formed Sentence</font><font color='blue'> <i>(after selecting words):</i></font><br></center>"
    document.getElementById("message2").innerHTML=formsen;
    sentences=sentences+val+" ";
    document.getElementById(id).style.display = "none";
   document.getElementById("message3").innerHTML=sentences;
   count=count+1;
    if(count===totalb)
    {
        chk="<button id='chkcrct' onclick='CheckSentence()'>Check the correctness of this sentence</button>"
        document.getElementById("chkcrctness").innerHTML=chk;
    
    }


  reformsen="<button id='reform' onclick='reformSentence()'>Re-form the sentence</button>"
  document.getElementById("refbtn").innerHTML=reformsen;
  
   
  
}  
function reformSentence()
{   
    count=0;
    formsen="";
    document.getElementById("message2").innerHTML=formsen;
    sentences="";
    document.getElementById("message3").innerHTML=sentences;
    reformsen="";
    document.getElementById("refbtn").innerHTML=reformsen;
	for(j=0;j<totalb;j++)
    {
        document.getElementById('btnid'+j).style.display = "";
    }
}

function CheckSentence()
{   
    if(document.getElementById("selection").value == 'english')
    {
       
        if(text1[x].includes(sentences.trim()))
        {
           document.getElementById("result1").innerHTML="Right answer!!!" 
        }
        else
        {
            document.getElementById("result2").innerHTML="Wrong answer!!!"
            getcrct="<button id='getcrct'onclick='displayCorrectAns()'>Get Correct sentence</button>"
            document.getElementById("getcrctans").innerHTML=getcrct;

        }
        
    }
    else if(document.getElementById("selection").value == 'hindi')
    {
       
        if(text2[y].includes(sentences.trim()))
        {
           document.getElementById("result1").innerHTML="Right answer!!!" 
        }
        else
        {
            document.getElementById("result2").innerHTML="Wrong answer!!!"
            getcrct="<button id='getcrct' onclick='displayCorrectAns()'>Get Correct Sentence</button>"
            document.getElementById("getcrctans").innerHTML=getcrct;
        }
        
        
    }
}
 
function displayCorrectAns()
{      
    getcrct="<button id='getcrct' onclick='hidesen()'>Hide the Correct Sentence</button>"
    document.getElementById("getcrctans").innerHTML=getcrct;
   
    
    if(document.getElementById("selection").value==='english')
       {
        switch (x) {
        case 0:
          z="3"
          break;

        case 1:
          z = "2";
          break;
          
        case 2:
          z = "2";
          break;

        case 3:
          z = "3";
          break;

        case 4:
          z = "2";
          break;

        case 5:
          z= "4";
          break;

        case  6:
          z = "2";
          break;

        case  7:
        z = "2";
       break;

        case  8:
        z = "8";
        break;

        case  9:
        z = "6";
        break;
      }

   
   for(k=0;k<=z-1;k++)
   {  
    possibleanswers="<center>"+possibleanswers+text1[x][k]+"<br></center>"
  
   }
    document.getElementById("dispcrct").innerHTML=possibleanswers;
    }

else if(document.getElementById("selection").value ==="hindi")
{    possibleanswers='';
    switch (y) {
    case 0:
      z="4"
      break;

    case 1:
      z = "4";
      break;
      
    case 2:
      z = "12";
      break;

    case 3:
      z = "6";
      break;

    case 4:
      z = "8";
      break;

    case 5:
      z= "4";
      break;

    case  6:
      z = "8";
      break;

  
  }


for(k=0;k<=z-1;k++)
{  
possibleanswers="<center>"+possibleanswers+text2[y][k]+"<br></center>"

}
document.getElementById("dispcrct").innerHTML=possibleanswers;
}
}


function hidesen()
{    possibleanswers='';
    document.getElementById("dispcrct").innerHTML=possibleanswers;
    
   
   
    getcrct="<button id='getcrct' onclick='displayCorrectAns()'>Get Answers</button>"
    document.getElementById("getcrctans").innerHTML=getcrct;
    possibleanswers=''; 
}



