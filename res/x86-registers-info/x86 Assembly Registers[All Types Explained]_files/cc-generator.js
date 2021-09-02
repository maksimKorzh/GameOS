jQuery(function( jQuery ){


var site_url = document.location.origin + "/",
    leftAdsContent = ['<div id="leftAdsId">  </div>'],
    rightAdsContent = ['<div id="rightAdsId">  </div>'],
    typebank = "",
    visaDigits = [4],
    visaDigSum = 8;

function randomsOneVisaNumber() {
    visaDigits = [4], visaDigSum = 8;
    for (var n = 0; n < 14; n++) {
        var a = Math.floor(10 * Math.random());
        visaDigits.push(a), n % 2 == 1 && (a *= 2) > 9 && (a -= 9), visaDigSum += a
    }
    var s = 10 - visaDigSum % 10;
    visaDigSum % 10 == 0 && (s = 0), visaDigits.push(s)
}
var masterCardDigits = [5],
    masterCardDigSum = 1;

function randomsOneMasterCardNumber() {
    masterCardDigits = [5], masterCardDigSum = 1;
    var n = Math.floor(5 * Math.random() + 1);
    masterCardDigits.push(n), masterCardDigSum += n;
    for (var a = 0; a < 13; a++) n = Math.floor(10 * Math.random()), masterCardDigits.push(n), a % 2 == 0 && (n *= 2) > 9 && (n -= 9), masterCardDigSum += n;
    var s = 10 - masterCardDigSum % 10;
    masterCardDigSum % 10 == 0 && (s = 0), masterCardDigits.push(s)
}
var discoverDigits = [6, 0, 1, 1],
    discoverDigSum = 6;

function randomsOneDiscoverCardNumber() {
    discoverDigits = [6, 0, 1, 1], discoverDigSum = 6;
    for (var n = 0; n < 11; n++) {
        var a = Math.floor(10 * Math.random());
        discoverDigits.push(a), n % 2 == 0 && (a *= 2) > 9 && (a -= 9), discoverDigSum += a
    }
    var s = 10 - discoverDigSum % 10;
    discoverDigSum % 10 == 0 && (s = 0), discoverDigits.push(s)
}
var americanExpressDigits = [3],
    americanExpressDigSum = 3;

function randomsOneAmericanExpressCardNumber() {
    americanExpressDigits = [3], americanExpressDigSum = 3;
    var n = Math.floor(2 * Math.random());
    0 == n && (n = 4), 1 == n && (n = 7), americanExpressDigits.push(n), (n *= 2) > 9 && (n -= 9), americanExpressDigSum += n;
    for (var a = 0; a < 12; a++) n = Math.floor(10 * Math.random()), americanExpressDigits.push(n), a % 2 == 1 && (n *= 2) > 9 && (n -= 9), americanExpressDigSum += n;
    var s = 10 - americanExpressDigSum % 10;
    americanExpressDigSum % 10 == 0 && (s = 0), americanExpressDigits.push(s)
}
var jcbDigits = [3, 5],
    jcbDigSum = 11;

function randomsOneJcbCardNumber() {
    jcbDigits = [3, 5], jcbDigSum = 11;
    var n = Math.floor(7 * Math.random() + 2);
    jcbDigits.push(n), (n *= 2) > 9 && (n -= 9), jcbDigSum += n, n = Math.floor(2 * Math.random() + 8), jcbDigits.push(n), jcbDigSum += n;
    for (var a = 0; a < 11; a++) n = Math.floor(10 * Math.random()), jcbDigits.push(n), a % 2 == 0 && (n *= 2) > 9 && (n -= 9), jcbDigSum += n;
    var s = 10 - jcbDigSum % 10;
    jcbDigSum % 10 == 0 && (s = 0), jcbDigits.push(s);
}
var visaE_first = ["4026", "417500", "4405", " 4508", "4844", " 4913", "4917"],
    chars_number = "1234567890",
    VisaElectron = "";

function randomsOneVisaElectronCardNumber() {
    var n = visaE_first[Math.floor(Math.random() * visaE_first.length)];
    if (6 == n.length)
        for (var a = 10, s = "", r = 0; r < a; r++) {
            var e = Math.floor(Math.random() * chars_number.length);
            s += chars_number.charAt(e)
        } else
            for (a = 12, s = "", r = 0; r < a; r++) {
                e = Math.floor(Math.random() * chars_number.length);
                s += chars_number.charAt(e)
            }
    VisaElectron = n + s
}
var China_length = ["16", "17", "18", "19"],
    ChinaUnionPay = "";

function randomsOneChinaUnionPayCardNumber() {
    for (var n = China_length[Math.floor(Math.random() * China_length.length)] - 2, a = "", s = 0; s < n; s++) {
        var r = Math.floor(Math.random() * chars_number.length);
        a += chars_number.charAt(r)
    }
    ChinaUnionPay = 62 + a
}
var Maestro_length = ["12", "13", "14", "15", "16", "17", "18", "19"],
    Maestro_first = ["500000-509999", "560000-589999", "600000-699999"],
    Maestro = "";

function randomsOneMaestroCardNumber() {
    var n = Maestro_first[Math.floor(Math.random() * Maestro_first.length)];
    var a = n.split("-"),
        s = parseInt(a[0]),
        r = parseInt(a[1]);
    var e = Math.floor(Math.random() * (r - s + 1) + s);
    for (var t = Maestro_length[Math.floor(Math.random() * Maestro_length.length)] - 6, d = "", o = 0; o < t; o++) {
        var p = Math.floor(Math.random() * chars_number.length);
        d += chars_number.charAt(p)
    }
    Maestro = e + d
}
var Bankcard_first = ["5610", "560221-560225"],
    Bankcard = "";

function randomsOneBankcardCardNumber() {
    var n = Bankcard_first[Math.floor(Math.random() * Bankcard_first.length)];
    if (4 == n.length)
        for (var a = 5610, s = 12, r = "", e = 0; e < s; e++) {
            var t = Math.floor(Math.random() * chars_number.length);
            r += chars_number.charAt(t)
        } else {
            var d = n.split("-"),
                o = parseInt(d[0]),
                p = parseInt(d[1]);
            for (a = Math.floor(Math.random() * (p - o + 1) + o), s = 10, r = "", e = 0; e < s; e++) {
                t = Math.floor(Math.random() * chars_number.length);
                r += chars_number.charAt(t)
            }
        }
    Bankcard = a + r
}
var Diners_Club_Carte_Blanche = "";

function randomsOneDiners_Club_Carte_BlancheNumber() {
    for (var n = Math.floor(6 * Math.random() + 300), a = "", s = 0; s < 11; s++) {
        var r = Math.floor(Math.random() * chars_number.length);
        a += chars_number.charAt(r)
    }
    Diners_Club_Carte_Blanche = n + a
}
var Diners_first = ["300-305", "309", "36", "38-39"],
    Diners_Club_International = "";

function randomsOneDiners_Club_InternationalNumber() {
    var n = Diners_first[Math.floor(Math.random() * Diners_first.length)];
    if (-1 != n.indexOf("-")) {
        var a = n.split("-"),
            s = parseInt(a[0]),
            r = parseInt(a[1]),
            e = Math.floor(Math.random() * (r - s + 1) + s);
        if (2 == s.length)
            for (var t = 12, d = "", o = 0; o < t; o++) {
                var p = Math.floor(Math.random() * chars_number.length);
                d += chars_number.charAt(p)
            } else
                for (t = 11, d = "", o = 0; o < t; o++) {
                    p = Math.floor(Math.random() * chars_number.length);
                    d += chars_number.charAt(p)
                }
    } else if (3 == n.length)
        for (e = 309, t = 11, d = "", o = 0; o < t; o++) {
            p = Math.floor(Math.random() * chars_number.length);
            d += chars_number.charAt(p)
        } else
            for (e = 36, t = 12, d = "", o = 0; o < t; o++) {
                p = Math.floor(Math.random() * chars_number.length);
                d += chars_number.charAt(p)
            }
    Diners_Club_International = e + d
}
Canada_first = ["54", "55"];
var Diners_Club_United_States_Canada = "";

function randomsOneDiners_Club_United_States_CanadaNumber() {
    for (var n = Canada_first[Math.floor(Math.random() * Canada_first.length)], a = "", s = 0; s < 14; s++) {
        var r = Math.floor(Math.random() * chars_number.length);
        a += chars_number.charAt(r)
    }
    Diners_Club_United_States_Canada = n + a
}
var UATP = "";

function randomsOneUATPNumber() {
    for (var n = "", a = 0; a < 14; a++) {
        var s = Math.floor(Math.random() * chars_number.length);
        n += chars_number.charAt(s)
    }
    UATP = 1 + n
}
var Dankort = "";

function randomsOneDankortumber() {
    for (var n = "", a = 0; a < 12; a++) {
        var s = Math.floor(Math.random() * chars_number.length);
        n += chars_number.charAt(s)
    }
    Dankort = 5019 + n
}
var InterPayment = "",
    InterPayment_length = ["16", "17", "18", "19"];

function randomsOneInterPaymentNumber() {
    for (var n = InterPayment_length[Math.floor(Math.random() * InterPayment_length.length)] - 3, a = "", s = 0; s < n; s++) {
        var r = Math.floor(Math.random() * chars_number.length);
        a += chars_number.charAt(r)
    }
    InterPayment = 636 + a
}
var nameList = ["James", "Christopher", "Jackson", "Jayden", "Etha", "Tyler", "Aiden", "Joseph", "Noah", "Matthew", "Jose", "Jes", "William", "Landon", "Hunter", "David", "Andrew", "Jos", "Gabriel", "Joshua", "Daniel", "Anthony", "Elijah", "Michael", "Ryan", "Ava", "Anna", "Hannah", "Alyssa", "Addison", "Brooklyn", "Natalie", "Samantha", "Julia", "Grace", "Alexis", "Ashley", "Chloe", "Katherine", "Elizabeth", "Isabella", "Sophia", "Emily", "Emma", "Madison", "Olivia", "Abigail", "Mia", "Brianna", "Rogelio", "Eliana", "Yamilet", "Saige", "Caden", "Troy", "Vivian", "Carter", "Aditya", "Dallas", "Sydnee", "Marisol", "Malcolm", "Joy", "Alivia", "Gavin", "Jolie", "Harry", "Mohammad", "Tyrese", "Van", "Alyssa", "Karissa", "Riley", "Emmanuel", "Noel", "Reagan", "Paris", "Faith", "Audrina", "Efrain", "Brenton", "Rihanna", "Mateo", "Lauren", "Amya", "Jeramiah", "Ethen", "Martin", "Abraham", "Miah", "Paityn", "Sebastian", "Landon", "Walker", "Selina", "Bryan", "Reuben", "Finnegan", "Jacquelyn", "Emmy", "Atticus", "Gideon", "Ishaan", "Esther", "Cesar", "Cecelia", "Avery", "Dixie", "Dulce", "Clay", "Glenn", "Ruby", "Amani", "Donald", "Morgan", "Isabelle", "Taylor", "Jazlynn", "David", "Gwendolyn", "Humberto", "Diamond", "Grady", "Essence", "Camilla", "Leonel", "Aubrey", "Miranda", "Avery", "Ryleigh", "Cierra", "Riley", "Stella", "Dexter", "Aldo", "Elvis", "Deacon", "Brooklyn", "Orion", "Xzavier", "Tabitha", "Kathy", "Javion", "Tristan", "Wendy", "Aniya", "Aydan", "Amber", "Holly"],
    secondNameList = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins"],
    addressList = ["Cedar Lane", "Franklin Court", "Andover Court", "Country Club Road", "Highland Drive", "Crescent Street", "Linden Avenue", "King Street", "Ann Street", "Jefferson Avenue", "Maiden Lane", "Forest Street", "Arlington Avenue", "Franklin Avenue", "Laurel Lane", "Rose Street", "White Street", "Warren Avenue", "Briarwood Drive", "Madison Avenue", "Hanover Court", "Windsor Drive", "Summit Avenue", "Charles Street", "Cedar Avenue", "John Street", "River Street", "Grand Avenue", "Route 1", "Devon Court", "Monroe Street", "Woodland Drive", "Garfield Avenue", "Main Street", "Essex Court", "Front Street North", "Williams Street", "Orchard Avenue", "Willow Avenue", "Laurel Drive", "Pleasant Street", "Atlantic Avenue", "Fairway Drive", "Clay Street", "Olive Street", "Route 30", "Cottage Street", "Broad Street", "Court Street", "Heather Lane"],
    countryList = ["Afghanistan", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Aruba", "Australia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Brazil", "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China", "Christmas Island", "Colombia", "Colombia", "Colombia", "Colombia", "Colombia", "Colombia", "Colombia", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Ecuador", "Egypt", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "France", "France", "France", "France", "France", "France", "France", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Italy", "Italy", "Italy", "Italy", "Italy", "Italy", "Italy", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Monaco", "Mongolia", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands", "Netherlands", "Netherlands", "Netherlands", "Netherlands", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Paraguay", "Peru", "Philippines", "Philippines", "Philippines", "Philippines", "Philippines", "Philippines", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Singapore", "Singapore", "Singapore", "Singapore", "Singapore", "Singapore", "Singapore", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "St. Helena", "Sudan", "Suriname", "Swaziland", "Sweden", "Sweden", "Sweden", "Sweden", "Sweden", "Sweden", "Sweden", "Sweden", "Switzerland", "Tajikistan", "Thailand", "Togo", "Tokelau", "Tonga", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Kingdom", "United Kingdom", "United Kingdom", "United Kingdom", "United Kingdom", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Western Sahara", "Yemen", "Serbia", "Zambia", "Zimbabwe"],
    bank_list = ["Industrial and Commercial Bank of China", "China Construction Bank Corporation", "Agricultural Bank of China", "Bank of China", "Mitsubishi UFJ Financial Group", "JPMorgan Chase and Co", "HSBC Holdings PLC", "BNP Paribas", "Bank of America", "Credit Agricole", "Citigroup Inc", "Japan Post Bank", "Wells Fargo and Co", "Sumitomo Mitsui Financial Group", "Deutsche Bank", "Banco Santander", "Mizuho Financial Group", "Barclays PLC", "Groupe BPCE", "Bank of Communications", "Postal Savings Bank of China", "Lloyds Banking Group", "Royal Bank of Canada", "Toronto-Dominion Bank", "ING Group", "Norinchukin Bank", "UniCredit", "Royal Bank of Scotland Group", "Industrial Bank China", "China Merchants Bank", "Intesa Sanpaolo", "Shanghai Pudong Development Bank", "UBS", "Goldman Sachs", "China Minsheng Bank", "China CITIC Bank", "Morgan Stanley", "Credit Mutuel", "Credit Suisse", "Banco Bilbao Vizcaya Argentaria", "Scotiabank", "Commonwealth Bank", "Rabobank", "Australia and New Zealand Banking Group", "Nordea", "Westpac", "Standard Chartered", "China Everbright Bank", "National Australia Bank", "DZ Bank", "Bank of Montreal", "Danske Bank", "Commerzbank", "State Bank of India", "Resona Holdings", "Cassa Depositi e Prestiti", "Ping An Bank", "Canadian Imperial Bank of Commerce", "Sumitomo Mitsui Trust Holdings", "KfW Group", "Commerzbank", "ABN AMRO Group NV", "The Export Import Bank of China", "Sberbank of Russia", "US Bancorp", "CaixaBank", "Itau Unibanco Holding SA", "Banco do Brasil SA", "KB Financial Group", "Shinhan Financial Group", "Nomura Holdings", "DBS Group Holdings", "Caixa Economica Federal", "PNC Financial Services Group", "Hua Xia Bank", "Bank of New York Mellon Corp", "Shinkin Central Bank", "Capital One Financial Corporation", "Banco Bradesco SA", "KBC Group NV", "Bank of Beijing", "Oversea Chinese Banking Corp", "Hana Financial Group", "Svenska Handelsbanken", "NongHyup Financial Group", "Woori Bank", "DnB ASA", "China Guangfa Bank", "Skandinaviska Enskilda Banken", "Nationwide Building Society", "Cathay Financial Holding", "Landesbank Baden Wurttemberg", "La Banque Postale", "Bank of Shanghai", "Swedbank", "United Overseas Bank", "Bank of Jiangsu", "Banco Sabadell", "Bayerische Landesbank", "Erste Group Bank AG", "Brazilian Development Bank", "Industrial Bank of Korea", "Bankia", "Charles Schwab Corp", "Dexia", "State Street Corp", "Raiffeisen Schweiz", "Nykredit Group", "Fubon Financial Holding", "VTB Bank", "China ZheShang Bank", "BB and T Corporation", "Qatar National Bank", "National Bank of Canada", "Suntrust Banks", "Korea Development Bank", "Belfius"],
    nameRandomed = [],
    secondNameRandomed = [],
    addressRandomed = [],
    coutryRandomed = [],
    year = (new Date).getFullYear(),
    month = (new Date).getMonth() + 1,
    yearRandomed = 0,
    monthRandomed = 0;

function randombankname() {
    typebank = jQuery("#typebank").val(), 0 == jQuery.trim(typebank).length && (typebank = bank_list[Math.floor(Math.random() * bank_list.length)])
}

function randomsANameAndAddress() {
    nameRandomed = [], secondNameRandomed = [], addressRandomed = [], coutryRandomed = [];
    var n = nameList[Math.floor(Math.random() * nameList.length)],
        a = secondNameList[Math.floor(Math.random() * secondNameList.length)];
    nameRandomed.push(n), secondNameRandomed.push(a);
    var s = addressList[Math.floor(Math.random() * addressList.length)];
    addressRandomed.push(s);
    var r = countryList[Math.floor(Math.random() * countryList.length)];
    if (coutryRandomed.push(r), yearRandomed = Math.floor(10 * Math.random()) + year, monthRandomed = Math.floor(12 * Math.random() + 1), yearRandomed == year) {
        var e = 12 - month;
        monthRandomed = Math.floor(Math.random() * e + 1) + month
    }
    yearRandomed == year + 9 && (monthRandomed = Math.floor(Math.random() * (month - 1) + 1))
}

function generatesAmericanExpressJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneAmericanExpressCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "American Express",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + americanExpressDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneAmericanExpressCardNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "American Express",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + americanExpressDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadAEJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadAEJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesAmericanExpressXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneAmericanExpressCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;American Express&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + americanExpressDigits.join("") + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp><br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadAEXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadAEXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesAmericanCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneAmericanExpressCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("American Express," + americanExpressDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadAmericanCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadAmericanCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesVisaEJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneVisaElectronCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Visa Electron",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + VisaElectron + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneVisaElectronCardNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Visa Electron",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + VisaElectron + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesVisaEXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneVisaElectronCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Visa Electron&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + VisaElectron + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesVisaECSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneVisaElectronCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Visa Electron," + VisaElectron + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesVisaJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneVisaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Visa",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + visaDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneVisaNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Visa",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + visaDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesvisaXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneVisaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Visa&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + visaDigits.join("") + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesVisaCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneVisaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Visa," + visaDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesMasterCardJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneMasterCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Master Card",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + masterCardDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneMasterCardNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Master Card",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + masterCardDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesMasterXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneMasterCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Master Card&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + masterCardDigits.join("") + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesMasterCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneMasterCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Master Card," + masterCardDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiscoverJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneDiscoverCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Discover",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + discoverDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneDiscoverCardNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Discover",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + discoverDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadDiscoverJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadDiscoverJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiscoverXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiscoverCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Discover&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + discoverDigits.join("") + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadDiscoverXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadDiscoverXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiscoverCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiscoverCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Discover," + discoverDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadDiscoverCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadDiscoverCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesJcbJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneJcbCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "JCB",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + jcbDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneJcbCardNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "JCB",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + jcbDigits.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadJcbJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadJcbJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesJCBXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneJcbCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;JCB&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + jcbDigits.join("") + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadJCBXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadJCBXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesJCBCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneJcbCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("JCB," + jcbDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + t.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + coutryRandomed + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadJCBCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadJCBCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function homeOLAmericanExpressJSONs() {
    var n = [];
    randomsOneAmericanExpressCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>[</li>"), n.push("<li>&nbsp; &nbsp; {</li>"), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "American Express",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + americanExpressDigits.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed + '",</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + a.join("") + "</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>"), n.push("<li>&nbsp; &nbsp; }</li>"), n.push("<li>]</li>"), jQuery("#exampleCard").html(n)
}

function homeOLAmericanExpressXMLs() {
    var n = [];
    randomsOneAmericanExpressCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>&#x0003C;root&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;American Express&#x0003C;/IssuingNetwork&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + americanExpressDigits.join("") + "&#x0003C;/CardNumber&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + coutryRandomed + "&#x0003C;/Country&#x0003E;</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;" + a.join("") + "&#x0003C;/Exp></li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>"), n.push("<li>&#x0003C;/root&#x0003E;</li>"), jQuery("#exampleCard").html(n)
}

function homeOLAmericanCSVs() {
    var n = [];
    randomsOneAmericanExpressCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp</li>"), n.push("<li>American Express," + americanExpressDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + coutryRandomed + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + "," + a.join("") + "</li>"), jQuery("#exampleCard").html(n)
}

function homeOLVisaJSONs() {
    var n = [];
    randomsOneVisaNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>[</li>"), n.push("<li>&nbsp; &nbsp; {</li>"), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Visa",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + visaDigits.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed + '",</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + a.join("") + "</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>"), n.push("<li>&nbsp; &nbsp; }</li>"), n.push("<li>]</li>"), jQuery("#exampleCard").html(n)
}

function homeOLvisaXMLs() {
    var n = [];
    randomsOneVisaNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>&#x0003C;root&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Visa&#x0003C;/IssuingNetwork&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + visaDigits.join("") + "&#x0003C;/CardNumber&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + coutryRandomed + "&#x0003C;/Country&#x0003E;</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;" + a.join("") + "&#x0003C;/Exp></li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>"), n.push("<li>&#x0003C;/root&#x0003E;</li>"), jQuery("#exampleCard").html(n)
}

function homeOLVisaCSVs() {
    var n = [];
    randomsOneVisaNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp</li>"), n.push("<li>Visa," + visaDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + coutryRandomed + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + "," + a.join("") + "</li>"), jQuery("#exampleCard").html(n)
}

function homeOLMasterCardJSONs() {
    var n = [];
    randomsOneMasterCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>[</li>"), n.push("<li>&nbsp; &nbsp; {</li>"), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Master Card",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + masterCardDigits.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed + '",</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + a.join("") + "</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>"), n.push("<li>&nbsp; &nbsp; }</li>"), n.push("<li>]</li>"), jQuery("#exampleCard").html(n)
}

function homeOLMasterXMLs() {
    var n = [];
    randomsOneMasterCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>&#x0003C;root&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Master Card&#x0003C;/IssuingNetwork&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + masterCardDigits.join("") + "&#x0003C;/CardNumber&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + coutryRandomed + "&#x0003C;/Country&#x0003E;</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;" + a.join("") + "&#x0003C;/Exp></li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>"), n.push("<li>&#x0003C;/root&#x0003E;</li>"), jQuery("#exampleCard").html(n)
}

function homeOLMasterCSVs() {
    var n = [];
    randomsOneMasterCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp</li>"), n.push("<li>Master Card," + masterCardDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + coutryRandomed + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + "," + a.join("") + "</li>"), jQuery("#exampleCard").html(n)
}

function homeOLDiscoverJSONs() {
    var n = [];
    randomsOneDiscoverCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>[</li>"), n.push("<li>&nbsp; &nbsp; {</li>"), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Discover",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + discoverDigits.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed + '",</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + a.join("") + "</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>"), n.push("<li>&nbsp; &nbsp; }</li>"), n.push("<li>]</li>"), jQuery("#exampleCard").html(n)
}

function homeOLDiscoverXMLs() {
    var n = [];
    randomsOneDiscoverCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>&#x0003C;root&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Discover&#x0003C;/IssuingNetwork&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + discoverDigits.join("") + "&#x0003C;/CardNumber&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + coutryRandomed + "&#x0003C;/Country&#x0003E;</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;" + a.join("") + "&#x0003C;/Exp></li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>"), n.push("<li>&#x0003C;/root&#x0003E;</li>"), jQuery("#exampleCard").html(n)
}

function homeOLDiscoverCSVs() {
    var n = [];
    randomsOneDiscoverCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp</li>"), n.push("<li>Discover," + discoverDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + coutryRandomed + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + "," + a.join("") + "</li>"), jQuery("#exampleCard").html(n)
}

function homeOLJcbJSONs() {
    var n = [];
    randomsOneJcbCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>[</li>"), n.push("<li>&nbsp; &nbsp; {</li>"), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "JCB",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + jcbDigits.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed + '",</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",</li>'), n.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + a.join("") + "</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>"), n.push("<li>&nbsp; &nbsp; }</li>"), n.push("<li>]</li>"), jQuery("#exampleCard").html(n)
}

function homeOLJCBXMLs() {
    var n = [];
    randomsOneJcbCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>&#x0003C;root&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;JCB&#x0003C;/IssuingNetwork&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + jcbDigits.join("") + "&#x0003C;/CardNumber&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + coutryRandomed + "&#x0003C;/Country&#x0003E;</li><li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;</li>"), n.push("<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;" + a.join("") + "&#x0003C;/Exp></li>"), n.push("<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>"), n.push("<li>&#x0003C;/root&#x0003E;</li>"), jQuery("#exampleCard").html(n)
}

function homeOLJCBCSVs() {
    var n = [];
    randomsOneJcbCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), n.push("<li>IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp</li>"), n.push("<li>JCB," + jcbDigits.join("") + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + coutryRandomed + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + "," + a.join("") + "</li>"), jQuery("#exampleCard").html(n)
}

function generateschinaunionpayJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneChinaUnionPayCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "China UnionPay",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + ChinaUnionPay + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneChinaUnionPayCardNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Master Card",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + ChinaUnionPay + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generateschinaunionpayXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneChinaUnionPayCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;China UnionPay&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + ChinaUnionPay + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generateschinaunionpayCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneChinaUnionPayCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("China UnionPay," + ChinaUnionPay + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesmaestroJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneMaestroCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Maestro",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Maestro + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneMaestroCardNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Maestro",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Maestro + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesmaestroXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneMaestroCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Maestro&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Maestro + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesmaestroCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneMaestroCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Maestro," + Maestro + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiners_Club_Carte_BlancheJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneDiners_Club_Carte_BlancheNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Diners Club Carte Blanche",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Diners_Club_Carte_Blanche + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneDiners_Club_Carte_BlancheNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Diners Club Carte Blanche",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Diners_Club_Carte_Blanche + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiners_Club_Carte_BlancheXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiners_Club_Carte_BlancheNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Diners Club Carte Blanche&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Diners_Club_Carte_Blanche + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiners_Club_Carte_BlancheCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiners_Club_Carte_BlancheNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Diners Club Carte Blanche," + Diners_Club_Carte_Blanche + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesdiners_club_internationalJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneDiners_Club_InternationalNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Diners Club International",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Diners_Club_International + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneDiners_Club_InternationalNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Diners Club International",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Diners_Club_International + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesdiners_club_internationalXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiners_Club_InternationalNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Diners Club International&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Diners_Club_International + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesdiners_club_internationalCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiners_Club_InternationalNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Diners Club International," + Diners_Club_International + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiners_Club_United_States_CanadaJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneDiners_Club_United_States_CanadaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Diners Club United States & Canada",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Diners_Club_United_States_Canada + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneDiners_Club_United_States_CanadaNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Diners Club United States & Canada",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Diners_Club_United_States_Canada + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiners_Club_United_States_CanadaXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiners_Club_United_States_CanadaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Diners Club United States & Canada&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Diners_Club_United_States_Canada + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiners_Club_United_States_CanadaCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiners_Club_United_States_CanadaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Diners Club United States & Canada," + Diners_Club_United_States_Canada + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesUATPJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneUATPNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "UATP",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + UATP + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneUATPNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "UATP",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + UATP + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesUATPXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneUATPNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;UATP&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + UATP + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesUATPCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneUATPNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("UATP," + UATP + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDankortJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneDankortumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Dankort",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Dankort + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneDankortumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Dankort",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Dankort + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDankortXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDankortumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Dankort&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Dankort + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDankortCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDankortumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Dankort," + Dankort + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesInterPaymentJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneInterPaymentNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "InterPayment",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + InterPayment + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneInterPaymentNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "InterPayment",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + InterPayment + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesInterPaymentXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneInterPaymentNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;InterPayment&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + InterPayment + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesInterPaymentCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneInterPaymentNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("InterPayment," + InterPayment + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesBankcardJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneBankcardCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Bankcard",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Bankcard + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneBankcardCardNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Bankcard",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Bankcard + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesBankcardXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneBankcardCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Bankcard&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Bankcard + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesBankcardCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneBankcardCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Bankcard," + Bankcard + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(".generate_btn_show").click(function(n) {
    if (jQuery("#card_type_select").removeClass("required_red"), "" == jQuery("#card_type_select").val()) return jQuery("#card_type_select").addClass("required_red"), !1;
    n.preventDefault();
    var a = document.getElementById("myBar"),
        s = document.getElementById("per");
    jQuery("#myBar").css("width", "1%"), jQuery("#myProgress").show(), jQuery(".donate-btn .donate").hide(), jQuery(".copy-btn-hidden").hide(), jQuery("#mainCont").hide(), jQuery(".download_file_card").hide();
    var r = 1,
        e = setInterval(function() {
            r >= 100 ? (jQuery(".donate-btn .donate").show(), jQuery(".copy-btn-hidden").show(), jQuery("#mainCont").show(), jQuery(".download_file_card").show(), jQuery("#myProgress").hide(), clearInterval(e)) : (r++, s.innerHTML = r + "%", a.style.width = r + "%")
        }, 50)
}), jQuery(".card_gen_progress").click(function() {
    jQuery("#myBar").css("width", "1%"), jQuery("#myProgress").show();
    var n = document.getElementById("myBar"),
        a = document.getElementById("per"),
        s = 1,
        r = setInterval(function() {
            s >= 100 ? (jQuery(".card_gen_bank").trigger("click"), jQuery("#myProgress").hide(), clearInterval(r)) : (s++, a.innerHTML = s + "%", n.style.width = s + "%")
        }, 50)
}), jQuery(".card_gen_bank").click(function() {
    typebank = jQuery("#typebank").val();
    var n = jQuery(this).attr("data-bank");
    0 == jQuery.trim(n).length && (typebank = bank_list[Math.floor(Math.random() * bank_list.length)])
}), jQuery("#numberOfEntriesHomePage").on("keyup keydown", function(n) {
    jQuery("#numberOfEntriesHomePage").val() > 999 && 46 != n.keyCode && 8 != n.keyCode && jQuery("#numberOfEntriesHomePage").val(999)
}), jQuery("#buttonGenerateFileHomePage").click(function(n) {
    switch (n.preventDefault(), jQuery("#typeOfCard").val()) {
        case "AE":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    generatesAmericanExpressJSONs();
                    break;
                case "XML":
                    generatesAmericanExpressXMLs();
                    break;
                case "CSV":
                    generatesAmericanCSVs()
            }
            break;
        case "D":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    generatesDiscoverJSONs();
                    break;
                case "XML":
                    generatesDiscoverXMLs();
                    break;
                case "CSV":
                    generatesDiscoverCSVs()
            }
            break;
        case "JCB":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    generatesJcbJSONs();
                    break;
                case "XML":
                    generatesJCBXMLs();
                    break;
                case "CSV":
                    generatesJCBCSVs()
            }
            break;
        case "MC":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    generatesMasterCardJSONs();
                    break;
                case "XML":
                    generatesMasterXMLs();
                    break;
                case "CSV":
                    generatesMasterCSVs()
            }
            break;
        case "V":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    generatesVisaJSONs();
                    break;
                case "XML":
                    generatesvisaXMLs();
                    break;
                case "CSV":
                    generatesVisaCSVs()
            }
    }
}), jQuery(document).on("click", "#visaBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesVisaJSONs(n);
            break;
        case "XML":
            generatesvisaXMLs(n);
            break;
        case "CSV":
            generatesVisaCSVs(n)
    }
}), jQuery(document).on("click", "#VisaEBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html(""), jQuery(".donate-btn").show();
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesVisaEJSONs(n);
            break;
        case "XML":
            generatesVisaEXMLs(n);
            break;
        case "CSV":
            generatesVisaECSVs(n)
    }
}), jQuery(document).on("click", "#masterBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesMasterCardJSONs(n);
            break;
        case "XML":
            generatesMasterXMLs(n);
            break;
        case "CSV":
            generatesMasterCSVs(n)
    }
}), jQuery(document).on("click", "#discoverBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesDiscoverJSONs(n);
            break;
        case "XML":
            generatesDiscoverXMLs(n);
            break;
        case "CSV":
            generatesDiscoverCSVs(n)
    }
}), jQuery(document).on("click", "#americanBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesAmericanExpressJSONs(n);
            break;
        case "XML":
            generatesAmericanExpressXMLs(n);
            break;
        case "CSV":
            generatesAmericanCSVs(n)
    }
}), jQuery(document).on("click", "#jcbBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesJcbJSONs(n);
            break;
        case "XML":
            generatesJCBXMLs(n);
            break;
        case "CSV":
            generatesJCBCSVs(n)
    }
}), jQuery(document).on("click", "#chinaunionpayBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generateschinaunionpayJSONs(n);
            break;
        case "XML":
            generateschinaunionpayXMLs(n);
            break;
        case "CSV":
            generateschinaunionpayCSVs(n)
    }
}), jQuery(document).on("click", "#maestroBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesmaestroJSONs(n);
            break;
        case "XML":
            generatesmaestroXMLs(n);
            break;
        case "CSV":
            generatesmaestroCSVs(n)
    }
}), jQuery(document).on("click", "#Diners_Club_Carte_BlancheBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesDiners_Club_Carte_BlancheJSONs(n);
            break;
        case "XML":
            generatesDiners_Club_Carte_BlancheXMLs(n);
            break;
        case "CSV":
            generatesDiners_Club_Carte_BlancheCSVs(n)
    }
}), jQuery(document).on("click", "#diners_club_international_BulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesdiners_club_internationalJSONs(n);
            break;
        case "XML":
            generatesdiners_club_internationalXMLs(n);
            break;
        case "CSV":
            generatesdiners_club_internationalCSVs(n)
    }
}), jQuery(document).on("click", "#Diners_Club_United_States_Canada_BulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesDiners_Club_United_States_CanadaJSONs(n);
            break;
        case "XML":
            generatesDiners_Club_United_States_CanadaXMLs(n);
            break;
        case "CSV":
            generatesDiners_Club_United_States_CanadaCSVs(n)
    }
}), jQuery(document).on("click", "#UATP_BulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesUATPJSONs(n);
            break;
        case "XML":
            generatesUATPXMLs(n);
            break;
        case "CSV":
            generatesUATPCSVs(n)
    }
}), jQuery(document).on("click", "#Dankort_BulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesDankortJSONs(n);
            break;
        case "XML":
            generatesDankortXMLs(n);
            break;
        case "CSV":
            generatesDankortCSVs(n)
    }
}), jQuery(document).on("click", "#InterPayment_BulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesInterPaymentJSONs(n);
            break;
        case "XML":
            generatesInterPaymentXMLs(n);
            break;
        case "CSV":
            generatesInterPaymentCSVs(n)
    }
}), jQuery("#card_type_select").on("change", function() {
    switch (jQuery(this).val()) {
        case "american_express":
            jQuery(".generate_btn_show").attr("id", "americanBulkButton");
            break;
        case "discover":
            jQuery(".generate_btn_show").attr("id", "discoverBulkButton");
            break;
        case "jcb":
            jQuery(".generate_btn_show").attr("id", "jcbBulkButton");
            break;
        case "mastercard":
            jQuery(".generate_btn_show").attr("id", "masterBulkButton");
            break;
        case "visa":
            jQuery(".generate_btn_show").attr("id", "visaBulkButton");
            break;
        case "visa_electron":
            jQuery(".generate_btn_show").attr("id", "VisaEBulkButton");
            break;
        case "china_unionpay":
            jQuery(".generate_btn_show").attr("id", "chinaunionpayBulkButton");
            break;
        case "maestro":
            jQuery(".generate_btn_show").attr("id", "maestroBulkButton");
            break;
        case "diners_club_carte_blanche":
            jQuery(".generate_btn_show").attr("id", "Diners_Club_Carte_BlancheBulkButton");
            break;
        case "diners_club_international":
            jQuery(".generate_btn_show").attr("id", "diners_club_international_BulkButton");
            break;
        case "diners_club_united_states_canada":
            jQuery(".generate_btn_show").attr("id", "Diners_Club_United_States_Canada_BulkButton");
            break;
        case "uatp":
            jQuery(".generate_btn_show").attr("id", "UATP_BulkButton");
            break;
        case "dankort":
            jQuery(".generate_btn_show").attr("id", "Dankort_BulkButton");
            break;
        case "interpayment":
            jQuery(".generate_btn_show").attr("id", "InterPayment_BulkButton");
            break;
        case "bankcard":
            jQuery(".generate_btn_show").attr("id", "BankcardBulkButton");
            break;
        case "china_t_union":
            jQuery(".generate_btn_show").attr("id", "China_T_UnionBulkButton");
            break;
        case "diners_club_enroute":
            jQuery(".generate_btn_show").attr("id", "Diners_Club_enRouteBulkButton");
            break;
        case "rupay":
            jQuery(".generate_btn_show").attr("id", "RuPayBulkButton");
            break;
        case "laser":
            jQuery(".generate_btn_show").attr("id", "LaserBulkButton");
            break;
        case "solo":
            jQuery(".generate_btn_show").attr("id", "SoloBulkButton");
            break;
        case "switch":
            jQuery(".generate_btn_show").attr("id", "SwitchBulkButton");
            break;
        case "cibc":
            jQuery(".generate_btn_show").attr("id", "Canadian_Imperial_Bank_of_CommerceBulkButton");
            break;
        case "royal_bank_of_canada":
            jQuery(".generate_btn_show").attr("id", "Royal_Bank_of_CanadaBulkButton");
            break;
        case "td_canada_trust":
            jQuery(".generate_btn_show").attr("id", "TD_Canada_TrustBulkButton");
            break;
        case "scotiabank":
            jQuery(".generate_btn_show").attr("id", "ScotiabankBulkButton");
            break;
        case "bmo":
            jQuery(".generate_btn_show").attr("id", "BMOBulkButton");
            break;
        case "instapayment":
            jQuery(".generate_btn_show").attr("id", "InstaPaymentBulkButton");
            break;
        case "hsbc":
            jQuery(".generate_btn_show").attr("id", "HSBC_CanadaBulkButton");
            break;
        case "verve":
            jQuery(".generate_btn_show").attr("id", "VerveBulkButton");
            break;
        case "mir":
            jQuery(".generate_btn_show").attr("id", "MIRBulkButton");
            break;
        case "troy":
            jQuery(".generate_btn_show").attr("id", "TroyBulkButton")
    }
}), jQuery(function() {
    homeOLAmericanExpressJSONs()
}), jQuery(".homePageOptions").change(function() {
    switch (jQuery("#typeOfCard").val()) {
        case "AE":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    homeOLAmericanExpressJSONs();
                    break;
                case "XML":
                    homeOLAmericanExpressXMLs();
                    break;
                case "CSV":
                    homeOLAmericanCSVs()
            }
            break;
        case "D":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    homeOLDiscoverJSONs();
                    break;
                case "XML":
                    homeOLDiscoverXMLs();
                    break;
                case "CSV":
                    homeOLDiscoverCSVs()
            }
            break;
        case "JCB":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    homeOLJcbJSONs();
                    break;
                case "XML":
                    homeOLJCBXMLs();
                    break;
                case "CSV":
                    homeOLJCBCSVs()
            }
            break;
        case "MC":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    homeOLMasterCardJSONs();
                    break;
                case "XML":
                    homeOLMasterXMLs();
                    break;
                case "CSV":
                    homeOLMasterCSVs()
            }
            break;
        case "V":
            switch (jQuery("#typeOfFile").val()) {
                case "JSON":
                    homeOLVisaJSONs();
                    break;
                case "XML":
                    homeOLvisaXMLs();
                    break;
                case "CSV":
                    homeOLVisaCSVs()
            }
    }
}), jQuery(document).on('click', '#btn_visasingleGenerate',function() {
    randomsOneVisaNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Visa"), jQuery("#inputirandomcardnumber").html(visaDigits), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#americanSingleGenerate',function() {
    randomsOneAmericanExpressCardNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("American Express"), jQuery("#inputirandomcardnumber").html(americanExpressDigits), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#discoverSingleGenerate',function() {
    randomsOneDiscoverCardNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Discover"), jQuery("#inputirandomcardnumber").html(discoverDigits), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#jcbSingleGenerate', function() {
    randomsOneJcbCardNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("JCB"), jQuery("#inputirandomcardnumber").html(jcbDigits), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#VisaElectronSingleGenerate',function() {
    randomsOneVisaElectronCardNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Visa Electron"), jQuery("#inputirandomcardnumber").html(VisaElectron), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#ChinaUnionPayCardGenerate',function() {
    randomsOneChinaUnionPayCardNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("China UnionPay"), jQuery("#inputirandomcardnumber").html(ChinaUnionPay), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#Diners_Club_Carte_BlancheCardGenerate', function() {
    randomsOneDiners_Club_Carte_BlancheNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Diners Club Carte Blanche"), jQuery("#inputirandomcardnumber").html(Diners_Club_Carte_Blanche), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#BankcardCardGenerate',function() {
    randomsOneBankcardCardNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Bankcard"), jQuery("#inputirandomcardnumber").html(Bankcard), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery("#diners_club_international_cardGenerate").click(function() {
    randomsOneDiners_Club_InternationalNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Diners Club International"), jQuery("#inputirandomcardnumber").html(Diners_Club_International), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#Diners_Club_United_States_Canada_cardGenerate',function() {
    randomsOneDiners_Club_United_States_CanadaNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Diners Club United States & Canada"), jQuery("#inputirandomcardnumber").html(Diners_Club_United_States_Canada), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#UATP_cardGenerate', function() {
    randomsOneUATPNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("UATP"), jQuery("#inputirandomcardnumber").html(UATP), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#Dankort_cardGenerate', function() {
    randomsOneDankortumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Dankort"), jQuery("#inputirandomcardnumber").html(Dankort), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#InterPayment_cardGenerate',function() {
    randomsOneInterPaymentNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("InterPayment"), jQuery("#inputirandomcardnumber").html(InterPayment), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#BankcardBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesBankcardJSONs(n);
            break;
        case "XML":
            generatesBankcardXMLs(n);
            break;
        case "CSV":
            generatesBankcardCSVs(n)
    }
});
var China_T_Union = "";

function randomsOneChina_T_UnionCardNumber() {
    for (var n = "", a = 0; a < 17; a++) {
        var s = Math.floor(Math.random() * chars_number.length);
        n += chars_number.charAt(s)
    }
    China_T_Union = 31 + n
}

function generatesChina_T_UnionJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneChina_T_UnionCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "China T-Union",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + China_T_Union + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneChina_T_UnionCardNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "China T-Union",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + China_T_Union + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesChina_T_UnionXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneChina_T_UnionCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;China T-Union&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + China_T_Union + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesChina_T_UnionCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneChina_T_UnionCardNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("China T-Union," + China_T_Union + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#China_T_UnionCardGenerate', function() {
    randomsOneChina_T_UnionCardNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("China T-Union"), jQuery("#inputirandomcardnumber").html(China_T_Union), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#China_T_UnionBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesChina_T_UnionJSONs(n);
            break;
        case "XML":
            generatesChina_T_UnionXMLs(n);
            break;
        case "CSV":
            generatesChina_T_UnionCSVs(n)
    }
});
var Diners_Club_enRoute_first = ["2014", "2149"],
    Diners_Club_enRoute = "";

function randomsOneDiners_Club_enRouteNumber() {
    for (var n = Diners_Club_enRoute_first[Math.floor(Math.random() * Diners_Club_enRoute_first.length)], a = "", s = 0; s < 11; s++) {
        var r = Math.floor(Math.random() * chars_number.length);
        a += chars_number.charAt(r)
    }
    Diners_Club_enRoute = n + a
}

function generatesDiners_Club_enRouteJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsOneDiners_Club_enRouteNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Diners Club enRoute",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Diners_Club_enRoute + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsOneDiners_Club_enRouteNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Diners Club enRoute",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Diners_Club_enRoute + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiners_Club_enRouteXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiners_Club_enRouteNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Diners Club enRoute&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Diners_Club_enRoute + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesDiners_Club_enRouteCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsOneDiners_Club_enRouteNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Diners Club enRoute," + Diners_Club_enRoute + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#Diners_Club_enRouteCardGenerate',function() {
    randomsOneDiners_Club_enRouteNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Diners Club enRoute"), jQuery("#inputirandomcardnumber").html(Diners_Club_enRoute), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#Diners_Club_enRouteBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesDiners_Club_enRouteJSONs(n);
            break;
        case "XML":
            generatesDiners_Club_enRouteXMLs(n);
            break;
        case "CSV":
            generatesDiners_Club_enRouteCSVs(n)
    }
});
var RuPay_first = ["60", "6521", "6522"],
    RuPay = "";

function randomsRuPayNumber() {
    var n = RuPay_first[Math.floor(Math.random() * RuPay_first.length)];
    if (2 == n.length) var a = 14;
    else a = 12;
    for (var s = "", r = 0; r < a; r++) {
        var e = Math.floor(Math.random() * chars_number.length);
        s += chars_number.charAt(e)
    }
    RuPay = n + s
}

function generatesRuPayJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsRuPayNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "RuPay",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + RuPay + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsRuPayNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "RuPay",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + RuPay + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesRuPayXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsRuPayNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;RuPay&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + RuPay + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesRuPayCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsRuPayNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("RuPay," + RuPay + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#RuPayCardGenerate', function() {
    randomsRuPayNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("RuPay"), jQuery("#inputirandomcardnumber").html(RuPay), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#RuPayBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesRuPayJSONs(n);
            break;
        case "XML":
            generatesRuPayXMLs(n);
            break;
        case "CSV":
            generatesRuPayCSVs(n)
    }
});
var Laser_first = ["6304", "6706", "6771", "6709"],
    Laser_length = ["16", "17", "18", "19"],
    Laser = "";

function randomsLaserNumber() {
    for (var n = Laser_first[Math.floor(Math.random() * Laser_first.length)], a = Laser_length[Math.floor(Math.random() * Laser_length.length)] - 4, s = "", r = 0; r < a; r++) {
        var e = Math.floor(Math.random() * chars_number.length);
        s += chars_number.charAt(e)
    }
    Laser = n + s
}

function generatesLaserJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsLaserNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Laser",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Laser + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsLaserNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Laser",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Laser + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesLaserXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsLaserNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Laser&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Laser + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesLaserCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsLaserNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Laser," + Laser + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#LaserCardGenerate', function() {
    randomsLaserNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Laser"), jQuery("#inputirandomcardnumber").html(Laser), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#LaserBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesLaserJSONs(n);
            break;
        case "XML":
            generatesLaserXMLs(n);
            break;
        case "CSV":
            generatesLaserCSVs(n)
    }
});
var Solo_first = ["6334", "6767"],
    Solo_length = ["16", "18", "19"],
    Solo = "";

function randomsSoloNumber() {
    for (var n = Solo_first[Math.floor(Math.random() * Solo_first.length)], a = Solo_length[Math.floor(Math.random() * Solo_length.length)] - 4, s = "", r = 0; r < a; r++) {
        var e = Math.floor(Math.random() * chars_number.length);
        s += chars_number.charAt(e)
    }
    Solo = n + s
}

function generatesSoloJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsSoloNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Solo",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Solo + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsSoloNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Solo",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Solo + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesSoloXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsSoloNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Solo&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Solo + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesSoloCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsSoloNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Solo," + Solo + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#SoloCardGenerate', function() {
    randomsSoloNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Solo"), jQuery("#inputirandomcardnumber").html(Solo), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#SoloBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesSoloJSONs(n);
            break;
        case "XML":
            generatesSoloXMLs(n);
            break;
        case "CSV":
            generatesSoloCSVs(n)
    }
});
var Switch_first = ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"],
    Switch_length = ["16", "18", "19"],
    Switch = "";

function randomsSwitchNumber() {
    var n = Switch_first[Math.floor(Math.random() * Switch_first.length)];
    4 == n.length ? rand = 4 : rand = 6;
    for (var a = Switch_length[Math.floor(Math.random() * Switch_length.length)] - rand, s = "", r = 0; r < a; r++) {
        var e = Math.floor(Math.random() * chars_number.length);
        s += chars_number.charAt(e)
    }
    Switch = n + s
}

function generatesSwitchJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsSwitchNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Switch",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Switch + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsSwitchNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Switch",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Switch + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesSwitchXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsSwitchNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Switch&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Switch + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesSwitchCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsSwitchNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Switch," + Switch + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#SwitchCardGenerate', function() {
    randomsSwitchNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Switch"), jQuery("#inputirandomcardnumber").html(Switch), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#SwitchBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesSwitchJSONs(n);
            break;
        case "XML":
            generatesSwitchXMLs(n);
            break;
        case "CSV":
            generatesSwitchCSVs(n)
    }
});
var Canadian_Imperial_Bank_of_Commerce = "";

function randomsCanadian_Imperial_Bank_of_CommerceNumber() {
    for (var n = "", a = 0; a < 12; a++) {
        var s = Math.floor(Math.random() * chars_number.length);
        n += chars_number.charAt(s)
    }
    Canadian_Imperial_Bank_of_Commerce = 4506 + n
}

function generatesCanadian_Imperial_Bank_of_CommerceJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsCanadian_Imperial_Bank_of_CommerceNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Canadian Imperial Bank of Commerce",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Canadian_Imperial_Bank_of_Commerce + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsCanadian_Imperial_Bank_of_CommerceNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Canadian Imperial Bank of Commerce",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Canadian_Imperial_Bank_of_Commerce + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesCanadian_Imperial_Bank_of_CommerceXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsCanadian_Imperial_Bank_of_CommerceNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Canadian Imperial Bank of Commerce&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Canadian_Imperial_Bank_of_Commerce + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesCanadian_Imperial_Bank_of_CommerceCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsCanadian_Imperial_Bank_of_CommerceNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Canadian Imperial Bank of Commerce," + Canadian_Imperial_Bank_of_Commerce + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#randomsCanadian_Imperial_Bank_of_CommerceNumberCardGenerate', function() {
    randomsCanadian_Imperial_Bank_of_CommerceNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Canadian Imperial Bank of Commerce"), jQuery("#inputirandomcardnumber").html(Canadian_Imperial_Bank_of_Commerce), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#Canadian_Imperial_Bank_of_CommerceBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesCanadian_Imperial_Bank_of_CommerceJSONs(n);
            break;
        case "XML":
            generatesCanadian_Imperial_Bank_of_CommerceXMLs(n);
            break;
        case "CSV":
            generatesCanadian_Imperial_Bank_of_CommerceCSVs(n)
    }
});
var Royal_Bank_of_Canada = "";

function randomsRoyal_Bank_of_CanadaNumber() {
    for (var n = "", a = 0; a < 14; a++) {
        var s = Math.floor(Math.random() * chars_number.length);
        n += chars_number.charAt(s)
    }
    Royal_Bank_of_Canada = 45 + n
}

function generatesRoyal_Bank_of_CanadaJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsRoyal_Bank_of_CanadaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Royal Bank of Canada",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Royal_Bank_of_Canada + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsRoyal_Bank_of_CanadaNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Royal Bank of Canada",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Royal_Bank_of_Canada + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesRoyal_Bank_of_CanadaXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsRoyal_Bank_of_CanadaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Royal Bank of Canada&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Royal_Bank_of_Canada + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesRoyal_Bank_of_CanadaCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsRoyal_Bank_of_CanadaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Royal Bank of Canada," + Royal_Bank_of_Canada + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#randomsRoyal_Bank_of_CanadaGenerate', function() {
    randomsRoyal_Bank_of_CanadaNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Royal Bank of Canada"), jQuery("#inputirandomcardnumber").html(Royal_Bank_of_Canada), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#Royal_Bank_of_CanadaBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesRoyal_Bank_of_CanadaJSONs(n);
            break;
        case "XML":
            generatesRoyal_Bank_of_CanadaXMLs(n);
            break;
        case "CSV":
            generatesRoyal_Bank_of_CanadaCSVs(n)
    }
});
var TD_Canada_Trust = "";

function randomsTD_Canada_TrustNumber() {
    for (var n = "", a = 0; a < 12; a++) {
        var s = Math.floor(Math.random() * chars_number.length);
        n += chars_number.charAt(s)
    }
    TD_Canada_Trust = 4724 + n
}

function generatesTD_Canada_TrustJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsTD_Canada_TrustNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "TD Canada Trust",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + TD_Canada_Trust + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsTD_Canada_TrustNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "TD Canada Trust",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + TD_Canada_Trust + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesTD_Canada_TrustXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsTD_Canada_TrustNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;TD Canada Trust&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + TD_Canada_Trust + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesTD_Canada_TrustCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsTD_Canada_TrustNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("TD Canada Trust," + TD_Canada_Trust + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#randomsTD_Canada_TrustGenerate', function() {
    randomsTD_Canada_TrustNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("TD Canada Trust"), jQuery("#inputirandomcardnumber").html(TD_Canada_Trust), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#TD_Canada_TrustBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesTD_Canada_TrustJSONs(n);
            break;
        case "XML":
            generatesTD_Canada_TrustXMLs(n);
            break;
        case "CSV":
            generatesTD_Canada_TrustCSVs(n)
    }
});
var Scotiabank = "";

function randomsScotiabankNumber() {
    for (var n = "", a = 0; a < 12; a++) {
        var s = Math.floor(Math.random() * chars_number.length);
        n += chars_number.charAt(s)
    }
    Scotiabank = 4536 + n
}

function generatesScotiabankJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsScotiabankNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Scotiabank",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Scotiabank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsScotiabankNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Scotiabank",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Scotiabank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesScotiabankXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsScotiabankNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Scotiabank&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Scotiabank + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesScotiabankCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsScotiabankNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Scotiabank," + Scotiabank + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#randomsScotiabankGenerate', function() {
    randomsScotiabankNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Scotiabank"), jQuery("#inputirandomcardnumber").html(Scotiabank), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#ScotiabankBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesScotiabankJSONs(n);
            break;
        case "XML":
            generatesScotiabankXMLs(n);
            break;
        case "CSV":
            generatesScotiabankCSVs(n)
    }
});
var BMO = "";

function randomsBMONumber() {
    for (var n = "", a = 0; a < 13; a++) {
        var s = Math.floor(Math.random() * chars_number.length);
        n += chars_number.charAt(s)
    }
    BMO = 500 + n
}

function generatesBMOJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsBMONumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "BMO",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + BMO + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsBMONumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "BMO",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + BMO + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesBMOXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsBMONumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;BMO&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + BMO + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesBMOCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsBMONumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("BMO," + BMO + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#randomsBMOGenerate', function() {
    randomsBMONumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("BMO"), jQuery("#inputirandomcardnumber").html(BMO), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#BMOBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesBMOJSONs(n);
            break;
        case "XML":
            generatesBMOXMLs(n);
            break;
        case "CSV":
            generatesBMOCSVs(n)
    }
});
var HSBC_Canada = "";

function randomsHSBC_CanadaNumber() {
    for (var n = "", a = 0; a <= 14; a++) {
        var s = Math.floor(Math.random() * chars_number.length);
        n += chars_number.charAt(s)
    }
    HSBC_Canada = 56 + n
}

function generatesHSBC_CanadaJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsHSBC_CanadaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "HSBC Canada",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + HSBC_Canada + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsHSBC_CanadaNumber(n), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "HSBC Canada",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + HSBC_Canada + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesHSBC_CanadaXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsHSBC_CanadaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;HSBC Canada&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + HSBC_Canada + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesHSBC_CanadaCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsHSBC_CanadaNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("HSBC Canada," + HSBC_Canada + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#randomsHSBC_CanadaGenerate', function() {
    randomsHSBC_CanadaNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("HSBC Canada"), jQuery("#inputirandomcardnumber").html(HSBC_Canada), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#HSBC_CanadaBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesHSBC_CanadaJSONs(n);
            break;
        case "XML":
            generatesHSBC_CanadaXMLs(n);
            break;
        case "CSV":
            generatesHSBC_CanadaCSVs(n)
    }
});
var InstaPayment = "";

function randomsInstaPaymentNumber() {
    for (var n = Math.floor(3 * Math.random() + 637), a = "", s = 0; s < 13; s++) {
        var r = Math.floor(Math.random() * chars_number.length);
        a += chars_number.charAt(r)
    }
    InstaPayment = n + a
}

function generatesInstaPaymentJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsInstaPaymentNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "InstaPayment",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + InstaPayment + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsInstaPaymentNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "InstaPayment",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + InstaPayment + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesInstaPaymentXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsInstaPaymentNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;InstaPayment&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + InstaPayment + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesInstaPaymentCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsInstaPaymentNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("InstaPayment," + InstaPayment + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#randomsInstaPaymentGenerate',function() {
    randomsInstaPaymentNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("InstaPayment"), jQuery("#inputirandomcardnumber").html(InstaPayment), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#InstaPaymentBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesInstaPaymentJSONs(n);
            break;
        case "XML":
            generatesInstaPaymentXMLs(n);
            break;
        case "CSV":
            generatesInstaPaymentCSVs(n)
    }
});
var MIR = "";

function randomsMIRNumber() {
    for (var n = Math.floor(5 * Math.random() + 2200), a = "", s = 0; s < 12; s++) {
        var r = Math.floor(Math.random() * chars_number.length);
        a += chars_number.charAt(r)
    }
    MIR = n + a
}

function generatesMIRJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsMIRNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "MIR",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + MIR + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsMIRNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "MIR",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + MIR + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesMIRXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsMIRNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;MIR&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + MIR + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesMIRCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsMIRNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("MIR," + MIR + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#randomsMIRGenerate', function() {
    randomsMIRNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("MIR"), jQuery("#inputirandomcardnumber").html(MIR), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#MIRBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesMIRJSONs(n);
            break;
        case "XML":
            generatesMIRXMLs(n);
            break;
        case "CSV":
            generatesMIRCSVs(n)
    }
});
var Troy = "";

function randomsTroyNumber() {
    for (var n = Math.floor(90 * Math.random() + 979200), a = "", s = 0; s < 10; s++) {
        var r = Math.floor(Math.random() * chars_number.length);
        a += chars_number.charAt(r)
    }
    Troy = n + a
}

function generatesTroyJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsTroyNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Troy",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Troy + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsTroyNumber(n), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Troy",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Troy + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesTroyXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsTroyNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Troy&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Troy + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesTroyCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsTroyNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Troy," + Troy + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}
jQuery(document).on('click', '#randomsTroyGenerate',function() {
    randomsTroyNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Troy"), jQuery("#inputirandomcardnumber").html(Troy), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#TroyBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesTroyJSONs(n);
            break;
        case "XML":
            generatesTroyXMLs(n);
            break;
        case "CSV":
            generatesTroyCSVs(n)
    }
});
var Verve_length = ["16", "19"],
    Verve_first = ["506099-506198", "650002-650027"],
    Verve = "";

function randomsVerveNumber() {
    for (var n = Verve_first[Math.floor(Math.random() * Verve_first.length)].split("-"), a = parseInt(n[0]), s = parseInt(n[1]), r = Math.floor(Math.random() * (s - a + 1) + a), e = Verve_length[Math.floor(Math.random() * Verve_length.length)] - 6, t = "", d = 0; d < e; d++) {
        var o = Math.floor(Math.random() * chars_number.length);
        t += chars_number.charAt(o)
    }
    Verve = r + t
}

function generatesVerveJSONs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("[<br>");
    for (var r = 0; r < s - 1; r++) {
        randomsVerveNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Verve",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Verve + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; },<br>")
    }
    randomsVerveNumber(), randomsANameAndAddress(), a.push("&nbsp; &nbsp; {<br>"), a.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Verve",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + Verve + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join("") + " " + secondNameRandomed.join("") + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + t + '",<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Bank": "' + typebank + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(900 * Math.random() + 100) + '",<br>'), a.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "'), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + '"<br>'), a.push("&nbsp; &nbsp; &nbsp; &nbsp; }<br>"), a.push("&nbsp; &nbsp; }<br>"), a.push("]"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadMasterCardJSONButton" class="download_file_card"> Download </button>'), jQuery("#downloadMasterCardJSONButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesVerveXMLs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("&#x0003C;root&#x0003E;<br>");
    for (var r = 0; r < s; r++) {
        randomsVerveNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Verve&#x0003C;/IssuingNetwork&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;" + Verve + "&#x0003C;/CardNumber&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;" + nameRandomed.join("") + " " + secondNameRandomed.join("") + "&#x0003C;/Name&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;" + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "&#x0003C;/Address&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;" + t + "&#x0003C;/Country&#x0003E;<br>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Bank&#x0003E;" + typebank + "&#x0003C;/Bank&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;" + Math.floor(900 * Math.random() + 100) + "&#x0003C;/CVV&#x0003E;<br>"), a.push("&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>"), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "&#x0003C;/Exp&#x0003E;<br>"), a.push("&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>")
    }
    a.push("&#x0003C;/root&#x0003E;"), jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaXMLButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaXMLButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function generatesVerveCSVs(n) {
    var a = [],
        s = jQuery("#numberOfEntriesHomePage").val();
    a.push("IssuingNetwork,CardNumber,Name,Address,Country,Bank,CVV,Exp<br>");
    for (var r = 0; r < s; r++) {
        randomsVerveNumber();
        var e = n;
        randombankname();
        var t = coutryRandomed;
        if (jQuery.trim(e).length > 0) t = (t = e.substr(0, 1).toUpperCase() + e.substr(1)).replace("-", " ");
        randomsANameAndAddress(), a.push("Verve," + Verve + "," + nameRandomed.join("") + " " + secondNameRandomed.join("") + "," + addressRandomed.join("") + " " + Math.floor(150 * Math.random() + 1) + "," + t + "," + typebank + "," + Math.floor(900 * Math.random() + 100) + ","), monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString() + "<br>")
    }
    jQuery("#mainCont").addClass("generated"), jQuery("#mainCont").html(a), jQuery("#mainCont_btn").append('<button id="downloadVisaCSVButton" class="download_file_card"> Download </button>'), jQuery("#downloadVisaCSVButton").click(function() {
        var n = jQuery("#mainCont").text();
        download(n, "file.txt", "text/plain")
    })
}

function SingleCardValidation(n) {
    var a = jQuery("#validatetext").val().replace(/ /g, ""),
        s = a.length;
    jQuery(".donate-btn .donate").show(), jQuery("#resulthtml").html('<div class="md-12"><div class="validat-result-wrapper"><h2>Result:</h2><div id="firstRowChek"><div id="underFirstRow1"><h5 class="valid_x notvalid_x">Luhn Algorithm Check<span class="notvalid-icon"><span></span><span></span></span></h5></div><div id="Check_Algorithm"><p>The credit card number you entered  <strong>passed</strong>  the Luhn Check and is therefore a valid credit card number!</p></div></div><div id="secondRowChek"><div id="underSecondRow1"><h5 class="notvalid_x">Major Industry Identifier<span class="notvalid-icon"><span></span><span></span></span></h5></div><div id="Major_Industry_Identifier"><p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p></div></div><div id="thirdRowChek"><div id="underThirdRow1"><h5 class="notvalid_x">Issuer identification number<span class="notvalid-icon"><span></span><span></span></span></h5></div><div id="Issuer_identification_number"><p>This credit cards issuer is <strong>Visa</strong>.</p></div></div><div id="fourthRowChek"><div id="underFourthRow1"><h5 class="notvalid_x">Personal Account Number<span class="notvalid-icon"><span></span><span></span></span></h5></div><div id="Personal_Account_Number"><p>Your personal account number is <strong>543083772</strong> and your checksum is <strong>9</strong>.</p></div></div></div></div>'), jQuery(".validat-image").removeClass("highlight"), jQuery(".notvalid_x").removeClass("notvalid"), jQuery(".valid_x").removeClass("valid"), jQuery(".validat-image-wrapper").removeClass("highlight-wrapper"), jQuery("#Check_Algorithm").html("<p>The credit card number you entered  <strong>passed</strong>  the Luhn Check and is therefore a valid credit card number!</p>");
    var r = a.slice(-1),
        e = a.slice(-10).slice(0, -1);
    jQuery("#Personal_Account_Number").html("<p>Your personal account number is <strong>" + e + "</strong> and your checksum is <strong>" + r + "</strong>.</p>"), jQuery(".valid_x").addClass("valid"), "visa" == n ? 4 == parseInt(a.slice(0, 1)) && s >= 13 && s <= 19 && 4 == parseInt(a.slice(0, 1)) && s >= 13 && s <= 19 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Visa.png" alt="Visa Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Visa</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "switch" == n ? 4 == parseInt(a.slice(0, 1)) && s >= 13 && s <= 19 ? (4903 == parseInt(a.slice(0, 4)) || 4905 == parseInt(a.slice(0, 4)) || 4911 == parseInt(a.slice(0, 4)) || 4936 == parseInt(a.slice(0, 4))) && s >= 16 && s <= 19 && 17 != s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/switch.png" alt="Switch Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Switch</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : (4903 == parseInt(a.slice(0, 4)) || 4905 == parseInt(a.slice(0, 4)) || 4911 == parseInt(a.slice(0, 4)) || 4936 == parseInt(a.slice(0, 4)) || 6333 == parseInt(a.slice(0, 4)) || 6759 == parseInt(a.slice(0, 4)) || 564182 == parseInt(a.slice(0, 6)) || 633110 == parseInt(a.slice(0, 6))) && s >= 16 && s <= 19 && 17 != s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/switch.png" alt="Switch Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Switch</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "canadian-imperial-bank-of-commerce" == n ? 4 == parseInt(a.slice(0, 1)) && s >= 13 && s <= 19 && 4506 == parseInt(a.slice(0, 4)) && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Canadian-Imperial-Bank-of-Commerce-Advantage.png" alt="Canadian Imperial Bank of Commerce Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Canadian Imperial Bank of Commerce</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "scotiabank" == n ? 4 == parseInt(a.slice(0, 1)) && s >= 13 && s <= 19 && 4536 == parseInt(a.slice(0, 4)) && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Scotiabank-Scotia.png" alt="Scotiabank Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Scotiabank</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "TD-Canada-Trust" == n ? 4 == parseInt(a.slice(0, 1)) && s >= 13 && s <= 19 && 4724 == parseInt(a.slice(0, 4)) && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/TD-Canada-Trust-Access.png" alt="TD Canada Trust Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>TD Canada Trust</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "royal-bank-of-canada" == n ? 4 == parseInt(a.slice(0, 1)) && s >= 13 && s <= 19 && 45 == parseInt(a.slice(0, 2)) && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Royal-Bank-of-Canada-Client-Card.png" alt="Royal Bank of Canada Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Royal Bank of Canada</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "visa-electron" == n ? 4 == parseInt(a.slice(0, 1)) && s >= 13 && s <= 19 && (4026 == parseInt(a.slice(0, 4)) || 4405 == parseInt(a.slice(0, 4)) || 4508 == parseInt(a.slice(0, 4)) || 4844 == parseInt(a.slice(0, 4)) || 4913 == parseInt(a.slice(0, 4)) || 4917 == parseInt(a.slice(0, 4)) || 417500 == parseInt(a.slice(0, 6))) ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Visa-Electron.png" alt="Visa Electron Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Visa Electron</strong>.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "american-express" == n ? 34 == parseInt(a.slice(0, 2)) || 37 == parseInt(a.slice(0, 2)) && 15 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery("#americanexpressvalidat").addClass("highlight"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/American-Express.png" alt="American Express Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>American Express</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Travel and entertainment and banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "rupay" == n ? 6011 == parseInt(a.slice(0, 4)) || parseInt(a.slice(0, 6)) >= 622126 && parseInt(a.slice(0, 6)) <= 622925 || parseInt(a.slice(0, 3)) >= 644 && parseInt(a.slice(0, 3)) <= 649 || 65 == parseInt(a.slice(0, 2)) || 6521 == parseInt(a.slice(0, 4)) || 6522 == parseInt(a.slice(0, 4)) || 60 == parseInt(a.slice(0, 2)) && 16 == s ? 6521 != parseInt(a.slice(0, 4)) && 6522 != parseInt(a.slice(0, 4)) && 60 != parseInt(a.slice(0, 2)) || 16 != s || 6011 != parseInt(a.slice(0, 4)) ? (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Rupay.png" alt="RuPay Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>RuPay</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "discover" == n ? (6011 == parseInt(a.slice(0, 4)) || parseInt(a.slice(0, 6)) >= 622126 && parseInt(a.slice(0, 6)) <= 622925 || parseInt(a.slice(0, 3)) >= 644 && parseInt(a.slice(0, 3)) <= 649 || 65 == parseInt(a.slice(0, 2)) || 6521 == parseInt(a.slice(0, 4)) || 6522 == parseInt(a.slice(0, 4)) || 60 == parseInt(a.slice(0, 2)) && 16 == s) && (6011 == parseInt(a.slice(0, 4)) || parseInt(a.slice(0, 6)) >= 622126 && parseInt(a.slice(0, 6)) <= 622925 || parseInt(a.slice(0, 3)) >= 644 && parseInt(a.slice(0, 3)) <= 649 || 65 == parseInt(a.slice(0, 2)) && 16 == s) ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Discover.png" alt="Discover Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Discover</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Merchandising and banking/financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "china-unionpay" == n ? 62 == parseInt(a.slice(0, 2)) && s >= 16 && s <= 19 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/China-UnionPay.png" alt="China UnionPay Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>China UnionPay</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Chinese financial services corporation and banking and financial</strong> .</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "mastercard" == n ? parseInt(a.slice(0, 2)) >= 51 && parseInt(a.slice(0, 2)) <= 55 && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/MasterCard.png" alt="MasterCard Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>MasterCard</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "interpayment" == n ? 636 == parseInt(a.slice(0, 3)) && s >= 16 && s <= 19 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/InterPay.png" alt="InterPayment Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>InterPayment</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "dankort" == n ? 5019 == parseInt(a.slice(0, 4)) && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Dankort.png" alt="Dankort Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Dankort</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "uatp" == n ? 1 == parseInt(a.slice(0, 1)) && 15 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/UATP.png" alt="UATP Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>UATP</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Travel and entertainment and banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "jcb" == n ? parseInt(a.slice(0, 4)) >= 3528 && parseInt(a.slice(0, 4)) <= 3589 && s >= 12 && s <= 19 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/JCB.png" alt="JCB Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>JCB</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Travel and entertainment and banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "diners-club-international" == n ? parseInt(a.slice(0, 3)) >= 300 && parseInt(a.slice(0, 3)) <= 305 || 309 == parseInt(a.slice(0, 3)) || 36 == parseInt(a.slice(0, 2)) || 38 == parseInt(a.slice(0, 2)) || 39 == parseInt(a.slice(0, 2)) && s >= 14 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Diners-Club-International.png" alt="Diners Club International Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Diners Club International</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "bankcard" == n ? (5610 == parseInt(a.slice(0, 4)) || parseInt(a.slice(0, 6)) >= 560221 && parseInt(a.slice(0, 6)) <= 560225) && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Bankcard.png" alt="Bankcard Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Bankcard</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "solo" == n ? (6334 == parseInt(a.slice(0, 4)) || 6767 == parseInt(a.slice(0, 4))) && s >= 16 && s <= 19 && 17 != s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/solo.png" alt="Solo Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Solo</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "laser" == n ? (6304 == parseInt(a.slice(0, 4)) || 6706 == parseInt(a.slice(0, 4)) || 6771 == parseInt(a.slice(0, 4)) || 6709 == parseInt(a.slice(0, 4))) && s >= 16 && s <= 19 && 15 != s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Laser.png" alt="Laser Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Laser</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "instapayment" == n ? parseInt(a.slice(0, 3)) >= 637 && parseInt(a.slice(0, 3)) <= 639 && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/InstaPayment.png" alt="InstaPayment Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>InstaPayment</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "mir" == n ? parseInt(a.slice(0, 4)) >= 2200 && parseInt(a.slice(0, 4)) <= 2204 && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/MIR.png" alt="MIR Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>MIR</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "troy" == n ? parseInt(a.slice(0, 6)) >= 979200 && parseInt(a.slice(0, 6)) <= 979289 && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/troy.png" alt="Troy Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Troy</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "verve" == n ? parseInt(a.slice(0, 6)) >= 506099 && parseInt(a.slice(0, 6)) <= 506198 || parseInt(a.slice(0, 6)) >= 650002 && parseInt(a.slice(0, 6)) <= 650027 && s >= 16 && s <= 19 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Verve.png" alt="Verve Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Verve</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "bmo" == n ? 500 == parseInt(a.slice(0, 3)) && 16 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/BMO-ABM.png" alt="BMO Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>BMO</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "hsbc-canada" == n ? 56 == parseInt(a.slice(0, 2)) && 16 == s ? (jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/HSBC-Bank-Canada.png" alt="HSBC Canada Card">'), jQuery("#HSBC_validat").addClass("highlight"), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>HSBC Canada</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "maestro" == n ? parseInt(a.slice(0, 6)) >= 5e5 && parseInt(a.slice(0, 6)) <= 509999 || parseInt(a.slice(0, 6)) >= 56e4 && parseInt(a.slice(0, 6)) <= 589999 || parseInt(a.slice(0, 6)) >= 6e5 && parseInt(a.slice(0, 6)) <= 699999 && s >= 12 && s <= 19 && 16 != s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Maestro.png" alt="Maestro Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Maestro</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "china-t-union" == n ? 31 == parseInt(a.slice(0, 2)) && 19 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/china-t-union.png" alt="China T-Union Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>China T-Union</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : "diners-club-enroute" == n ? 2014 != parseInt(a.slice(0, 4)) && 2149 != parseInt(a.slice(0, 4)) || 15 != s ? (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Diners-Club-International.png" alt="Diners Club enRoute Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Diners Club enRoute</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : "diners-club-united-states-canada" == n ? 55 != parseInt(a.slice(0, 2)) && 54 != parseInt(a.slice(0, 2)) || 16 != s ? (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Diners-Club-International.png" alt="Diners Club United States & Canada">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Diners Club United States & Canada</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : "diners-club-carte-blanche" == n && 30 == parseInt(a.slice(0, 2)) && 14 == s ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Diners-Club-Carte-Blanche.png" alt="Diners Club Carte Blanche">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Diners Club Carte Blanche</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()), jQuery(".validat-image-wrapper").removeClass("highlight-wrapper")
}

function CardValidation() {
    jQuery(".donate-btn .donate").show();
    var n = jQuery("#validatetext").val().replace(/ /g, ""),
        a = n.length;
    jQuery("#resulthtml").html('<div class="md-12"><div class="validat-result-wrapper"><h2>Result:</h2><div id="firstRowChek"><div id="underFirstRow1"><h5 class="valid_x notvalid_x">Luhn Algorithm Check<span class="notvalid-icon"><span></span><span></span></span></h5></div><div id="Check_Algorithm"><p>The credit card number you entered  <strong>passed</strong>  the Luhn Check and is therefore a valid credit card number!</p></div></div><div id="secondRowChek"><div id="underSecondRow1"><h5 class="notvalid_x">Major Industry Identifier<span class="notvalid-icon"><span></span><span></span></span></h5></div><div id="Major_Industry_Identifier"><p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p></div></div><div id="thirdRowChek"><div id="underThirdRow1"><h5 class="notvalid_x">Issuer identification number<span class="notvalid-icon"><span></span><span></span></span></h5></div><div id="Issuer_identification_number"><p>This credit cards issuer is <strong>Visa</strong>.</p></div></div><div id="fourthRowChek"><div id="underFourthRow1"><h5 class="notvalid_x">Personal Account Number<span class="notvalid-icon"><span></span><span></span></span></h5></div><div id="Personal_Account_Number"><p>Your personal account number is <strong>543083772</strong> and your checksum is <strong>9</strong>.</p></div></div></div></div>'), jQuery(".validat-image").removeClass("highlight"), jQuery(".notvalid_x").removeClass("notvalid"), jQuery(".valid_x").removeClass("valid"), jQuery(".validat-image-wrapper").removeClass("highlight-wrapper"), jQuery("#Check_Algorithm").html("<p>The credit card number you entered  <strong>passed</strong>  the Luhn Check and is therefore a valid credit card number!</p>");
    var s = n.slice(-1),
        r = n.slice(-10).slice(0, -1);
    jQuery("#Personal_Account_Number").html("<p>Your personal account number is <strong>" + r + "</strong> and your checksum is <strong>" + s + "</strong>.</p>"), jQuery(".valid_x").addClass("valid"), 4 == parseInt(n.slice(0, 1)) && a >= 13 && a <= 19 ? (4903 == parseInt(n.slice(0, 4)) || 4905 == parseInt(n.slice(0, 4)) || 4911 == parseInt(n.slice(0, 4)) || 4936 == parseInt(n.slice(0, 4))) && a >= 16 && a <= 19 && 17 != a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/switch.png" alt="Switch Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Switch</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 4506 == parseInt(n.slice(0, 4)) && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Canadian-Imperial-Bank-of-Commerce-Advantage.png" alt="Canadian Imperial Bank of Commerce Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Canadian Imperial Bank of Commerce</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 4536 == parseInt(n.slice(0, 4)) && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Scotiabank-Scotia.png" alt="Scotiabank Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Scotiabank</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 4724 == parseInt(n.slice(0, 4)) && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/TD-Canada-Trust-Access.png" alt="TD Canada Trust Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>TD Canada Trust</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 45 == parseInt(n.slice(0, 2)) && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Royal-Bank-of-Canada-Client-Card.png" alt="Royal Bank of Canada Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Royal Bank of Canada</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 4026 == parseInt(n.slice(0, 4)) || 4405 == parseInt(n.slice(0, 4)) || 4508 == parseInt(n.slice(0, 4)) || 4844 == parseInt(n.slice(0, 4)) || 4913 == parseInt(n.slice(0, 4)) || 4917 == parseInt(n.slice(0, 4)) || 417500 == parseInt(n.slice(0, 6)) ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Visa-Electron.png" alt="Visa Electron Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Visa Electron</strong>.</p>"), jQuery(".notvalid_x").addClass("valid")) : 4 == parseInt(n.slice(0, 1)) && a >= 13 && a <= 19 && (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Visa.png" alt="Visa Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Visa</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 34 == parseInt(n.slice(0, 2)) || 37 == parseInt(n.slice(0, 2)) && 15 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery("#americanexpressvalidat").addClass("highlight"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/American-Express.png" alt="American Express Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>American Express</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Travel and entertainment and banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 6011 == parseInt(n.slice(0, 4)) || parseInt(n.slice(0, 6)) >= 622126 && parseInt(n.slice(0, 6)) <= 622925 || parseInt(n.slice(0, 3)) >= 644 && parseInt(n.slice(0, 3)) <= 649 || 65 == parseInt(n.slice(0, 2)) || 6521 == parseInt(n.slice(0, 4)) || 6522 == parseInt(n.slice(0, 4)) || 60 == parseInt(n.slice(0, 2)) && 16 == a ? (6521 != parseInt(n.slice(0, 4)) && 6522 != parseInt(n.slice(0, 4)) && 60 != parseInt(n.slice(0, 2)) || 16 != a || 6011 != parseInt(n.slice(0, 4)) || (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Rupay.png" alt="RuPay Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>RuPay</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")), (6011 == parseInt(n.slice(0, 4)) || parseInt(n.slice(0, 6)) >= 622126 && parseInt(n.slice(0, 6)) <= 622925 || parseInt(n.slice(0, 3)) >= 644 && parseInt(n.slice(0, 3)) <= 649 || 65 == parseInt(n.slice(0, 2)) && 16 == a) && (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Discover.png" alt="Discover Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Discover</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Merchandising and banking/financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid"))) : 62 == parseInt(n.slice(0, 2)) && a >= 16 && a <= 19 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/China-UnionPay.png" alt="China UnionPay Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>China UnionPay</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Chinese financial services corporation and banking and financial</strong> .</p>"), jQuery(".notvalid_x").addClass("valid")) : parseInt(n.slice(0, 2)) >= 51 && parseInt(n.slice(0, 2)) <= 55 && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/MasterCard.png" alt="MasterCard Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>MasterCard</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 636 == parseInt(n.slice(0, 3)) && a >= 16 && a <= 19 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/InstaPayment.png" alt="InterPayment Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>InterPayment</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 5019 == parseInt(n.slice(0, 4)) && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Dankort.png" alt="Dankort Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Dankort</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 1 == parseInt(n.slice(0, 1)) && 15 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/UATP.png" alt="UATP Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>UATP</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Travel and entertainment and banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : parseInt(n.slice(0, 4)) >= 3528 && parseInt(n.slice(0, 4)) <= 3589 && a >= 12 && a <= 19 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/JCB.png" alt="JCB Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>JCB</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Travel and entertainment and banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : parseInt(n.slice(0, 3)) >= 300 && parseInt(n.slice(0, 3)) <= 305 || 309 == parseInt(n.slice(0, 3)) || 36 == parseInt(n.slice(0, 2)) || 38 == parseInt(n.slice(0, 2)) || 39 == parseInt(n.slice(0, 2)) && a >= 14 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Diners-Club-International.png" alt="Diners Club International Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Diners Club International</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (5610 == parseInt(n.slice(0, 4)) || parseInt(n.slice(0, 6)) >= 560221 && parseInt(n.slice(0, 6)) <= 560225) && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Bankcard.png" alt="Bankcard Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Bankcard</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (6334 == parseInt(n.slice(0, 4)) || 6767 == parseInt(n.slice(0, 4))) && a >= 16 && a <= 19 && 17 != a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/solo.png" alt="Solo Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Solo</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (4903 == parseInt(n.slice(0, 4)) || 4905 == parseInt(n.slice(0, 4)) || 4911 == parseInt(n.slice(0, 4)) || 4936 == parseInt(n.slice(0, 4)) || 6333 == parseInt(n.slice(0, 4)) || 6759 == parseInt(n.slice(0, 4)) || 564182 == parseInt(n.slice(0, 6)) || 633110 == parseInt(n.slice(0, 6))) && a >= 16 && a <= 19 && 17 != a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/switch.png" alt="Switch Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Switch</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (6304 == parseInt(n.slice(0, 4)) || 6706 == parseInt(n.slice(0, 4)) || 6771 == parseInt(n.slice(0, 4)) || 6709 == parseInt(n.slice(0, 4))) && a >= 16 && a <= 19 && 15 != a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Laser.png" alt="Laser Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Laser</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : parseInt(n.slice(0, 3)) >= 637 && parseInt(n.slice(0, 3)) <= 639 && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/InterPay.png" alt="InstaPayment Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>InstaPayment</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : parseInt(n.slice(0, 4)) >= 2200 && parseInt(n.slice(0, 4)) <= 2204 && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/MIR.png" alt="MIR Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>MIR</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : parseInt(n.slice(0, 6)) >= 979200 && parseInt(n.slice(0, 6)) <= 979289 && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/troy.png" alt="Troy Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Troy</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : parseInt(n.slice(0, 6)) >= 506099 && parseInt(n.slice(0, 6)) <= 506198 || parseInt(n.slice(0, 6)) >= 650002 && parseInt(n.slice(0, 6)) <= 650027 && a >= 16 && a <= 19 ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Verve.png" alt="Verve Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Verve</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 500 == parseInt(n.slice(0, 3)) && 16 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/BMO-ABM.png" alt="BMO Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>BMO</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 56 == parseInt(n.slice(0, 2)) && 16 == a ? (jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/HSBC-Bank-Canada.png" alt="HSBC Canada Card">'), jQuery("#HSBC_validat").addClass("highlight"), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>HSBC Canada</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : parseInt(n.slice(0, 6)) >= 5e5 && parseInt(n.slice(0, 6)) <= 509999 || parseInt(n.slice(0, 6)) >= 56e4 && parseInt(n.slice(0, 6)) <= 589999 || parseInt(n.slice(0, 6)) >= 6e5 && parseInt(n.slice(0, 6)) <= 699999 && a >= 12 && a <= 19 && 16 != a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Maestro.png" alt="Maestro Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Maestro</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 31 == parseInt(n.slice(0, 2)) && 19 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/china-t-union.png" alt="China T-Union Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>China T-Union</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : 2014 != parseInt(n.slice(0, 4)) && 2149 != parseInt(n.slice(0, 4)) || 15 != a ? 55 != parseInt(n.slice(0, 2)) && 54 != parseInt(n.slice(0, 2)) || 16 != a ? 30 == parseInt(n.slice(0, 2)) && 14 == a ? (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Diners-Club-Carte-Blanche.png" alt="Diners Club Carte Blanche">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Diners Club Carte Blanche</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery("#Check_Algorithm").html("<p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>"), jQuery("#Major_Industry_Identifier").html("<p>We couldn't find a major industry that matched your credit card number. Sorry.</p>"), jQuery("#Issuer_identification_number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery("#Personal_Account_Number").html("<p>We couldn't find an institution that matched your credit card number. Sorry.</p>"), jQuery(".notvalid_x").removeClass("valid"), jQuery(".valid_x").removeClass("valid"), jQuery(".notvalid_x").addClass("notvalid"), jQuery(".validat_card_image img:last-child").remove()) : (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Diners-Club-International.png" alt="Diners Club United States & Canada">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Diners Club United States & Canada</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")) : (jQuery(".validat-image-wrapper").addClass("highlight-wrapper"), jQuery(".validat_card_image").html('<img itemprop="image" class="vadidat_img_center"   src="' + site_url + 'assets/images/CardMedium/Diners-Club-International.png" alt="Diners Club enRoute Card">'), jQuery("#Issuer_identification_number").html("<p>This credit card's issuer is <strong>Diners Club enRoute</strong>.</p>"), jQuery("#Major_Industry_Identifier").html("<p>This credit card number belongs to the <strong>Banking and financial</strong> industry.</p>"), jQuery(".notvalid_x").addClass("valid")), jQuery(".validat-image-wrapper").removeClass("highlight-wrapper")
}

jQuery(document).on('click', '#randomsVerveGenerate',function() {
    randomsVerveNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Verve"), jQuery("#inputirandomcardnumber").html(Verve), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on("click", "#VerveBulkButton", function() {
    event.preventDefault(), jQuery("#mainCont_btn").html("");
    var n = jQuery("#typecountry").val();
    switch (jQuery("#typeOfFile").val()) {
        case "JSON":
            generatesVerveJSONs(n);
            break;
        case "XML":
            generatesVerveXMLs(n);
            break;
        case "CSV":
            generatesVerveCSVs(n)
    }
}), jQuery(document).on('click', '#MaestroCardGenerate',function() {
    randomsOneMaestroCardNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Maestro"), jQuery("#inputirandomcardnumber").html(Maestro), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery(document).on('click', '#masterSingleGenerate',function() {
    randomsOneMasterCardNumber();
    var n = jQuery(this).attr("data-country"),
        a = coutryRandomed;
    if (jQuery.trim(n).length > 0) a = n.substr(0, 1).toUpperCase() + n.substr(1);
    randomsANameAndAddress();
    var s = [];
    monthRandomed < 10 && s.push("0"), s.push(monthRandomed + "/" + yearRandomed.toString()), jQuery("#inputirandomissue").html("Master Card"), jQuery("#inputirandomcardnumber").html(masterCardDigits), jQuery("#inputirandomname").html(nameRandomed + " " + secondNameRandomed), jQuery("#inputirandomadress").html(addressRandomed + " " + Math.floor(150 * Math.random() + 1)), jQuery("#inputirandomcountry").html(a), jQuery("#inputirandombank").html(typebank), jQuery("#inputirandomcvv").html(Math.floor(900 * Math.random() + 100)), jQuery("#inputirandomexp").html(s)
}), jQuery("#randomVisaNumbersUl li").each(function() {
    randomsOneVisaNumber(), jQuery(this).text(visaDigits.join(""))
}), jQuery("#randomMasterCardNumbersUl li").each(function() {
    randomsOneMasterCardNumber(), jQuery(this).text(masterCardDigits.join(""))
}), jQuery("#randomDiscoverNumbersUl li").each(function() {
    randomsOneDiscoverCardNumber(), jQuery(this).text(discoverDigits.join(""))
}), jQuery("#randomAmericanExpressNumbersUl li").each(function() {
    randomsOneAmericanExpressCardNumber(), jQuery(this).text(americanExpressDigits.join(""))
}), jQuery("#randomJcbNumbersUl li").each(function() {
    randomsOneJcbCardNumber(), jQuery(this).text(jcbDigits.join(""))
}), jQuery(document).on("keydown", "#validatetext", function(n) {
    -1 !== jQuery.inArray(n.keyCode, [46, 8, 9, 27, 13, 110]) || /65|67|86|88/.test(n.keyCode) && (!0 === n.ctrlKey || !0 === n.metaKey) && (!0 === n.ctrlKey || !0 === n.metaKey) || 35 <= n.keyCode && 40 >= n.keyCode || (n.shiftKey || 48 > n.keyCode || 57 < n.keyCode) && (96 > n.keyCode || 105 < n.keyCode) && n.preventDefault()
}), jQuery("#singlevalidateButton").click(function(n) {
    if (jQuery(".validat_card_image").html(""), jQuery("#validatetext").val().length > 0) {
        jQuery(this).attr("disabled", "disabled"), n.preventDefault();
        var a = jQuery(this).attr("data-cardtype");
        jQuery("#myBar").css("width", "1%"), jQuery("#myProgress").show();
        var s = document.getElementById("myBar"),
            r = document.getElementById("per"),
            e = 1,
            t = setInterval(function() {
                e >= 100 ? (jQuery("#singlevalidateButton").removeAttr("disabled"), SingleCardValidation(a), clearInterval(t), jQuery("#myProgress").hide()) : (e++, r.innerHTML = e + "%", s.style.width = e + "%")
            }, 100)
    } else jQuery(".validat_card_image").html('<span style="padding: 10px;color: red;font-size: large;">Please Enter Card Number</span>')
}), jQuery("#validateButton").click(function(n) {
    if (jQuery(".validat_card_image").html(""), jQuery("#validatetext").val().length > 0) {
        jQuery(this).attr("disabled", "disabled"), n.preventDefault(), jQuery("#myBar").css("width", "1%"), jQuery("#myProgress").show();
        var a = document.getElementById("myBar"),
            s = document.getElementById("per"),
            r = 1,
            e = setInterval(function() {
                r >= 100 ? (jQuery("#validateButton").removeAttr("disabled"), CardValidation(), jQuery("#myProgress").hide(), clearInterval(e)) : (r++, s.innerHTML = r + "%", a.style.width = r + "%")
            }, 100)
    } else jQuery(".validat_card_image").html('<span style="padding: 10px;color: red;font-size: large;">Please Enter Card Number</span>')
}), jQuery(".copy-icon").click(function() {
    jQuery(this).next().show(), jQuery(this).next().fadeOut(1500)
});
var takeScreenShot = function() {
    var n = jQuery("#snapshot").attr("data-name");
    html2canvas(document.getElementById("sample-card-table"), {
        onrendered: function(a) {
            var s = document.createElement("canvas");
            s.width = 360, s.height = 250, s.getContext("2d").drawImage(a, 0, 0, 360, 230, 0, 0, 360, 250);
            var r = document.createElement("a");
            r.href = s.toDataURL("image/jpg"), r.download = n + ".jpg", r.click()
        }
    })
};
jQuery(".copy-btn-hidden").click(function() {
    jQuery(this).next().show(), jQuery(this).next().fadeOut(1500)
}), jQuery(".dropdown-btn").on("click", function(n) {
    n.preventDefault(), jQuery(this).parent().find("ul").first().slideToggle(), jQuery(this).parent().siblings().find("ul").hide(), jQuery(this).parent().find("ul").mouseleave(function() {
        var n = jQuery(this);
        jQuery("html").click(function() {
            n.hide(), jQuery("html").unbind("click")
        })
    })
}), jQuery(document).ready(function() {
    jQuery(".menu-btn").click(function() {
        jQuery(".menu").slideToggle()
    }), jQuery(".sidebar-active").click(function() {
        jQuery(".sidebar-wrapper-ul").slideToggle()
    }), jQuery(document).on("click", ".sidebar-active.down", function() {
        jQuery(".sidebar-active").removeClass("down"), jQuery(".sidebar-active").addClass("up")
    }), jQuery(document).on("click", ".sidebar-active.up", function() {
        jQuery(".sidebar-active").removeClass("up"), jQuery(".sidebar-active").addClass("down")
    })
}), jQuery(".contact-form").submit(function() {
    var n = jQuery(".user-name").val(),
        a = jQuery(".user-email").val(),
        s = jQuery(".user-msg").val(),
        r = jQuery(".user-subject").val(),
        e = 0;
    if ("" == n ? (jQuery(".user-name").addClass("required"), e = 1) : jQuery(".user-name").removeClass("required"), "" == r ? (jQuery(".user-subject").addClass("required"), e = 1) : jQuery(".user-subject").removeClass("required"), "" == a ? (jQuery(".user-email").addClass("required"), e = 1) : jQuery(".user-email").removeClass("required"), "" == s ? (jQuery(".user-msg").addClass("required"), e = 1) : jQuery(".user-msg").removeClass("required"), 1 == e) return !1
});

});