const showOrderList = (id, data) => {
  const templ = `
    <span class="order-header">Order Id</span>
    <span class="order-header">Order Date</span>
    <span class="order-header">Order Status</span>
    <span class="order-header">Shipping Address</span>
    <span class="order-header j-s-end">Total</span>
    <span class="buffer bb"></span>
  {{#each item}}
        <span class="item pv5">{{id}}</span>
        <span class="item pv5">{{date}}</span>
        <span class="item pv5">{{orderStatus}}</span>
        <span class="item pv5">{{shippingAddressText}}</span>
        <span class="item pv5 currency j-s-end">{{total}}</span>
        <span class="item-buffer bb bw2 b--light-gray"></span>
    {{/each}}`;

  const template = Handlebars.compile(templ);

  const results = template({ item: data });
  $(id).html(results);
};

const showError = (id, error) => {
  const results = `<h2>${error}</h2>`;
  $(id).html(results);
};
