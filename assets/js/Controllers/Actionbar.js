class Actionbar {

  static urls = {
    1: "actions/status/on",
    2: "actions/status/off",
    3: "actions/user/delete",
  }

  static addBtn = $('#add-user-btn');

  static init() {

    this.addBtn.click(() => {
      Modal.changeModalType('create')
    });

    $("form").submit(function (event) {
      const choise = event.target[0].value;
      if(Number.isInteger(Number(choise)) && Selection.isSomeChecked()) {
        let formData = {
          ids: Selection.getCheckedItemsId()
        };
    
        $.ajax({
          type: "POST",
          url: urls[choise],
          data: formData,
        }).done(function (data) {
          // console.log(data);
          List.refresh();
          
        });
      }
      event.preventDefault();
    });

    }

}