const events = [
{
 id:1,title:"Indie Under The Stars",cat:"Music",city:"Bhubaneswar",
 date:"14 Nov 2026",month:"Nov",time:"6:30 PM – 10 PM",
 venue:"Ekamra Haat Open Ground, Bhubaneswar",price:499,
 img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&q=85",
 tag:"TRENDING",
 desc:"An open-air indie music evening with emerging artists, soulful acoustic sets and a lively crowd under the stars.",
 age:"16+ (under 18 with guardian)",
 entry:"Valid booking confirmation and photo ID required.",
 dress:"Casual / comfortable",
 includes:"Live performances and event access",
 rules:["No outside food or beverages.","No professional cameras without permission.","No smoking.","Security screening mandatory."],
 cancel:"Cancellation requests up to 48 hours before the event."
},
{
 id:2,title:"Pottery & Chai Workshop",cat:"Art",city:"Bhubaneswar",
 date:"21 Dec 2026",month:"Dec",time:"4 PM – 7 PM",
 venue:"The Art Room, Patia",price:699,
 img:"https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=85",
 tag:"CREATE SOMETHING",
 desc:"Shape clay, learn beginner pottery techniques and enjoy a warm cup of chai.",
 age:"12+ (children accompanied by adults)",
 entry:"Pre-booking required. Arrive 15 minutes early.",
 dress:"Comfortable clothes",
 includes:"Clay, tools, instructor, chai and one handmade piece",
 rules:["Aprons and clay tools provided.","Wear clothes that can get messy.","Follow instructor guidance.","Finished pieces may need firing time."],
 cancel:"Reschedule requests 24 hours before the workshop."
},
{
 id:3,title:"Christmas Food Fest",cat:"Food",city:"Bhubaneswar",
 date:"25 Dec 2026",month:"Dec",time:"7 PM – 11 PM",
 venue:"KIIT Campus Event Grounds",price:599,
 img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85",
 tag:"FESTIVE SPECIAL",
 desc:"A festive food carnival featuring local favourites, seasonal desserts, live counters, music and Christmas photo spots.",
 age:"All ages; children with guardians",
 entry:"Ticket required. Food purchases may be extra.",
 dress:"Festive casual",
 includes:"Entry, entertainment and selected tasting coupons",
 rules:["No alcohol or smoking.","Keep the venue clean.","Children must remain with guardians.","Outside food may not be permitted."],
 cancel:"Non-refundable unless the event is cancelled by the organiser."
},
{
 id:4,title:"New Year Eve Bash 2027",cat:"Party",city:"Bhubaneswar",
 date:"31 Dec 2026",month:"Dec",time:"8 PM – 12:30 AM",
 venue:"KIIT Playground, Bhubaneswar",price:999,
 img:"https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=900&q=85",
 tag:"MOST ANTICIPATED",
 desc:"Welcome 2027 with a spectacular night of DJ music, dance, food stalls, countdown moments and a stunning light show.",
 age:"18+ recommended; minors only with guardian and organiser approval",
 entry:"Advance booking strongly recommended. Carry booking confirmation and photo ID.",
 dress:"Party wear / smart casual",
 includes:"Entry, DJ performances, countdown and designated viewing zone",
 rules:["No outside food, drinks, fireworks or dangerous items.","No alcohol for under-18 guests.","No re-entry after exit unless permitted.","Security checks are mandatory.","Personal fireworks are prohibited."],
 cancel:"Tickets are non-refundable. Organiser cancellation will be notified."
},
{
 id:5,title:"Sunrise Yoga & Sound",cat:"Wellness",city:"Bhubaneswar",
 date:"10 Jan 2027",month:"Jan",time:"6 AM – 8 AM",
 venue:"Dhauli Hills Viewpoint",price:299,
 img:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=85",
 tag:"RESET & RECHARGE",
 desc:"Start the year gently with guided yoga, breathing exercises and peaceful sound meditation at sunrise.",
 age:"15+; beginner-friendly",
 entry:"Pre-booking required. Arrive 20 minutes early.",
 dress:"Stretchable activewear",
 includes:"Guided yoga, sound meditation and herbal tea",
 rules:["Bring your own yoga mat and water bottle.","Inform instructor about injuries.","Weather may affect the session.","Maintain silence during meditation."],
 cancel:"Weather-related rescheduling may be offered."
},
{
 id:6,title:"Neon Nights: DJ Social",cat:"Music",city:"Mumbai",
 date:"24 Jan 2027",month:"Jan",time:"8 PM – 1 AM",
 venue:"The Dock, Mumbai",price:999,
 img:"https://images.unsplash.com/photo-1571266028243-d220c9c3b9e4?w=900&q=85",
 tag:"LIMITED SPOTS",
 desc:"A neon-lit dance floor, guest DJs, immersive visuals and a high-energy social night.",
 age:"18+ only",
 entry:"Photo ID mandatory; booking confirmation required.",
 dress:"Neon / party casual",
 includes:"Entry and DJ performances",
 rules:["No outside drinks or prohibited substances.","No harassment or unsafe behaviour.","Venue security may deny entry for violations.","Re-entry subject to venue policy."],
 cancel:"Non-refundable booking; event cancellation handled by organiser."
},
{
 id:7,title:"Stargazing & Stories",cat:"Wellness",city:"Kolkata",
 date:"07 Feb 2027",month:"Feb",time:"7 PM – 9:30 PM",
 venue:"Eco Park Open Lawn, Kolkata",price:449,
 img:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=85",
 tag:"UNIQUE EXPERIENCE",
 desc:"Explore constellations with a guide, peek through telescopes and enjoy storytelling under the night sky.",
 age:"10+; children with adults",
 entry:"Pre-booking required; weather-dependent.",
 dress:"Comfortable outdoor clothes",
 includes:"Guided sky tour, telescope viewing and hot drink",
 rules:["Avoid bright flash photography.","Follow telescope instructions.","Carry a light jacket.","Sky visibility may affect the programme."],
 cancel:"Cloudy weather may lead to rescheduling."
},
{
 id:8,title:"The Little Art Market",cat:"Art",city:"Delhi",
 date:"14 Feb 2027",month:"Feb",time:"11 AM – 6 PM",
 venue:"Sunder Nursery, Delhi",price:199,
 img:"https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=85",
 tag:"MADE BY HAND",
 desc:"A charming market of handmade jewellery, illustrations, pottery, prints and independent creators.",
 age:"All ages",
 entry:"Entry ticket required; purchases from stalls are separate.",
 dress:"Casual / comfortable",
 includes:"Market access and selected mini activity",
 rules:["Respect artists' work.","Ask before photography.","Children should be supervised.","Reusable bags encouraged."],
 cancel:"Entry tickets are non-refundable unless cancelled."
},
{
 id:9,title:"Rooftop Movie Under Stars",cat:"Party",city:"Kolkata",
 date:"20 Feb 2027",month:"Feb",time:"7:30 PM – 10:30 PM",
 venue:"Skyline Rooftop, Kolkata",price:549,
 img:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&q=85",
 tag:"DATE NIGHT",
 desc:"A cosy open-air movie evening with a giant screen, fairy lights, popcorn and a dreamy rooftop atmosphere.",
 age:"16+; younger guests with guardian",
 entry:"Book in advance; seating is limited.",
 dress:"Casual; bring a light jacket",
 includes:"Movie access, popcorn and soft drink",
 rules:["Film subject to licensing.","No disruptive behaviour.","Weather may cause venue changes.","Outside food not permitted."],
 cancel:"Weather rescheduling or organiser cancellation policy applies."
}
];

let category = "all";
let bookingTab = "upcoming";

const $ = id => document.getElementById(id);

// EVENTS
function renderEvents(){
 const q=$("search").value.toLowerCase();
 const city=$("city").value;
 const month=$("month").value;

 const filtered=events.filter(e=>
  (category==="all"||e.cat===category)&&
  (city==="all"||e.city===city)&&
  (month==="all"||e.month===month)&&
  (e.title.toLowerCase().includes(q)||e.venue.toLowerCase().includes(q)
  ||e.cat.toLowerCase().includes(q))
 );

 $("eventList").innerHTML=filtered.map(e=>`
 <article class="event reveal" onclick="details(${e.id})">
  <div class="eventpic">
   <img src="${e.img}" alt="${e.title}">
   <span class="tag">${e.tag}</span>
   <button class="heart" onclick="event.stopPropagation();favourite(${e.id},this)">
   ${isFav(e.id)?"♥":"♡"}</button>
  </div>
  <div class="eventbody">
   <div class="date">${e.date} · ${e.time.split(" – ")[0]}</div>
   <h3>${e.title}</h3>
   <div class="meta">📍 ${e.city} · ${e.cat}</div>
   <div class="eventfoot">
    <span class="price">${e.price===0?"Free":"₹"+e.price}</span>
    <button class="book" onclick="event.stopPropagation();details(${e.id})">Details & Book ↗</button>
   </div>
  </div>
 </article>`).join("");

 $("noResults").style.display=filtered.length?"none":"block";
 observeReveal();
}

function filterEvents(){renderEvents()}

function setCategory(c,b){
 category=c;
 document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));
 b.classList.add("active");
 renderEvents();
}

function resetFilters(){
 $("search").value="";
 $("city").value="all";
 $("month").value="all";
 category="all";
 document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));
 document.querySelector(".cat").classList.add("active");
 renderEvents();
}

// FAVOURITES
function getFavs(){return JSON.parse(localStorage.getItem("es_favs")||"[]")}
function isFav(id){return getFavs().includes(id)}

function favourite(id,b){
 let a=getFavs();
 a=a.includes(id)?a.filter(x=>x!==id):[...a,id];
 localStorage.setItem("es_favs",JSON.stringify(a));
 b.innerHTML=a.includes(id)?"♥":"♡";
 toast(a.includes(id)?"Added to favourites 💜":"Removed from favourites");
}

// EVENT DETAILS
function details(id){
 let e=events.find(x=>x.id===id);

 $("modalContent").innerHTML=`
 <span class="eyebrow">${e.tag}</span>
 <div class="detailtop">
  <img src="${e.img}">
  <div>
   <h2>${e.title}</h2>
   <p>${e.desc}</p>
   <strong class="gradient">${"₹"+e.price+" / person"}</strong>
   <p>📅 ${e.date}<br>🕒 ${e.time}<br>📍 ${e.venue}</p>
  </div>
 </div>

 <div class="detailgrid">
  <div class="detailitem"><small>WHO CAN ATTEND?</small><strong>${e.age}</strong></div>
  <div class="detailitem"><small>PRE-BOOKING</small><strong>Advance booking available · Limited seats</strong></div>
  <div class="detailitem"><small>DRESS CODE</small><strong>${e.dress}</strong></div>
  <div class="detailitem"><small>TICKET INCLUDES</small><strong>${e.includes}</strong></div>
 </div>

 <h3>Entry & Event Rules</h3>
 <ul class="rules">${e.rules.map(r=>`<li>${r}</li>`).join("")}</ul>
 <div class="detailitem"><small>CANCELLATION POLICY</small><strong>${e.cancel}</strong></div>
 <button class="btn" onclick="bookingForm(${e.id})">Pre-book Your Spot →</button>
 `;
 openModal();
}

// BOOKING FORM
function bookingForm(id){
 let e=events.find(x=>x.id===id);
 $("modalContent").innerHTML=`
 <span class="eyebrow">RESERVE YOUR EXPERIENCE</span>
 <h2>${e.title}</h2>
 <p class="sub">Booking price: ₹${e.price} per ticket</p>
 <form onsubmit="confirmBooking(event,${id})">
  <label>Full Name</label><input id="bname" required placeholder="Your name">
  <label>Email address</label><input id="bemail" type="email" required placeholder="you@example.com">
  <label>Phone number</label><input id="bphone" type="tel" required placeholder="+91 98765 43210">
  <label>Number of tickets</label>
  <select id="bqty"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
  <label><input type="checkbox" required style="width:auto"> I agree to the event rules and cancellation policy.</label>
  <button class="btn">Confirm Booking</button>
 </form>`;
}

// CONFIRM BOOKING
function confirmBooking(ev,id){
 ev.preventDefault();
 let e=events.find(x=>x.id===id);
 let qty=+$("bqty").value;
 let bookings=getBookings();

 let b={
  code:"ES"+Date.now().toString().slice(-7),
  eventId:id,title:e.title,date:e.date,month:e.month,
  city:e.city,venue:e.venue,img:e.img,qty,
  amount:e.price*qty,name:$("bname").value,
  email:$("bemail").value,phone:$("bphone").value,
  status:"Confirmed",created:new Date().toISOString()
 };

 bookings.push(b);
 localStorage.setItem("es_bookings",JSON.stringify(bookings));
 closeModal();
 toast("Booking confirmed! ID: "+b.code);
 renderBookings();
}

// BOOKINGS DASHBOARD
function getBookings(){return JSON.parse(localStorage.getItem("es_bookings")||"[]")}

function showBookings(t,b){
 bookingTab=t;
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
 b.classList.add("active");
 renderBookings();
}

function renderBookings(){
 let all=getBookings();
 $("bookingCount").textContent=all.length+" BOOKINGS";

 let list=all.filter(b=>{
  let year=(b.month==="Jan"||b.month==="Feb")?2027:2026;
  let date=new Date(b.date+" "+year);
  return bookingTab==="upcoming"?date>=new Date():date<new Date();
 });

 $("bookingList").innerHTML=list.length?
 list.map(b=>`
 <div class="bookingrow">
  <img src="${b.img}">
  <div class="info">
   <b>${b.title}</b>
   <small>${b.date} · ${b.qty} ticket(s) · Booking ID: ${b.code}</small>
   <small>${b.venue}</small>
  </div>
  <span class="status">${b.status}</span>
  <b>₹${b.amount}</b>
 </div>`).join("")
 :`<p class="sub" style="padding:20px 0">${bookingTab==="upcoming"?"No upcoming bookings yet. Explore events and reserve your spot!":"No past bookings to show yet."}</p>`;
}

// HOST EVENT
function openHost(){
 $("modalContent").innerHTML=`
 <span class="eyebrow">HOST WITH EVENTSQUARE</span>
 <h2>Tell us your event idea</h2>
 <p class="sub">Our team will contact you to discuss listing your event.</p>
 <form onsubmit="sendHost(event)">
  <label>Event / organiser name</label><input required placeholder="Your event name">
  <label>Contact email</label><input required type="email" placeholder="you@example.com">
  <label>City & venue</label><input required placeholder="City, venue">
  <label>Event date</label><input required type="date">
  <label>Short description</label>
  <textarea required style="width:100%;min-height:90px;background:#0b0718;border:1px solid #40265e;color:white;border-radius:10px;padding:12px"></textarea>
  <button class="btn">Send Event Proposal ↗</button>
 </form>`;
 openModal();
}

function sendHost(e){e.preventDefault();closeModal();toast("Event proposal submitted (demo) ✨")}

// INQUIRY & NEWSLETTER
function sendInquiry(e){e.preventDefault();e.target.reset();toast("Inquiry submitted! (Demo) 💌")}
function newsletter(e){e.preventDefault();e.target.reset();toast("You're on the list! 💌")}

// MODAL
function openModal(){$("modal").classList.add("show")}
function closeModal(){$("modal").classList.remove("show")}
$("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});

// TOAST
function toast(m){
 $("toast").textContent=m;
 $("toast").classList.add("show");
 setTimeout(()=>$("toast").classList.remove("show"),3500);
}

// SCROLL ANIMATION
const observer=new IntersectionObserver(es=>{
 es.forEach(e=>{
  if(e.isIntersecting){
   e.target.classList.add("visible");
   observer.unobserve(e.target);
  }
 });
},{threshold:.1});

function observeReveal(){
 document.querySelectorAll(".reveal:not(.visible)").forEach(el=>observer.observe(el));
}

// MOVING STAR PARTICLES
function makeParticles(){
 for(let i=0;i<65;i++){
  let p=document.createElement("i");
  p.className="particle";
  p.style.left=Math.random()*100+"%";
  p.style.top=Math.random()*100+"%";
  p.style.animationDelay=Math.random()*4+"s";
  p.style.animationDuration=3+Math.random()*5+"s";
  $("particles").appendChild(p);
 }
}

makeParticles();
renderEvents();
renderBookings();