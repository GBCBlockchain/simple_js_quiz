
///TEST TWO STARTS HERE
//1. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code. Go to the editor
function js_style(){
    document.getElementById("text").style.color = "red";
    document.getElementById("text").style.fontFamily = "Impact,Charcoal,sans-serif"
    document.getElementById("text").style.fontSize = 32;
   document.getElementById("text").style.background = "#ccc"
}


//2. Write a JavaScript function to get the values of First and Last name of the following form. Go to the editor Sample HTML file : `
function getFormvalue(){
   window.alert("The input name is " + document.getElementsByName("fname")[0].value  +" " + document.getElementsByName("lname")[0].value )
}


//3. Write a JavaScript program to set the background color of a paragraph. Go to the editor
function js_style2(){
    document.getElementById("text").style.background = "#ccc"
}



//4. Here is a sample html file with a submit button. Write a JavaScript function to get the value of the 
//href, hreflang, rel, target, and type attributes of the specified link. Go to the editor
function getAttributes(){
    
    window.alert("The href is " + document.getElementById("w3r").href );
    window.alert("The hreflang is " + document.getElementById("w3r").hreflang );
    window.alert("The rel is " + document.getElementById("w3r").getAttribute('rel') )
    window.alert("The target is " + document.getElementById("w3r").getAttribute('target') )
    window.alert("The type attribute is " + document.getElementById("w3r").getAttribute('type') )
    
}