const showOrderList = (id, data) => {
  const templ = `
  <div class="flex justify-between order-header bb">
    <span>Order Id</span>
    <span>Order Date</span>
    <span>Order Status</span>
    <span>Shipping Address</span>
    <span>Total</span>
  </div>
  <ul>{{#each item}}
    <li class="flex justify-between order-item pv5 bb bw2 b--light-gray">
        <span>{{id}}</span>
        <span>{{date}}</span>
        <span>{{orderStatus}}</span>
        <span>{{shippingAddressText}}</span>
        <span class="currency">{{total}}</span>
    </li>
    {{/each}}
</ul>`;

  const template = Handlebars.compile(templ);

  const results = template({ item: data });
  $(id).html(results);
};
