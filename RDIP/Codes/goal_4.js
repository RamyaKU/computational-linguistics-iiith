function getoption() {
   
   if(document.getElementById("selection").value =="English")
    { 
      document.getElementById("message").innerHTML="Form a sentence(Declarative or Interrogative or any other type)from the given words";
      document.getElementById("message1").innerHTML="(select the buttons in proper order)";
       randomsentenceEnglish(text1);
    }
   else if(document.getElementById("selection").value == "Hindi")
    {
      document.getElementById("message").innerHTML="Form a sentence(Declarative or Interrogative or any other type)from the given words";
      document.getElementById("message1").innerHTML="(select the buttons in proper order)";
       randomsentenceHindi(text2);
    }
  else 
    {
     alert("select a language")
    }

}
  


