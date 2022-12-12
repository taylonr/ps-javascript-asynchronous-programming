let statuses = [];
let xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:3000/api/orderStatuses");
xhr.onload = () => {
  statuses = JSON.parse(xhr.responseText);

  let xhr2 = new XMLHttpRequest();
  xhr2.open("GET", "http://localhost:3000/api/orders");
  xhr2.onload = () => {
    const orders = JSON.parse(xhr2.responseText);
    const fullOrders = orders.map((o) => {
      o.orderStatus = statuses.find(
        (s) => s.id === o.orderStatusId
      ).description;
      return o;
    });

    showOrderList("#order-list", fullOrders);
  };
  xhr2.send();
};
xhr.send();
