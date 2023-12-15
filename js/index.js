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
      <strong>${item.type}</strong>: Power = ${item.power} kWatts, RPM = ${item.revolutions}
      <button class="edit-button">Edit</button>`;
    main.appendChild(element);

    const editButton = element.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
      editChainsaw(element, item);
    });
  });
}

function editChainsaw(chainsawElement, chainsawData, fieldToEdit) {
  const typeLabel = document.createElement('label');
  typeLabel.textContent = 'Type: ';

  const powerLabel = document.createElement('label');
  powerLabel.textContent = 'Power (kWatts): ';

  const revolutionsLabel = document.createElement('label');
  revolutionsLabel.textContent = 'Number of Revolutions: ';

  const editTypeInput = document.createElement('input');
  editTypeInput.type = 'text';
  editTypeInput.value = chainsawData.type;

  const editPowerInput = document.createElement('input');
  editPowerInput.type = 'number';
  editPowerInput.value = chainsawData.power;
  editPowerInput.min = 0;

  const editRevolutionsInput = document.createElement('input');
  editRevolutionsInput.type = 'number';
  editRevolutionsInput.value = chainsawData.revolutions;
  editRevolutionsInput.min = 0;

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';

  chainsawElement.innerHTML = '';
  chainsawElement.appendChild(typeLabel);
  chainsawElement.appendChild(editTypeInput);
  chainsawElement.appendChild(document.createElement('br'));
  chainsawElement.appendChild(powerLabel);
  chainsawElement.appendChild(editPowerInput);
  chainsawElement.appendChild(document.createElement('br'));
  chainsawElement.appendChild(revolutionsLabel);
  chainsawElement.appendChild(editRevolutionsInput);
  chainsawElement.appendChild(document.createElement('br'));
  chainsawElement.appendChild(saveButton);

  saveButton.addEventListener('click', () => {
    const updatedType = editTypeInput.value;
    const updatedPower = parseFloat(editPowerInput.value);
    const updatedRevolutions = parseInt(editRevolutionsInput.value);

    if (!updatedType || !updatedPower || !updatedRevolutions) {
      alert("Seems like you forgot to fill in all the fields!");
      return;
    }

    if (updatedType.length < 3) {
      alert("Minimum length: 3 characters.");
      return;
    }

    if (updatedPower === 0 || updatedRevolutions === 0) {
      alert("Value cannot be zero.");
      return;
    }

    if (updatedPower < 0 || updatedRevolutions < 0) {
      alert("Value cannot be less than zero");
      return;
    }

    chainsawData.type = updatedType;
    chainsawData.power = updatedPower;
    chainsawData.revolutions = updatedRevolutions;

    updateCode();
  });

  fieldToEdit.textContent = `Editing: ${fieldToEdit.id}`;
}

addChainsawBtn.addEventListener('click', addChainsaw);
sortBtn.addEventListener('click', sortByPower);
searchInput.addEventListener('input', searchChainsaw);

updateCode();
