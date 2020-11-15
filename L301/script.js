var string = prompt("შეიყვანეთ ტექსტი: ");
 if(string.indexOf("რეკლამა") != -1 || string.indexOf("მარკეტინგი") !=-1 || string.indexOf("ვირუსი") != -1 ){
    alert("თქვენს შეტანილ წინადადებაში ნაპოვნია ისეთი სიტყვები რომელიც დაუშვებელია დასაპოსტად.")
 }
 else {
     alert(string);
 }