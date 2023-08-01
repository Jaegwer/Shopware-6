(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[412],{JbQb:function(e,t,n){var s=n("nQ12");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n("ydqr").default)("777e4c16",s,!0,{})},Wi91:function(e,t,n){"use strict";n.r(t);var s=n("J58c"),i=n.n(s);n("JbQb");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}var o=Shopware,l=o.Mixin,c=o.Context,r=Shopware.Data,d=r.EntityCollection,u=r.Criteria;t.default={template:'\n{% block sw_sales_channel_detail_products %}\n<sw-card\n    v-if="salesChannel && products"\n    position-identifier="sw-sales-channel-detail-products"\n    class="sw-sales-channel-detail-products"\n    :is-loading="isLoading"\n>\n    \n    {% block sw_sales_channel_detail_products_filled_state %}\n    <template\n        v-if="products.length > 0 || searchTerm"\n        #grid\n    >\n        \n        {% block sw_sales_channel_detail_products_card_section %}\n        <sw-container rows="auto 500px">\n            \n            {% block sw_sales_channel_detail_products_card_section_secondary %}\n            <sw-card-section secondary>\n                <sw-container\n                    columns="1fr auto"\n                    gap="0 15px"\n                >\n                    \n                    {% block sw_sales_channel_detail_products_card_section_secondary_input %}\n                    <sw-simple-search-field\n                        v-model="searchTerm"\n                        variant="form"\n                        size="small"\n                        @search-term-change="onChangeSearchTerm"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_sales_channel_detail_products_card_section_secondary_button %}\n                    <sw-button\n                        v-tooltip="{\n                            message: $tc(\'sw-privileges.tooltip.warning\'),\n                            disabled: acl.can(\'sales_channel.editor\'),\n                            showOnDisabledElements: true\n                        }"\n                        variant="ghost"\n                        size="small"\n                        :disabled="!acl.can(\'sales_channel.editor\')"\n                        @click="openAddProductsModal"\n                    >\n                        {{ $tc(\'sw-sales-channel.detail.products.buttonAddProducts\', 0) }}\n                    </sw-button>\n                    {% endblock %}\n                </sw-container>\n            </sw-card-section>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_products_card_section_primary %}\n            <sw-card-section divider="top">\n                \n                {% block sw_sales_channel_detail_products_card_section_primary_filled_state %}\n                <sw-entity-listing\n                    v-if="products.length > 0"\n                    ref="entityListing"\n                    class="sw-sales-channel-detail-products__list"\n                    identifier="sw-sales-channel-detail-products-list"\n                    detail-route="sw.product.detail"\n                    :repository="productRepository"\n                    :items="products"\n                    :data-source="products"\n                    :columns="productColumns"\n                    :plain-appearance="true"\n                    :skeleton-item-amount="limit"\n                    :is-loading="isLoading"\n                    :allow-inline-edit="false"\n                    :allow-view="acl.can(\'sales_channel.viewer\')"\n                    :allow-edit="acl.can(\'product.editor\')"\n                    :allow-delete="acl.can(\'sales_channel.deleter\')"\n                    :is-record-selectable="isProductRemovable"\n                >\n                    <template #selection-content="{ item, isSelected, isRecordSelectable, selectItem, itemIdentifierProperty }">\n                        <slot v-bind="{ item, isSelected, isRecordSelectable, selectItem, itemIdentifierProperty }">\n                            <div class="sw-data-grid__cell-content">\n                                \n                                {% block sw_sales_channel_detail_products_listing_select_item_checkbox %}\n                                <sw-checkbox-field\n                                    v-tooltip="{\n                                        message: $tc(\'sw-sales-channel.detail.products.inheritVariantNotRemovableTooltip\'),\n                                        disabled: isRecordSelectable(item),\n                                        showOnDisabledElements: true\n                                    }"\n                                    :disabled="!isRecordSelectable(item)"\n                                    :value="isSelected(item[itemIdentifierProperty])"\n                                    @change="selectItem($event, item)"\n                                />\n                                {% endblock %}\n                            </div>\n                        </slot>\n                    </template>\n                    <template #column-name="{ item }">\n                        <slot v-bind="{ item }">\n                            \n                            {% block sw_sales_channel_detail_products_listing_column_name %}\n                            <sw-product-variant-info\n                                :variations="item.variation"\n                            >\n                                <router-link :to="{ name: \'sw.product.detail\', params: { id: item.id } }">\n                                    {{ item.translated.name || item.name }}\n                                </router-link>\n                            </sw-product-variant-info>\n                            {% endblock %}\n                        </slot>\n                    </template>\n\n                    <template #column-active="{ item }">\n                        \n                        {% block sw_sales_channel_detail_products_listing_column_active %}\n                        <sw-icon\n                            small\n                            :name="item.active === false ? \'regular-times-s\' : \'regular-checkmark-xs\'"\n                            :color="item.active === false ? \'#de294c\' : \'#37d046\'"\n                        />\n                        {% endblock %}\n                    </template>\n\n                    <template #pagination>\n                        \n                        {% block sw_sales_channel_detail_products_listing_pagination %}\n                        <sw-pagination\n                            v-bind="{ page, limit, total }"\n                            :total-visible="5"\n                            :auto-hide="false"\n                            @page-change="onChangePage"\n                        />\n                        {% endblock %}\n                    </template>\n\n                    <template #delete-action="{ item }">\n                        \n                        {% block sw_sales_channel_detail_products_listing_delete_action %}\n                        <sw-context-menu-item\n                            variant="warning"\n                            :disabled="!isProductRemovable(item)"\n                            @click="onDeleteProduct(item)"\n                        >\n                            {{ $tc(\'global.default.remove\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n                    </template>\n\n                    <template #bulk>\n                        \n                        {% block sw_sales_channel_detail_products_listing_bulk %}\n                        \n                        <a\n                            class="link link-warning"\n                            @click="onDeleteProducts"\n                        >\n                            {{ $tc(\'global.default.remove\') }}\n                        </a>\n                        {% endblock %}\n                    </template>\n                </sw-entity-listing>\n                {% endblock %}\n\n                \n                {% block sw_sales_channel_detail_products_card_section_primary_empty_state %}\n                <sw-empty-state\n                    v-else\n                    :show-description="false"\n                    :title="$tc(\'sw-sales-channel.detail.products.titleEmptyStateTable\')"\n                >\n                    <template #icon>\n                        \n                        {% block sw_sales_channel_detail_products_card_section_primary_image %}\n                        <img\n                            :src="\'/administration/static/img/empty-states/products-empty-state.svg\' | asset"\n                            :alt="$tc(\'sw-sales-channel.detail.products.titleEmptyStateTable\')"\n                        >\n                        {% endblock %}\n                    </template>\n                </sw-empty-state>\n                {% endblock %}\n            </sw-card-section>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_products_empty_state %}\n    <sw-empty-state\n        v-if="products.length <= 0 && !searchTerm"\n        :show-description="false"\n        :title="$tc(\'sw-sales-channel.detail.products.titleEmptyState\')"\n    >\n        <template #icon>\n            \n            {% block sw_sales_channel_detail_products_empty_state_image %}\n            <img\n                :src="\'/administration/static/img/empty-states/products-empty-state.svg\' | asset"\n                :alt="$tc(\'sw-sales-channel.detail.products.titleEmptyState\')"\n            >\n            {% endblock %}\n        </template>\n\n        <template #actions>\n            \n            {% block sw_sales_channel_detail_products_empty_state_button %}\n            <sw-button\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'sales_channel.editor\'),\n                    showOnDisabledElements: true\n                }"\n                variant="ghost"\n                :disabled="!acl.can(\'sales_channel.editor\')"\n                @click="openAddProductsModal"\n            >\n                {{ $tc(\'sw-sales-channel.detail.products.buttonAddProducts\', 0) }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-empty-state>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_products_assignment_modal %}\n    <sw-sales-channel-products-assignment-modal\n        v-if="showProductsModal"\n        :sales-channel="salesChannel"\n        :is-assign-product-loading="isAssignProductLoading"\n        @modal-close="showProductsModal = false"\n        @products-add="onAddProducts"\n    />\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","feature","acl"],mixins:[l.getByName("notification")],props:{salesChannel:{type:Object,required:!1,default:function(){}}},data:function(){return{products:[],isLoading:!1,searchTerm:null,page:1,limit:25,total:0,showProductsModal:!1,isAssignProductLoading:!1}},computed:{productRepository:function(){return this.repositoryFactory.create("product")},productVisibilityRepository:function(){return this.repositoryFactory.create("product_visibility")},productCriteria:function(){var e=new u(this.page,this.limit);return e.setTotalCountMode(1),e.addAssociation("visibilities.salesChannel"),e.addAssociation("options.group"),e.addFilter(u.equals("product.visibilities.salesChannelId",this.salesChannel.id)),this.searchTerm&&e.setTerm(this.searchTerm),e},productColumns:function(){return[{property:"name",label:this.$tc("sw-sales-channel.detail.products.columnProductName"),allowResize:!0,primary:!0},{property:"active",label:this.$tc("sw-sales-channel.detail.products.columnActive"),allowResize:!0,align:"center"},{property:"productNumber",label:this.$tc("sw-sales-channel.detail.products.columnProductNumber"),allowResize:!0}]}},watch:{salesChannel:{deep:!0,immediate:!0,handler:function(e,t){e&&(null==t?void 0:t.id)!==e.id&&this.getProducts()}}},methods:{getProducts:function(){var e,t=this;if(null===(e=this.salesChannel)||void 0===e||!e.id)return Promise.reject();var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c.api);return n.inheritance=!0,this.isLoading=!0,this.productRepository.search(this.productCriteria,n).then((function(e){t.products=e,t.total=e.total,t.total>0&&t.products.length<=0&&(t.page=1===t.page?1:t.page-1,t.getProducts())})).catch((function(){t.products=[]})).finally((function(){t.isLoading=!1}))},onDeleteProduct:function(e){var t=this,n=this.getDeleteId(e);return this.productVisibilityRepository.delete(n,c.api).then((function(){t.getProducts(),t.$refs.entityListing.resetSelection()})).catch((function(e){var n,s;null!=e&&null!==(n=e.response)&&void 0!==n&&null!==(s=n.data)&&void 0!==s&&s.errors?t.showNotificationError(e.response.data.errors):t.createNotificationError({message:e.message})}))},onDeleteProducts:function(){var e=this,t=Object.values(this.$refs.entityListing.selection).map((function(t){return e.getDeleteId(t)}));return this.isLoading=!0,this.productVisibilityRepository.syncDeleted(t,c.api).then((function(){e.isLoading=!1,e.getProducts(),e.$refs.entityListing.resetSelection()})).catch((function(t){var n,s,i,a;e.isLoading=!1,null!=t&&null!==(n=t.response)&&void 0!==n&&null!==(s=n.data)&&void 0!==s&&null!==(i=s.data)&&void 0!==i&&null!==(a=i.product_visibility)&&void 0!==a&&a.result?e.showNotificationError(t.response.data.data.product_visibility.result):e.createNotificationError({message:t.message})}))},getDeleteId:function(e){var t=this;return e.visibilities.find((function(e){return e.salesChannelId===t.salesChannel.id})).id},showNotificationError:function(e){var t=this;e.forEach((function(e){e.errors?t.showNotificationError(e.errors):t.createNotificationError({message:"".concat(e.code,": ").concat(e.detail)})}))},onChangePage:function(e){var t=this;this.page=e.page,this.limit=e.limit,this.products.criteria.sortings.forEach((function(e){var n=e.field,s=e.naturalSorting,i=e.order;t.productCriteria.addSorting(u.sort(n,i,s))})),this.getProducts()},onChangeSearchTerm:function(e){this.searchTerm=e,e&&(this.page=1),this.getProducts()},openAddProductsModal:function(){this.showProductsModal=!0},onAddProducts:function(e){var t=this;if(e.length<=0)return this.showProductsModal=!1,Promise.reject();var n=new d(this.productVisibilityRepository.route,this.productVisibilityRepository.entityName,c.api);return e.forEach((function(e){var s;if(null===(s=t.products)||void 0===s||!s.has(e.id)){var i=t.productVisibilityRepository.create(c.api);Object.assign(i,{visibility:30,productId:e.id,salesChannelId:t.salesChannel.id,salesChannel:t.salesChannel}),n.add(i)}})),this.isAssignProductLoading=!0,this.saveProductVisibilities(n).then((function(){t.getProducts()})).catch((function(e){t.createNotificationError({message:e})})).finally((function(){t.showProductsModal=!1,t.isAssignProductLoading=!1}))},saveProductVisibilities:function(e){return e.length<=0?Promise.resolve():this.productVisibilityRepository.saveAll(e,c.api)},isProductRemovable:function(e){var t=this,n=e.visibilities.find((function(e){return e.salesChannelId===t.salesChannel.id}));return e.parentId!==n.productId}}}},nQ12:function(e,t,n){}}]);