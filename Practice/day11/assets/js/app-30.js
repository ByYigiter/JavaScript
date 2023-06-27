const imsak = document.getElementById("imsak");
const gunes = document.getElementById("gunes");
const ogle = document.getElementById("ogle");
const ikindi = document.getElementById("ikindi");
const aksam = document.getElementById("aksam");
const yatsi = document.getElementById("yatsi");
const iller = document.getElementById("iller");
const tarih = document.getElementById("tarih");
const yer = document.getElementById("yer");
const sicaklik = document.getElementById("sicaklik");

let gorunenIl = "kayseri";
iller.addEventListener("change", (e) => {
	gorunenil = e.target.value;
	// console.log(gorunenIl);
	fetchData();
});

const yerlestir = (veri) => {
	yer.innerText = veri.query;
	sicaklik.innerText = veri.today_weather.temperature + `\xB0 C`;
	tarih.innerText = veri.items[0].date_for;
	imsak.innerText = veri.items[0].fajr;
	gunes.innerText = veri.items[0].shurooq;
	ogle.innerText = veri.items[0].dhuhr;
	ikindi.innerText = veri.items[0].asr;
	aksam.innerText = veri.items[0].maghrib;
	yatsi.innerText = veri.items[0].isha;
};
const fetchData = async () => {
	// const url = 'https://muslimsalat.p.rapidapi.com/kayseri.json';
	const url = `https://muslimsalat.p.rapidapi.com/${gorunenil}.json`;

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "e7545aab8cmshdc536217be550b3p11dafbjsnb60e7b2be363",
			"X-RapidAPI-Host": "muslimsalat.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json();
		console.log(data);
		yerlestir(data);
	} catch (error) {
		console.error(error);
	}
};
fetchData();
