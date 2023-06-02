
class Selection {

  static mainCheckBox = document.querySelector("#all-items");
  static allCheckBoxes = document.querySelectorAll('td input[type="checkbox"]');

  static init = () => {
    
    this.allCheckBoxes.forEach((checkbox) => {
      checkbox.addEventListener("click", this.switchCheckBox);
    });

    this.mainCheckBox.addEventListener("click", this.switchMainCheckBox);
  };

  static update = () => {
    this.allCheckBoxes = document.querySelectorAll('td input[type="checkbox"]');
    this.mainCheckBox.checked = false;
    this.init();
  };

  static isAllChecked = () => {
    for (let i = 0; i < this.allCheckBoxes.length; i++) {
      if (!this.allCheckBoxes[i].checked) {
        return false;
      }
    }
    return true;
  };
  static isSomeChecked = () => {
    for (let i = 0; i < this.allCheckBoxes.length; i++) {
      if (this.allCheckBoxes[i].checked) {
        return true;
      }
    }
    return false;
  };

  static switchCheckBox = () => {
    if (this.isAllChecked()) {
      this.mainCheckBox.checked = true;
    } else {
      this.mainCheckBox.checked = false;
    }
  };

  static switchMainCheckBox = () => {
    if (this.mainCheckBox.checked) {
      this.allCheckBoxes.forEach((checkbox) => {
        checkbox.checked = true;
      });
    } else {
      this.allCheckBoxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  };

  static getCheckedItemsId = () => {
    const checkedItemsId = [];
    this.allCheckBoxes.forEach((checkbox) => {
      if (checkbox.checked) checkedItemsId.push(Number(checkbox.dataset.id));
    });
    return checkedItemsId;
  };
}
