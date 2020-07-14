function corpus() {
    var text =
      '{"employees":[' +
      '{"a":"John ate an apple before afternoon <br>","b":"before afternoon John ate an apple <br>","c":"John before afternoon ate an apple <br>" },' +
      '{"a":"some students like to study in the night<br>","b":"at night some students like to study" },' +
      '{"a":"John and Mary went to church <br>","b":"Mary and John went to church" },' +
      '{"a":"John went to church after eating <br>","b":"after eating John went to church <br>" ,"c":"John after eating went to church"},' +
      '{"a":"did he go to market<br>","b":"he did go to market" },' +
      '{"a":"the woman who called my sister sells cosmetics<br>","b":"the woman who sells cosmetics called my sister<br>" ,"c":"my sister who sells cosmetics called the woman<br>","d":"my sister who called the woman sells cosmetics"},' +
      '{"a":"John goes to the library and studies <br>","b":"John studies and goes to the library<br>" },' +
      '{"a":"John ate an apple so did she <br>","b":"she ate an apple so did John" },' +
      '{"a":"the teacher returned the book after she noticed the error <br>","b":"the teacher noticed the error after she returned the book<br>","c":"after the teacher returned the book she noticed the error<br>","d":"after the teacher noticed the error she returned the book<br>","e":"she returned the book after the teacher noticed the error<br>","f":"she noticed the error after the teacher returned the book<br>","g":" after she returned the book the teacher noticed the error<br>","h":" after she noticed the error the teacher returned the book<br>"},' +
      '{"a":"I told her that i bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":yesterday I bought a book that I told her"}]}';

    
    obj = JSON.parse(text);
    document.getElementById("output").innerHTML =
      obj.employees[0].a + " " + obj.employees[0].b + obj.employees[0].c;

    document.getElementById("output1").innerHTML =
      obj.employees[1].a + " " + obj.employees[1].b;
    document.getElementById("output2").innerHTML =
      obj.employees[2].a + " " + obj.employees[2].b;
    document.getElementById("output3").innerHTML =
      obj.employees[3].a + " " + obj.employees[3].b + " " + obj.employees[3].c;
    document.getElementById("output4").innerHTML =
      obj.employees[4].a + " " + obj.employees[4].b;
    document.getElementById("output5").innerHTML =
      obj.employees[5].a + " " + obj.employees[5].b+ " " + obj.employees[5].c+ " " + obj.employees[5].d;
   document.getElementById("output6").innerHTML =
      obj.employees[6].a + " " + obj.employees[6].b;
   document.getElementById("output7").innerHTML =
      obj.employees[7].a + " " + obj.employees[7].b;
    document.getElementById("output8").innerHTML =
      obj.employees[8].a +" " +obj.employees[8].b +" " +obj.employees[8].c +" " +obj.employees[8].d+ " " + obj.employees[8].e+ " " + obj.employees[8].f+ " " + obj.employees[8].g+ " " + obj.employees[8].h;
    document.getElementById("output9").innerHTML =
      obj.employees[9].a +" " +obj.employees[9].b +" " +obj.employees[9].c +" " +obj.employees[9].d+ " " + obj.employees[9].e+ " " + obj.employees[9].f;
      
    var text1 =
       '{"employees1":[' +
       '{"a":"राम और श्याम बाजार गयें <br>","b":"राम और श्याम गयें बाजार<br>","c":"बाजार गयें राम और श्याम<br>","d":" गयें बाजार राम और श्याम<br><br>",' +
       '{"a":" राम सोया और श्याम भी<br>","b":"श्याम सोया और राम भी<br>","c":"  सोया श्याम और राम भी<br>","d":" सोया राम और श्याम भी<br><br>",' +
       '{"a":" मैंने उसे बताया कि राम सो रहा है<br>","b":"मैंने उसे बताया कि सो रहा है राम<br>","c":"उसे मैंने बताया कि राम सो रहा है<br>","d":"उसे मैंने बताया कि सो रहा है राम<br>","e":"मैंने बताया उसे कि राम सो रहा है<br>","f":"मैंने बताया उसे कि सो रहा है राम<br>","g":"उसे बताया मैंने कि राम सो रहा है<br>","h":"उसे बताया मैंने कि सो रहा है राम<br>","i":"बताया मैंने उसे कि राम सो रहा है<br>","j":"बताया मैंने उसे कि सो रहा है राम<br>","k":"बताया उसे मैंने कि राम सो रहा है<br>","l":"बताया उसे मैंने कि सो रहा है राम<br><br>",' +
       '{"a":"राम खाकर सोया<br>","b":"खाकर राम सोया<br>","c":"राम सोया खाकर<br>","d":"खाकर सोया राम<br>","e":"सोया राम खाकर<br>","f":"सोया खाकर राम<br><br>",' +
       '{"a":"बिल्लियों को मारकर कुत्ता सो गया<br>","b":"मारकर बिल्लियों को कुत्ता सो गया	<br>","c":"बिल्लियों को मारकर सो गया कुत्ता<br>","d":"मारकर बिल्लियों को सो गया कुत्ता<br>","e":"कुत्ता सो गया बिल्लियों को मारकर <br>","f":"कुत्ता सो गया मारकर बिल्लियों को	<br>","g":"सो गया कुत्ता बिल्लियों को मारकर<br>","h":"सो गया कुत्ता मारकर बिल्लियों को<br><br>",' +
       '{"a":"एक लाल किताब वहाँ है<br>","b":"एक लाल किताब है वहाँ<br>","c":"वहाँ है एक लाल किताब<br>","d":"है वहाँ एक लाल किताब<br><br>",' +
       '{"a":"एक बड़ी सी किताब वहाँ है<br>","b": "एक बड़ी सी किताब है वहाँ<br>","c":"बड़ी सी एक किताब वहाँ है<br>","d":"बड़ी सी एक किताब है वहाँ<br>","e":"वहाँ है एक बड़ी सी किताब<br>","f":"वहाँ है बड़ी सी एक किताब<br>","g":"है वहाँ एक बड़ी सी किताब<br>","h":"है वहाँ बड़ी सी एक किताब"}]}';

    obj = JSON.parse(text1);
    document.getElementById("output").innerHTML =
      obj.employees1[0].a + " " + obj.employees1[0].b +" "+ obj.employees1[0].c+" "+obj.employees1[0];

    document.getElementById("output1").innerHTML =
      obj.employees1[1].a + " " + obj.employees1[1].b+" " +obj.employees1[1].c +" " +obj.employees1[1].d ;
    document.getElementById("output2").innerHTML =
      obj.employees1[2].a + " " + obj.employees1[2].b+ " " + obj.employees1[2].c+ " " + obj.employees1[2].d+ " " + obj.employees1[2].e+ " " + obj.employees1[2].f+ " " + obj.employees1[2].g+ " " + obj.employees1[2].h+ " " + obj.employees1[2].i+ " " + obj.employees1[2].j+ " " + obj.employees1[2].k+ " " + obj.employees1[2].l;
    document.getElementById("output3").innerHTML =
      obj.employees1[3].a + " " + obj.employees1[3].b + " " + obj.employees1[3].c+ " " + obj.employees1[3].d+ " " + obj.employees1[3].e+ " " + obj.employees1[3].f;
    document.getElementById("output4").innerHTML =
      obj.employees1[4].a + " " + obj.employees1[4].b+ " " + obj.employees1[4].c+ " " + obj.employees1[4].d+ " " + obj.employees1[4].e+ " " + obj.employees1[4].f+ " " + " " + obj.employees1[4].g+ obj.employees1[4].h;
    document.getElementById("output5").innerHTML =
      obj.employees1[5].a + " " + obj.employees1[5].b+ " " + obj.employees1[5].c+ " " + obj.employees1[5].d;
    document.getElementById("output6").innerHTML =
      obj.employees1[6].a +" " +obj.employees1[6].b +" " +obj.employees1[6].c +" " +obj.employees1[6].d +" " +obj.employees1[6].e +" " +obj.employees1[6].f +" " + obj.employees1[6].g +" " +obj.employees1[6].h;