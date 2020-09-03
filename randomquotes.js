function heading(){

var head = document.getElementById("head");
 head.style.transition = "ease-in 0.8s";
head.style.color = "#ffffff";
}
window.onload = heading;


const btn = document.querySelector("#click")
btn.addEventListener("click", function(){
let quoteProps = [
    [' The people I have shaped for myself will broadcast my praises.   ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Isaiah 43:21 (NJB)'],
   
    ['You shaped me first inside, then out; you formed me in my mother\'s womb.'
     + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
     +' - Psalm 139:13 (Msg)'],

     ['Since we find ourselves fashioned into all these excellently formed and marvelously functioning parts in Christ\'s body, lets just go ahead and be what we were made to be. '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Romans 12:5 (Msg)'],

     ['Whoever wants to be great must become a servant."  '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Mark 10:43 (Msg)'],
     
     ['Without requirements or design, programming is the art of adding bugs to an empty text file.  ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Leinad Colt'],
     
     ['You can tell what they are by what they do.   ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Matthew 7:16 (CEV)'],

     ['My servant Caleb thinks differently and follows me completely.'+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Numbers 14:24 (NCV)'],
     
     ['  Think of yourselves the way Christ Jesus thought of himself.  '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  ' +' - Philippians. 2:5 (Msg)'],
     
     ['We are weak ... yet by God\'s power we will live with him to serve you. '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - 2 Corinthians 13:4 (NIV)'],
     
     [' I am with you; that is all you need. My power shows up best in weak people. ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  ' +' - 2 Corinthians 12:9a (LB)'],
     
     ['Jesus said to his followers, "Go everywhere in the world, and tell the Good News to everyone." '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Mark 16:15 (NCV)'],
     
     ['Send us around the world with the news of your saving power and your eternal plan for all mankind. '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Psalm 67:2 (LB) '],
     
     ['Those who believe in the son of God have the testimony of God in them  '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' -  1John 5:10a (GWT)'],
     
     ['The most important thing is that I complete my mission, the work that the Lord Jesus gave me. ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  ' +' - Acts 20:24 (NCV)'],
     
     ['In the same way that you gave me a mission in the world,I give them a mission in the world. ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' -  John 17:18 (Msg) '],
    
     ['The fruit of the righteous is a tree of life, and he who wins souls is wise. ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Proverbs 11:30 (NIV)'],
     
     ['Your lives are echoing the Master\'s word ....The news of your faith in God is out. We don\'t even have to say anything anymore -you\'re the message! '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - 1Thessalonians 1:8 (Msg)'],
     
     ['`Be ready at all times to answer anyone who asks you to explain the hope you have in you, but do it with gentleness and respect."'+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - 1 Peter 3:15b-16 (TEV)'],
     
     ['I am here on earth for just a little while. '
     + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
     +' - Psalm 119:19 (TEV)'],

     
     ['"So we fix our eyes not on what is seen, but on what is unseen. For what is seen is temporary, but what is unseen is eternal." 2'
     + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
     +' - Corinthians 4:18 (NIV) '],
     
     ['Everything comes from God alone. Everything lives by his power, and everything is for his glory.'
     + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
     +' -  Romans 11:36 (LB)'],     

     
     ['What is your life?' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - James 4:14b (NIV)'],
     
     ['"This world is fading away, along with everything it craves. But if you do the will of God, you will live forever:" '+ '<br /> <br />' + '  \xa0 \xa0 \xa0 ' +' -  1 John 2:17 (NLT)'],

     
     ['LORD, remind me how brief my time on earth will be. Remind me that my days are numbered, and that my life is fleeing away.'
     + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
     +' - Psalm 39:4 (NET) '],
     
     ['God has ... planted eternity in the human heart. '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  ' +' - Ecclesiastes 3:11 (N LT)'],
     
     [' I observed that the basic motive for success is the driving force of envy and jealousy!' + '<br /> <br />' + '  \xa0 \xa0 \xa0  ' +' -  Ecclesiastes 4:4 (LB) '],
     
     [' I am your Creator. You were in my care even before you were born. ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' -  Isaiah 44:2a (CEV)'],
     
     ['"Everything got started in him and finds its purpose in him."  ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  ' +' - Colossians 1: 16b (Msg)'],
     
     ['For everything, absolutely everything, above and below, visible and invisible,. . . everything got started in him and finds its purpose in him.'+ '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' -  Colossians 1:16 (Msg)'],
     
     ['For David ... served the purpose of God in his own generation. ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Acts 13:36 (NASB)'],
     
     ['Many are the plans in a man\'s heart, but it is the Lord\'s purpose that prevails. '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  ' +' -  Proverbs 19:21 (NIV) '],
     
     ['Don\'t let the errors of evil people lead you down the wrong path  and make you lose your balance.' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - 2 Peter 3:17 (CEV)'],
     
     ['Live life with a due sense of responsibility, not as those who do not know the meaning of life but as those who do.  '+ '<br /> <br />' + '  \xa0 \xa0 \xa0  ' +' - Ephesians 5:15 (Ph)'],
    ];
    
let randomcolors= ['#1c8f12','#f0ce10', '#e65218', '#5555c7', '#ff3b3b', '#088095', '#042227',
'#041327', '#004aac', '#2000ac', '#261f46', '#3b1f46', '#45035f', '#5f0326', '#361522', '#700909',
'#940404', '#945104', '#865318', '#e3eb00', '#006128', '#006161', '#0081d8', '#232b4d', '#351d61', '#ad265e'];

var man = document.querySelector(".thequote")
const colorchange =  document.querySelector("body")
var quotemark = document.querySelector(".quotemark")
const randomSelect = Math.floor(Math.random()*quoteProps.length);
const randomcolorselect = Math.floor(Math.random()*randomcolors.length);

man.innerHTML = quoteProps[randomSelect];
man.style.color = randomcolors[randomcolorselect];
man.style.borderLeftColor = randomcolors[randomcolorselect];
colorchange.style.backgroundColor = randomcolors[randomcolorselect];
btn.style.backgroundColor = randomcolors[randomcolorselect];
quotemark.style.color = randomcolors[randomcolorselect];


colorchange.classList.add('colorchanges');
const colorchange2 =  document.querySelector(".container");

})


