if(typeof Spurit === 'undefined') var Spurit = {};
if(typeof Spurit['Discountmanager'] === 'undefined') Spurit['Discountmanager'] = {};
Spurit['Discountmanager'].settings = {
    enabled: true,
    badge: {},
    enabledCollection: true,
    collectionPageSelector: "",
    productPageSelector: "",
    productIds: [],
    variantIds: []
};
Spurit['Discountmanager'].labelConfig = {
    checkout_label: {
        style: {"color":"#C74230"},
        enabled: true,
        selector: [],
        ajax_cart_enabled: false,
        ajax_cart_selector: [],
    },
    discount_value: {
        enabled: false,
        selector: []    }
};