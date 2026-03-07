"use client";

import Image from "next/image";
import { useState } from "react";


export default function KontaktPage() {

const bankText = `Bank: BNP PARIBAS Polkowice
Odbiorca: Klub ALFA-CKM
IBAN: 2616 0014 6217 2716 6050 0000 01
Tytuł: Składka członkowska / Wsparcie ALFA-CKM`;

const [copied, setCopied] = useState(false);

return (
<>

{/* ======================================================
HEADER
====================================================== */}

<section className="bg-black border-b border-white/10">

<div className="max-w-6xl mx-auto px-4 py-16">

<h1 className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">
Kontakt
</h1>

<div className="h-[3px] w-32 bg-gradient-to-r from-brand-gold via-brand-gold/60 to-transparent mb-6"></div>

<p className="text-white/80 max-w-3xl text-lg">
ALFA-CKM to chrześcijański klub motocyklowy z siedzibą w Polkowicach.
Jeśli chcesz się z nami skontaktować, dołączyć do wspólnych przejazdów
lub wesprzeć działalność klubu — zapraszamy do kontaktu.
</p>

</div>
</section>


{/* ======================================================
CONTENT
====================================================== */}

<section className="relative max-w-6xl mx-auto px-4 py-20">

{/* ambient glow */}
<div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
<div className="w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_70%)] blur-2xl opacity-60"/>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start md:items-stretch">


{/* ======================================================
LEWA KOLUMNA
====================================================== */}

<div className="space-y-12">

{/* EMAIL */}

<div>

<h2 className="text-2xl font-semibold text-brand-gold mb-2">
📧 Kontakt e-mail
</h2>

<div className="h-[2px] w-16 bg-gradient-to-r from-brand-gold to-transparent mb-4" />

<a
href="mailto:alfackm@gmail.com"
className="text-lg underline underline-offset-4 hover:text-brand-gold"
>
alfackm@gmail.com
</a>

</div>


{/* TELEFON */}

<div>

<h2 className="text-2xl font-semibold text-brand-gold mb-2">
📞 Kontakt telefoniczny
</h2>

<div className="h-[2px] w-16 bg-gradient-to-r from-brand-gold to-transparent mb-4" />

<div className="border border-brand-gold/60 rounded-lg p-4 mb-4 bg-black/30 shadow-[0_0_8px_rgba(212,175,55,0.25)]">

<p className="text-lg text-white font-medium">
Mariusz{" "}
<a href="tel:+48783856098" className="underline">
+48 783 856 098
</a>
</p>

<p className="text-sm text-brand-gold mt-1">
BLIK dostępny do przelewów
</p>

</div>

<p className="text-lg text-white">
Jan{" "}
<a href="tel:+48667259614" className="underline">
+48 667 259 614
</a>
</p>

<p className="text-sm text-white/60 mt-2">
Jeśli nie odbierzemy – oddzwonimy.
</p>

</div>


{/* MEDIA SPOŁECZNOŚCIOWE */}

<div>

<h2 className="text-2xl font-semibold text-brand-gold mb-2">
🌐 Media społecznościowe
</h2>

<div className="h-[2px] w-16 bg-gradient-to-r from-brand-gold to-transparent mb-4" />

<div className="flex items-center gap-6">

<a
href="https://www.facebook.com/alfackmklub"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 hover:opacity-80"
>
<span className="text-[#1877F2] text-lg">●</span>
<span className="text-white">Facebook</span>
</a>

<a
href="https://instagram.com/alfackm"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 hover:opacity-80"
>
<span className="text-pink-500 text-lg">●</span>
<span className="text-white">Instagram</span>
</a>

</div>

<p className="text-white/60 text-sm mt-2">
Aktualności, wydarzenia i życie klubu.
</p>

</div>


{/* KONTAKT I ZAPROSZENIA */}

<div>

<h2 className="text-2xl font-semibold text-brand-gold mb-2">
Kontakt i zaproszenia
</h2>

<div className="h-[2px] w-16 bg-gradient-to-r from-brand-gold to-transparent mb-4" />

<p className="text-white/80 mb-4">
Możesz się z nami skontaktować jeśli:
</p>

<ul className="list-disc list-inside space-y-2 text-white/90 mb-6">
<li>chcesz dołączyć do ALFA-CKM</li>
<li>chcesz zaprosić klub na wydarzenie</li>
<li>chcesz wesprzeć działalność klubu</li>
<li>chcesz nawiązać współpracę</li>
</ul>

<p className="text-white/80">
Jeśli organizujesz wydarzenie motocyklowe,
spotkanie lub inicjatywę społeczną,
możesz zaprosić ALFA-CKM do udziału.
</p>

</div>


{/* INFO 24-48h */}

<div className="border border-brand-gold/30 bg-black/40 rounded-lg p-4">

<p className="text-white text-sm">
Staramy się odpowiadać na wiadomości
w ciągu <strong>24-48 godzin</strong>.
</p>

</div>


{/* JAK NAPISAĆ */}

<div>

<h2 className="text-2xl font-semibold text-brand-gold mb-2">
Jak napisać do ALFA-CKM?
</h2>

<div className="h-[2px] w-16 bg-gradient-to-r from-brand-gold to-transparent mb-4" />

<ul className="list-disc list-inside space-y-2 text-white/90">
<li>Wyślij wiadomość e-mail</li>
<li>Napisz krótko czego dotyczy sprawa</li>
<li>Podaj numer telefonu jeśli oczekujesz kontaktu</li>
</ul>

<p className="text-white/70 text-sm mt-4">
Możesz również skontaktować się z nami przez Facebook lub Instagram,
gdzie publikujemy aktualności i informacje o działalności klubu.
</p>

<p className="text-white/70 text-sm mt-2">
Jeśli wiadomość dotyczy wydarzenia lub współpracy,
warto podać podstawowe informacje i proponowany termin kontaktu.
</p>

<p className="text-white/70 text-sm mt-2">
Każda wiadomość jest dla nas ważna – staramy się odpowiadać
na wszystkie zapytania tak szybko, jak to możliwe.
</p>

</div>

</div> {/* ← ZAMKNIĘCIE LEWEJ KOLUMNY */}


{/* ======================================================
PRAWA KOLUMNA
====================================================== */}

<div className="space-y-12">


{/* LOGO */}

<div className="flex flex-col items-center relative">

{/* GOLD GLOW */}
<div className="absolute w-[280px] h-[280px] bg-[radial-gradient(circle,rgba(212,175,55,0.35)_0%,rgba(212,175,55,0.15)_40%,transparent_70%)] blur-2xl -z-10"></div>

<Image
src="/assets/hero/alfa-ckm-logo.png"
alt="ALFA-CKM Logo"
width={600}
height={600}
priority
className="w-[220px] md:w-[280px] lg:w-[320px] drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
/>

<p className="text-center text-xs text-white/60 mt-3">
Polkowice • NIP 5020131423 • REGON 544020843
</p>

</div>


{/* WIZYTÓWKA ORGANIZACJI */}

<div className="relative border border-brand-gold/50 rounded-xl bg-gradient-to-b from-black to-black/80 p-7 shadow-[0_0_25px_rgba(212,175,55,0.15)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]">

<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70"/>

<h2 className="text-xl font-semibold text-brand-gold text-center mb-4">
ALFA-CKM
</h2>

<p className="text-center text-white/80 text-sm mb-6">
Chrześcijański Klub Motocyklowy
</p>

<div className="space-y-3 text-sm text-white">

<p>
📍 Kominka 18<br/>
59-100 Polkowice
</p>

<p>
📧 alfackm@gmail.com
</p>

<p>
📞 +48 783 856 098
</p>

<div className="border-t border-white/10 pt-3 mt-3">

<p>NIP 5020131423</p>

<p>REGON 544020843</p>

</div>

</div>

</div>


{/* separator */}

<div className="h-px bg-white/10 my-2"></div>

{/* WSPARCIE */}
<div className="border border-brand-gold/40 p-8 rounded bg-black mt-8 transition-all duration-300 hover:-translate-y-[2px]">

<h2 className="text-2xl font-bold text-brand-gold mb-4">
Wsparcie działalności ALFA-CKM
</h2>

<p className="text-white/90 text-base mb-6">
Możesz wesprzeć działalność klubu poprzez przelew.
</p>

<div className="text-xl space-y-3 font-mono select-text">

<p>
<strong className="text-brand-gold">Bank:</strong>
{" "}BNP PARIBAS Polkowice
</p>

<p>
<strong className="text-brand-gold">Odbiorca:</strong>
{" "}Klub ALFA-CKM
</p>

<p>
<strong className="text-brand-gold">IBAN:</strong>
{" "}2616 0014 6217 2716 6050 0000 01
</p>

<p>
<strong className="text-brand-gold">Tytuł:</strong>
{" "}Składka członkowska / Wsparcie
</p>

</div>


<button
onClick={()=>{
navigator.clipboard.writeText(bankText);
setCopied(true);
setTimeout(()=>setCopied(false),2500);
}}
className="mt-6 border border-brand-gold text-brand-gold px-6 py-3 text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-black transition"
>

Kopiuj dane do przelewu

</button>


{copied && (
<p className="mt-3 text-green-400 text-sm">
Dane skopiowane
</p>
)}

</div>


</div>

</div>

</section>



{/* ======================================================
SEO ORGANIZATION
====================================================== */}

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context":"https://schema.org",
"@type":"Organization",
"name":"Chrześcijański Klub Motocyklowy ALFA-CKM",
"alternateName":"ALFA-CKM",
"url":"https://www.alfackm.pl",
"logo":"https://www.alfackm.pl/assets/hero/alfa-ckm-logo.png",

"description":"ALFA-CKM to chrześcijański klub motocyklowy z siedzibą w Polkowicach. Klub łączy pasję do motocykli z wartościami chrześcijańskimi oraz wspólną działalnością społeczną i integracyjną.",

"address":{
"@type":"PostalAddress",
"streetAddress":"Kominka 18",
"addressLocality":"Polkowice",
"postalCode":"59-100",
"addressCountry":"PL"
},

"contactPoint":[
{
"@type":"ContactPoint",
"contactType":"Kontakt",
"telephone":"+48 783 856 098",
"email":"alfackm@gmail.com",
"areaServed":"PL",
"availableLanguage":"Polish"
}
],

"sameAs":[
"https://www.facebook.com/alfackmklub",
"https://instagram.com/alfackm"
],

"taxID":"5020131423",

"identifier":[
{
"@type":"PropertyValue",
"propertyID":"REGON",
"value":"544020843"
}
]

})
}}
/>

</>
);
}