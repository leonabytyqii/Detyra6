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
