function ChangeView(theview) {

switch(theview) {
case 'today':
   var general = "<object data=\"http://events.birmingham.gov.uk/today-tomorrow-app/\" style=\"width:100%; height:100%\"></object>";
   break;
case 'city':
   var general = "<object data=\"http://events.birmingham.gov.uk/city-centre-app/\" style=\"width:100%; height:100%\"></object>";
   break;
case 'edgbaston':
  var general = "<object data=\"http://events.birmingham.gov.uk/edgbaston-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'erdington':
  var general = "<object data=\"http://events.birmingham.gov.uk/erdington-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'hallgreen':
  var general = "<object data=\"http://events.birmingham.gov.uk/hall-green-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'hodgehill':
  var general = "<object data=\"http://events.birmingham.gov.uk/hodge-hill-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'ladywood':
  var general = "<object data=\"http://events.birmingham.gov.uk/ladywood-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'northfield':
  var general = "<object data=\"http://events.birmingham.gov.uk/northfield-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'perrybarr':
  var general = "<object data=\"http://events.birmingham.gov.uk/perry-barr-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'sellyoak':
  var general = "<object data=\"http://events.birmingham.gov.uk/selly-oak-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'suttoncoldfield':
  var general = "<object data=\"http://events.birmingham.gov.uk/sutton-coldfield-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'yardley':
  var general = "<object data=\"http://events.birmingham.gov.uk/yardley-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'submit':
  var general = "<object data=\"http://events.birmingham.gov.uk/submit-event-app/\" style=\"width:100%; height:100%\"></object>";
  break;
case 'full':
  var general = "<object data=\"http://events.birmingham.gov.uk/\" style=\"width:100%; height:100%\"></object>";
  break;
default:
   var general = "<object data=\"http://events.birmingham.gov.uk/today-tomorrow-app/\" style=\"width:100%; height:100%\"></object>";
}

  var txt=document.getElementById("query")
  txt.innerHTML=general;
  
  scroll(0,0)
}