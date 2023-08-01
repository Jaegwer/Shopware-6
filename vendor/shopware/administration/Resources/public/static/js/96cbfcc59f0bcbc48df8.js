(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[372],{Ranw:function(e,n,i){},jS5u:function(e,n,i){"use strict";i.r(n);i("y6Bj");var t=Shopware.Application,c=Shopware.Utils;n.default={template:'\n{% block sw_product_variants_price_field %}\n<div\n    class="sw-product-variants-price-field"\n    :class="{\'is--readonly\': readonly}"\n>\n    \n    {% block sw_product_variants_price_field_gross %}\n    <div class="sw-field">\n        <sw-field\n            v-model="price.gross"\n            type="number"\n            size="small"\n            class="sw-product-variants-price-field__input"\n            :disabled="readonly"\n            :digits="currency.decimalPrecision"\n            v-bind="$attrs"\n            @change="onPriceGrossChange"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_price_field_lock_button %}\n    <button\n        class="sw-product-variants-price-field__lock"\n        :class="{\'is--locked\': price.linked}"\n        @click="onLockSwitch"\n    >\n        <sw-icon\n            v-if="price.linked"\n            name="regular-lock"\n            size="16"\n        />\n        <sw-icon\n            v-else\n            name="regular-lock-open"\n            size="16"\n        />\n    </button>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_price_field_net %}\n    <div class="sw-field">\n        <sw-field\n            v-model="price.net"\n            type="number"\n            size="small"\n            class="sw-field sw-product-variants-price-field__input"\n            :disabled="readonly"\n            :digits="currency.decimalPrecision"\n            v-bind="$attrs"\n            @change="onPriceNetChange"\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{price:{type:Object,required:!0},taxRate:{type:String,required:!1,default:null},currency:{type:Object,required:!0},readonly:{type:Boolean,required:!1,default:!1}},computed:{calculatePriceApiService:function(){return t.getContainer("factory").apiService.getByName("calculate-price")}},watch:{"price.linked":function(e){!0===e&&(this.price.net=this.convertGrossToNet(this.price.gross))},"taxRate.taxRate":function(){!0===this.price.linked&&(this.price.net=this.convertGrossToNet(this.price.gross))}},methods:{onLockSwitch:function(){return!this.readonly&&(this.price.linked=!this.price.linked,this.$emit("price-lock-change",this.price.linked),this.$emit("change",this.price),!0)},onPriceGrossChange:function(e){e&&"number"==typeof e&&this.price.linked&&(this.$emit("price-calculate",!0),this.onPriceGrossChangeDebounce(Number(this.price.gross)))},onPriceGrossChangeDebounce:c.debounce((function(e){this.$emit("price-gross-change",e),this.$emit("change",this.price),this.convertGrossToNet(e)}),500),onPriceNetChange:function(e){e&&"number"==typeof e&&this.price.linked&&(this.$emit("price-calculate",!0),this.onPriceNetChangeDebounce(Number(this.price.net)))},onPriceNetChangeDebounce:c.debounce((function(e){this.$emit("price-net-change",e),this.$emit("change",this.price),this.convertNetToGross(e)}),500),convertNetToGross:function(e){var n=this;return!(!e||"number"!=typeof e)&&(this.$emit("price-calculate",!0),this.requestTaxValue(e,"net").then((function(e){n.price.gross=Number(n.price.net)+e})),!0)},convertGrossToNet:function(e){var n=this;return!(!e||"number"!=typeof e)&&(this.$emit("price-calculate",!0),this.requestTaxValue(e,"gross").then((function(e){n.price.net=Number(n.price.gross)-e})),!0)},requestTaxValue:function(e,n){var i=this;return this.$emit("price-calculate",!0),new Promise((function(t){e&&"number"==typeof e&&i.price[n]&&i.taxRate&&n&&i.calculatePriceApiService.calculatePrice({taxId:i.taxRate,price:i.price[n],output:n,currencyId:i.currency.id}).then((function(e){var n=e.data;t(n.calculatedTaxes[0].tax),i.$emit("price-calculate",!1)}))}))}}}},y6Bj:function(e,n,i){var t=i("Ranw");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,i("ydqr").default)("6aa4a369",t,!0,{})}}]);