const main = document.getElementById('main');
const chainsawTypeInput = document.getElementById('model-type');
const chainsawPowerInput = document.getElementById('chainsaw-power');
const chainsawRevolutionsInput = document.getElementById('revolutions');
const addChainsawBtn = document.getElementById('add-chainsaw');
const sortBtn = document.getElementById('sort');
const countRevolutionsBtn = document.getElementById('count-revolutions');
const searchInput = document.getElementById('search');

let data = [
  { type: 'Bosch', power: 12, revolutions: 12000 }
];

function addChainsaw() {
  const type = chainsawTypeInput.value;
  const power = parseFloat(chainsawPowerInput.value);
  const revolutions = parseInt(chainsawRevolutionsInput.value);


  if (!isNaN(power) && !isNaN(revolutions) && type) {
    const newChainsaw = { type, power, revolutions };
    data.push(newChainsaw);
    updateCode();

    chainsawTypeInput.value = '';
    chainsawPowerInput.value = '';
    chainsawRevolutionsInput.value = '';
  } else {
    alert('Invalid input. Please provide valid chainsaw details.');
  }
}

function sortByPower() {
  const searchTerm = searchInput.value.toLowerCase();

  data.sort((a, b) => a.power - b.power);

  const filteredChainsaws = data.filter(chainsaw =>
    chainsaw.type.toLowerCase().includes(searchTerm)
  );

  updateCode(filteredChainsaws);
}


function defineRPM() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredChainsaws = data.filter(chainsaw =>
    chainsaw.type.toLowerCase().includes(searchTerm)
  );

  const totalRevolutions = filteredChainsaws.reduce((total, chainsaw) => total + chainsaw.revolutions, 0);
  const resultElement = document.getElementById('total-revolutions-result');

  if (resultElement) {
    resultElement.textContent = `Total Revolutions: ${totalRevolutions}`;
  } else {
    const newElement = document.createElement('p');
    newElement.id = 'total-revolutions-result';
    newElement.textContent = `Total Revolutions: ${totalRevolutions}`;

    main.appendChild(newElement);
  }
}

countRevolutionsBtn.addEventListener('click', defineRPM);

function searchChainsaw() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredChainsaws = data.filter(chainsaw =>
    chainsaw.type.toLowerCase().includes(searchTerm)
  );
  updateCode(filteredChainsaws);
}

function updateCode(providedData = data) {
  main.innerHTML = '<h2>Chainsaw List</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('chainsaw');
    element.innerHTML = `
      <strong>${item.type}</strong>: Power = ${item.power} kWatts, RPM = ${item.revolutions}`;
    main.appendChild(element);

  });
}


addChainsawBtn.addEventListener('click', addChainsaw);
sortBtn.addEventListener('click', sortByPower);
searchInput.addEventListener('input', searchChainsaw);

updateCode();
