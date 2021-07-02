/*var employe=[];
employe[0]={
  name:"Tauhid",
  age:24,
  designation:"Web & App developer",
  knowlwdgeLanguage:"Java, Java Script,Python,swift",
  isActive:true
};
employe[1]={
  name:"Adnana",
  age:24,
  designation:"Web & App developer",
  knowlwdgeLanguage:"Java, Java Script,Python,swift",
  isActive:true
};
employe[2]={
  name:"Alif",
  age:24,
  designation:"Web & App developer",
  knowlwdgeLanguage:"Java, Java Script,Python,swift",
  isActive:true
};
employe[3]={
  name:"Abir",
  age:24,
  designation:"Web & App developer",
  knowlwdgeLanguage:"Java, Java Script,Python,swift",
  isActive:true
};

var arrayLength=employe.length;
console.log(arrayLength);

var i=0;
while(i<=arrayLength)
{
  console.log(
    "Name: "+employe[i].name+
    ", Age:"+employe[i].age+
    ", Designation:"+employe[i].designation+
    "Known Language:"+employe[i].knowlwdgeLanguage+
    ", isActive:"+employe[i].isActive);
i++;
}
var covid=[{"country":"World",
"cases":39711093,
"todayCases":144928,
"deaths":1110895,
"todayDeaths":2274,
"recovered":29724021,
"active":8876177,
"critical":71663,
"casesPerOneMillion":5095,"deathsPerOneMillion":142,"totalTests":0,"testsPerOneMillion":0},
{"country":"USA","cases":8300393,"todayCases":12115,"deaths":223817,"todayDeaths":173,"recovered":5402391,"active":2674185,"critical":15302,"casesPerOneMillion":25033,"deathsPerOneMillion":675,"totalTests":123841805,"testsPerOneMillion":373497},{"country":"India","cases":7443233,"todayCases":12598,"deaths":113172,"todayDeaths":140,"recovered":6534590,"active":795471,"critical":8944,"casesPerOneMillion":5378,"deathsPerOneMillion":82,"totalTests":93254017,"testsPerOneMillion":67381},{"country":"Brazil","cases":5201570,"todayCases":0,"deaths":153229,"todayDeaths":0,"recovered":4619560,"active":428781,"critical":8318,"casesPerOneMillion":24420,"deathsPerOneMillion":719,"totalTests":17900000,"testsPerOneMillion":84036},{"country":"Russia","cases":1384235,"todayCases":14922,"deaths":24002,"todayDeaths":279,"recovered":1065199,"active":295034,"critical":2300,"casesPerOneMillion":9484,"deathsPerOneMillion":164,"totalTests":53300000,"testsPerOneMillion":365186},{"country":"Spain","cases":982723,"todayCases":0,"deaths":33775,"todayDeaths":0,"recovered":null,"active":null,"critical":1768,"casesPerOneMillion":21016,"deathsPerOneMillion":722,"totalTests":14590713,"testsPerOneMillion":312033},{"country":"Argentina","cases":965609,"todayCases":0,"deaths":25723,"todayDeaths":0,"recovered":778501,"active":161385,"critical":4346,"casesPerOneMillion":21308,"deathsPerOneMillion":568,"totalTests":2338651,"testsPerOneMillion":51606},{"country":"Colombia","cases":945354,"todayCases":0,"deaths":28616,"todayDeaths":0,"recovered":837001,"active":79737,"critical":2068,"casesPerOneMillion":18521,"deathsPerOneMillion":561,"totalTests":4357639,"testsPerOneMillion":85375},{"country":"Peru","cases":862417,"todayCases":0,"deaths":33648,"todayDeaths":0,"recovered":769077,"active":59692,"critical":1149,"casesPerOneMillion":26051,"deathsPerOneMillion":1016,"totalTests":4181976,"testsPerOneMillion":126323},{"country":"Mexico","cases":841661,"todayCases":6751,"deaths":85704,"todayDeaths":419,"recovered":612216,"active":143741,"critical":2590,"casesPerOneMillion":6508,"deathsPerOneMillion":663,"totalTests":2160139,"testsPerOneMillion":16703},{"country":"France","cases":834770,"todayCases":0,"deaths":33303,"todayDeaths":0,"recovered":104696,"active":696771,"critical":1800,"casesPerOneMillion":12780,"deathsPerOneMillion":510,"totalTests":13128805,"testsPerOneMillion":201004},{"country":"South Africa","cases":700203,"todayCases":0,"deaths":18370,"todayDeaths":0,"recovered":629260,"active":52573,"critical":546,"casesPerOneMillion":11763,"deathsPerOneMillion":309,"totalTests":4505533,"testsPerOneMillion":75689},{"country":"UK","cases":689257,"todayCases":0,"deaths":43429,"todayDeaths":0,"recovered":null,"active":null,"critical":580,"casesPerOneMillion":10137,"deathsPerOneMillion":639,"totalTests":28986852,"testsPerOneMillion":426333},{"country":"Iran","cases":526490,"todayCases":4103,"deaths":30123,"todayDeaths":253,"recovered":423921,"active":72446,"critical":4721,"casesPerOneMillion":6245,"deathsPerOneMillion":357,"totalTests":4482263,"testsPerOneMillion":53166},{"country":"Chile","cases":490003,"todayCases":1813,"deaths":13588,"todayDeaths":59,"recovered":462712,"active":13703,"critical":791,"casesPerOneMillion":25569,"deathsPerOneMillion":709,"totalTests":3857820,"testsPerOneMillion":201302},{"country":"Iraq","cases":423524,"todayCases":3221,"deaths":10198,"todayDeaths":56,"recovered":357291,"active":56035,"critical":491,"casesPerOneMillion":10462,"deathsPerOneMillion":252,"totalTests":2605466,"testsPerOneMillion":64362},{"country":"Italy","cases":402536,"todayCases":10925,"deaths":36474,"todayDeaths":47,"recovered":249127,"active":116935,"critical":705,"casesPerOneMillion":6661,"deathsPerOneMillion":604,"totalTests":13394041,"testsPerOneMillion":221626},{"country":"Bangladesh","cases":387295,"todayCases":1209,"deaths":5646,"todayDeaths":23,"recovered":302298,"active":79351,"critical":0,"casesPerOneMillion":2345,"deathsPerOneMillion":34,"totalTests":2151702,"testsPerOneMillion":13027},{"country":"Germany","cases":358510,"todayCases":1718,"deaths":9838,"todayDeaths":2,"recovered":290000,"active":58672,"critical":690,"casesPerOneMillion":4275,"deathsPerOneMillion":117,"totalTests":19276507,"testsPerOneMillion":229857},{"country":"Indonesia","cases":357762,"todayCases":4301,"deaths":12431,"todayDeaths":84,"recovered":281592,"active":63739,"critical":0,"casesPerOneMillion":1304,"deathsPerOneMillion":45,"totalTests":4019958,"testsPerOneMillion":14652},{"country":"Philippines","cases":354338,"todayCases":2673,"deaths":6603,"todayDeaths":73,"recovered":295312,"active":52423,"critical":1562,"casesPerOneMillion":3221,"deathsPerOneMillion":60,"totalTests":4333359,"testsPerOneMillion":39392},{"country":"Turkey","cases":343955,"todayCases":0,"deaths":9153,"todayDeaths":0,"recovered":301098,"active":33704,"critical":1445,"casesPerOneMillion":4065,"deathsPerOneMillion":108,"totalTests":12194778,"testsPerOneMillion":144139},{"country":"Saudi Arabia","cases":341854,"todayCases":359,"deaths":5165,"todayDeaths":21,"recovered":328165,"active":8524,"critical":829,"casesPerOneMillion":9775,"deathsPerOneMillion":148,"totalTests":7315751,"testsPerOneMillion":209194},{"country":"Pakistan","cases":322452,"todayCases":575,"deaths":6638,"todayDeaths":17,"recovered":306640,"active":9174,"critical":567,"casesPerOneMillion":1452,"deathsPerOneMillion":30,"totalTests":4041962,"testsPerOneMillion":18196},{"country":"Israel","cases":301896,"todayCases":0,"deaths":2141,"todayDeaths":0,"recovered":262503,"active":37252,"critical":714,"casesPerOneMillion":32823,"deathsPerOneMillion":233,"totalTests":4185767,"testsPerOneMillion":455094},{"country":"Ukraine","cases":293641,"todayCases":6410,"deaths":5517,"todayDeaths":109,"recovered":124113,"active":164011,"critical":177,"casesPerOneMillion":6726,"deathsPerOneMillion":126,"totalTests":2729496,"testsPerOneMillion":62524},{"country":"Netherlands","cases":220052,"todayCases":8114,"deaths":6737,"todayDeaths":29,"recovered":null,"active":null,"critical":372,"casesPerOneMillion":12834,"deathsPerOneMillion":393,"totalTests":2872319,"testsPerOneMillion":167520},{"country":"Belgium","cases":202151,"todayCases":10192,"deaths":10359,"todayDeaths":32,"recovered":20867,"active":170925,"critical":358,"casesPerOneMillion":17420,"deathsPerOneMillion":893,"totalTests":3984249,"testsPerOneMillion":343337},{"country":"Canada","cases":194106,"todayCases":0,"deaths":9722,"todayDeaths":0,"recovered":163644,"active":20740,"critical":188,"casesPerOneMillion":5130,"deathsPerOneMillion":257,"totalTests":8563059,"testsPerOneMillion":226302},{"country":"Romania","cases":176468,"todayCases":3952,"deaths":5812,"todayDeaths":63,"recovered":129556,"active":41100,"critical":745,"casesPerOneMillion":9191,"deathsPerOneMillion":303,"totalTests":2832679,"testsPerOneMillion":147541},{"country":"Poland","cases":167230,"todayCases":9622,"deaths":3524,"todayDeaths":84,"recovered":90162,"active":73544,"critical":604,"casesPerOneMillion":4420,"deathsPerOneMillion":93,"totalTests":3935143,"testsPerOneMillion":104010},{"country":"Morocco","cases":167148,"todayCases":0,"deaths":2818,"todayDeaths":0,"recovered":138989,"active":25341,"critical":546,"casesPerOneMillion":4513,"deathsPerOneMillion":76,"totalTests":2993488,"testsPerOneMillion":80822},{"country":"Czechia","cases":160112,"todayCases":0,"deaths":1283,"todayDeaths":0,"recovered":66093,"active":92736,"critical":551,"casesPerOneMillion":14943,"deathsPerOneMillion":120,"totalTests":1726678,"testsPerOneMillion":161148},{"country":"Ecuador","cases":151659,"todayCases":0,"deaths":12357,"todayDeaths":0,"recovered":128134,"active":11168,"critical":331,"casesPerOneMillion":8558,"deathsPerOneMillion":697,"totalTests":486987,"testsPerOneMillion":27481},{"country":"Bolivia","cases":139562,"todayCases":243,"deaths":8439,"todayDeaths":32,"recovered":103896,"active":27227,"critical":71,"casesPerOneMillion":11909,"deathsPerOneMillion":720,"totalTests":319993,"testsPerOneMillion":27305},{"country":"Nepal","cases":129304,"todayCases":3167,"deaths":727,"todayDeaths":12,"recovered":89840,"active":38737,"critical":0,"casesPerOneMillion":4415,"deathsPerOneMillion":25,"totalTests":1269605,"testsPerOneMillion":43349},{"country":"Qatar","cases":129227,"todayCases":235,"deaths":223,"todayDeaths":1,"recovered":126218,"active":2786,"critical":52,"casesPerOneMillion":46024,"deathsPerOneMillion":79,"totalTests":86}]

var length=covid.length;
var x=0;
while(x<length){
  console.log("Country Name: "+covid[x]["country"]+" = "+covid[x].cases);
  x++;
}*/
prompt("what is your age?");
