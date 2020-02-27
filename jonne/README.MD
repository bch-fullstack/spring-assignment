SCHOOL PROJECT FOR SPRING BREAK

Languages used on this school project was Javascript mixing with jQuery and plain js. Styling and core was done with
HTML5 and CSS3

Site is build to work on firefox (firefox is not that great tho as we haven't been learning optimization at this point
yet) and chrome and is adjusted to work in vertical position with iphone and android phones. Horizontal break points are
missing so horizontal display on phone is out of touch, it's working but not all elements look that good. Ipad and ipad
pro are optimized horizontal and vertical view.

Older versions of Internet Explorer is no longer supported by microsoft and thus that reason it has security issues, for
that reason i exclude internet explorer optimization once and for all, that will be future project if i notice enough
trafic from users that are using IE 11 and below. Many companies do IE optimization as extra service nowadays as it
requires tons of work.


project is released on firebase hosting paljakka-consulting.firebaseapp.com

//SPRINT PLAN//

First sprint is 14/2 - 21/2

Definition of done for 1st sprint:
-I took mobile first approach so mvp should be mobile and tablet optimized version of site. Horizontal optimization will
go in first as vertical and horizontal break points need to be separated.

Plan is to:
-Make UI ready, make CTA working in banner with dom manipulation. Add content to skills and experience. No polishing to
contact section yet because i wan't to use mailer instead of mailto.

-Deploy development site to Firebase, add google analytics with it. First plan was to go AWS beanstalk but i need to
learn Firebase for other projects so i study it in this case first.

-Drop down menu for mobile version

-Try to findout if i can use school O365 SMTP for mailer

-Look for firebase hosting capabilities for mailer functions - else use mailto and scrap contact page away from original
plan.

Second sprint is 21/2 - 28/2

Definition of done for 2nd sprint:

-As site should be mobile optimized by friday 21th, by the end of sprint i have polished desktop version of site and
also contact section is working.


Plan is to:

-If firebase approves hosting mailing services, add either php mailer or node.js mailer, probably node.js mailer because
it is more secure. -> update on 26/2, i'm
doing contact with mailto as we haven't been learning node.js yet

-add mailto function for my page but using school email since mailto is heavily scraped by web scrapers

-Polish desktop functionalities