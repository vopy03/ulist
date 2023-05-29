
const mainCheckBox = document.querySelector('#all-items');
const allCheckBoxes = document.querySelectorAll('td input[type="checkbox"]');

const checkCheckBoxes = () => {
    for (let i = 0; i < allCheckBoxes.length; i++) {
        if (!allCheckBoxes[i].checked) {
          return false;
        }
      }
      return true;
}

const switchCheckBox = () => {
    if(checkCheckBoxes()) {
        mainCheckBox.checked = true;
    } else {
        mainCheckBox.checked = false;
    }
}

const switchMainCheckBox = () => {
    if(mainCheckBox.checked) {
        allCheckBoxes.forEach(checkbox => {
            checkbox.checked = true;
        })
    } else {
        allCheckBoxes.forEach(checkbox => {
            checkbox.checked = false;
        })
    }
}

allCheckBoxes.forEach(checkbox => {
    checkbox.addEventListener('click', switchCheckBox);
})

mainCheckBox.addEventListener('click', switchMainCheckBox);


console.log(mainCheckBox)