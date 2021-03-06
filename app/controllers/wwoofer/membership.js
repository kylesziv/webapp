import Ember from 'ember';

export default Ember.ObjectController.extend({

    withBooklet: false,

    actions: {
        initPayment: function () {

            // Find the right item code
            var itemCode = this.get('firstName2') ? this.get('withBooklet') ? 'WOB2' : 'WO2' : this.get('withBooklet') ? 'WOB1' : 'WO1';

            // Hit the payment route in order to get redirected to PayPal
            window.location.replace(WebappENV.SERVER_BASE_URL + '/payment/start?itemCode=' + itemCode);
        }
    }
});