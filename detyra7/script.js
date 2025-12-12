// Ushtrimi 1
const paragrafi = document.getElementById('paragrafi-unik');
const btnNdrysho = document.getElementById('ndryshoTekstinBtn');

btnNdrysho.addEventListener('click', () => {
  paragrafi.textContent = 'Përshendetje, studentë!';
});

// Ushtrimi 2
const butoniUnik = document.getElementById('butoni-unik');
const btnTeKuqe = document.getElementById('bVendosTeKuqe');

btnTeKuqe.addEventListener('click', () => {
  butoniUnik.style.backgroundColor = 'red';
  butoniUnik.style.color = 'white';
  butoniUnik.style.borderColor = '#b30000';
});

// Ushtrimi 3
const editableBox = document.getElementById('editableBox');
const inputBorder = document.getElementById('vleraBorder');
const btnApliko = document.getElementById('aplikoBorder');
const btnNdryshoPermbajtjen = document.getElementById('ndryshoPermbajtjen');

btnApliko.addEventListener('click', () => {
  const v = inputBorder.value.trim();
  if (v.length === 0) {
    editableBox.style.border = 'none';
  } else {
    editableBox.style.border = v;
  }
});

btnNdryshoPermbajtjen.addEventListener('click', () => {
  editableBox.textContent = 'Përmbajtje e vendosur nga JavaScript.';
});

// Ushtrimi 4
const btnTitull = document.getElementById('ndryshoTitullinPare');
const titujt = document.querySelectorAll('#ushtrimi4 .tituj h3');

btnTitull.addEventListener('click', () => {
  titujt[0].textContent = 'Titulli i parë u ndryshua me JavaScript!';
});

// Ushtrimi 5
const btnGjelber = document.getElementById('ngjyrosTeGjelber');
const paragrafetGreen = document.querySelectorAll('.paragraf-green');

btnGjelber.addEventListener('click', () => {
  paragrafetGreen.forEach(p => {
    p.style.color = 'green';
  });
});

// Ushtrimi 6
const btnNumero = document.getElementById('numeroParagrafet');
const totalParagrafesh = document.getElementById('totalParagrafesh');

btnNumero.addEventListener('click', () => {
  const paragrafet = document.querySelectorAll('#paragrafetContainer p');
  totalParagrafesh.textContent = paragrafet.length;
});

// Ushtrimi 7
const btnNgjyrosListen = document.getElementById('ngjyrosListen');
const listaItems = document.querySelectorAll('#listaItem li');

btnNgjyrosListen.addEventListener('click', () => {
  const ngjyrat = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];

  listaItems.forEach((li, i) => {
    li.style.color = ngjyrat[i % ngjyrat.length];
    li.style.fontWeight = 'bold';
  });
});
