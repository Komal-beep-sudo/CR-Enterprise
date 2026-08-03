
// ===== PAGE NAVIGATION =====
var PAGES = ['home','about','products','certificates','knowledge','blog','clients','contact','market'];
var PAGE_URL = {home:'index.html',about:'about.html',products:'products.html',certificates:'certificates.html',knowledge:'knowledge.html',blog:'blog.html',clients:'clients.html',contact:'contact.html',market:'market.html'};

function showPage(id) {
  var url = PAGE_URL[id] || 'index.html';
  var here = (window.location.pathname.split('/').pop() || 'index.html');
  if (here === '') here = 'index.html';
  var mob = document.getElementById('mobNav');
  if (mob) mob.className = 'mob-nav';
  if (here === url) { window.scrollTo(0, 0); return; }
  window.location.href = url;
}

function mobNavPos() {
  var m = document.getElementById('mobNav');
  if (!m || m.className.indexOf('open') === -1) return;
  var h = document.querySelector('header');
  var b = h ? h.getBoundingClientRect().bottom : 100;
  if (b < 0) b = 0;
  m.style.top = b + 'px';
  m.style.maxHeight = (window.innerHeight - b - 10) + 'px';
}
function toggleMob() {
  var m = document.getElementById('mobNav');
  var opening = m.className.indexOf('open') === -1;
  m.className = opening ? 'mob-nav open' : 'mob-nav';
  if (opening) mobNavPos();
}
window.addEventListener('scroll', mobNavPos, { passive: true });
window.addEventListener('resize', mobNavPos);
// tap outside closes the mobile menu
document.addEventListener('click', function(e) {
  var m = document.getElementById('mobNav');
  if (!m || m.className.indexOf('open') === -1) return;
  if (m.contains(e.target)) return;
  if (e.target.closest && e.target.closest('.hbtn-mob')) return;
  m.className = 'mob-nav';
}, true);

// ===== PRODUCTS =====
var products = [
  {id:100,cat:"Sharp Containers",tag:"Sharp Container",name:"Sharps Container &ndash; Family Range",desc:"Complete CRENEU&reg; sharps container family &mdash; puncture-resistant, leak-proof containers in multiple sizes to suit every point of care, from phlebotomy rooms to high-volume wards. Single-use, translucent bins compliant with Bio-Medical Waste Management Rules, 2016.",feat:["Available in 600 ML, 1.1 L, 3.5 L, 6.5 L, 7.5 L, 12.5 L and 25 L sizes","Puncture-resistant, leak-proof virgin polypropylene body","Translucent white with fill-line marking &mdash; never overfill","Secure snap-lock lids with needle unwinding slots","Biohazard labelled with discard date &amp; time panel","Compliant with Bio-Medical Waste Management Rules, 2016","ISO 13485 quality systems, CE marked, GMP certified","Single use only &mdash; made in India"],price:"Price on Request",img:"assets/img/cr-0056.webp"},
  {id:101,cat:"Sharp Containers",tag:"Sharp Container",name:"Sharps Container 600 ML",desc:"Compact 600 ml disposable sharp container for needles, syringes, blades and lancets. Puncture-resistant sharps disposal bin for clinics, labs and phlebotomy rooms. Manufactured in accordance with IS 7320.",price:"Price on Request",img:"assets/img/cr-0057.webp",feat:["Most economical sharps waste container","Meets Biomedical Waste Management norms","Solid &amp; stable shape","Puncture resistant","Ergonomic handle","Indents for needle removal","Temporary closure with visibility of the inside","Permanent closing facility","Maximum filling level indicator","Made in India"]},
{id:102,cat:"Sharp Containers",tag:"Sharp Container",name:"Sharps Container 1.1 Litre",desc:"1.1 litre translucent needle disposal container marked &lsquo;For Sharp Objects Only&rsquo;. Ideal biomedical sharps waste container for dressing rooms, dental clinics and vaccination centres.",price:"Price on Request",img:"assets/img/cr-0058.webp",feat:["Most economical sharps waste container","Meets Biomedical Waste Management norms","Solid &amp; stable shape","Puncture resistant","Ergonomic handle","Indents for needle removal","Temporary closure with visibility of the inside","Permanent closing facility","Maximum filling level indicator","Made in India"]},
  {id:325,cat:"Sharp Containers",tag:"Sharp Container",name:"Sharps Container 1.3 Litre",desc:"1.3 litre disposable sharp container with a translucent hinged flap lid and wide drop-in aperture for single-hand disposal of used syringes, needles and sharps. Puncture-resistant, leak-proof body printed with the &lsquo;do not fill above this line&rsquo; warning and biohazard marking, with a tamper-evident closure for transport to disposal.",price:"Price on Request",img:"assets/img/cr-0059.webp",feat:["Translucent hinged flap lid", "Wide drop-in aperture for syringes &amp; needles", "Puncture-resistant &amp; leak-proof body", "Tamper-evident final closure", "Available in yellow, red, blue &amp; translucent white", "Single use &mdash; destroy by incineration"]},
  {id:320,cat:"Sharp Containers",tag:"Sharp Container",name:"Sharps Container 1.5 Litre",desc:"1.5 litre disposable sharp container with a hinged flap lid and drop-in aperture for safe single-hand disposal of needles, syringes, blades and lancets. Puncture-resistant, leak-proof body with a printed biohazard warning label and tamper-evident final closure.",price:"Price on Request",img:"assets/img/cr-0060.webp",feat:["Hinged flap lid with drop-in aperture", "Puncture-resistant &amp; leak-proof body", "Tamper-evident final closure", "Available in yellow, red, blue &amp; translucent white", "Printed biohazard warning label", "Single use &mdash; destroy by incineration"]},
  {id:324,cat:"Sharp Containers",tag:"Sharp Container",name:"Sharp Container 1.5 Litre",desc:"1.5 litre disposable sharp container with a round flip-top opening and hinged cap, plus an integrated slot for removing needles from syringes without handling them. Puncture-resistant, leak-proof body printed with the &lsquo;do not fill above this line&rsquo; warning and biohazard marking, for disposal of used syringes, needles and sharps.",price:"Price on Request",img:"assets/img/cr-0061.webp",feat:["Round flip-top lid with hinged cap", "Integrated needle-removal slot", "Puncture-resistant &amp; leak-proof body", "Tamper-evident final closure", "Available in yellow, red, blue &amp; white", "Single use &mdash; destroy by incineration"]},
{id:103,cat:"Sharp Containers",tag:"Sharp Container",name:"Sharps Container 3.5 Litre",desc:"3.5 litre disposable sharp container with date, department and sign panel. Puncture-proof needle and blade disposal bin for hospital wards, OPDs and pathology labs. Single use only, as per Government Rules.",price:"Price on Request",img:"assets/img/cr-0062.webp",feat:["Most economical sharps waste container","Meets Biomedical Waste Management norms","Solid &amp; stable shape","Puncture resistant","Ergonomic handle","Indents for needle removal","Temporary closure with visibility of the inside","Permanent closing facility","Maximum filling level indicator","Made in India"]},
{id:104,cat:"Sharp Containers",tag:"Sharp Container",name:"Sharps Container 6.5 Litre",desc:"6.5 litre sharp waste container with wide blue snap lid and carrying handle. Heavy-duty biomedical sharps bin for busy hospital wards, ICUs and blood collection centres.",price:"Price on Request",img:"assets/img/cr-0063.webp",feat:["Most economical sharps waste container","Meets Biomedical Waste Management norms","Solid &amp; stable shape","Puncture resistant","Ergonomic handle","Indents for needle removal","Temporary closure with visibility of the inside","Permanent closing facility","Maximum filling level indicator","Made in India"]},
{id:105,cat:"Sharp Containers",tag:"Sharp Container",name:"Sharps Container 7.5 Litre",desc:"7.5 litre disposable sharp container for high-volume sharps generation areas. Puncture-resistant, leak-proof needle disposal container for operation theatres, ICUs and dialysis centres. Mfg. in accordance with IS 7320.",price:"Price on Request",img:"assets/img/cr-0063.webp",feat:["Most economical sharps waste container","Meets Biomedical Waste Management norms","Solid &amp; stable shape","Puncture resistant","Ergonomic handle","Indents for needle removal","Temporary closure with visibility of the inside","Permanent closing facility","Maximum filling level indicator","Made in India"]},

  
  
  
  {id:106,cat:"Sharp Containers",tag:"Pharma Waste Container",name:"Non-Hazardous Pharmaceutical Waste Container 7.5 L",desc:"7.5 litre blue pharmaceutical waste bin for safe disposal of non-hazardous expired and discarded medicines. Transparent hinged lid with record panel for date, department and signature.",price:"Price on Request",img:"assets/img/cr-0063.webp",feat:["For non-hazardous pharmaceutical waste only","Transparent hinged lid with wide opening","Date / Dept. / Sign record panel","Puncture resistant &amp; leak proof","Solid, stable and stackable shape","Ergonomic side handles","Single use only","Made in accordance with BMW Management Rules","Made in India"]},
{id:107,cat:"Sharp Containers",tag:"Pharma Waste Container",name:"Non-Hazardous Pharmaceutical Waste Container 12.5 L",desc:"12.5 litre blue non-hazardous pharmaceutical waste container for hospital pharmacies, nursing homes and medical stores. Leak-proof, tamper-evident lid with wide top opening.",price:"Price on Request",img:"assets/img/cr-0064.webp",feat:["For non-hazardous pharmaceutical waste only","Transparent hinged lid with wide opening","Date / Dept. / Sign record panel","Puncture resistant &amp; leak proof","Solid, stable and stackable shape","Ergonomic side handles","Single use only","Made in accordance with BMW Management Rules","Made in India"]},
{id:108,cat:"Sharp Containers",tag:"Pharma Waste Container",name:"Non-Hazardous Pharmaceutical Waste Container 25 L",desc:"25 litre high-capacity pharmaceutical waste bin for bulk disposal of expired medicines and discarded drugs. Ideal for hospital pharmacies, pharmaceutical units and large healthcare facilities.",price:"Price on Request",img:"assets/img/cr-0065.webp",feat:["For non-hazardous pharmaceutical waste only","Transparent hinged lid with wide opening","Date / Dept. / Sign record panel","Puncture resistant &amp; leak proof","Solid, stable and stackable shape","Ergonomic side handles","Single use only","Made in accordance with BMW Management Rules","Made in India"]},
{id:109,cat:"Dustbins & Trolley",tag:"Dustbins",name:"Waste Bin with Foot Pedal &ndash; Colour Coded Set",desc:"Colour-coded pedal dustbins in red, yellow, blue and black with biohazard marking. Hands-free foot-operated hospital waste bins that support BMW Rules, 2016 colour-coded segregation and reduce cross-contamination.",price:"Price on Request",img:"assets/img/cr-0066.webp",feat:["Available in red, yellow, blue &amp; black","Hands-free foot pedal operation","Pre-printed biohazard symbol","Supports colour-coded waste segregation","Durable virgin plastic body","Easy to clean and disinfect","Removable inner liner holder","Suitable for hospitals, clinics &amp; labs","Made in India"]},
{id:122,cat:"Dustbins & Trolley",tag:"Dustbins",name:"10 Litre Dustbin",desc:"Colour-coded 10 litre pedal dustbin available in red, yellow, blue and black. Hands-free foot-operated hospital waste bin that supports BMW Rules, 2016 colour-coded segregation and helps reduce cross-contamination.",price:"Price on Request",img:"assets/img/cr-0067.webp",feat:["Available in red, yellow, blue &amp; black","10 litre capacity","Hands-free foot pedal operation","Sturdy carry handle","Supports colour-coded waste segregation","Durable virgin plastic body","Easy to clean and disinfect","Suitable for hospitals, clinics &amp; labs","Made in India"]},

{id:128,cat:"Dustbins & Trolley",tag:"Dustbins",name:"20 Litre Economy Dustbin",desc:"Economy 20 litre pedal dustbin available in blue, green, red and yellow. Budget-friendly hands-free foot-operated waste bin for everyday hospital, clinic and office use, supporting BMW Rules, 2016 colour-coded segregation.",price:"Price on Request",img:"assets/img/cr-0068.webp",feat:["Available in blue, green, red &amp; yellow","20 litre capacity","Hands-free foot pedal operation","Economy virgin plastic body","Supports colour-coded waste segregation","Lightweight and easy to move","Easy to clean and disinfect","Suitable for hospitals, clinics &amp; offices","Made in India"]},

{id:123,cat:"Dustbins & Trolley",tag:"Dustbins",name:"40 Litre Premium Dustbin",desc:"Premium 40 litre pedal dustbin available in red, yellow, blue and black. Tall hands-free foot-operated waste bin ideal for high-footfall hospital and institutional areas, supporting BMW Rules, 2016 colour-coded segregation and reducing cross-contamination.",price:"Price on Request",img:"assets/img/cr-0069.webp",feat:["Available in red, yellow, blue &amp; black","40 litre high capacity","Hands-free foot pedal operation","Integrated top carry handle","Supports colour-coded waste segregation","Durable virgin plastic body","Easy to clean and disinfect","Ideal for hospitals &amp; institutions","Made in India"]},

{id:124,cat:"Dustbins & Trolley",tag:"Dustbins",name:"65 Litre Dustbin",desc:"Heavy-duty 65 litre pedal dustbin available in black and red. Large-capacity hands-free foot-operated waste bin built for high-volume hospital and institutional waste, supporting BMW Rules, 2016 colour-coded segregation.",price:"Price on Request",img:"assets/img/cr-0070.webp",feat:["Available in black &amp; red","65 litre heavy-duty capacity","Hands-free foot pedal operation","Reinforced ribbed body for strength","Supports colour-coded waste segregation","Durable virgin plastic body","Easy to clean and disinfect","Ideal for hospitals &amp; institutions","Made in India"]},

{id:129,cat:"Dustbins & Trolley",tag:"Dustbins",name:"80 Litre Dustbin",desc:"80 litre pedal dustbin available in blue and green. Large hands-free foot-operated waste bin ideal for wards, corridors and high-footfall areas, supporting BMW Rules, 2016 colour-coded segregation.",price:"Price on Request",img:"assets/img/cr-0071.webp",feat:["Available in blue &amp; green","80 litre high capacity","Hands-free foot pedal operation","Sturdy reinforced body","Supports colour-coded waste segregation","Durable virgin plastic body","Easy to clean and disinfect","Ideal for hospitals &amp; institutions","Made in India"]},

{id:125,cat:"Dustbins & Trolley",tag:"Dustbins",name:"120 Litre Wheeled Dustbin",desc:"120 litre two-wheeled mobile dustbin available in blue and green. Large-capacity wheelie bin with hinged lid for easy outdoor and bulk waste collection across hospitals, campuses and municipal areas, supporting colour-coded segregation.",price:"Price on Request",img:"assets/img/cr-0072.webp",feat:["Available in blue &amp; green","120 litre high capacity","Two sturdy wheels for easy mobility","Hinged lid with moulded handles","UV-stabilised virgin HDPE body","Supports colour-coded waste segregation","Easy to clean and disinfect","Ideal for outdoor &amp; bulk waste","Made in India"]},

{id:130,cat:"Dustbins & Trolley",tag:"Dustbins",name:"120 Litre Pedal Dustbin",desc:"120 litre pedal dustbin available in blue and green. Tall hands-free foot-operated waste bin with hinged lid, ideal for wards, corridors and high-footfall areas, supporting BMW Rules, 2016 colour-coded segregation.",price:"Price on Request",img:"assets/img/cr-0073.webp",feat:["Available in blue &amp; green","120 litre high capacity","Hands-free foot pedal operation","Hinged lid with moulded handles","Sturdy reinforced body","Supports colour-coded waste segregation","Durable virgin plastic body","Ideal for hospitals &amp; institutions","Made in India"]},

{id:126,cat:"Dustbins & Trolley",tag:"Dustbins",name:"660 Litre Wheeled Container",desc:"660 litre four-wheeled waste container available in blue, red, yellow and silver. Heavy-duty mobile bin with hinged lid and lockable castors for bulk waste storage across hospitals, campuses and industrial sites, supporting colour-coded segregation.",price:"Price on Request",img:"assets/img/cr-0074.webp",feat:["Available in blue, red, yellow &amp; silver","660 litre bulk capacity","Four heavy-duty castors, two lockable","Hinged lid with central handle","Reinforced ribbed body for strength","UV-stabilised virgin HDPE body","Supports colour-coded waste segregation","Ideal for bulk &amp; industrial waste","Made in India"]},

{id:127,cat:"Dustbins & Trolley",tag:"Dustbins",name:"1100 Litre Wheeled Container",desc:"1100 litre four-wheeled bulk waste container with hinged flat lid and lockable castors. The largest capacity mobile bin in the range, built for high-volume waste storage across hospitals, campuses, industrial and municipal sites.",price:"Price on Request",img:"assets/img/cr-0075.webp",feat:["1100 litre maximum bulk capacity","Four heavy-duty castors, two lockable","Hinged flat lid for stacking","Reinforced ribbed body for strength","UV-stabilised virgin HDPE body","High load-bearing capacity","Easy to manoeuvre when loaded","Ideal for bulk &amp; industrial waste","Made in India"]},

{id:110,cat:"Dustbins & Trolley",tag:"Dustbins",name:"2 Wheeled Plastic Dustbin",desc:"Heavy-duty 2 wheeled plastic dustbin with biohazard waste label and hinged lid. Mobile biomedical waste bin for hospital corridors, wards, kitchens and waste storage rooms.",price:"Price on Request",img:"assets/img/cr-0076.webp",feat:["Two rubber wheels for easy movement","Hinged lid with lifting lip","Biohazard waste label","UV-stabilised virgin HDPE body","Corrosion and chemical resistant","Easy to wash and disinfect","Ideal for waste storage rooms","Made in India"]},
{id:111,cat:"Dustbins & Trolley",tag:"Dustbins",name:"4 Wheeled Plastic Dustbin",desc:"Large capacity 4 wheeled plastic dustbin with lockable castors and flat hinged lid. Bulk waste container for hospitals, institutions, industries and municipal biomedical waste collection points.",price:"Price on Request",img:"assets/img/cr-0077.webp",feat:["Four heavy-duty castors, two with brakes","Flat hinged lid for stacking","High load-bearing capacity","UV-stabilised virgin HDPE body","Smooth interior for easy cleaning","Suitable for bulk waste collection","Ideal for hospitals &amp; institutions","Made in India"]},
{id:112,cat:"Dustbins & Trolley",tag:"Trolley",name:"Waste Segregation Trolley &ndash; 4 Bin",desc:"Stainless steel four-bin waste segregation trolley with labelled pedal bins for food or general waste, infectious waste, soiled or infected waste and glass, metal or sharp waste. Complete BMW colour-coded segregation at the point of generation.",price:"Price on Request",img:"assets/img/cr-0078.webp",feat:["Stainless steel frame with handle","Four labelled colour-coded pedal bins","Segregation at the point of generation","Smooth-rolling castors with brakes","Rust resistant and easy to sanitise","Compact footprint for ward corridors","Supports BMW Rules, 2016 compliance","Made in India"]},
{id:113,cat:"Dustbins & Trolley",tag:"Trolley",name:"Wringer Trolley &ndash; Double Bucket",desc:"Double bucket mop wringer trolley with clean water and dirty water buckets, side caution bucket and heavy-duty down-press wringer. Essential housekeeping and infection-control cleaning trolley for hospitals.",price:"Price on Request",img:"assets/img/cr-0079.webp",feat:["Separate clean water &amp; dirty water buckets","Heavy-duty down-press wringer","Caution wet floor bucket","Non-marking swivel castors","Sturdy powder-coated frame","Prevents cross-contamination during mopping","Ideal for hospitals, labs &amp; offices","Made in India"]},
{id:310,cat:"Hub Cutter & Needle Destroyer",tag:"Hub Cutter & Needle Destroyer",name:"Needle Hub Cutter &ndash; 1.5 Litre",desc:"1.5 litre translucent disposable sharp container with snap-lock lid and tamper-evident closure. Printed with biohazard warning, &lsquo;do not fill above this line&rsquo; marking and a date, department and signature panel. Suitable for treatment rooms, phlebotomy and bedside sharps collection.",price:"Price on Request",img:"assets/img/cr-0080.webp",feat:["Translucent puncture-resistant body", "Snap-lock lid with tamper-evident closure", "Moulded carrying handle", "Printed biohazard warning &amp; fill line", "Date / department / signature panel", "Single use &mdash; destroy by incineration"]},
  {id:311,cat:"Hub Cutter & Needle Destroyer",tag:"Hub Cutter & Needle Destroyer",name:"Needle Hub Cutter &ndash; 3.5 Litre",desc:"3.5 litre translucent sharps container fitted with a stainless steel hub cutter and needle destroyer assembly, blue lid insert and stainless steel carrying handle. Allows needles to be cut at the hub immediately after use, reducing the risk of needle-stick injury during collection and transport.",price:"Price on Request",img:"assets/img/cr-0081.webp",feat:["Stainless steel hub cutter / needle destroyer", "Translucent container for content visibility", "Puncture-resistant &amp; leak-proof body", "Stainless steel carrying handle", "Printed biohazard warning &amp; fill line", "Single use &mdash; destroy by incineration"]},
  {id:312,cat:"Hub Cutter & Needle Destroyer",tag:"Hub Cutter & Needle Destroyer",name:"Needle Hub Cutter &ndash; 5 Litre",desc:"5 litre sharps container with stainless steel hub cutter and needle destroyer mounted on the lid, blue lid insert and stainless steel carrying handle. Printed with caution and biohazard labelling for disposal as per Bio-Medical Waste Management Rules, 2016. Suited to OPD, wards and treatment rooms.",price:"Price on Request",img:"assets/img/cr-0082.webp",feat:["Stainless steel hub cutter / needle destroyer", "Translucent container for content visibility", "Puncture-resistant &amp; leak-proof body", "Stainless steel carrying handle", "Printed biohazard warning &amp; fill line", "Single use &mdash; destroy by incineration"]},
  {id:313,cat:"Hub Cutter & Needle Destroyer",tag:"Hub Cutter & Needle Destroyer",name:"Needle Hub Cutter &ndash; 7 Litre",desc:"7 litre sharps container with stainless steel hub cutter and needle destroyer assembly, blue lid insert and stainless steel carrying handle. Higher-capacity option for ICUs, emergency care, surgical units and high-volume sharps generation areas.",price:"Price on Request",img:"assets/img/cr-0083.webp",feat:["Stainless steel hub cutter / needle destroyer", "Translucent container for content visibility", "Puncture-resistant &amp; leak-proof body", "Stainless steel carrying handle", "Printed biohazard warning &amp; fill line", "Single use &mdash; destroy by incineration"]},
  {id:314,cat:"Hub Cutter & Needle Destroyer",tag:"Hub Cutter & Needle Destroyer",name:"Manual Needle Hub Cutter &ndash; 300 ML",desc:"300 ML manual needle hub cutter with a moulded screw-on top carrying separate needle cutter and barrel cutter ports, side clamps and a translucent collection container. Needles and syringe barrels are cut at the point of use and drop straight into the sealed container, reducing handling of used sharps.",price:"Price on Request",img:"assets/img/cr-0084.webp",feat:["Separate needle cutter &amp; barrel cutter ports", "Screw-on top with side clamps", "Translucent collection container", "Cuts at the point of use", "Compact bedside / trolley footprint", "Made in India"]},
  {id:315,cat:"Hub Cutter & Needle Destroyer",tag:"Hub Cutter & Needle Destroyer",name:"Manual Needle Hub Cutter &ndash; 350 ML",desc:"350 ML needle and syringe destroyer with a hinged yellow lid, tamper-evident closure and printed multilingual instruction panel. Marked &lsquo;do not fill above the line&rsquo; with a step-by-step usage diagram, and labelled for syringes only &mdash; not for catheters.",price:"Price on Request",img:"assets/img/cr-0085.webp",feat:["Hinged lid with tamper-evident closure", "Printed step-by-step instruction panel", "Multilingual &lsquo;do not fill above the line&rsquo; warning", "Marked for syringes only", "Puncture-resistant body", "Made in India"]},
  {id:316,cat:"Hub Cutter & Needle Destroyer",tag:"Hub Cutter & Needle Destroyer",name:"Manual Needle Hub Cutter &ndash; 600 ML",desc:"600 ML manual needle hub cutter with a stainless steel lever-arm cutting head mounted on a coloured base plate and lid, over a translucent 600 ML collection container. The long lever gives controlled single-hand operation, and the container detaches for disposal.",price:"Price on Request",img:"assets/img/cr-0086.webp",feat:["Stainless steel lever-arm cutting head", "Long handle for controlled operation", "Detachable 600 ML collection container", "Stable base plate mounting", "Translucent body for fill visibility", "Made in India"]},
  {id:300,cat:"Hospital Waste Collection Bags",tag:"Hospital Waste Collection Bags",name:"Biohazard Waste Bag &ndash; Yellow",desc:"Yellow colour-coded disposable bag for bio-hazardous waste, printed with the biohazard symbol, &lsquo;Handle With Care&rsquo; marking and a details panel for date of packing, waste category, waste class and generator/receiver information. Used in yellow-category bins for waste streams designated under the Bio-Medical Waste Management Rules.",price:"Price on Request",img:"assets/img/cr-0087.webp",feat:["Printed biohazard symbol &amp; &lsquo;Handle With Care&rsquo;", "Pre-printed waste details panel", "Leak-proof, high tensile strength", "Fits standard colour-coded bins &amp; bag stands", "Available in multiple sizes &amp; micron thickness", "Made in India"]},
  {id:301,cat:"Hospital Waste Collection Bags",tag:"Hospital Waste Collection Bags",name:"Biohazard Waste Bag &ndash; Red",desc:"Red colour-coded disposable bag for bio-hazardous waste with printed biohazard symbol and pre-printed waste details panel. Used in red-category bins for contaminated recyclable waste such as tubing, bottles, IV sets, catheters, urine bags and gloves.",price:"Price on Request",img:"assets/img/cr-0088.webp",feat:["Printed biohazard symbol &amp; &lsquo;Handle With Care&rsquo;", "Pre-printed waste details panel", "Leak-proof, high tensile strength", "Fits standard colour-coded bins &amp; bag stands", "Available in multiple sizes &amp; micron thickness", "Made in India"]},
  {id:302,cat:"Hospital Waste Collection Bags",tag:"Hospital Waste Collection Bags",name:"Biohazard Waste Bag &ndash; Blue",desc:"Blue colour-coded disposable bag for bio-hazardous waste, printed with the biohazard symbol in white and a details panel for waste documentation. Used in blue-category collection for glassware and metallic implant waste as per facility segregation protocol.",price:"Price on Request",img:"assets/img/cr-0089.webp",feat:["Printed biohazard symbol &amp; &lsquo;Handle With Care&rsquo;", "Pre-printed waste details panel", "Leak-proof, high tensile strength", "Fits standard colour-coded bins &amp; bag stands", "Available in multiple sizes &amp; micron thickness", "Made in India"]},
  {id:303,cat:"Hospital Waste Collection Bags",tag:"Hospital Waste Collection Bags",name:"Biohazard Waste Bag &ndash; Black",desc:"Black disposable bag printed with the biohazard symbol in white and a full waste details panel. Used for general and non-hazardous waste segregation within healthcare facilities, alongside the colour-coded biomedical waste streams.",price:"Price on Request",img:"assets/img/cr-0090.webp",feat:["Printed biohazard symbol &amp; &lsquo;Handle With Care&rsquo;", "Pre-printed waste details panel", "Leak-proof, high tensile strength", "Fits standard colour-coded bins &amp; bag stands", "Available in multiple sizes &amp; micron thickness", "Made in India"]},
  {id:304,cat:"Hospital Waste Collection Bags",tag:"Hospital Waste Collection Bags",name:"Biohazard Waste Bag &ndash; Green",desc:"Green colour-coded disposable bag with printed biohazard symbol and waste details panel. Used for general and biodegradable waste segregation in hospitals, clinics and laboratories as per facility protocol.",price:"Price on Request",img:"assets/img/cr-0091.webp",feat:["Printed biohazard symbol &amp; &lsquo;Handle With Care&rsquo;", "Pre-printed waste details panel", "Leak-proof, high tensile strength", "Fits standard colour-coded bins &amp; bag stands", "Available in multiple sizes &amp; micron thickness", "Made in India"]},
  {id:114,cat:"Hospital Waste Collection Bags",tag:"Hospital Waste Collection Bags",name:"Biohazard Waste Collection Bag",desc:"Red biohazard waste collection bag with printed biohazard symbol for contaminated plastic waste. Leak-proof, high-tensile-strength biomedical waste bag for use in colour-coded bins and bag holder stands.",price:"Price on Request",img:"assets/img/cr-0092.webp",feat:["Printed biohazard symbol","Leak proof and puncture resistant","High tensile strength","Fits standard bins and bag stands","Available in multiple sizes","Meets biomedical waste norms","For contaminated plastic waste","Made in India"]},
{id:115,cat:"Hospital Waste Collection Bags",tag:"Hospital Waste Collection Bags",name:"Steam Autoclavable Bags &ndash; Colour Coded",desc:"Colour-coded steam autoclavable biohazard bags in yellow, green, red, blue and black. Autoclavable biomedical waste bags that withstand steam sterilisation before final disposal, as per BMW colour-coding.",price:"Price on Request",img:"assets/img/cr-0093.webp",feat:["Available in yellow, green, red, blue &amp; black","Withstands steam autoclaving","Printed biohazard waste symbol","Leak proof, high tensile strength","Supports BMW colour-coded segregation","Multiple sizes and micron options","For hospitals, labs &amp; blood banks","Made in India"]},
  
  
  
  
  
{id:201,cat:"NeuroSurgery",tag:"Shunt System",name:"Chhabra Hydrocephalus Shunt System &ndash; VP High Pressure (SH-201)",desc:"Chhabra &lsquo;Slit in Spring&rsquo; hydrocephalus shunt system, complete set, regular size, ventriculo-peritoneal (VP) high pressure. Complete CSF diversion system for the surgical management of hydrocephalus in adults and paediatric patients.",img:"assets/img/cr-0094.webp",feat:["Unitised shunt assembly with flushing reservoir","Ventricular catheter with stylet, 15 cm length","Distal peritoneal catheter, 75 cm long","Three separate straight connectors","&lsquo;Slit in Spring&rsquo; distal valve mechanism","Radiopaque silicone construction","Sterile (EO), single use only","Endorsed by the WFNS Foundation","Manufactured by an ISO 13485:2016 company","Made in India"]},
{id:202,cat:"NeuroSurgery",tag:"Shunt System",name:"Chhabra Hydrocephalus Shunt System &ndash; VP Medium Pressure (SH-202)",desc:"Chhabra &lsquo;Slit in Spring&rsquo; hydrocephalus shunt system, complete set, regular size, ventriculo-peritoneal (VP) medium pressure. The most widely used pressure range for routine CSF diversion in hydrocephalus surgery.",img:"assets/img/cr-0095.webp",feat:["Unitised shunt assembly with flushing reservoir","Ventricular catheter with stylet, 15 cm length","Distal peritoneal catheter, 75 cm long","Three separate straight connectors","&lsquo;Slit in Spring&rsquo; distal valve mechanism","Radiopaque silicone construction","Sterile (EO), single use only","Endorsed by the WFNS Foundation","Manufactured by an ISO 13485:2016 company","Made in India"]},
{id:203,cat:"NeuroSurgery",tag:"Shunt System",name:"Chhabra Hydrocephalus Shunt System &ndash; VP Low Pressure (SH-203)",desc:"Chhabra &lsquo;Slit in Spring&rsquo; hydrocephalus shunt system, complete set, regular size, ventriculo-peritoneal (VP) low pressure. Suited to patients requiring a lower opening pressure for cerebrospinal fluid drainage.",img:"assets/img/cr-0096.webp",feat:["Unitised shunt assembly with flushing reservoir","Ventricular catheter with stylet, 15 cm length","Distal peritoneal catheter, 75 cm long","Three separate straight connectors","&lsquo;Slit in Spring&rsquo; distal valve mechanism","Radiopaque silicone construction","Sterile (EO), single use only","Endorsed by the WFNS Foundation","Manufactured by an ISO 13485:2016 company","Made in India"]},
{id:204,cat:"NeuroSurgery",tag:"Shunt System",name:"Uni Shunt &ndash; High Pressure (SH-401)",desc:"Single-piece unitised ventriculo-peritoneal shunt in high pressure range. Pre-assembled radiopaque silicone shunt that reduces intra-operative assembly time and the number of connection points in hydrocephalus surgery.",img:"assets/img/cr-0097.webp",feat:["Single-piece unitised design","High pressure range","Radiopaque silicone construction","Fewer connection points than assembled systems","Reduced intra-operative assembly time","Integral flushing reservoir","Sterile, single use only","Made in India"]},
{id:205,cat:"NeuroSurgery",tag:"Drainage Kit",name:"Ceflui Lumbar External Drainage Kit (SH-035)",desc:"Complete closed system for external lumbar cerebrospinal fluid (CSF) drainage and intracranial pressure monitoring. Includes Tuohy needle, radiopaque lumbar catheter, graduated burette chamber and 4000 ml collection bag with sampling port.",img:"assets/img/cr-0098.webp",feat:["Graduated burette chamber, 0&ndash;400 ml","4000 ml graduated collection bag","Tuohy needle for lumbar puncture","Radiopaque lumbar drainage catheter with stylet","Closed system minimises infection risk","Roller clamps for controlled flow rate","Needle-free sampling port","Height-adjustable hanger for pressure setting","Sterile, single use only","Made in India"]},
{id:206,cat:"NeuroSurgery",tag:"Trocar",name:"Peritoneal Split Trocar &ndash; Disposable",desc:"Sterile disposable peritoneal split trocar with peel-away sheath for percutaneous placement of the distal shunt catheter into the peritoneal cavity. Enables a minimally invasive alternative to open mini-laparotomy in VP shunt surgery.",img:"assets/img/cr-0099.webp",feat:["Peel-away splittable sheath","Sharp trocar tip for smooth insertion","Winged handle for controlled placement","Enables percutaneous distal catheter placement","Minimally invasive alternative to mini-laparotomy","Radiopaque sheath material","Sterile, single use only","Made in India"]},
{id:207,cat:"NeuroSurgery",tag:"Trocar",name:"Peritoneal Split Trocar &ndash; Reusable (INS-04)",desc:"Stainless steel reusable peritoneal split trocar for tunnelling and placement of the distal peritoneal catheter during ventriculo-peritoneal shunt surgery. Autoclavable instrument built for repeated theatre use.",img:"assets/img/cr-0100.webp",feat:["Surgical grade stainless steel","Reusable and fully autoclavable","Sharp trocar tip with knurled handle","For distal catheter tunnelling and placement","Corrosion resistant finish","Long service life","Made in India"]},
{id:208,cat:"NeuroSurgery",tag:"Surgical Drape",name:"Surgical Craniotomy Drape Pack",desc:"Sterile disposable craniotomy drape pack for neurosurgical procedures. SMS non-woven drapes with fluid-absorbent reinforcement zone and adhesive fenestration to maintain the sterile field during cranial surgery.",img:"assets/img/cr-0101.webp",feat:["Sterile disposable craniotomy pack","SMS non-woven, fluid resistant","Absorbent reinforcement around the fenestration","Adhesive incision area for secure fixation","Includes drapes, covers and utility towels","Low-lint, latex free","Maintains sterile field in cranial surgery","Sterile, single use only","Made in India"]},
  
  
  
{id:301,cat:"Cleaning Solutions",tag:"Enzymatic Detergent",name:"Endozime&reg; AW Plus &ndash; Enzymatic Detergent (345AP)",desc:"Synergistic multi-tiered enzymatic detergent formulated for automatic washers, ultrasonic washers, washer sterilizers, scope washers and manual cleaning. Blends protease, amylase, lipase and carbohydrase enzymes to dissolve and remove protein, fat, mucous and bio-burden from all types of surgical instruments &mdash; including cannulated instruments, biopsy forceps and flexible fiberoptics such as gastroscopes, colonoscopes and bronchoscopes.",img:"assets/img/cr-0102.webp",feat:["Multi-tiered enzyme blend &mdash; protease, amylase, lipase &amp; carbohydrase","Instantly active and continuously active","Non-foaming and non-sudsing","Neutral pH cleaner","100% biodegradable","Clinically tested to be free-rinsing","Will not harm metals, plastic, rubber or corrugated tubing","For automatic washers, ultrasonic washers &amp; manual cleaning","Catalog No. 345AP"]},
{id:302,cat:"Cleaning Solutions",tag:"Enzymatic Detergent",name:"Liquizime&trade; &ndash; Alkaline Enzymatic Detergent (345LQZ)",desc:"Multi-tiered alkaline enzymatic detergent specifically designed for use in washer disinfectors, tunnel washers and cart washers. Dispensed via the washer&rsquo;s auto-dispensing pump or poured directly into the reservoir, and effective across all water temperatures.",img:"assets/img/cr-0103.webp",feat:["Multi-tiered alkaline enzymatic formulation","For washer disinfectors, tunnel washers &amp; cart washers","Works in all water temperatures","Compatible with auto-dispensing pumps","Lightly soiled loads: from &frac12; oz per gallon (4 ml per litre)","Heavily soiled loads: from 1 oz per gallon (8 ml per litre)","Manual use: 1 oz per gallon, soak 2&ndash;5 minutes then rinse","Highly concentrated &mdash; economical in use","Catalog No. 345LQZ"]},
{id:303,cat:"Cleaning Solutions",tag:"Instrument Lubricant",name:"Premixslip&reg; &ndash; Instrument Lubricant &amp; Rust Inhibitor",desc:"Premixed surgical instrument lubricant and rust inhibitor, clinically tested to be thoroughly steam penetrable and steam sterilizable. Protects instruments during autoclaving, keeps box locks articulating freely and extends instrument service life by preventing rust and staining.",img:"assets/img/cr-0104.webp",feat:["Ready-to-use premixed formulation","Steam penetrable and steam sterilizable","Stops rusting, spotting and staining","Keeps box locks working freely","Protects sharps during autoclaving","Non-oily, non-sticky, non-toxic and silicone free","Will not interfere with steam sterilization","Reduces instrument replacement costs"]},
{id:304,cat:"Cleaning Solutions",tag:"Rust &amp; Stain Remover",name:"Surgistain&reg; &ndash; Rust &amp; Corrosion Remover (345B)",desc:"Fast-acting solution that safely removes rust and corrosion from stainless steel surgical instruments, renewing their original finish. Also removes hard water scale and corrosion from stainless steel autoclaves, carts, trays and basins.",img:"assets/img/cr-0105.webp",feat:["Removes rust and corrosion safely and quickly","Renews the original finish of instruments","Frees up box locks and assures articulation","Removes hard water scale from autoclaves","Excellent for stainless steel carts, trays and basins","Completely safe for all stainless steel products","Clinically tested to be free rinsing","Catalog No. 345B"]},
  
  
  
{id:401,cat:"Sterilization",tag:"Sterilization Reel",name:"Flat Reels for Steam &amp; Gas Sterilization",desc:"Flat sterilization reels made from one layer of laminated transparent film (polyester and copolymer polypropylene) bonded to white damp-resistant medical kraft paper, designed to assure a high anti-bacterial protection. Medical paper conforms to DIN 58953 (German), Pharmacopea 589 (French), EN 868-3 (European) and BS 6256 (English).",img:"assets/img/cr-0106.webp",feat:["Transparent multilayer co-polymer film for easy identification","All imprints outside the packaging area &mdash; no ink migration to the product","Reinforced film to avoid tearing during opening","Superior barrier with 60 gsm or 70 gsm medical kraft paper","Triple band seal &mdash; three independent barriers to contamination","Seals with all standard sealing machines","Non-toxic steam &amp; EO process indicators conforming to EN 867-2","Formaldehyde (FO) indicator available on request","Strong seal strength with visible sealing lines","Clean, fibre-free opening","Roll length 200 m in all widths","Widths: 5, 7.5, 10, 15, 20, 25, 30 and 35 cm","Packing: 5 cm &ndash; 8 reels; 7.5 cm &ndash; 5 reels; 10 cm &ndash; 4 reels","15 cm &ndash; 2 reels; 20 cm &ndash; 2 reels; 25/30/35 cm &ndash; 1 reel"]},
{id:403,cat:"Sterilization",tag:"Sterilization Pouch",name:"Self-Sealing Pouches for Steam &amp; Gas Sterilization",desc:"Self-sealing sterilization pouches consisting of laminated transparent film (polyester and copolymer polypropylene) and white damp-resistant medical kraft paper, assuring a high anti-bacterial protection. No sealing machine required &mdash; ideal for dental clinics, OPDs and small CSSD loads.",img:"assets/img/cr-0107.webp",feat:["Self-sealing &mdash; no sealing machine required","Reinforced corners prevent dust collecting near the opening","Chevron design allows rapid, correct opening","Side cut-out for even easier opening","Multiline heat-sealed lines, equally spaced and highly resistant","External welding runs the entire length of the pouch","Steam &amp; EO process indicators conforming to EN 867-2","Transparent film for instant content identification","Clean, fibre-free opening"]},
{id:404,cat:"Sterilization",tag:"Crepe Wrap",name:"Reinforced Crepe Paper Barrier Wrap",desc:"Reinforced crepe barrier wrap for wrapping medical devices as an outer wrap. The addition of a reinforcement binder gives superior strength and softness compared to classical crepe paper. Suitable for terminal sterilization by steam (121&ndash;134&deg;C), ethylene oxide gas, low temperature formaldehyde and irradiation.",img:"assets/img/cr-0108.webp",feat:["High bacterial barrier performance","Made from cellulosic fibres with reinforcement binder","Higher strength than classical crepe paper","Superior softness with a special touch","Economic alternative to man-made fibre media","Available in 35 GSM and 50 GSM","Colours: green and blue","Sizes 50&times;50, 60&times;60 cm &mdash; 500 sheets per pack","Sizes 75&times;75, 90&times;90, 100&times;100 cm &mdash; 250 sheets per pack","Sizes 120&times;120, 150&times;150 cm &mdash; 100 sheets per pack","Single-use &mdash; removes the tear and mending risk of reusable linen wrap"]},
{id:405,cat:"Sterilization",tag:"SMS Wrap",name:"SMS / SMMMS Barrier Wrap Sheets",desc:"Sterile barrier system for packaging medical devices, built from three meltblown &lsquo;M&rsquo; layers of microscopic fibres sandwiched between two stronger spunbond &lsquo;S&rsquo; layers. The tortuous path through the meltblown core delivers a uniform bacteriological and fluid barrier, while the spunbond faces provide tear, burst and abrasion resistance.",img:"assets/img/cr-0109.webp",feat:["SMMMS construction &mdash; three meltblown layers between two spunbond layers","Spunbond fibres ~15 microns; meltblown fibres ~2 microns","100% polypropylene, antistatic treated","Contains no natural fibres (cellulose) or synthetic binder","For steam (121&ndash;134&deg;C), EO gas, low-temperature formaldehyde &amp; peroxide gas plasma","Sequential wrapping technique recommended for aseptic presentation","Sizes 50&times;50, 60&times;60 cm &mdash; 500 sheets per pack","Sizes 75&times;75, 90&times;90, 100&times;100 cm &mdash; 200 sheets per pack","Size 120&times;120 cm &mdash; 150 sheets per pack","Non-toxic, non-hazardous; suitable for incineration"]},
{id:406,cat:"Sterilization",tag:"ETO Cartridge",name:"ETO Gas Cartridge",desc:"Ethylene oxide gas cartridges for use in ETO sterilizers. Single-use sealed cartridges that deliver a measured charge of ethylene oxide for low-temperature sterilization of heat-sensitive medical devices.",img:"assets/img/cr-0110.webp",feat:["Available in 40 g, 100 g and 170 g","For use in the sterilization process only","Low-temperature sterilization of heat-sensitive devices","Sealed single-use cartridge","Keep out of reach of children","Flammable and toxic &mdash; store and handle as per safety guidelines"]},
  {id:13,cat:"Surgical Autoclaves",name:"Benchtop Autoclave 23L",desc:"Class B pre-vacuum bench-top steam sterilizer engineered for clinics, dental practices and small operation theatres. The fractionated vacuum cycle removes trapped air from hollow instruments and wrapped packs, ensuring saturated steam reaches every surface for a fully validated sterilization cycle.",feat:["23 litre chamber &mdash; ideal for clinics, dental and OPD setups","Class B fractionated pre-vacuum for hollow, porous &amp; wrapped loads","Stainless steel chamber with high-grade insulation for heat efficiency","Programmable cycles with digital temperature &amp; pressure display","Automatic door interlock and multi-stage safety valves","Built-in vacuum drying for dry, ready-to-store packs","Compact bench-top footprint &mdash; easy installation &amp; servicing"],price:"Price on Request",icon:"⚙️",img:"assets/img/cr-0111.webp"},
  
  
  {id:14,cat:"Surgical Autoclaves",name:"Vertical Autoclave 50L",desc:"High-capacity vertical pressure steam sterilizer built for hospitals, laboratories and CSSD departments handling large daily volumes. Its deep chamber design and robust jacket deliver uniform steam penetration for instruments, linen, glassware and media loads.",feat:["50 litre high-capacity chamber for hospital &amp; laboratory loads","Vertical top-loading design saves valuable floor space","Uniform steam distribution for instruments, linen &amp; glassware","Digital controller with adjustable temperature, pressure &amp; hold time","Dual safety valves, pressure gauge and low-water cut-off protection","Corrosion-resistant stainless steel chamber and fittings","Suitable for CSSD, laboratories, nursing homes &amp; research facilities"],price:"Price on Request",icon:"⚙️",img:"assets/img/cr-0112.webp"},
  {id:15,cat:"Surgical Autoclaves",name:"Flash Autoclave",desc:"Rapid-cycle steam sterilizer designed for immediate-use sterilization inside the operation theatre. When an instrument is needed urgently between procedures, the flash cycle delivers a sterilized, ready-to-use load in minutes without disrupting the surgical workflow.",feat:["Rapid flash cycle for immediate-use sterilization in the OT","Fast heat-up and short turnaround between procedures","Ideal for unwrapped instruments needed urgently during surgery","Automatic cycle control with clear temperature &amp; pressure readout","Safety interlock prevents door opening under pressure","Durable stainless steel chamber for continuous daily use","Compact, mobile design for placement close to the point of use"],price:"Price on Request",icon:"⚙️",img:"assets/img/cr-0113.webp"},
  {id:161,cat:"Chemical Indicators",tag:"Class 4",name:"Package Monitoring Indicator &mdash; Class 4",desc:"gke Steri-Record&reg; Class 4 multi-variable package monitoring indicator for steam sterilization. The indicator dot changes from pink to dark grey/black only after the required time and temperature have been achieved.",price:"Price on Request",icon:"🔬",img:"assets/img/cr-0114.webp",feat:["EN ISO 11140-1 Class 4 compliant","Process range: 121&deg;C &ge; 15 min / 132&ndash;134&deg;C &ge; 3 min","Art.-No. 211-403 &mdash; product code C-S-P-4-SV1","Clear pink &rarr; black colour change","Supplied on indicator cards &mdash; 3,200 labels per pack","Self-adhesive, suitable for documentation"]},
  {id:162,cat:"Chemical Indicators",tag:"Class 5",name:"Integrating Package Monitoring Indicator &mdash; Class 5",desc:"gke Steri-Record&reg; Class 5 integrating indicator that responds to all critical variables of the steam sterilization process &mdash; time, temperature and saturated steam. Moving front gives a clear PASS reading.",price:"Price on Request",icon:"🔬",img:"assets/img/cr-0115.webp",feat:["EN ISO 11140-1 Class 5 integrating indicator","Product code C-S-P-5-SV1","Label dimension: 14 x 65 mm","Integrating PASS window for unambiguous reading","Art.-No. 211-224 (400), 211-225 (800), 211-226 (3,200)","Self-adhesive for load release documentation"]},
  {id:163,cat:"Chemical Indicators",tag:"Class 6",name:"Emulating Package Monitoring Indicator &mdash; Class 6",desc:"gke Steri-Record&reg; Class 6 emulating indicator for standard and prion steam sterilization cycles. Distinguishes between &lsquo;no temp/no steam&rsquo;, &lsquo;no steam but temp&rsquo; and a full pass, giving cycle-specific verification.",price:"Price on Request",icon:"🔬",img:"assets/img/cr-0116.webp",feat:["EN ISO 11140-1 Class 6 emulating indicator","Standard: C-S-P-6-SV1 &mdash; 134&deg;C/3 min &amp; 121&deg;C/15 min","Prion: C-S-P-6-SV2 &mdash; 134&deg;C/18 min","Label dimension: 23 x 66 mm","Pack sizes: 2,000 / 500 / 250 pcs","Separate temperature and steam indication zones"]},
  {id:164,cat:"Chemical Indicators",tag:"Documentation",name:"gke Steri-Record&reg; Documentation Label System",desc:"Complete traceability label system for CSSD documentation. Self-adhesive indicator labels with batch, date and operator fields allow every sterilized pack to be traced back to its cycle.",price:"Price on Request",icon:"🔬",img:"assets/img/cr-0117.webp",feat:["Full batch traceability for CSSD records","Fields for load number, date and operator","Double-adhesive labels for patient file documentation","Compatible with gke Class 4, 5 and 6 indicators","Dispenser-ready label rolls and cards","Meets hospital audit and accreditation requirements"]},
  {id:165,cat:"Chemical Indicators",tag:"Bowie &amp; Dick",name:"Bowie &amp; Dick Test Pack",desc:"Daily air-removal and steam-penetration test pack for pre-vacuum steam sterilizers. A uniform colour change across the test sheet confirms complete air removal and adequate steam penetration.",price:"Price on Request",icon:"🔬",img:"assets/img/cr-0118.webp",feat:["For use with steam sterilization processes","Test parameters: 134&deg;C / 3.5 min","Model BD312 &mdash; CE marked","Detects air leaks and non-condensable gases","Single-use, ready-to-use disposable pack","Do not use when packing is damaged"]},
  {id:166,cat:"Chemical Indicators",tag:"Autoclave Tape",name:"Steam Autoclave Tape",desc:"Pressure-sensitive indicator tape for sealing and identifying packs processed in steam and chemical vapour sterilizers. Diagonal stripes darken to confirm the pack has been exposed to the sterilization process.",price:"Price on Request",icon:"🔬",img:"assets/img/cr-0119.webp",feat:["For steam and chemical vapour sterilizers","Available in 1/2&quot;, 3/4&quot; and 1&quot; x 60 yds","Strong adhesion, clean removal without residue","Distinct colour change on processing","Writable surface for pack labelling","CE marked"]},
  {id:167,cat:"Chemical Indicators",tag:"Equipment",name:"Biological Indicator Incubator",desc:"Compact dry-block incubator for the incubation and readout of self-contained biological indicator (spore) vials. Digital temperature control ensures accurate results for sterilization cycle verification.",price:"Price on Request",icon:"🔬",img:"assets/img/cr-0120.webp",feat:["Multi-well dry block for BI spore vials","Digital display with precise temperature control","Compact benchtop footprint for CSSD use","Transparent hinged lid for easy monitoring","Fast, stable heat-up for reliable readouts","Ideal alongside biological indicator strips and vials"]},
  {id:191,cat:"Medical Dressings",name:"Elastic Crepe Bandage",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0121.webp"},
  {id:192,cat:"Medical Dressings",name:"Medical Absorbent Zigzag Cotton Wool",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0122.webp"},
  {id:193,cat:"Medical Dressings",name:"Medical Non-woven Triangular Bandage",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0123.webp"},
  {id:194,cat:"Medical Dressings",name:"Microporous Paper Tape",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0124.webp"},
  {id:195,cat:"Medical Dressings",name:"Non-Sterile Coloured Absorbent Cotton Ball",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0125.webp"},
  {id:196,cat:"Medical Dressings",name:"Non-Sterile Cotton Laparotomy Sponge (Lap Sponge)",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0126.webp"},
  {id:197,cat:"Medical Dressings",name:"Non-Sterile Cotton Gauze Ball",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0127.webp"},
  {id:198,cat:"Medical Dressings",name:"Orthopaedic Padding",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0128.webp"},
  {id:199,cat:"Medical Dressings",name:"Orthopaedic Casting Tape",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0129.webp"},
  {id:200,cat:"Medical Dressings",name:"Paraffin Gauze Swab",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0130.webp"},
  {id:601,cat:"Medical Dressings",name:"Permeable Zinc Oxide Plaster",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0131.webp"},
  {id:602,cat:"Medical Dressings",name:"Plaster of Paris Bandage",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0132.webp"},
  {id:603,cat:"Medical Dressings",name:"Precut Gauze Bandage Roll",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0133.webp"},
  {id:604,cat:"Medical Dressings",name:"Sterile Absorbent Cotton Ball",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0134.webp"},
  {id:605,cat:"Medical Dressings",name:"Sterile Gauze Swab",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0135.webp"},
  {id:606,cat:"Medical Dressings",name:"Surgical Absorbent Cotton Roll / Wool 500g",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0136.webp"},
  {id:607,cat:"Medical Dressings",name:"Surgical First Aid Bandage",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0137.webp"},
  {id:608,cat:"Medical Dressings",name:"Surgical Sport Tape",desc:"",price:"Price on Request",icon:"🩹",img:"assets/img/cr-0138.webp"},
  {id:221,cat:"Surgical Disposables",name:"Disposable Dental Apron",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0139.webp"},
  {id:222,cat:"Surgical Disposables",name:"Disposable Non-woven Bed Sheet",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0140.webp"},
  {id:223,cat:"Surgical Disposables",name:"Disposable PE Sleeve Cover",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0141.webp"},
  {id:224,cat:"Surgical Disposables",name:"Disposable Surgeon Gown",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0142.webp"},
  {id:225,cat:"Surgical Disposables",name:"Isolation Gown",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0143.webp"},
  {id:226,cat:"Surgical Disposables",name:"Medical Disposable Hand Towel",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0144.webp"},
  {id:227,cat:"Surgical Disposables",name:"Non-Woven Bouffant Cap",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0145.webp"},
  {id:228,cat:"Surgical Disposables",name:"Non-Woven Shoe Cover",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0146.webp"},
  {id:229,cat:"Surgical Disposables",name:"Patient Gown",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0147.webp"},
  {id:230,cat:"Surgical Disposables",name:"Surgeon Gown (Reusable)",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0148.webp"},
  {id:231,cat:"Surgical Disposables",name:"Surgical Apron",desc:"",price:"Price on Request",icon:"🧤",img:"assets/img/cr-0149.webp"},
  {id:251,cat:"Orthopaedics",name:"G-BONE Modified HA Blocks",desc:"",price:"Price on Request",icon:"🦴",img:"assets/img/cr-0150.webp"},
  {id:252,cat:"Orthopaedics",name:"G-BONE Modified HA Granules 10cc",desc:"",price:"Price on Request",icon:"🦴",img:"assets/img/cr-0151.webp"},
  {id:253,cat:"Orthopaedics",name:"G-GRAFT Burr Hole Plug",desc:"",price:"Price on Request",icon:"🦴",img:"assets/img/cr-0152.webp"},
  {id:254,cat:"Orthopaedics",name:"G-PATCH",desc:"",price:"Price on Request",icon:"🦴",img:"assets/img/cr-0153.webp"},
  {id:255,cat:"Orthopaedics",name:"QOSSHEAL IHA",desc:"",price:"Price on Request",icon:"🦴",img:"assets/img/cr-0154.webp"},
  {id:281,cat:"Ophthalmology",name:"Eye Drape NW Blue (Large)",desc:"",price:"Price on Request",icon:"👁️",img:"assets/img/cr-0155.webp"},
  {id:282,cat:"Ophthalmology",name:"Eye Dress with Eye Pad",desc:"",price:"Price on Request",icon:"👁️",img:"assets/img/cr-0156.webp"},
  {id:283,cat:"Ophthalmology",name:"Eye Sphere &mdash; Perforated",desc:"",price:"Price on Request",icon:"👁️",img:"assets/img/cr-0157.webp"},
  {id:284,cat:"Ophthalmology",name:"Eye Sphere &mdash; Solid",desc:"",price:"Price on Request",icon:"👁️",img:"assets/img/cr-0158.webp"},
  {id:285,cat:"Ophthalmology",name:"IO-Drape-1 for Eyes",desc:"",price:"Price on Request",icon:"👁️",img:"assets/img/cr-0159.webp"},
  {id:286,cat:"Ophthalmology",name:"Keiki Mehta BP Valve Glaucoma Shunt",desc:"",price:"Price on Request",icon:"👁️",img:"assets/img/cr-0160.webp"},
  {id:287,cat:"Ophthalmology",name:"O-Scope Drape",desc:"",price:"Price on Request",icon:"👁️",img:"assets/img/cr-0161.webp"},
  {id:288,cat:"Ophthalmology",name:"Pawar Intracystic Implant",desc:"",price:"Price on Request",icon:"👁️",img:"assets/img/cr-0162.webp"},
  {id:289,cat:"Ophthalmology",name:"Surgiclude Eye-Wipe",desc:"",price:"Price on Request",icon:"👁️",img:"assets/img/cr-0163.webp"},
  {id:311,cat:"Andrology",name:"Orbital Sizer (Set of Four Teflon Sizers)",desc:"",price:"Price on Request",icon:"🧪",img:"assets/img/cr-0164.webp"},
  {id:312,cat:"Andrology",name:"Penile Implant Reusable Sizer (Stainless Steel)",desc:"",price:"Price on Request",icon:"🧪",img:"assets/img/cr-0165.webp"},
  {id:313,cat:"Andrology",name:"Shah Penile Implant &mdash; Semi Rigid Without Hinge",desc:"",price:"Price on Request",icon:"🧪",img:"assets/img/cr-0166.webp"},
  {id:314,cat:"Andrology",name:"Solid Synthetic Testis",desc:"",price:"Price on Request",icon:"🧪",img:"assets/img/cr-0167.webp"},
  {id:315,cat:"Andrology",name:"Ventricular Catheter",desc:"",price:"Price on Request",icon:"🧪",img:"assets/img/cr-0168.webp"},  {id:341,cat:"Rehabilitation",name:"Ambulance Collar",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0169.webp"},
  {id:342,cat:"Rehabilitation",name:"Cervical Traction Kit",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0170.webp"},
  {id:343,cat:"Rehabilitation",name:"Clavicle Support",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0171.webp"},
  {id:344,cat:"Rehabilitation",name:"Forearm Fracture Brace",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0172.webp"},
  {id:345,cat:"Rehabilitation",name:"Four Post Cervical Brace",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0173.webp"},
  {id:346,cat:"Rehabilitation",name:"Lunar Splint",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0174.webp"},
  {id:347,cat:"Rehabilitation",name:"Shoulder Abduction Brace",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0175.webp"},
  {id:348,cat:"Rehabilitation",name:"Rib Belt",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0176.webp"},
  {id:349,cat:"Rehabilitation",name:"Shoulder Immobilizer",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0177.webp"},
  {id:350,cat:"Rehabilitation",name:"Soft Collar",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0178.webp"},
  {id:351,cat:"Rehabilitation",name:"SOMI Cervical Brace",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0179.webp"},
  {id:352,cat:"Rehabilitation",name:"Spondylosis Collar",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0180.webp"},
  {id:353,cat:"Rehabilitation",name:"Spondylosis Cervical Collar",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0181.webp"},
  {id:354,cat:"Rehabilitation",name:"Tennis Elbow Support",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0182.webp"},
  {id:355,cat:"Rehabilitation",name:"Thumb Spica Splint",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0183.webp"},
  {id:356,cat:"Rehabilitation",name:"Wrist Cock-up Splint",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0184.webp"},
  {id:357,cat:"Rehabilitation",name:"Wrist &amp; Forearm Splint",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0185.webp"},
  {id:358,cat:"Rehabilitation",name:"Wrist Hand Resting Splint",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0186.webp"},
  {id:359,cat:"Rehabilitation",name:"Wrist Wrap",desc:"",price:"Price on Request",icon:"🦽",img:"assets/img/cr-0187.webp"},
  {id:407,cat:"Nitrile & Latex Gloves",tag:"Nitrile Gloves",name:"Nitrile Examination Gloves",desc:"Latex-free nitrile examination gloves offering high puncture and chemical resistance &mdash; the preferred barrier for laboratories, dental practice and chemotherapy handling. Powder-free, textured fingertips for a secure grip in wet and dry conditions.",feat:["Latex-free &mdash; safe for latex-sensitive users","Highly puncture and chemical resistant","Ideal for laboratories, dental and chemotherapy","Sizes XS to XL with 3-year shelf life","Meets EN 455, ASTM D6319, ISO 13485, ISO 9001, CE &amp; FDA standards"],price:"Price on Request",img:"assets/img/cr-0188.webp"},
  {id:408,cat:"Nitrile & Latex Gloves",tag:"Latex Gloves",name:"Latex Examination Gloves",desc:"Natural rubber latex examination gloves with excellent elasticity and tensile strength &mdash; ideal for surgical procedures and general patient care. Snug, second-skin fit with reliable tactile sensitivity for precise clinical work.",feat:["Excellent elasticity and tensile strength","Ideal for surgical procedures and patient care","Superior tactile sensitivity and comfort","Sizes XS to XL with 3-year shelf life","Meets EN 455, ISO 13485, ISO 9001, CE &amp; FDA standards"],price:"Price on Request",img:"assets/img/cr-0189.webp"}
];

var cats = ['All'];
for (var i = 0; i < products.length; i++) {
  if (cats.indexOf(products[i].cat) === -1) cats.push(products[i].cat);
}
var activeCat = 'All';

function buildCats() {
  var el = document.getElementById('catBar');
  if (!el) return;
  var html = '';
  for (var i = 0; i < cats.length; i++) {
    var cls = cats[i] === activeCat ? 'cbt on' : 'cbt';
    html += '<button class="' + cls + '" onclick="setCat(\'' + cats[i] + '\')">' + cats[i] + '</button>';
  }
  el.innerHTML = html;
}

function buildProds() {
  var el = document.getElementById('prodGrid');
  if (!el) return;
  var filtered = activeCat === 'All' ? products : products.filter(function(p) { return p.cat === activeCat; });
  var html = '';
  if (!filtered.length) {
    el.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#6B7FA0;"><div style="font-size:2.2rem;margin-bottom:10px;">🧤</div><h3 style="font-family:\'Outfit\',sans-serif;font-weight:800;color:#0B1D3A;margin:0 0 8px;">Products coming soon</h3><p style="font-size:.95rem;line-height:1.7;margin:0;">We are adding products to this category. Contact us on WhatsApp <strong>+91 98714 56056</strong> or email <strong>info@creneu.com</strong> for the full range.</p></div>';
    return;
  }
  for (var i = 0; i < filtered.length; i++) {
    var p = filtered[i];
    html += '<div class="pcard">';
    if (p.img) {
      html += '<div class="pimg" style="background:#fff;padding:10px;"><img ' + (p.id === 100 ? 'id="famImg" ' : p.id === 102 ? 'id="c11Img" ' : p.id === 101 ? 'id="c600Img" ' : p.id === 103 ? 'id="c35Img" ' : p.id === 104 ? 'id="c65Img" ' : p.id === 120 ? 'id="c125Img" ' : p.id === 105 ? 'id="c75Img" ' : p.id === 121 ? 'id="c25Img" ' : p.id === 108 ? 'id="ph25Img" ' : p.id === 107 ? 'id="ph125Img" ' : p.id === 106 ? 'id="ph75Img" ' : AC_SLIDES[p.id] ? 'id="acImg' + p.id + '" ' : '') + 'src="' + p.img + '" alt="' + p.name + ' - CRENEU biomedical waste product" loading="lazy" style="max-width:100%;max-height:100%;object-fit:contain;transition:opacity .25s;"><span class="ptag">' + (p.tag || p.cat) + '</span></div>';
    } else {
      html += '<div class="pimg">' + p.icon + '<span class="ptag">' + (p.tag || p.cat) + '</span></div>';
    }
    html += '<div class="pbody">';
    html += '<h3>' + p.name + '</h3>';
    if (p.desc) html += '<p>' + p.desc + '</p>';
    if (p.feat && p.feat.length) {
      html += '<ul class="pfeat">';
      for (var f = 0; f < p.feat.length; f++) html += '<li>' + p.feat[f] + '</li>';
      html += '</ul>';
    }
    html += '<button class="badd" onclick="enquireProduct(' + p.id + ')">Enquire Now</button>';
    html += '</div></div>';
  }
  el.innerHTML = html;
  startFamSlider();
  startC11Slider();
  startC600Slider();
  startC35Slider();
  startC65Slider();
  startC125Slider();
  startC75Slider();
  startC25Slider();
  startPh25Slider();
  startPh125Slider();
  startPh75Slider();
  startAcSliders();
}

var FAM_EXTRA = ["assets/img/cr-0190.webp","assets/img/cr-0191.webp","assets/img/cr-0192.webp"];

var _famTimer = null;
function startFamSlider() {
  if (_famTimer) { clearInterval(_famTimer); _famTimer = null; }
  var im = document.getElementById('famImg');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 100 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < FAM_EXTRA.length; e++) slides.push(FAM_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 2;
  _famTimer = setInterval(function() {
    if (!document.getElementById('famImg')) { clearInterval(_famTimer); _famTimer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var C11_EXTRA = ["assets/img/cr-0193.webp","assets/img/cr-0059.webp","assets/img/cr-0194.webp"];
var _c11Timer = null;
function startC11Slider() {
  if (_c11Timer) { clearInterval(_c11Timer); _c11Timer = null; }
  var im = document.getElementById('c11Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 102 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C11_EXTRA.length; e++) slides.push(C11_EXTRA[e]);
  if (slides.length < 2) return;
      var idx = 0;
      im.src = '' + slides[idx];
  _c11Timer = setInterval(function() {
    if (!document.getElementById('c11Img')) { clearInterval(_c11Timer); _c11Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var AC_START = {130:0, 129:0, 128:0, 126:0, 125:0, 124:0, 123:2, 122:0, 325:0, 320:0, 324:1};
  var AC_SLIDES = {130:["assets/img/cr-0195.webp"],129:["assets/img/cr-0196.webp"],128:["assets/img/cr-0197.webp", "assets/img/cr-0198.webp", "assets/img/cr-0199.webp"],126:["assets/img/cr-0200.webp", "assets/img/cr-0201.webp", "assets/img/cr-0202.webp"],125:["assets/img/cr-0203.webp"],124:["assets/img/cr-0204.webp"],123:["assets/img/cr-0205.webp", "assets/img/cr-0206.webp", "assets/img/cr-0207.webp"],122:["assets/img/cr-0208.webp", "assets/img/cr-0209.webp", "assets/img/cr-0210.webp"],325:["assets/img/cr-0194.webp", "assets/img/cr-0058.webp", "assets/img/cr-0193.webp"],324:["assets/img/cr-0211.webp", "assets/img/cr-0212.webp", "assets/img/cr-0213.webp"],320:["assets/img/cr-0214.webp", "assets/img/cr-0215.webp", "assets/img/cr-0216.webp"],13:["assets/img/cr-0217.webp"],14:["assets/img/cr-0218.webp"],15:["assets/img/cr-0219.webp"]};
var _acTimers = {};
function startAcSliders() {
  Object.keys(AC_SLIDES).forEach(function(pid) {
    if (_acTimers[pid]) { clearInterval(_acTimers[pid]); _acTimers[pid] = null; }
    var im = document.getElementById('acImg' + pid);
    if (!im) return;
    var slides = [];
    for (var i = 0; i < products.length; i++) {
      if (String(products[i].id) === String(pid) && products[i].img) { slides.push(products[i].img); break; }
    }
    slides = slides.concat(AC_SLIDES[pid]);
      if (slides.length < 2) return;
      var idx = (AC_START[pid] || 0) % slides.length;
      im.src = '' + slides[idx];
    _acTimers[pid] = setInterval(function() {
      if (!document.getElementById('acImg' + pid)) { clearInterval(_acTimers[pid]); _acTimers[pid] = null; return; }
      idx = (idx + 1) % slides.length;
      im.style.opacity = '0';
      setTimeout(function() {
        im.src = '' + slides[idx];
        im.style.opacity = '1';
      }, 220);
    }, 1500);
  });
}


var C600_EXTRA = ["assets/img/cr-0220.webp","assets/img/cr-0221.webp","assets/img/cr-0222.webp"];
var _c600Timer = null;
function startC600Slider() {
  if (_c600Timer) { clearInterval(_c600Timer); _c600Timer = null; }
  var im = document.getElementById('c600Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 101 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C600_EXTRA.length; e++) slides.push(C600_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 3;
  im.src = '' + slides[idx];
  _c600Timer = setInterval(function() {
    if (!document.getElementById('c600Img')) { clearInterval(_c600Timer); _c600Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var C35_EXTRA = ["assets/img/cr-0223.webp","assets/img/cr-0224.webp","assets/img/cr-0225.webp"];
var _c35Timer = null;
function startC35Slider() {
  if (_c35Timer) { clearInterval(_c35Timer); _c35Timer = null; }
  var im = document.getElementById('c35Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 103 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C35_EXTRA.length; e++) slides.push(C35_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 2;
  im.src = '' + slides[idx];
  _c35Timer = setInterval(function() {
    if (!document.getElementById('c35Img')) { clearInterval(_c35Timer); _c35Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var C65_EXTRA = ["assets/img/cr-0226.webp","assets/img/cr-0227.webp","assets/img/cr-0228.webp"];
var _c65Timer = null;
function startC65Slider() {
  if (_c65Timer) { clearInterval(_c65Timer); _c65Timer = null; }
  var im = document.getElementById('c65Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 104 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C65_EXTRA.length; e++) slides.push(C65_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 3;
  im.src = '' + slides[idx];
  _c65Timer = setInterval(function() {
    if (!document.getElementById('c65Img')) { clearInterval(_c65Timer); _c65Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var C125_EXTRA = ["assets/img/cr-0229.webp","assets/img/cr-0230.webp","assets/img/cr-0231.webp"];
var _c125Timer = null;
function startC125Slider() {
  if (_c125Timer) { clearInterval(_c125Timer); _c125Timer = null; }
  var im = document.getElementById('c125Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 120 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C125_EXTRA.length; e++) slides.push(C125_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 1;
  im.src = '' + slides[idx];
  _c125Timer = setInterval(function() {
    if (!document.getElementById('c125Img')) { clearInterval(_c125Timer); _c125Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var _c75Timer = null;
function startC75Slider() {
  if (_c75Timer) { clearInterval(_c75Timer); _c75Timer = null; }
  var im = document.getElementById('c75Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 105 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C65_EXTRA.length; e++) slides.push(C65_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 2;
  im.src = '' + slides[idx];
  _c75Timer = setInterval(function() {
    if (!document.getElementById('c75Img')) { clearInterval(_c75Timer); _c75Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var C25_EXTRA = ["assets/img/cr-0232.webp","assets/img/cr-0233.webp","assets/img/cr-0234.webp"];
var _c25Timer = null;
function startC25Slider() {
  if (_c25Timer) { clearInterval(_c25Timer); _c25Timer = null; }
  var im = document.getElementById('c25Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 121 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C25_EXTRA.length; e++) slides.push(C25_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 0;
  im.src = '' + slides[idx];
  _c25Timer = setInterval(function() {
    if (!document.getElementById('c25Img')) { clearInterval(_c25Timer); _c25Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var _ph25Timer = null;
function startPh25Slider() {
  if (_ph25Timer) { clearInterval(_ph25Timer); _ph25Timer = null; }
  var im = document.getElementById('ph25Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 108 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C25_EXTRA.length; e++) slides.push(C25_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 0;
  im.src = '' + slides[idx];
  _ph25Timer = setInterval(function() {
    if (!document.getElementById('ph25Img')) { clearInterval(_ph25Timer); _ph25Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var _ph125Timer = null;
function startPh125Slider() {
  if (_ph125Timer) { clearInterval(_ph125Timer); _ph125Timer = null; }
  var im = document.getElementById('ph125Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 107 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C125_EXTRA.length; e++) slides.push(C125_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 1;
  im.src = '' + slides[idx];
  _ph125Timer = setInterval(function() {
    if (!document.getElementById('ph125Img')) { clearInterval(_ph125Timer); _ph125Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}


var _ph75Timer = null;
function startPh75Slider() {
  if (_ph75Timer) { clearInterval(_ph75Timer); _ph75Timer = null; }
  var im = document.getElementById('ph75Img');
  if (!im) return;
  var slides = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === 106 && products[i].img) { slides.push(products[i].img); break; }
  }
  for (var e = 0; e < C65_EXTRA.length; e++) slides.push(C65_EXTRA[e]);
  if (slides.length < 2) return;
  var idx = 3;
  _ph75Timer = setInterval(function() {
    if (!document.getElementById('ph75Img')) { clearInterval(_ph75Timer); _ph75Timer = null; return; }
    idx = (idx + 1) % slides.length;
    im.style.opacity = '0';
    setTimeout(function() {
      im.src = '' + slides[idx];
      im.style.opacity = '1';
    }, 220);
  }, 1500);
}

var CATFACTS = {"All":{"t":"About Our Product Range","i":"CR ENTERPRISE (CRENEU&reg;) supplies medical, surgical, CSSD and biomedical waste management products to government institutions, hospitals, laboratories and healthcare facilities across India.","f":["Twelve product categories spanning waste management, sterilization, wound care, disposables and rehabilitation.","Registered on the Government e-Marketplace (GeM), enabling direct procurement by public institutions.","Products manufactured and sourced in line with applicable Indian and international standards, including ISO 13485 and CE where relevant.","Serving 200+ hospital clients across 100+ cities in India."],"w":[{"t":"Our Range","r":[["12 Categories","Waste management, CSSD, wound care, disposables, implants and rehabilitation"],["Sharps &amp; Bins","Puncture-proof containers in 0.5 L to 7 L"],["CSSD","Cleaning, sterilization, indicators, autoclaves"],["Clinical","Ortho, ophthalmic, andrology, neurosurgery"]]},{"t":"Why CRENEU&reg;","r":[["GeM Registered","Direct procurement by government institutions"],["ISO 13485 &amp; 9001","Quality systems for medical devices"],["200+ Hospitals","Across more than 100 cities in India"],["CE Marked","On applicable product lines"]]},{"t":"How To Order","r":[["Browse","Filter by category from the dropdown above"],["Enquire","Tap Enquire Now on any product"],["WhatsApp","+91 98714 56056"],["Email","info@creneu.com"]]}]},"Sharp Containers":{"t":"About Sharps Containers &amp; Waste Bins","i":"Sharps containers are the first line of defence against needle-stick injury and are a mandatory part of bio-medical waste segregation in India.","f":["Under the Bio-Medical Waste Management Rules, 2016, needles, syringes, scalpel blades and lancets must be collected in translucent, puncture-proof white containers.","Containers should be sealed and replaced once they are about three-quarters full &mdash; never overfilled, decanted or reopened.","The World Health Organization has estimated that millions of health workers sustain percutaneous injuries from contaminated sharps each year; sealed containers are the primary engineering control.","Colour-coded bins (yellow, red, white and blue) correspond to the four waste streams defined in the 2016 Rules."],"w":[{"t":"Colour-Coded Streams","r":[["Yellow","Infectious waste &mdash; soiled cotton, dressings"],["Red","Contaminated plastic &mdash; IV sets, tubing"],["White","Sharps &mdash; needles, blades, lancets"],["Blue","Glassware &mdash; vials, ampoules"],["Black","Pharmaceutical &amp; cytotoxic"]]},{"t":"Sharps Sizes","r":[["0.5 L","Low volume, trolley mounted"],["1 L","Phlebotomy and sample rooms"],["2 L","Clinics and laboratories"],["3 L","Hospital wards"],["5 L","High volume departments"],["7 L","Operation theatre and ICU"]]},{"t":"Safe Handling","r":[["The 3/4 Rule","Seal and replace before it overfills"],["Never Recap","Recapping by hand is the leading injury cause"],["Point of Use","Keep the container within arm's reach"],["Records","Maintain logs as per BMW Rules, 2016"]]}]},"NeuroSurgery":{"t":"About Neurosurgical Products","i":"Neurosurgical implants and consumables are used in procedures involving the brain, spine and cerebrospinal fluid (CSF) pathways.","f":["CSF shunt systems divert excess cerebrospinal fluid from the ventricles to another body cavity, most commonly the peritoneum, in the management of hydrocephalus.","Implantable components are typically manufactured from medical-grade silicone selected for long-term biocompatibility.","Items are supplied sterile and single-use, individually packed with lot traceability.","Storage and handling should follow the manufacturer's instructions; sterile packaging must be inspected before every use."],"w":[{"t":"Shunt Components","r":[["Ventricular Catheter","Proximal drainage from the ventricle"],["Valve","Regulates CSF flow and pressure"],["Distal Catheter","Carries fluid to the peritoneum"],["Reservoir","Access point for sampling"]]},{"t":"Material &amp; Packaging","r":[["Silicone","Medical grade, for long-term implantation"],["Sterile","Single use, individually packed"],["Traceability","Lot coded on every unit"],["Inspect First","Check the sterile barrier before opening"]]},{"t":"Clinical Use","r":[["Hydrocephalus","Excess cerebrospinal fluid in the ventricles"],["Pressure Relief","Shunting reduces intracranial pressure"],["Options","Multiple lengths and pressure settings"],["IFU","Always follow manufacturer instructions"]]}]},"Cleaning Solutions":{"t":"About Cleaning &amp; Decontamination Solutions","i":"Cleaning is the essential first step of instrument reprocessing &mdash; sterilization cannot be assured on an instrument that is still soiled.","f":["Enzymatic detergents break down blood, protein, lipid and carbohydrate residues that ordinary detergents leave behind.","Organic soil left on an instrument can shield micro-organisms from the sterilant, so cleaning must always precede disinfection and sterilization.","Instruments should be kept moist after use; dried bio-burden is significantly harder to remove.","Dilution, contact time and water quality all affect performance &mdash; follow the label instructions for each product."],"w":[{"t":"Reprocessing Order","r":[["1. Clean","Remove all visible and invisible soil"],["2. Disinfect","Reduce microbial load"],["3. Inspect","Check function and cleanliness"],["4. Pack","Wrap for sterilization"],["5. Sterilize","Process and monitor the load"]]},{"t":"What Enzymes Remove","r":[["Protease","Blood and protein residue"],["Lipase","Fats and lipid deposits"],["Amylase","Starch and carbohydrate"],["Result","A clean surface the sterilant can reach"]]},{"t":"Getting It Right","r":[["Dilution","Follow the label, do not eyeball it"],["Contact Time","Shortening it defeats the product"],["Water Quality","Hardness affects performance"],["Keep Moist","Dried soil is far harder to remove"]]}]},"Sterilization":{"t":"About Sterilization Products","i":"Sterilization renders a device free from viable micro-organisms. Method selection depends on whether the device can tolerate heat and moisture.","f":["Standard moist-heat cycles are 121&deg;C for 15 minutes or 134&deg;C for 3 minutes at the sterilization plateau.","Heat-sensitive devices are processed by low-temperature methods such as ethylene oxide or hydrogen peroxide.","Every load should be monitored by physical (cycle data), chemical (indicators) and biological (spore) means.","Packaging must permit sterilant penetration while maintaining sterility until the point of use."],"w":[{"t":"Standard Cycles","r":[["121&deg;C","15 minutes at the plateau"],["134&deg;C","3 minutes at the plateau"],["134&deg;C Prion","18 minutes for prion protocols"],["Low Temp","Ethylene oxide or hydrogen peroxide"]]},{"t":"Monitor Every Load","r":[["Physical","Cycle printout and gauges"],["Chemical","Class 1 to 6 indicators"],["Biological","Spore test verifies lethality"],["Records","Retain per institutional policy"]]},{"t":"Packaging Rules","r":[["Permeable","Sterilant must be able to enter"],["Sealed","Contamination must not"],["Dry","A wet pack is considered unsterile"],["Event Related","A tear or drop breaks sterility, not time"]]}]},"Surgical Autoclaves":{"t":"About Surgical Autoclaves","i":"Autoclaves use pressurised saturated steam to sterilize instruments, linen and other heat-stable items in hospitals, clinics and laboratories.","f":["Class B pre-vacuum autoclaves use fractionated vacuum to remove air, allowing hollow, porous and wrapped loads to be processed.","Gravity-displacement autoclaves suit unwrapped solid instruments but are not appropriate for lumened devices.","A Bowie &amp; Dick test should be run daily on pre-vacuum sterilizers to confirm complete air removal.","Packs must be dry at the end of the cycle &mdash; a wet pack is considered unsterile and should be reprocessed."],"w":[{"t":"Autoclave Classes","r":[["Class B","Hollow, porous and wrapped loads"],["Class N","Unwrapped solid instruments only"],["Class S","Loads defined by the manufacturer"],["Pre-Vacuum","Fractionated vacuum removes trapped air"]]},{"t":"Routine Checks","r":[["Bowie &amp; Dick","Daily air removal test before first load"],["Vacuum Leak","Test weekly"],["Door Seal","Inspect for wear and debris"],["Water","Drain and refill as scheduled"]]},{"t":"Loading","r":[["Leave Space","Steam must circulate between packs"],["Do Not Stack","Solid trays block penetration"],["Heavy Below","Place dense items on lower shelves"],["Dry First","Unload only when packs are dry"]]}]},"Chemical Indicators":{"t":"About Chemical Indicators","i":"Chemical indicators change colour or form when exposed to defined sterilization conditions, providing immediate visual confirmation at the pack and load level.","f":["EN ISO 11140-1 classifies chemical indicators into six classes according to what they respond to.","Class 4 indicators respond to multiple critical variables; Class 5 integrating indicators respond to all critical variables; Class 6 emulating indicators are cycle-specific.","Chemical indicators confirm that a pack was exposed to the process &mdash; they do not on their own prove sterility.","Biological indicators, incubated after the cycle, verify that the process was lethal to resistant bacterial spores."],"w":[{"t":"EN ISO 11140-1 Classes","r":[["Class 1","Process indicator &mdash; processed or not"],["Class 2","Bowie &amp; Dick air removal test"],["Class 3","Single variable"],["Class 4","Multi-variable"],["Class 5","Integrating &mdash; all critical variables"],["Class 6","Emulating &mdash; cycle specific"]]},{"t":"Where They Go","r":[["External","On the pack surface"],["Internal","Inside the pack, nearest the challenge"],["Load Control","One per cycle alongside the load"],["Documentation","Peel-off label for the patient file"]]},{"t":"Know The Limits","r":[["Confirms Exposure","Not sterility on its own"],["Biological Backup","Spore tests verify lethality"],["Read At Once","Interpret immediately after the cycle"],["Storage","Keep cool, dry and away from light"]]}]},"Medical Dressings":{"t":"About Medical Dressings &amp; Bandages","i":"Dressings protect the wound bed, manage exudate and support the healing environment. Selection depends on wound type, depth and exudate level.","f":["Absorbent cotton and gauze remain the most widely used primary and secondary dressings in Indian hospitals and first-aid settings.","Paraffin-impregnated gauze is designed to be non-adherent, reducing trauma at dressing change on burns and donor sites.","Crepe and elastic bandages provide graduated support and compression; they should be applied firmly but never tight enough to impair circulation.","Plaster of Paris and synthetic casting tapes are used for immobilisation, with orthopaedic padding applied underneath to protect the skin."],"w":[{"t":"Choosing By Wound","r":[["Light Exudate","Sterile gauze swab"],["Moderate","Absorbent cotton pad"],["Heavy","Laparotomy sponge"],["Burns &amp; Donor Sites","Paraffin gauze, non-adherent"],["Support","Crepe or elastic bandage"]]},{"t":"Bandaging Rules","r":[["Firm, Not Tight","Support without impairing circulation"],["Check Distal","Colour, warmth and sensation below the wrap"],["Overlap 50%","Even pressure, no gaps"],["Secure Well","Clips, tape or a proper tuck"]]},{"t":"Casting","r":[["Padding First","Protects skin and bony prominences"],["Plaster of Paris","Economical and moulds closely"],["Synthetic Tape","Lighter and water resistant"],["Keep Dry","Moisture weakens the cast and the skin"]]}]},"Surgical Disposables":{"t":"About Surgical Disposables &amp; PPE","i":"Single-use protective wear forms a barrier between staff, patients and the surgical field, and is central to infection prevention in operating theatres and wards.","f":["Non-woven SMS (spunbond-meltblown-spunbond) fabric is widely used because it combines breathability with fluid resistance.","Surgical gowns are graded for barrier performance &mdash; the AAMI PB70 standard defines Levels 1 to 4 by increasing fluid protection.","Caps, shoe covers and sleeve covers reduce the shedding of skin scales and hair into the sterile field.","Single-use items should never be reprocessed unless the manufacturer explicitly validates them for reuse."],"w":[{"t":"AAMI PB70 Gown Levels","r":[["Level 1","Minimal fluid risk"],["Level 2","Low risk"],["Level 3","Moderate risk"],["Level 4","High risk and surgical procedures"]]},{"t":"The Full PPE Set","r":[["Cap","Contains hair and skin scales"],["Mask","Respiratory and splash barrier"],["Gown","Body barrier, graded by level"],["Shoe Covers","Limits floor contamination"],["Sleeve Covers","Protects the forearm"]]},{"t":"Fabric &amp; Fit","r":[["SMS Non-Woven","Breathable with fluid resistance"],["PE Coated","Full fluid barrier"],["Single Use","Do not reprocess unless validated"],["Fit Matters","A gap in the barrier is a route in"]]}]},"Orthopaedics":{"t":"About Bone Graft Substitutes","i":"Synthetic bone graft substitutes provide an osteoconductive scaffold into which the patient's own bone can grow, avoiding a second surgical site.","f":["Hydroxyapatite is a calcium phosphate ceramic chemically similar to the mineral phase of natural bone.","Porous, interconnected architecture allows the ingrowth of blood vessels and bone-forming cells.","Using a synthetic graft avoids the donor-site pain and morbidity associated with harvesting autograft from the iliac crest.","Supplied in blocks, granules and preformed shapes so the surgeon can match the defect geometry."],"w":[{"t":"Graft Options","r":[["Autograft","The patient's own bone"],["Allograft","Processed donor bone"],["Synthetic HA","No donor site required"],["Composite","Synthetic combined with biologics"]]},{"t":"Available Forms","r":[["Blocks","Structural and load-sharing defects"],["Granules","Filling cavities and voids"],["Burr Hole Plug","Cranial defect closure"],["Patch","Contour and surface defects"]]},{"t":"How It Works","r":[["Osteoconductive","Acts as a scaffold for bone ingrowth"],["Porous","Vessels and cells migrate inward"],["Like Bone","Chemically similar to bone mineral"],["Remodels","Gradually replaced by host bone"]]}]},"Ophthalmology":{"t":"About Ophthalmic Products","i":"Ophthalmic implants, drapes and dressings support eye surgery from the sterile field through to post-operative care.","f":["Orbital implants restore volume and support prosthetic motility following enucleation or evisceration.","Glaucoma drainage devices create an alternative outflow pathway for aqueous humour when medical therapy fails to control intraocular pressure.","Ophthalmic drapes typically include an adhesive aperture and a fluid-collection pouch to keep irrigation off the field.","Eye pads and shields protect the operated eye and prevent inadvertent rubbing during recovery."],"w":[{"t":"Orbital Sizers","r":[["14 mm","Trial sizing before implant"],["16 mm","Trial sizing before implant"],["18 mm","Trial sizing before implant"],["20 mm","Trial sizing before implant"],["Teflon","Set of four, reusable"]]},{"t":"Theatre Set-Up","r":[["Eye Drape","Adhesive aperture over the operative eye"],["Fluid Pouch","Collects irrigation away from the field"],["O-Scope Drape","Sterile cover for the microscope"],["Eye Wipe","Lint-free field preparation"]]},{"t":"Implants &amp; Aftercare","r":[["Solid Sphere","Volume replacement after enucleation"],["Perforated Sphere","Allows tissue ingrowth"],["Glaucoma Shunt","Alternative outflow for aqueous humour"],["Eye Pad &amp; Shield","Cushions and prevents rubbing"]]}]},"Andrology":{"t":"About Andrology Products","i":"Andrology implants and instruments are used in reconstructive and prosthetic urological surgery.","f":["Penile prostheses are an established option for erectile dysfunction that has not responded to medical therapy.","Semi-rigid (malleable) implants are simpler to place and operate; inflatable devices offer a more natural flaccid and erect state.","Testicular prostheses restore scrotal contour and symmetry after orchiectomy or in congenital absence.","Reusable stainless-steel sizers allow intra-operative measurement and can be sterilized between cases."],"w":[{"t":"Implant Types","r":[["Semi-Rigid","Malleable, simpler to place and operate"],["Inflatable","More natural flaccid and erect state"],["Without Hinge","Uniform column strength"],["Sizers","Intra-operative measurement"]]},{"t":"Prosthesis Sizes","r":[["XS","Extra small"],["S","Small"],["M","Medium"],["L","Large"],["XL","Extra large"]]},{"t":"Clinical Use","r":[["Erectile Dysfunction","When medical therapy has not worked"],["Post-Orchiectomy","Restores scrotal contour and symmetry"],["Reusable Sizers","Stainless steel, sterilizable between cases"],["Privacy","Packed and dispatched discreetly"]]}]},"Rehabilitation":{"t":"About Orthopaedic Supports &amp; Braces","i":"Supports, splints and braces immobilise, offload or stabilise a joint during healing and rehabilitation.","f":["Soft cervical collars offer comfort and a reminder to limit movement; rigid collars provide significantly greater restriction of neck motion.","A wrist cock-up splint holds the wrist in slight extension, a position commonly used in carpal tunnel syndrome and wrist strain.","Shoulder immobilisers and abduction braces hold the arm in a prescribed position after injury or surgery.","Correct sizing matters &mdash; a support that is too loose gives no protection, while one that is too tight can restrict circulation."],"w":[{"t":"Cervical Support Levels","r":[["Soft Collar","Comfort and a reminder to limit motion"],["Spondylosis Collar","Moderate restriction"],["Four Post Brace","High restriction"],["SOMI Brace","Maximum restriction"],["Ambulance Collar","Emergency immobilisation"]]},{"t":"Upper Limb Supports","r":[["Wrist Cock-Up","Holds the wrist in slight extension"],["Thumb Spica","Immobilises the thumb column"],["Forearm Brace","Fracture and post-cast support"],["Tennis Elbow","Offloads the common extensor origin"],["Shoulder Immobiliser","Holds the arm across the body"]]},{"t":"Fitting Guide","r":[["Measure First","Size from the limb, not from guesswork"],["Two-Finger Rule","Snug, with room for two fingers"],["Check Skin Daily","Look for redness and pressure marks"],["Wear Time","Follow the prescribed schedule"]]}]}};

function gridCols(el) {
  var t = window.getComputedStyle(el).getPropertyValue('grid-template-columns');
  if (!t || t === 'none') return 1;
  return t.split(' ').filter(function(x){ return x.trim() !== ''; }).length;
}

function fillGridGaps() {
  var el = document.getElementById('prodGrid');
  if (!el) return;
  var olds = el.getElementsByClassName('fcard');
  while (olds.length) olds[0].parentNode.removeChild(olds[0]);

  if (activeCat === 'Surgical Autoclaves') {
    el.style.gridTemplateColumns = 'repeat(auto-fit,minmax(260px,340px))';
    el.style.justifyContent = 'center';
    return;
  }
  el.style.gridTemplateColumns = '';
  el.style.justifyContent = '';

  if (activeCat === 'All' || activeCat === 'Nitrile & Latex Gloves') {
    var cardsG = el.getElementsByClassName('pcard').length;
    if (!cardsG) return;
    var colsG = gridCols(el);
    if (colsG < 2) return;
    var gapsG = (colsG - (cardsG % colsG)) % colsG;
    if (!gapsG) return;
    el.insertAdjacentHTML('beforeend', '<div class="fcard" style="grid-column:span ' + gapsG + ';padding:0;overflow:hidden;background:#fff;align-self:start;"><img src="assets/img/cr-0235.webp" alt="CRENEU Medical Gloves - types, specifications, features and size guide" loading="lazy" style="width:100%;height:auto;display:block;"></div>');
    return;
  }
  if (activeCat === 'Sharp Containers') return;
  var d = CATFACTS[activeCat] || CATFACTS['All'];
  if (!d || !d.w || !d.w.length) return;

  var cards = el.getElementsByClassName('pcard').length;
  if (!cards) return;
  var cols = gridCols(el);
  if (cols < 2) return;
  var gaps = (cols - (cards % cols)) % cols;
  if (!gaps) return;

  var h = '';
  if (gaps === 1) {
    h += '<div class="fcard fc1" style="height:auto;align-self:start;">';
    h += '<h4>' + d.t + '</h4>';
    h += '<p class="fcard-intro">' + d.i + '</p>';
    for (var t = 0; t < d.w.length; t++) {
      var wt = d.w[t];
      h += '<h5>' + wt.t + '</h5><div class="fcard-rows">';
      for (var q = 0; q < wt.r.length; q++) {
        h += '<div class="fcard-row"><b>' + wt.r[q][0] + '</b><span>' + wt.r[q][1] + '</span></div>';
      }
      h += '</div>';
      if (d.f[t]) h += '<p class="fcard-fact">' + d.f[t] + '</p>';
    }
    for (var x = d.w.length; x < d.f.length; x++) {
      h += '<p class="fcard-fact">' + d.f[x] + '</p>';
    }
    h += '</div>';
    el.insertAdjacentHTML('beforeend', h);
    fitFcards(el);
    return;
  }
  for (var i = 0; i < gaps && i < d.w.length; i++) {
    var w = d.w[i];
    h += '<div class="fcard fc' + ((i % 4) + 1) + '" style="height:auto;align-self:start;">';
    h += '<h4>' + (i === 0 ? d.t : w.t) + '</h4>';
    if (i === 0) h += '<p class="fcard-intro">' + d.i + '</p><h5>' + w.t + '</h5>';
    h += '<div class="fcard-rows">';
    for (var r = 0; r < w.r.length; r++) {
      h += '<div class="fcard-row"><b>' + w.r[r][0] + '</b><span>' + w.r[r][1] + '</span></div>';
    }
    h += '</div>';
    if (d.f[i]) h += '<p class="fcard-fact">' + d.f[i] + '</p>';
    h += '</div>';
  }
  el.insertAdjacentHTML('beforeend', h);
  fitFcards(el);
}

function fitFcards(el) {
  var all = el.getElementsByClassName('fcard');
  var fcs = [];
  for (var i = 0; i < all.length; i++) {
    if (!all[i].getElementsByTagName('img').length) fcs.push(all[i]);
  }
  if (!fcs.length) return;

  // collapse fillers first so the row height is set by the product cards alone
  for (var c = 0; c < fcs.length; c++) {
    fcs[c].style.height = '0px';
    fcs[c].style.overflow = 'hidden';
  }
  var pcs = el.getElementsByClassName('pcard');
  var rowH = 0;
  for (var p = 0; p < pcs.length; p++) {
    if (pcs[p].offsetHeight > rowH) rowH = pcs[p].offsetHeight;
  }
  if (rowH < 260) {
    // layout not ready — restore and retry shortly
    for (var u = 0; u < fcs.length; u++) { fcs[u].style.height = ''; fcs[u].style.overflow = ''; }
    clearTimeout(window._fcRetry);
    window._fcRetry = setTimeout(fillGridGaps, 250);
    return;
  }
  for (var f2 = 0; f2 < fcs.length; f2++) {
    var f = fcs[f2];
    f.style.alignSelf = 'stretch';
    f.style.height = rowH + 'px';
    var guard = 0;
    while (f.scrollHeight > f.clientHeight + 2 && f.children.length > 2 && guard < 60) {
      f.removeChild(f.lastElementChild);
      guard++;
    }
    if (f.clientHeight - f.scrollHeight > 8) f.style.justifyContent = 'space-between';
  }
}

window.addEventListener('load', function() { setTimeout(fillGridGaps, 60); });
var _fgTimer = null;
window.addEventListener('resize', function() {
  clearTimeout(_fgTimer);
  _fgTimer = setTimeout(fillGridGaps, 180);
});

function setCat(c) {
  activeCat = c;
  var sel = document.getElementById('catSelect');
  if (sel && sel.value !== c) sel.value = c;
  buildCats(); buildProds(); updateProdCount(); fillGridGaps();
}

function closeDropdowns() {
  var dds = document.getElementsByClassName('navdd');
  for (var i = 0; i < dds.length; i++) {
    dds[i].className = 'navdd dd-closed';
    (function(el){
      var clear = function(){ el.className = 'navdd'; el.removeEventListener('mouseleave', clear); };
      el.addEventListener('mouseleave', clear);
    })(dds[i]);
  }
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  var mob = document.getElementById('mobNav');
  if (mob) mob.className = 'mob-nav';
}

function goCat(c) {
  closeDropdowns();
  if (!document.getElementById('prodGrid')) {
    window.location.href = 'products.html?cat=' + encodeURIComponent(c);
    return;
  }
  setCat(c);
  setTimeout(function() {
    var target = document.getElementById('prodCount') || document.getElementById('prodGrid');
    if (!target) return;
    var hdr = document.querySelector('.hdr');
    var offset = (hdr ? hdr.offsetHeight : 90) + 24;
    var y = target.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - offset;
    window.scrollTo({ top: y < 0 ? 0 : y, behavior: 'smooth' });
  }, 60);
}

function enquireProduct(id) {
  var p = null;
  for (var i = 0; i < products.length; i++) { if (products[i].id === id) { p = products[i]; break; } }
  if (!p) return;
  var msg = 'Hello CR ENTERPRISE,\n\nI would like to enquire about:\n' + p.name + ' (' + p.cat + ')\n\nPlease share details and pricing. Thank you.';
  window.open('https://wa.me/919871456056?text=' + encodeURIComponent(msg), '_blank');
}

function updateProdCount() {
  var el = document.getElementById('prodCount');
  if (!el) return;
  var n = activeCat === 'All' ? products.length : products.filter(function(p){ return p.cat === activeCat; }).length;
  el.textContent = 'Showing ' + n + ' product' + (n !== 1 ? 's' : '') + (activeCat === 'All' ? '' : ' in ' + activeCat);
}

// ===== CONTACT FORM =====
function submitContact() {
  var n = document.getElementById('cf-name').value.trim();
  var p = document.getElementById('cf-phone').value.trim();
  if (!n || !p) { toast('Please fill name and phone'); return; }
  document.getElementById('cformWrap').style.display = 'none';
  document.getElementById('cSucc').style.display = 'block';
}

// ===== CERTS =====
var certData = {
  gem: {title:'GeM Registration Certificate',icon:'🏛️',name:'Government e-Marketplace Registration',issuer:'Government of India — GeM Portal',id:'DD44200001313162',status:'Active',validity:'Ongoing',desc:'CR ENTERPRISE is a registered seller on the Government e-Marketplace (GeM), authorised to supply medical and surgical products to all government institutions across India.',link:'https://gem.gov.in'},
  msme: {title:'MSME / Udyam Registration',icon:'🏭',name:'Udyam Registration (MSME)',issuer:'Ministry of MSME, Government of India',id:'On Request',status:'Active',validity:'Lifetime',desc:'Registered Micro, Small and Medium Enterprise qualifying for government schemes, credit benefits and preferential procurement.',link:null},
  gst: {title:'GST Registration Certificate',icon:'📋',name:'Goods and Services Tax Registration',issuer:'Government of India — GSTN',id:'On Request',status:'Active',validity:'Ongoing',desc:'Valid GSTIN ensuring transparent and compliant tax practices. All invoices carry GSTIN for input tax credit eligibility.',link:null},
  iso: {title:'ISO Certification',icon:'🏅',name:'ISO Quality Management Certification',issuer:'International Organization for Standardization',id:'On Request',status:'Active',validity:'Annual',desc:'Products manufactured to international ISO quality management standards ensuring consistency, safety and reliability.',link:null},
  cdsco: {title:'CDSCO Compliance Certificate',icon:'⚕️',name:'CDSCO Regulatory Compliance',issuer:'Central Drugs Standard Control Organisation',id:'On Request',status:'Compliant',validity:'Ongoing',desc:'All medical devices comply with CDSCO requirements under Medical Devices Rules 2017.',link:'https://cdsco.gov.in'},
  trade: {title:'Trade Registration',icon:'🌐',name:'Trade and Business Registration',issuer:'Government of Delhi / MCA',id:'On Request',status:'Active',validity:'Annual',desc:'Valid trade and business registrations as manufacturer, importer, exporter and distributor under DGFT norms.',link:null}
};

function openCert(id) {
  var c = certData[id];
  if (!c) return;
  document.getElementById('certTitle').textContent = c.title;
  var body = '';
  body += '<div class="cph"><div>' + c.icon + '</div><h4>' + c.name + '</h4><p>Certificate image will appear once uploaded. Contact us to request a copy.</p></div>';
  body += '<div class="cmeta">';
  body += '<div class="cmi"><span>Issuing Authority</span><strong>' + c.issuer + '</strong></div>';
  body += '<div class="cmi"><span>Certificate ID</span><strong>' + c.id + '</strong></div>';
  body += '<div class="cmi"><span>Status</span><strong style="color:#00A896">✅ ' + c.status + '</strong></div>';
  body += '<div class="cmi"><span>Validity</span><strong>' + c.validity + '</strong></div>';
  body += '</div>';
  body += '<p class="cdesc">' + c.desc + '</p>';
  body += '<div class="cbtns">';
  if (c.link) body += '<a href="' + c.link + '" target="_blank" class="btn-p" style="font-size:.83rem;padding:9px 18px">🔗 Official Portal</a>';
  body += '<a href="mailto:info@creneu.com?subject=Certificate Request" class="btn-p" style="font-size:.83rem;padding:9px 18px;background:#0B1D3A">📧 Request Copy</a>';
  body += '</div>';
  document.getElementById('certBody').innerHTML = body;
  document.getElementById('certLb').className = 'clb open';
  document.body.style.overflow = 'hidden';
}
function closeCert() {
  document.getElementById('certLb').className = 'clb';
  document.body.style.overflow = '';
}
var certLbEl = document.getElementById('certLb');
if (certLbEl) certLbEl.addEventListener('click', function(e) {
  if (e.target === this) closeCert();
});

// ===== FAQ =====

// ===== LANG =====
function changeLang(l) {
  var names = {en:'English',hi:'Hindi',fr:'French',nl:'Dutch',pt:'Portuguese',mg:'Malagasy',it:'Italian'};
  if (l !== 'en') toast(names[l] + ' version coming soon!');
}

// ===== TOAST =====
function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show';
  setTimeout(function() { t.className = 'toast'; }, 3000);
}

// ===== HOME PRODUCT MARQUEE =====
function buildMarquee() {
  var el = document.getElementById('pmqTrack');
  if (!el) return;
  var byCat = {}, order = [];
  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    if (!p.img) continue;
    if (!byCat[p.cat]) { byCat[p.cat] = []; order.push(p.cat); }
    byCat[p.cat].push(p);
  }
  var LEAD_CAT = 'Sharp Containers';
  var LEAD_TAGS = ['Sharp Container', 'Dustbins', 'Trolley'];
  var MAX = 30;
  var picked = [], used = {};

  // lead with sharps containers, then dustbins, then trolleys
  var lead = byCat[LEAD_CAT] || [];
  for (var t = 0; t < LEAD_TAGS.length; t++) {
    for (var l = 0; l < lead.length; l++) {
      if (lead[l].tag === LEAD_TAGS[t]) { picked.push(lead[l]); used[lead[l].id] = 1; }
    }
  }

  // then round-robin across every category, skipping what is already shown
  var round = 0, added = true;
  while (added && picked.length < MAX) {
    added = false;
    for (var c = 0; c < order.length; c++) {
      var list = byCat[order[c]];
      var n = 0;
      for (var x = 0; x < list.length; x++) {
        if (used[list[x].id]) continue;
        if (n === round) { picked.push(list[x]); used[list[x].id] = 1; added = true; break; }
        n++;
      }
      if (picked.length >= MAX) break;
    }
    round++;
  }
  if (!picked.length) return;

  var h = '';
  for (var k = 0; k < picked.length; k++) {
    var q = picked[k];
    h += '<div class="pmq" onclick="goCat(\'' + q.cat + '\')" title="' + q.name + '">' +
         '<div class="pmq-img"><img src="' + q.img + '" alt="' + q.name + ' - CRENEU medical and surgical products" loading="lazy"></div>' +
         '<div class="pmq-b"><h4>' + q.name + '</h4><span>' + (q.tag || q.cat) + '</span></div></div>';
  }
  el.innerHTML = h + h;                       // duplicated for a seamless loop
  el.style.animationDuration = (picked.length * 1.35) + 's';
}

// ===== ANIMATED STAT COUNTERS =====
function initCounters() {
  var els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  var run = function(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var start = null, dur = 1300;
    var step = function(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      p = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * p) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (!('IntersectionObserver' in window)) {
    for (var i = 0; i < els.length; i++) run(els[i]);
    return;
  }
  var io = new IntersectionObserver(function(entries) {
    for (var j = 0; j < entries.length; j++) {
      if (entries[j].isIntersecting) { run(entries[j].target); io.unobserve(entries[j].target); }
    }
  }, { threshold: 0.4 });
  for (var k = 0; k < els.length; k++) io.observe(els[k]);
}

// ===== INIT =====
initCounters();
buildMarquee();
// showPage('home') removed - each page is its own document now



function toggleLang(e) {
  e.stopPropagation();
  var opts = document.getElementById('langOptions');
  if(opts) opts.classList.toggle('open');
}
function selectLang(code, flag, name) {
  var lf = document.getElementById('langFlag');
  var ln = document.getElementById('langName');
  var lo = document.getElementById('langOptions');
  if(lf) lf.src = flag;
  if(ln) ln.textContent = name;
  if(lo) lo.classList.remove('open');
  changeLang(code);
}
window.addEventListener('click', function() {
  var opts = document.getElementById('langOptions');
  if(opts) opts.classList.remove('open');
});

// ===== HOME HERO SLIDER =====
var hIdx=0, hTimer=null;
function heroRender(){
  var s=document.querySelectorAll('#heroSlider .hslide');
  var d=document.querySelectorAll('#heroDots button');
  for(var i=0;i<s.length;i++) s[i].className = (i===hIdx)?'hslide on':'hslide';
  for(var j=0;j<d.length;j++) d[j].className = (j===hIdx)?'on':'';
}
function heroGo(n){ var s=document.querySelectorAll('#heroSlider .hslide'); if(!s.length) return; hIdx=(n+s.length)%s.length; heroRender(); heroPlay(); }
function heroStep(dir){ heroGo(hIdx+dir); }
function heroPlay(){ heroPause(); hTimer=setInterval(heroAuto,3000); }
function heroAuto(){ var s=document.querySelectorAll('#heroSlider .hslide'); if(!s.length) return; hIdx=(hIdx+1)%s.length; heroRender(); }
function heroPause(){ if(hTimer){ clearInterval(hTimer); hTimer=null; } }
if(document.getElementById('heroSlider')) heroPlay();
(function(){
  var el=document.getElementById('heroSlider'); if(!el) return;
  var x0=null,y0=null;
  el.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;y0=e.touches[0].clientY;heroPause();},{passive:true});
  el.addEventListener('touchend',function(e){
    if(x0===null){heroPlay();return;}
    var dx=e.changedTouches[0].clientX-x0, dy=e.changedTouches[0].clientY-y0;
    if(Math.abs(dx)>40 && Math.abs(dx)>Math.abs(dy)) heroStep(dx<0?1:-1); else heroPlay();
    x0=null;y0=null;
  },{passive:true});
  el.addEventListener('touchcancel',function(){x0=null;heroPlay();},{passive:true});
})();

// ===== TESTIMONIALS MARQUEE =====
var TESTIMONIALS = [{"t": "We have been ordering sharps containers from Creneu for almost a year now. Excellent quality and very durable. Delivery is always on time. Highly recommended.", "e": "👍", "m": "10:18 AM"}, {"t": "Thank you for the quick dispatch. The biomedical waste bins received today are exactly as expected. Packaging was also excellent.", "e": "😊", "m": "2:43 PM"}, {"t": "We compared several suppliers before choosing Creneu. Their product quality and pricing are much better than many brands in the market.", "e": "👌", "m": "11:12 AM"}, {"t": "Received the sharps containers today. Very sturdy plastic and the locking mechanism is excellent. Our staff liked the design.", "e": "👍", "m": "5:07 PM"}, {"t": "Really impressed with the prompt customer support. Every query was answered quickly and the products were delivered before schedule.", "e": "🙏", "m": "8:55 AM"}, {"t": "We regularly purchase biomedical waste products from Creneu for our clients. Never faced any quality issues. Professional company.", "e": "✅", "m": "1:16 PM"}, {"t": "The quality of the waste bins and sharps containers is excellent. IS-compliant products and reliable supply every time.", "e": "👏", "m": "4:39 PM"}, {"t": "Ordered multiple sizes of sharps containers and color-coded bins. Everything arrived in perfect condition. Will definitely reorder.", "e": "😊", "m": "9:24 AM"}, {"t": "Excellent experience working with the Creneu team. Smooth ordering process, competitive pricing and genuine products.", "e": "👍", "m": "3:52 PM"}, {"t": "We&rsquo;ve shifted all our biomedical waste management purchases to Creneu. Reliable quality, timely delivery and responsive service.", "e": "🙌", "m": "6:11 PM"}, {"t": "We have been using Creneu biomedical waste products for the past 8 months. Quality is excellent and 100% compliant with the standards. Very happy with their service.", "e": "✅", "m": "10:22 AM"}, {"t": "The color coded bins and sharps containers we ordered are very good in quality. Strong, safe and exactly what we needed. Delivery was smooth and fast.", "e": "👍", "m": "2:15 PM"}, {"t": "Creneu is now our regular supplier for all biomedical waste management products. Their team is professional and products are top notch.", "e": "🙏", "m": "11:05 AM"}, {"t": "Very satisfied with the service and product quality. The sharps containers are leak proof and puncture resistant. Highly recommended!", "e": "😊", "m": "4:48 PM"}, {"t": "Good range of products and competitive pricing. The team guided us well in choosing the right product for our hospital needs.", "e": "👌", "m": "9:30 AM"}, {"t": "We received our order within the committed time. Packaging was secure and products were in perfect condition. Great experience!", "e": "👏", "m": "1:27 PM"}, {"t": "The biohazard bags and sharps containers are very durable. We have not faced a single issue in usage. Will definitely continue our purchases.", "e": "👍", "m": "3:12 PM"}, {"t": "Excellent customer support! They quickly resolved my queries and helped me with urgent delivery. Truly appreciated.", "e": "❤️", "m": "10:40 AM"}, {"t": "Creneu provides high quality biomedical waste products that are reliable and long lasting. Perfect partner for our healthcare facility.", "e": "✅", "m": "5:25 PM"}, {"t": "We ordered a bulk quantity of waste bins and sharps containers. The build quality is amazing. Delivery across India is a big plus point.", "e": "🚀", "m": "8:16 AM"}, {"t": "We have been purchasing biomedical waste management products from Creneu for over a year now. The quality is consistent and reliable. Very happy with their service and support.", "e": "👍", "m": "9:41 AM"}, {"t": "The waste segregation bins and sharps containers are of excellent quality. Exactly what we needed for our hospital. Delivery was on time and the team was very cooperative. Thank you!", "e": "", "m": "12:22 PM"}, {"t": "Creneu&rsquo;s bio medical waste products are sturdy, safe and well designed. We especially like the color coding and labeling. Makes our workflow much easier. Great products!", "e": "👌", "m": "4:05 PM"}, {"t": "Very professional team and smooth ordering experience. We received our order in perfect condition. The quality of sharps containers is top class. Will definitely order again.", "e": "😊", "m": "6:33 PM"}, {"t": "We were looking for a trustworthy supplier and Creneu exceeded our expectations. High quality products, competitive prices and excellent customer service.", "e": "👍", "m": "10:18 AM"}, {"t": "Our hospital has been using Creneu sharps containers and waste bags regularly. No leakage, no issues. Comply with all standards. Highly recommended supplier!", "e": "✅", "m": "11:14 AM"}, {"t": "The biohazard bags are strong and of very good quality. The printing and coding is clear and long lasting. Perfect for our hospital needs. Thank you Creneu team!", "e": "🙏", "m": "1:36 PM"}, {"t": "Excellent experience from start to finish. They helped us choose the right products for our facility. Delivery was fast and everything was well packed. Great job!", "e": "👏", "m": "3:48 PM"}, {"t": "We appreciate the consistent quality and punctual deliveries. Creneu has become our preferred supplier for all biomedical waste management products.", "e": "👍", "m": "5:16 PM"}, {"t": "From order placement to delivery, everything was seamless. The containers are durable and safe to use. Our staff is very satisfied with the quality. Thank you!", "e": "😊", "m": "8:29 PM"}];
(function(){
  var tr=document.getElementById('tsqTrack');
  if(!tr) return;
  function card(d){
    return '<div class="tcard">'
      + '<div class="tc-top"><div class="tc-av">\u2022</div>'
      + '<div><div class="tc-nm">Verified Buyer</div><div class="tc-on">online</div></div>'
      + '<div class="tc-ic">\u2022\u2022\u2022</div></div>'
      + '<div class="tc-body"><div class="tc-bub">' + d.t + (d.e ? ' ' + d.e : '')
      + '<div class="tc-meta"><span>' + d.m + '</span><span class="tc-tick">\u2713\u2713</span></div></div></div>'
      + '<div class="tc-foot"><div class="tc-inp">Type a message</div><div class="tc-mic"></div></div>'
      + '</div>';
  }
  var h='';
  for(var i=0;i<TESTIMONIALS.length;i++) h+=card(TESTIMONIALS[i]);
  tr.innerHTML = h + h;          // duplicated for a seamless infinite loop
})();

// ===== OUR CLIENTS (dynamic grid, search, sort, ticker) =====
var CLIENTS = [{"n": "All India Institute of Medical Sciences", "i": "assets/img/cr-0236.webp"}, {"n": "Sanjay Gandhi Hospital", "i": "assets/img/cr-0237.webp"}, {"n": "Army Hospital (Research & Referral)", "i": "assets/img/cr-0238.webp"}, {"n": "Sir Ganga Ram Hospital", "i": "assets/img/cr-0239.webp"}, {"n": "Sardar Vallabhbhai Patel Hospital", "i": "assets/img/cr-0240.webp"}, {"n": "Centre for Sight", "i": "assets/img/cr-0241.webp"}, {"n": "Fortis Healthcare", "i": "assets/img/cr-0242.webp"}, {"n": "GB Pant Hospital", "i": "assets/img/cr-0243.webp"}, {"n": "Gujarat Cancer & Research Institute", "i": "assets/img/cr-0244.webp"}, {"n": "Universal Hospitals", "i": "assets/img/cr-0245.webp"}, {"n": "Deen Dayal Upadhyaya Hospital", "i": "assets/img/cr-0246.webp"}, {"n": "Geetanjali Hospital", "i": "assets/img/cr-0247.webp"}, {"n": "Khetarpal Hospital", "i": "assets/img/cr-0248.webp"}, {"n": "PGI Chandigarh", "i": "assets/img/cr-0249.webp"}, {"n": "BLK Super Speciality Hospital", "i": "assets/img/cr-0250.webp"}, {"n": "Bembde Hospitals", "i": "assets/img/cr-0251.webp"}, {"n": "Global Eye Hospital", "i": "assets/img/cr-0252.webp"}, {"n": "Safdarjung Hospital", "i": "assets/img/cr-0253.webp"}, {"n": "Civil Hospital Rajkot", "i": "assets/img/cr-0254.webp"}, {"n": "Venkateshwara Medical College", "i": "assets/img/cr-0255.webp"}, {"n": "GCS Medical College Ahmedabad", "i": "assets/img/cr-0256.webp"}, {"n": "Max Super Speciality Hospital", "i": "assets/img/cr-0257.webp"}];

function clRender(){
  var g=document.getElementById('clGrid'); if(!g) return;
  var qEl=document.getElementById('clSearch'), sEl=document.getElementById('clSort');
  var q=(qEl?qEl.value:'').toLowerCase().trim();
  var mode=sEl?sEl.value:'def';
  var list=[];
  for(var i=0;i<CLIENTS.length;i++){
    if(!q || CLIENTS[i].n.toLowerCase().indexOf(q)>-1) list.push(CLIENTS[i]);
  }
  if(mode==='az') list.sort(function(a,b){return a.n.localeCompare(b.n);});
  if(mode==='za') list.sort(function(a,b){return b.n.localeCompare(a.n);});
  var h='';
  for(var k=0;k<list.length;k++){
    h+='<div class="cl-card" style="animation-delay:'+Math.min(k*35,600)+'ms">'
      +'<div class="ph"><img src="'+list[k].i+'" alt="'+list[k].n+'" loading="lazy"></div>'
      +'<p>'+list[k].n+'</p></div>';
  }
  if(!list.length) h='<div class="cl-none">No institutions match that search.</div>';
  g.innerHTML=h;
  var c=document.getElementById('clCount');
  if(c) c.textContent='Showing '+list.length+' of '+CLIENTS.length;
}
function clTicker(){
  var t=document.getElementById('clTick'); if(!t) return;
  var h='';
  for(var i=0;i<CLIENTS.length;i++) h+='<img src="'+CLIENTS[i].i+'" alt="'+CLIENTS[i].n+'" loading="lazy">';
  t.innerHTML=h+h;
}
clRender(); clTicker();

// ===== MARKET AREA TABS =====
var MKT = {"delhi": {"h": "Delhi", "body": "\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Manufacturer in Delhi &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Manufacturing safe, compliant sharps disposal solutions from our Delhi facility.</p>\n        <p>CR ENTERPRISE is a leading Sharp Container Manufacturer in Delhi, producing high-quality biomedical sharp disposal containers engineered for safety, durability and compliance. Healthcare facilities across Delhi NCR &mdash; including hospitals, clinics, laboratories, diagnostic centres, nursing homes, dental clinics, blood banks and vaccination units &mdash; rely on our sharp containers for needle disposal, syringe disposal, lancet disposal, scalpel disposal and biomedical waste segregation.</p>\n        <p>We manufacture puncture-proof, leak-proof, autoclavable and biohazard-safe sharp containers using virgin polymer, ensuring maximum hygiene and long-term performance. All products strictly follow WHO standards, CPCB guidelines and Biomedical Waste Management Rules, making CR ENTERPRISE one of Delhi&rsquo;s most trusted manufacturers.</p>\n        <p>Our sharp container range includes the following sizes, suitable for OPD, ICU, emergency care, surgical units, pathology labs, vaccination centres and critical care departments:</p>\n        <div class=\"mkt-sizes\"><span>600 ML</span><span>1.1 L</span><span>3.5 L</span><span>6.5 L</span><span>7.5 L</span><span>12.5 L</span><span>25 L</span></div>\n        <p>With advanced moulding technology and rigorous quality checks, CR ENTERPRISE ensures safe sharps disposal, infection control and workplace safety.</p>\n        <div class=\"mkt-shots\" id=\"mktShots\"></div>\n      </div>\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Supplier in Delhi &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Fast, reliable supply across South, West, East, North and Central Delhi.</p>\n        <p>CR ENTERPRISE is a trusted Sharp Container Supplier in Delhi, supplying premium biomedical sharp disposal containers to hospitals, clinics, diagnostic centres, pathology labs, nursing homes, dental clinics, blood banks, pharmacies, vaccination centres and government healthcare units. Our strong supply network ensures fast, reliable delivery across Delhi NCR, including South Delhi, West Delhi, East Delhi, North Delhi and Central Delhi.</p>\n        <p>We supply puncture-resistant sharp containers, biohazard disposal boxes, autoclavable containers and medical waste bins designed for needles, syringes, blades, scalpels, lancets and other sharp biomedical waste. Every container complies with WHO guidelines, CPCB norms and Biomedical Waste Management Rules, ensuring maximum infection control and safe waste handling.</p>\n        <p>Our sharp container variants &mdash; 600 ML, 1.1 L, 3.5 L, 6.5 L, 7.5 L, 12.5 L and 25 L &mdash; are suitable for OPD, ICU, emergency care, surgical units, dental clinics, blood banks, vaccination drives, mobile medical camps and critical care departments. With bulk stock availability, consistent quality and reliable supply capability, CR ENTERPRISE supports healthcare institutions with safe, hygienic and compliant biomedical waste disposal solutions.</p>\n        <div class=\"mkt-cta\">\n          <button class=\"btn-p\" onclick=\"goCat('Sharp Containers')\">View Sharp Containers &rarr;</button>\n          <button class=\"btn-s\" onclick=\"showPage('contact')\">Request a Quote</button>\n        </div>\n      </div>"}, "mumbai": {"h": "Mumbai", "body": "\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Manufacturer in Mumbai &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Serving Mumbai, Navi Mumbai, Thane and the wider MMR region.</p>\n        <p>CR ENTERPRISE is a trusted Sharp Container Manufacturer in Mumbai, delivering high-quality biomedical sharp disposal containers engineered for safety, durability and compliance. Healthcare facilities across Mumbai, Navi Mumbai, Thane, Kalyan, Vasai-Virar and the entire MMR region rely on our sharp containers for needle disposal, syringe disposal, lancet disposal, scalpel disposal and biomedical waste segregation.</p>\n        <p>We manufacture puncture-proof, leak-proof, autoclavable and biohazard-safe sharp containers using virgin polymer, ensuring maximum hygiene and long-term performance. All products strictly follow WHO standards, CPCB guidelines and Biomedical Waste Management Rules, making CR ENTERPRISE one of Mumbai&rsquo;s most reliable manufacturers.</p>\n        <p>Our sharp container range includes the following sizes, suitable for OPD, ICU, emergency care, surgical units, pathology labs, vaccination centres, dental clinics and critical care departments:</p>\n        <div class=\"mkt-sizes\"><span>600 ML</span><span>1.1 L</span><span>3.5 L</span><span>6.5 L</span><span>7.5 L</span><span>12.5 L</span><span>25 L</span></div>\n        <p>With advanced moulding technology and rigorous quality checks, CR ENTERPRISE ensures safe sharps disposal, infection control and workplace safety.</p>\n        <div class=\"mkt-shots\" id=\"mktShots\"></div>\n      </div>\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Supplier in Mumbai &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Bulk stock and reliable delivery across Mumbai, Thane and Maharashtra.</p>\n        <p>CR ENTERPRISE is a leading Sharp Container Supplier in Mumbai, supplying premium biomedical sharp disposal containers to hospitals, clinics, diagnostic centres, pathology labs, nursing homes, dental clinics, blood banks, pharmacies, vaccination centres and government healthcare units. Our supply network covers Mumbai, Navi Mumbai, Thane, Mira-Bhayandar, Kalyan-Dombivli, Vasai-Virar and all major healthcare zones in Maharashtra.</p>\n        <p>We supply puncture-resistant sharp containers, biohazard disposal boxes, autoclavable containers and medical waste bins designed for needles, syringes, blades, scalpels, lancets and other sharp biomedical waste. Every container complies with WHO guidelines, CPCB norms and Biomedical Waste Management Rules, ensuring maximum infection control and safe waste handling.</p>\n        <p>Our sharp container variants &mdash; 600 ML, 1.1 L, 3.5 L, 6.5 L, 7.5 L, 12.5 L and 25 L &mdash; are suitable for OPD, ICU, emergency care, surgical units, dental clinics, blood banks, vaccination drives, mobile medical camps and critical care departments. With bulk stock availability, consistent quality and reliable supply capability, CR ENTERPRISE supports healthcare institutions with safe, hygienic and compliant biomedical waste disposal solutions.</p>\n        <div class=\"mkt-cta\">\n          <button class=\"btn-p\" onclick=\"goCat('Sharp Containers')\">View Sharp Containers &rarr;</button>\n          <button class=\"btn-s\" onclick=\"showPage('contact')\">Request a Quote</button>\n        </div>\n      </div>"}, "gujarat": {"h": "Gujarat", "body": "\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Manufacturer in Gujarat &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Serving Ahmedabad, Surat, Vadodara, Rajkot and across Gujarat.</p>\n        <p>CR ENTERPRISE is a trusted Sharp Container Manufacturer in Gujarat, producing high-quality biomedical sharp disposal containers engineered for safety, durability and compliance. Healthcare facilities across Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, Bhavnagar, Jamnagar and Bharuch rely on our sharp containers for needle disposal, syringe disposal, lancet disposal, scalpel disposal and biomedical waste segregation.</p>\n        <p>We manufacture puncture-proof, leak-proof, autoclavable and biohazard-safe sharp containers using virgin polymer, ensuring maximum hygiene and long-term performance. All products strictly follow WHO standards, CPCB guidelines and Biomedical Waste Management Rules, making CR ENTERPRISE one of Gujarat&rsquo;s most reliable manufacturers.</p>\n        <p>Our sharp container range includes the following sizes, suitable for OPD, ICU, emergency care, surgical units, pathology labs, vaccination centres, dental clinics and critical care departments:</p>\n        <div class=\"mkt-sizes\"><span>600 ML</span><span>1.1 L</span><span>3.5 L</span><span>6.5 L</span><span>7.5 L</span><span>12.5 L</span><span>25 L</span></div>\n        <p>With advanced moulding technology and rigorous quality checks, CR ENTERPRISE ensures safe sharps disposal, infection control and workplace safety.</p>\n        <div class=\"mkt-shots\" id=\"mktShots\"></div>\n      </div>\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Supplier in Gujarat &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Bulk stock and dependable delivery across every major Gujarat region.</p>\n        <p>CR ENTERPRISE is a leading Sharp Container Supplier in Gujarat, supplying premium biomedical sharp disposal containers to hospitals, clinics, diagnostic centres, pathology labs, nursing homes, dental clinics, blood banks, pharmacies, vaccination centres and government healthcare units. Our supply network covers Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, Bhavnagar, Jamnagar, Vapi and all major Gujarat regions.</p>\n        <p>We supply puncture-resistant sharp containers, biohazard disposal boxes, autoclavable containers and medical waste bins designed for needles, syringes, blades, scalpels, lancets and other sharp biomedical waste. Every container complies with WHO guidelines, CPCB norms and Biomedical Waste Management Rules, ensuring maximum infection control and safe waste handling.</p>\n        <p>Our sharp container variants &mdash; 600 ML, 1.1 L, 3.5 L, 6.5 L, 7.5 L, 12.5 L and 25 L &mdash; are suitable for OPD, ICU, emergency care, surgical units, dental clinics, blood banks, vaccination drives, mobile medical camps and critical care departments. With bulk stock availability, consistent quality and reliable supply capability, CR ENTERPRISE supports healthcare institutions with safe, hygienic and compliant biomedical waste disposal solutions.</p>\n        <div class=\"mkt-cta\">\n          <button class=\"btn-p\" onclick=\"goCat('Sharp Containers')\">View Sharp Containers &rarr;</button>\n          <button class=\"btn-s\" onclick=\"showPage('contact')\">Request a Quote</button>\n        </div>\n      </div>"}, "rajasthan": {"h": "Rajasthan", "body": "\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Manufacturer in Rajasthan &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Serving Jaipur, Jodhpur, Udaipur, Kota and across Rajasthan.</p>\n        <p>CR ENTERPRISE is a trusted Sharp Container Manufacturer in Rajasthan, producing high-quality biomedical sharp disposal containers engineered for safety, durability and compliance. Healthcare facilities across Jaipur, Jodhpur, Udaipur, Kota, Ajmer, Bikaner, Alwar, Sikar and the entire Rajasthan region rely on our sharp containers for needle disposal, syringe disposal, lancet disposal, scalpel disposal and biomedical waste segregation.</p>\n        <p>We manufacture puncture-proof, leak-proof, autoclavable and biohazard-safe sharp containers using virgin polymer, ensuring maximum hygiene and long-term performance. All products strictly follow WHO standards, CPCB guidelines and Biomedical Waste Management Rules, making CR ENTERPRISE one of Rajasthan&rsquo;s most reliable manufacturers.</p>\n        <p>Our sharp container range includes the following sizes, suitable for OPD, ICU, emergency care, surgical units, pathology labs, vaccination centres, dental clinics and critical care departments:</p>\n        <div class=\"mkt-sizes\"><span>600 ML</span><span>1.1 L</span><span>3.5 L</span><span>6.5 L</span><span>7.5 L</span><span>12.5 L</span><span>25 L</span></div>\n        <p>With advanced moulding technology and rigorous quality checks, CR ENTERPRISE ensures safe sharps disposal, infection control and workplace safety.</p>\n        <div class=\"mkt-shots\" id=\"mktShots\"></div>\n      </div>\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Supplier in Rajasthan &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Bulk stock and reliable delivery across every major Rajasthan district.</p>\n        <p>CR ENTERPRISE is a leading Sharp Container Supplier in Rajasthan, supplying premium biomedical sharp disposal containers to hospitals, clinics, diagnostic centres, pathology labs, nursing homes, dental clinics, blood banks, pharmacies, vaccination centres and government healthcare units. Our supply network covers Jaipur, Jodhpur, Udaipur, Kota, Ajmer, Bikaner, Alwar, Sikar and all major healthcare zones across Rajasthan.</p>\n        <p>We supply puncture-resistant sharp containers, biohazard disposal boxes, autoclavable containers and medical waste bins designed for needles, syringes, blades, scalpels, lancets and other sharp biomedical waste. Every container complies with WHO guidelines, CPCB norms and Biomedical Waste Management Rules, ensuring maximum infection control and safe waste handling.</p>\n        <p>Our sharp container variants &mdash; 600 ML, 1.1 L, 3.5 L, 6.5 L, 7.5 L, 12.5 L and 25 L &mdash; are suitable for OPD, ICU, emergency care, surgical units, dental clinics, blood banks, vaccination drives, mobile medical camps and critical care departments. With bulk stock availability, consistent quality and reliable supply capability, CR ENTERPRISE supports healthcare institutions with safe, hygienic and compliant biomedical waste disposal solutions.</p>\n        <div class=\"mkt-cta\">\n          <button class=\"btn-p\" onclick=\"goCat('Sharp Containers')\">View Sharp Containers &rarr;</button>\n          <button class=\"btn-s\" onclick=\"showPage('contact')\">Request a Quote</button>\n        </div>\n      </div>"}, "bangalore": {"h": "Bangalore", "body": "\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Manufacturer in Bangalore &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Serving Bangalore, Whitefield, Electronic City and across Karnataka.</p>\n        <p>CR ENTERPRISE is a leading Sharp Container Manufacturer in Bangalore, delivering high-quality biomedical sharp disposal containers engineered for safety, durability and compliance. Healthcare facilities across Bangalore, Whitefield, Electronic City, Yelahanka, Hebbal, Koramangala, Indiranagar and the entire Karnataka region rely on our sharp containers for needle disposal, syringe disposal, lancet disposal, scalpel disposal and biomedical waste segregation.</p>\n        <p>We manufacture puncture-proof, leak-proof, autoclavable and biohazard-safe sharp containers using virgin polymer, ensuring maximum hygiene and long-term performance. All products strictly follow WHO standards, CPCB guidelines and Biomedical Waste Management Rules, making CR ENTERPRISE one of Bangalore&rsquo;s most trusted manufacturers.</p>\n        <p>Our sharp container range includes the following sizes, suitable for OPD, ICU, emergency care, surgical units, pathology labs, vaccination centres, dental clinics and critical care departments:</p>\n        <div class=\"mkt-sizes\"><span>600 ML</span><span>1.1 L</span><span>3.5 L</span><span>6.5 L</span><span>7.5 L</span><span>12.5 L</span><span>25 L</span></div>\n        <p>With advanced moulding technology and rigorous quality checks, CR ENTERPRISE ensures safe sharps disposal, infection control and workplace safety.</p>\n        <div class=\"mkt-shots\" id=\"mktShots\"></div>\n      </div>\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Supplier in Bangalore &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Bulk stock and reliable delivery across Bangalore and Karnataka.</p>\n        <p>CR ENTERPRISE is a trusted Sharp Container Supplier in Bangalore, supplying premium biomedical sharp disposal containers to hospitals, clinics, diagnostic centres, pathology labs, nursing homes, dental clinics, blood banks, pharmacies, vaccination centres and government healthcare units. Our supply network covers Bangalore, Mysore, Mangalore, Hubli, Belgaum, Tumkur and all major Karnataka regions.</p>\n        <p>We supply puncture-resistant sharp containers, biohazard disposal boxes, autoclavable containers and medical waste bins designed for needles, syringes, blades, scalpels, lancets and other sharp biomedical waste. Every container complies with WHO guidelines, CPCB norms and Biomedical Waste Management Rules, ensuring maximum infection control and safe waste handling.</p>\n        <p>Our sharp container variants &mdash; 600 ML, 1.1 L, 3.5 L, 6.5 L, 7.5 L, 12.5 L and 25 L &mdash; are suitable for OPD, ICU, emergency care, surgical units, dental clinics, blood banks, vaccination drives, mobile medical camps and critical care departments. With bulk stock availability, consistent quality and reliable supply capability, CR ENTERPRISE supports healthcare institutions with safe, hygienic and compliant biomedical waste disposal solutions.</p>\n        <div class=\"mkt-cta\">\n          <button class=\"btn-p\" onclick=\"goCat('Sharp Containers')\">View Sharp Containers &rarr;</button>\n          <button class=\"btn-s\" onclick=\"showPage('contact')\">Request a Quote</button>\n        </div>\n      </div>"}, "chandigarh": {"h": "Chandigarh", "body": "\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Manufacturer in Chandigarh &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Serving Chandigarh, Mohali, Panchkula and the wider Tricity region.</p>\n        <p>CR ENTERPRISE is a trusted Sharp Container Manufacturer in Chandigarh, producing high-quality biomedical sharp disposal containers engineered for safety, durability and compliance. Healthcare facilities across Chandigarh, Mohali, Panchkula, Zirakpur, Kharar and the entire Tricity region rely on our sharp containers for needle disposal, syringe disposal, lancet disposal, scalpel disposal and biomedical waste segregation.</p>\n        <p>We manufacture puncture-proof, leak-proof, autoclavable and biohazard-safe sharp containers using virgin polymer, ensuring maximum hygiene and long-term performance. All products strictly follow WHO standards, CPCB guidelines and Biomedical Waste Management Rules, making CR ENTERPRISE one of Chandigarh&rsquo;s most reliable manufacturers.</p>\n        <p>Our sharp container range includes the following sizes, suitable for OPD, ICU, emergency care, surgical units, pathology labs, vaccination centres, dental clinics and critical care departments:</p>\n        <div class=\"mkt-sizes\"><span>600 ML</span><span>1.1 L</span><span>3.5 L</span><span>6.5 L</span><span>7.5 L</span><span>12.5 L</span><span>25 L</span></div>\n        <p>With advanced moulding technology and rigorous quality checks, CR ENTERPRISE ensures safe sharps disposal, infection control and workplace safety.</p>\n        <div class=\"mkt-shots\" id=\"mktShots\"></div>\n      </div>\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Supplier in Chandigarh &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Bulk stock and dependable delivery across the Tricity region.</p>\n        <p>CR ENTERPRISE is a leading Sharp Container Supplier in Chandigarh, supplying premium biomedical sharp disposal containers to hospitals, clinics, diagnostic centres, pathology labs, nursing homes, dental clinics, blood banks, pharmacies, vaccination centres and government healthcare units. Our supply network covers Chandigarh, Mohali, Panchkula, Zirakpur, Kharar and all major healthcare zones in the Tricity region.</p>\n        <p>We supply puncture-resistant sharp containers, biohazard disposal boxes, autoclavable containers and medical waste bins designed for needles, syringes, blades, scalpels, lancets and other sharp biomedical waste. Every container complies with WHO guidelines, CPCB norms and Biomedical Waste Management Rules, ensuring maximum infection control and safe waste handling.</p>\n        <p>Our sharp container variants &mdash; 600 ML, 1.1 L, 3.5 L, 6.5 L, 7.5 L, 12.5 L and 25 L &mdash; are suitable for OPD, ICU, emergency care, surgical units, dental clinics, blood banks, vaccination drives, mobile medical camps and critical care departments. With bulk stock availability, consistent quality and reliable supply capability, CR ENTERPRISE supports healthcare institutions with safe, hygienic and compliant biomedical waste disposal solutions.</p>\n        <div class=\"mkt-cta\">\n          <button class=\"btn-p\" onclick=\"goCat('Sharp Containers')\">View Sharp Containers &rarr;</button>\n          <button class=\"btn-s\" onclick=\"showPage('contact')\">Request a Quote</button>\n        </div>\n      </div>"}, "punjab": {"h": "Punjab", "body": "\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Manufacturer in Punjab &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Serving Ludhiana, Amritsar, Jalandhar, Patiala and across Punjab.</p>\n        <p>CR ENTERPRISE is a trusted Sharp Container Manufacturer in Punjab, producing high-quality biomedical sharp disposal containers engineered for safety, durability and compliance. Healthcare facilities across Ludhiana, Amritsar, Jalandhar, Patiala, Mohali, Bathinda, Moga and Hoshiarpur rely on our sharp containers for needle disposal, syringe disposal, lancet disposal, scalpel disposal and biomedical waste segregation.</p>\n        <p>We manufacture puncture-proof, leak-proof, autoclavable and biohazard-safe sharp containers using virgin polymer, ensuring maximum hygiene and long-term performance. All products strictly follow WHO standards, CPCB guidelines and Biomedical Waste Management Rules, making CR ENTERPRISE one of Punjab&rsquo;s most reliable manufacturers.</p>\n        <p>Our sharp container range includes the following sizes, suitable for OPD, ICU, emergency care, surgical units, pathology labs, vaccination centres, dental clinics and critical care departments:</p>\n        <div class=\"mkt-sizes\"><span>600 ML</span><span>1.1 L</span><span>3.5 L</span><span>6.5 L</span><span>7.5 L</span><span>12.5 L</span><span>25 L</span></div>\n        <p>With advanced moulding technology and rigorous quality checks, CR ENTERPRISE ensures safe sharps disposal, infection control and workplace safety.</p>\n        <div class=\"mkt-shots\" id=\"mktShots\"></div>\n      </div>\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Supplier in Punjab &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Bulk stock and reliable delivery across every major Punjab district.</p>\n        <p>CR ENTERPRISE is a leading Sharp Container Supplier in Punjab, supplying premium biomedical sharp disposal containers to hospitals, clinics, diagnostic centres, pathology labs, nursing homes, dental clinics, blood banks, pharmacies, vaccination centres and government healthcare units. Our supply network covers Ludhiana, Amritsar, Jalandhar, Patiala, Mohali, Bathinda, Moga, Hoshiarpur and all major healthcare zones across Punjab.</p>\n        <p>We supply puncture-resistant sharp containers, biohazard disposal boxes, autoclavable containers and medical waste bins designed for needles, syringes, blades, scalpels, lancets and other sharp biomedical waste. Every container complies with WHO guidelines, CPCB norms and Biomedical Waste Management Rules, ensuring maximum infection control and safe waste handling.</p>\n        <p>Our sharp container variants &mdash; 600 ML, 1.1 L, 3.5 L, 6.5 L, 7.5 L, 12.5 L and 25 L &mdash; are suitable for OPD, ICU, emergency care, surgical units, dental clinics, blood banks, vaccination drives, mobile medical camps and critical care departments. With bulk stock availability, consistent quality and reliable supply capability, CR ENTERPRISE supports healthcare institutions with safe, hygienic and compliant biomedical waste disposal solutions.</p>\n        <div class=\"mkt-cta\">\n          <button class=\"btn-p\" onclick=\"goCat('Sharp Containers')\">View Sharp Containers &rarr;</button>\n          <button class=\"btn-s\" onclick=\"showPage('contact')\">Request a Quote</button>\n        </div>\n      </div>"}, "uttarpradesh": {"h": "Uttar Pradesh", "body": "\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Manufacturer in Uttar Pradesh &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Serving Lucknow, Kanpur, Noida, Ghaziabad, Varanasi and across the state.</p>\n        <p>CR ENTERPRISE is a trusted Sharp Container Manufacturer in Uttar Pradesh, producing high-quality biomedical sharp disposal containers engineered for safety, durability and compliance. Healthcare facilities across Lucknow, Kanpur, Noida, Ghaziabad, Agra, Varanasi, Prayagraj, Meerut, Aligarh and Gorakhpur rely on our sharp containers for needle disposal, syringe disposal, lancet disposal, scalpel disposal and biomedical waste segregation.</p>\n        <p>We manufacture puncture-proof, leak-proof, autoclavable and biohazard-safe sharp containers using virgin polymer, ensuring maximum hygiene and long-term performance. All products strictly follow WHO standards, CPCB guidelines and Biomedical Waste Management Rules, making CR ENTERPRISE one of Uttar Pradesh&rsquo;s most reliable manufacturers.</p>\n        <p>Our sharp container range includes the following sizes, suitable for OPD, ICU, emergency care, surgical units, pathology labs, vaccination centres, dental clinics and critical care departments:</p>\n        <div class=\"mkt-sizes\"><span>600 ML</span><span>1.1 L</span><span>3.5 L</span><span>6.5 L</span><span>7.5 L</span><span>12.5 L</span><span>25 L</span></div>\n        <p>With advanced moulding technology and rigorous quality checks, CR ENTERPRISE ensures safe sharps disposal, infection control and workplace safety.</p>\n        <div class=\"mkt-shots\" id=\"mktShots\"></div>\n      </div>\n      <div class=\"mkt-blk\">\n        <h3>Sharp Container Supplier in Uttar Pradesh &ndash; CR ENTERPRISE</h3>\n        <p class=\"lead\">Bulk stock and reliable delivery across every major UP healthcare zone.</p>\n        <p>CR ENTERPRISE is a leading Sharp Container Supplier in Uttar Pradesh, supplying premium biomedical sharp disposal containers to hospitals, clinics, diagnostic centres, pathology labs, nursing homes, dental clinics, blood banks, pharmacies, vaccination centres and government healthcare units. Our supply network covers Lucknow, Kanpur, Noida, Ghaziabad, Agra, Varanasi, Meerut, Prayagraj, Aligarh, Gorakhpur and all major healthcare zones across the state.</p>\n        <p>We supply puncture-resistant sharp containers, biohazard disposal boxes, autoclavable containers and medical waste bins designed for needles, syringes, blades, scalpels, lancets and other sharp biomedical waste. Every container complies with WHO guidelines, CPCB norms and Biomedical Waste Management Rules, ensuring maximum infection control and safe waste handling.</p>\n        <p>Our sharp container variants &mdash; 600 ML, 1.1 L, 3.5 L, 6.5 L, 7.5 L, 12.5 L and 25 L &mdash; are suitable for OPD, ICU, emergency care, surgical units, dental clinics, blood banks, vaccination drives, mobile medical camps and critical care departments. With bulk stock availability, consistent quality and reliable supply capability, CR ENTERPRISE supports healthcare institutions with safe, hygienic and compliant biomedical waste disposal solutions.</p>\n        <div class=\"mkt-cta\">\n          <button class=\"btn-p\" onclick=\"goCat('Sharp Containers')\">View Sharp Containers &rarr;</button>\n          <button class=\"btn-s\" onclick=\"showPage('contact')\">Request a Quote</button>\n        </div>\n      </div>"}};

function mktTab(key){
  var p=document.getElementById('mktPanel'); if(!p||!MKT[key]) return;
  var tabs=document.querySelectorAll('.mkt-tab');
  for(var i=0;i<tabs.length;i++){
    tabs[i].className = (tabs[i].getAttribute('data-mkt')===key) ? 'mkt-tab on' : 'mkt-tab';
  }
  p.innerHTML = MKT[key].body;
  p.style.animation='none'; void p.offsetWidth; p.style.animation='';
  mktShots();
}
// pull sharps-container photos straight from the product catalogue
function mktShots(){
  var box=document.getElementById('mktShots');
  if(!box || typeof products==='undefined') return;
  var pick=[];
  for(var i=0;i<products.length && pick.length<6;i++){
    var q=products[i];
    if(q.cat==='Sharp Containers' && q.tag==='Sharp Container' && q.img) pick.push(q);
  }
  var h='';
  for(var k=0;k<pick.length;k++){
    h+='<div class="mkt-shot" onclick="goCat(\'Sharp Containers\')" title="'+pick[k].name+'">'
      +'<img src="'+pick[k].img+'" alt="'+pick[k].name+' - sharp container manufacturer and supplier in Delhi" loading="lazy">'
      +'<b>'+pick[k].name+'</b></div>';
  }
  box.innerHTML=h;
}
if(document.getElementById('mktPanel')) mktTab('delhi');

// ===== HOME CLIENTS MARQUEE (fed from the Our Clients list) =====
function hclBuild(){
  var a=document.getElementById('hclA'), b=document.getElementById('hclB');
  if(!a||!b||typeof CLIENTS==='undefined') return;
  function card(c){
    return '<div class="hcl-card" onclick="showPage(\'clients\')" title="'+c.n+'">'
      +'<div class="ph"><img src="'+c.i+'" alt="'+c.n+'" loading="lazy"></div></div>';
  }
  var half=Math.ceil(CLIENTS.length/2), h1='', h2='';
  for(var i=0;i<half;i++) h1+=card(CLIENTS[i]);
  for(var j=half;j<CLIENTS.length;j++) h2+=card(CLIENTS[j]);
  a.innerHTML=h1+h1;   // duplicated for a seamless loop
  b.innerHTML=h2+h2;
}
hclBuild();


/* ===== multi-page boot ===================================================
   Each page is its own document now, so the work that used to happen inside
   showPage() runs here on load instead.                                     */
(function () {
  if (!document.getElementById('prodGrid')) return;

  function paramCat() {
    var q = window.location.search;
    if (!q) return null;
    var m = /(?:^|[?&])cat=([^&]*)/.exec(q);
    if (!m) return null;
    var v = decodeURIComponent(m[1].replace(/\+/g, ' '));
    for (var i = 0; i < cats.length; i++) {
      if (cats[i].toLowerCase() === v.toLowerCase()) return cats[i];
    }
    var plain = v.replace(/&amp;/g, '&');
    for (var j = 0; j < cats.length; j++) {
      if (cats[j].replace(/&amp;/g, '&').toLowerCase() === plain.toLowerCase()) return cats[j];
    }
    return null;
  }

  var wanted = paramCat();
  if (wanted) activeCat = wanted;
  buildCats(); buildProds(); updateProdCount();
  setTimeout(fillGridGaps, 30);

  if (wanted) {
    setTimeout(function () {
      var target = document.getElementById('prodCount');
      if (!target) return;
      var hdr = document.querySelector('.hdr');
      var offset = (hdr ? hdr.offsetHeight : 90) + 24;
      var y = target.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - offset;
      window.scrollTo({ top: y < 0 ? 0 : y, behavior: 'smooth' });
    }, 120);
  }
})();
