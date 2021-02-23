class Cart {
  constructor() {
    this.items = [];
  }

  update() {
    const tableContents = document.getElementById('table-contents');
    tableContents.innerHTML = '';
    this.items.forEach((item) => {
      let itemRow = document.createElement('tr');
      itemRow.innerHTML = `
            <td>${item.title}</td>
            <td>${item.qty}</td>
            <td>${item.price.toFixed(2)}</td>
        `;
      tableContents.appendChild(itemRow);
    });

    document.getElementById('total').innerHTML = this.calculateTotal();
  }
  add(newItem) {
    let sameItem = this.items.find((item) => item.id === newItem.id);
    if (sameItem) {
      sameItem.qty++;
    } else {
      this.items.push({ ...newItem, qty: 1 });
    }
    this.update();
  }
  empty() {
    this.items = [];
    this.update();
  }
  calculateTotal() {
    // must incl 0 arg or renders as [object Object]
    return this.items
      .reduce((acc, curr) => {
        return acc + curr.price * curr.qty;
      }, 0)
      .toFixed(2);
  }
}
