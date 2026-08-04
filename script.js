// Kariyer kulüpleri
const clubs = [
  { name: 'FC Barcelona', years: '2004 - 2021' },
  { name: 'Paris Saint-Germain', years: '2021 - 2023' },
  { name: 'Inter Miami CF', years: '2023 - günümüz' },
  { name: 'Arjantin Milli Takımı', years: '2005 - günümüz' }
];

const clubList = document.getElementById('clubList');
clubs.forEach((club) => {
  const li = document.createElement('li');
  li.textContent = `${club.name} (${club.years})`;
  clubList.appendChild(li);
});

// Rastgele bilgiler
const facts = [
  'Messi, Barcelona ile 4 Şampiyonlar Ligi kupası kazandı.',
  '2022 Dünya Kupası\'nı Arjantin ile kazandı.',
  'Kariyerinde 8 kez Ballon d\'Or ödülünü aldı.',
  'Bir sezonda (2011-12) 91 gol atarak dünya rekoru kırdı.',
  'La Liga tarihinin en golcü oyuncusudur.',
  'Boy kısalığı sorunu için çocukken hormon tedavisi gördü.',
  'Sol ayağını kullanan efsanevi bir dribbling ustasıdır.'
];

const factEl = document.getElementById('fact');
const factBtn = document.getElementById('factBtn');

factBtn.addEventListener('click', () => {
  const random = facts[Math.floor(Math.random() * facts.length)];
  factEl.textContent = random;
});
