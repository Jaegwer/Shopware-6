(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[505],{m2a6:function(i,t,e){"use strict";e.r(t);var n=e("J58c"),s=e.n(n);function r(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,n)}return e}function o(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){s()(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}var l=Shopware.Context,c=Shopware.Component.getComponentHelper().mapState;t.default={template:'\n{% block sw_bulk_edit_product_visibility %}\n<div class="sw-bulk-edit-product-visibility">\n    \n    {% block sw_bulk_edit_product_visibility_select %}\n    <sw-inherit-wrapper\n        ref="productVisibilitiesInheritance"\n        v-model="product.visibilities"\n        :inherited-value="product.visibilities"\n        class="sw-product-category-form__visibility_field"\n        :custom-remove-inheritance-function="visibilitiesRemoveInheritanceFunction"\n        is-association\n    >\n        <template #content="{ currentValue, isInherited, updateCurrentValue }">\n            <sw-product-visibility-select\n                ref="productVisibility"\n                :key="isInherited"\n                class="sw-product-detail__select-visibility"\n                :entity-collection="currentValue"\n                :placeholder="$tc(\'sw-product.visibility.placeholderVisibility\')"\n                :disabled="disabled"\n                @change="updateCurrentValue"\n            />\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_product_visibility_advanced %}\n    <sw-container\n        v-if="product.visibilities.length > 0"\n        columns="1fr"\n        justify="end"\n    >\n        \n        <a\n            class="sw-card__quick-link advanced-visibility"\n            :class="{ \'is--disabled\': disabled }"\n            @click="openModal"\n        >\n            {{ $tc(\'sw-product.visibility.linkAdvancedVisibility\') }} <sw-icon\n                name="regular-long-arrow-right"\n                small\n            />\n        </a>\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_product_visibility_advanced_modal %}\n    <sw-modal\n        v-if="displayVisibilityDetail"\n        :title="$tc(\'sw-product.visibility.textHeadline\')"\n        class="sw-product-category-form__visibility_modal"\n        @modal-close="closeModal"\n    >\n        <p>{{ $tc(\'sw-product.visibility.visibilityModalDescription\') }}</p>\n\n        <sw-product-visibility-detail />\n\n        <template #modal-footer>\n            <sw-button\n                variant="primary"\n                size="small"\n                @click="closeModal"\n            >\n                {{ $tc(\'sw-product.visibility.closeModal\') }}\n            </sw-button>\n        </template>\n    </sw-modal>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],props:{bulkEditProduct:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{displayVisibilityDetail:!1}},computed:o(o({},c("swProductDetail",["product"])),{},{productVisibilityRepository:function(){return this.repositoryFactory.create(this.product.visibilities.entity)}}),methods:{visibilitiesRemoveInheritanceFunction:function(i){var t=this;return i.forEach((function(i){var e=i.productVersionId,n=i.salesChannelId,s=i.salesChannel,r=i.visibility,o=t.productVisibilityRepository.create(l.api);Object.assign(o,{productId:t.product.id,productVersionId:e,salesChannelId:n,salesChannel:s,visibility:r}),t.product.visibilities.push(o)})),this.$refs.productVisibilitiesInheritance.forceInheritanceRemove=!0,this.product.visibilities},openModal:function(){this.displayVisibilityDetail=!0},closeModal:function(){this.displayVisibilityDetail=!1}}}}}]);