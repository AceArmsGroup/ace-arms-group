const DATA={
  dundee:{
    name:"ACE ARMS",city:"DUNDEE",logo:"assets/ace-arms-logo.jpg",
    a:"#7b2cff",a2:"#ff6a00",ey:"ACE ARMS • KWAZULU-NATAL",
    tag:"Your local Ace Arms destination in Dundee.",
    intro:"Contact the Dundee team directly.",
    address:"52 Smith Street\nDundee, KZN\nSouth Africa",
    phone:"034 212 1379",email:"arms@acedundee.co.za",
    contacts:[
      ["01","DUNDEE","034 212 1379","+27342121379"],
      ["02","DUNDEE","076 932 9594","+27769329594"],
      ["03","DUNDEE","081 049 8440","+27810498440"],
      ["04","DUNDEE","068 677 1499","+27686771499"]
    ]
  },
  newcastle:{
    name:"ACE ARMS",city:"NEWCASTLE",logo:"assets/ace-arms-logo.jpg",
    a:"#ff6a00",a2:"#7b2cff",ey:"ACE ARMS • KWAZULU-NATAL",
    tag:"Your local Ace Arms destination in Newcastle.",
    intro:"Contact the Newcastle team directly.",
    address:"64 Scott St.\nNewcastle CBD, KZN\nSouth Africa",
    phone:"072 925 5576",email:"ace.arms.nn@gmail.com",
    contacts:[
      ["01","NEWCASTLE","072 925 5576","+27729255576"],
      ["02","NEWCASTLE","081 049 8440","+27810498440"],
      ["03","NEWCASTLE","068 677 1499","+27686771499"]
    ]
  },
  amys:{
    name:"Amys Arms",city:"UMZINTO",logo:"assets/amys-arms-logo-blue.png",
    a:"#168cff",a2:"#0b35c9",ey:"Amys Arms • UMZINTO",
    tag:"A local Amys Arms destination in Umzinto.",
    intro:"Contact Yusuf, Zaakir or Abu directly.",
    address:"Retailers Building\nMain Road\nUmzinto\nSouth Africa",
    phone:"084 786 2028",email:"amysnx@gmail.com",
    contacts:[
      ["01","YUSUF","084 786 2028","+27847862028"],
      ["02","ZAAKIR","071 092 7862","+27710927862"],
      ["03","ABU","074 090 1165","+27740901165"]
    ]
  }
};

const $=x=>document.getElementById(x);

function load(k){
  const d=DATA[k];
  document.documentElement.style.setProperty("--a",d.a);
  document.documentElement.style.setProperty("--a2",d.a2);

  $("topCity").textContent=d.city;
  $("eyebrow").textContent=d.ey;
  $("logo").src=d.logo;
  $("logo").alt=d.name+" "+d.city+" logo";
  $("name").textContent=d.name;
  $("city").textContent=d.city;
  $("tagline").textContent=d.tag;
  $("qLocation").textContent=d.city+", KZN";
  $("qPhone").textContent=d.phone;
  $("qEmail").textContent=d.email;
  $("sCity").textContent=d.city;
  $("intro").textContent=d.intro;
  $("address").textContent=d.address;
  $("email").textContent=d.email;
  $("vCity").textContent=d.city;
  $("vHeading").textContent=d.city;
  $("vAddress").textContent=d.address.replace(/\n/g,", ");
  $("markCity").textContent=d.city;

  $("call").href="tel:"+d.contacts[0][3];
  $("mail").href="mailto:"+d.email;

  const q=encodeURIComponent(d.address.replace(/\n/g,", "));
  const map="https://www.google.com/maps/search/?api=1&query="+q;
  $("map").href=map;
  $("directions").href=map;

  $("contacts").innerHTML=d.contacts.map(c=>
    `<a class="contact" href="tel:${c[3]}">
      <span class="n">${c[0]}</span>
      <div><strong>${c[1]}</strong><span>${c[2]}</span></div>
      <b>CALL ↗</b>
    </a>`
  ).join("");

  document.querySelectorAll(".tabs button").forEach(b=>
    b.classList.toggle("active",b.dataset.key===k)
  );

  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll(".tabs button").forEach(b=>
  b.onclick=()=>load(b.dataset.key)
);

$("year").textContent=new Date().getFullYear();
load("dundee");
