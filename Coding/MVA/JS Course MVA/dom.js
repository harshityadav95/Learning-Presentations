window.onload=function() {
//var clickMeButton=document.getElementById('clickMe');
//clickMeButton.onclick=runTheExample;

    //simpler version to the above code
    document.getElementById('clickMe').onclick=runTheExample;

}

/*
function runTheExample()
{
    alert('running  the example');
}
*/

function runTheExample()
{
/* 
    var myElement=document.getElementById('second');
    var myNodeName=myElement.nodeName;
    alert(myNodeName);
    if(myElement !== null)
        {
            // never use inner html  ...
            alert(myElement.innerHTML);
        }
        document.getElementById('second').innerHTML="See how i got there";
        alert(myElement.innerHTML);
        */

        /*
        var listofParagraph=document.getElementsByTagName('p');
        //alert(listofParagraph.length);

        var secondParagraph=listofParagraph[1];
        alert(secondParagraph.innerHTML);
        */
        /*
       var  myElement=document.getElementById('second');
        alert(myElement.parentNode.nodeName);
        */
        var anchor=document.getElementById('myAnchor');
        var anchorDestination=anchor.href;
        alert(anchorDestination);
        anchor.href="www.google.com";
;}