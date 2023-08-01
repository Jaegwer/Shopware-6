(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[179],{Vk2t:function(e,n,t){"use strict";t.r(n);var i=t("J58c"),c=t.n(i),o=t("6MT9");t("ea5T");function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=Shopware.Mixin;n.default={template:'\n{% block sw_cms_element_product_description_reviews_config %}\n<div class="sw-cms-el-config-product-description-reviews-rating">\n    \n    {% block sw_cms_element_product_description_reviews_config_tabs %}\n    <sw-tabs\n        position-identifier="sw-cms-element-product-description-reviews"\n        class="sw-cms-el-config-product-description-reviews__tabs"\n        default-item="content"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_cms_element_product_description_reviews_config_tab_content %}\n            <sw-tabs-item\n                name="content"\n                :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_product_description_reviews_config_tab_options %}\n            <sw-tabs-item\n                name="options"\n                :title="$tc(\'sw-cms.elements.general.config.tab.options\')"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.options\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template #content="{ active }">\n            \n            {% block sw_cms_element_product_description_reviews_config_content %}\n            <sw-container\n                v-if="active === \'content\'"\n                class="sw-cms-el-config-product-description-reviews-config__tab-content"\n                :columns="\'minmax(300px, 1fr)\'"\n            >\n                \n                {% block sw_cms_element_product_description_reviews_warning %}\n                <sw-alert\n                    v-if="isProductPage"\n                    class="sw-cms-el-config-buy-box__warning"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-cms.elements.productDescriptionReviews.infoText.descriptionAndReviewsElement\') }}\n                </sw-alert>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_description_reviews_config_product_select %}\n                <sw-entity-single-select\n                    v-if="!isProductPage"\n                    ref="cmsProductSelection"\n                    v-model="element.config.product.value"\n                    entity="product"\n                    :label="$tc(\'sw-cms.elements.productBox.config.label.selection\')"\n                    :placeholder="$tc(\'sw-cms.elements.productBox.config.placeholder.selection\')"\n                    :criteria="productCriteria"\n                    :context="productSelectContext"\n                    show-clearable-button\n                    @change="onProductChange"\n                >\n                    \n                    {% block sw_entity_single_select_variant_selected_item %}\n                    <template #selection-label-property="{ item }">\n                        <sw-product-variant-info\n                            :variations="item.variation"\n                        >\n                            {{ item.translated.name || item.name }}\n                        </sw-product-variant-info>\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_entity_single_select_variant_result_item %}\n                    <template #result-item="{ item, index }">\n                        <li\n                            is="sw-select-result"\n                            v-bind="{ item, index }"\n                        >\n                            \n                            {% block sw_entity_single_select_base_results_list_result_label %}\n                            <span class="sw-select-result__result-item-text">\n                                <sw-product-variant-info :variations="item.variation">\n                                    {{ item.translated.name || item.name }}\n                                </sw-product-variant-info>\n                            </span>\n                            {% endblock %}\n                        </li>\n                    </template>\n                    {% endblock %}\n                </sw-entity-single-select>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n\n            \n            {% block sw_cms_el_product_description_rating_config_options %}\n            <sw-container\n                v-if="active === \'options\'"\n                class="sw-cms-el-config-text__tab-options"\n            >\n                \n                {% block sw_cms_el_product_description_rating_config_options_alignment %}\n                <sw-select-field\n                    v-model="element.config.alignment.value"\n                    :label="$tc(\'sw-cms.elements.general.config.label.alignment\')"\n                    :placeholder="$tc(\'sw-cms.elements.general.config.label.alignment\')"\n                >\n                    <option value="flex-start">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n                    </option>\n                    <option value="center">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n                    </option>\n                    <option value="flex-end">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n        </template>\n    </sw-tabs>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[l.getByName("cms-element")],computed:{productRepository:function(){return this.repositoryFactory.create("product")},productSelectContext:function(){return r(r({},Shopware.Context.api),{},{inheritance:!0})},productCriteria:function(){var e=new o.a(1,25);return e.addAssociation("options.group"),e},selectedProductCriteria:function(){var e=new o.a(1,25);return e.addAssociation("properties"),e},isProductPage:function(){var e,n;return"product_detail"===(null===(e=this.cmsPageState)||void 0===e||null===(n=e.currentPage)||void 0===n?void 0:n.type)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("product-description-reviews")},onProductChange:function(e){var n=this;e?this.productRepository.get(e,this.productSelectContext,this.selectedProductCriteria).then((function(t){n.element.config.product.value=e,n.$set(n.element.data,"productId",e),n.$set(n.element.data,"product",t)})):(this.element.config.product.value=null,this.$set(this.element.data,"productId",null),this.$set(this.element.data,"product",null)),this.$emit("element-update",this.element)}}}},ea5T:function(e,n,t){var i=t("rK9y");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("ydqr").default)("0242dd03",i,!0,{})},rK9y:function(e,n,t){}}]);