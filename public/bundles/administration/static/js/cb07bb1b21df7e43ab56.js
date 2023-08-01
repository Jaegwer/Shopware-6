(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[210],{DLiX:function(e,t,r){},Z8xM:function(e,t,r){"use strict";r.r(t);r("z6pG");var n=Shopware.Data.Criteria;t.default={template:'\n{% block sw_customer_detail_order_card %}\n<sw-card\n    class="sw-customer-detail-order"\n    position-identifier="sw-customer-detail-order"\n>\n    \n    {% block sw_customer_detail_order_card_toolbar %}\n    <template #toolbar>\n        <sw-card-filter\n            v-if="(orders && orders.total > 0) || term"\n            :placeholder="$tc(\'sw-customer.detailOrder.searchbarPlaceholder\')"\n            @sw-card-filter-term-change="onChange"\n        >\n            <template #filter>\n                \n                {% block sw_customer_detail_order_add_button %}\n                <sw-button\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'order.creator\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="sw-customer-detail-order__add-order-action"\n                    size="small"\n                    :disabled="!acl.can(\'order.creator\')"\n                    @click="navigateToCreateOrder"\n                >\n                    <sw-icon\n                        name="regular-plus-circle-s"\n                        small\n                    />\n                    {{ $tc(\'sw-customer.detailOrder.buttonCreateOrder\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-card-filter>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_detail_order_card_grid %}\n    <template\n        v-if="(orders && orders.total > 0) || term"\n        #grid\n    >\n        <sw-entity-listing\n            :columns="orderColumns"\n            :repository="orderRepository"\n            :items="orders"\n            :allow-column-edit="false"\n            :show-settings="false"\n            :show-selection="false"\n            :full-page="false"\n            :is-loading="isLoading"\n        >\n            \n            {% block sw_customer_detail_order_card_grid_columns %}\n            \n            {% block sw_customer_detail_order_card_grid_columns_number %}\n            <template #column-orderNumber="{ item }">\n                <router-link :to="{ name: \'sw.order.detail\', params: { id: item.id } }">\n                    {{ item.orderNumber }}\n                </router-link>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_order_card_grid_columns_amount %}\n            <template #column-amountTotal="{ item }">\n                {{ item.amountTotal | currency(item.currency.shortName) }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_order_card_grid_columns_order_date_time %}\n            <template #column-orderDateTime="{ item }">\n                <sw-time-ago :date="item.orderDateTime" />\n            </template>\n            {% endblock %}\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_order_card_grid_columns_action %}\n            <template #actions="{ item }">\n                \n                {% block sw_customer_detail_order_card_grid_columns_action_button %}\n                <sw-context-menu-item\n                    class="sw-order-list-order-view-action"\n                    :router-link="{ name: \'sw.order.detail\', params: { id: item.id } }"\n                >\n                    {{ $tc(\'sw-customer.detailOrder.columnContextOpenOrder\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </sw-entity-listing>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_detail_order_card_grid_empty_state %}\n    <template v-if="(!orders || orders.total === 0) && !isLoading && !term">\n        <sw-empty-state\n            :title="emptyTitle"\n            :absolute="false"\n            :subline="$tc(\'sw-customer.detailOrder.emptySubline\')"\n        >\n            <template #icon>\n                <img\n                    :src="\'/administration/static/img/empty-states/order-empty-state.svg\' | asset"\n                    :alt="emptyTitle"\n                >\n            </template>\n\n            <template #actions>\n                \n                {% block sw_customer_detail_order_card_grid_empty_state_action %}\n                <sw-button\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'order.creator\'),\n                        showOnDisabledElements: true\n                    }"\n                    variant="ghost"\n                    class="sw-customer-detail-order__add-order-action"\n                    :disabled="!acl.can(\'order.creator\')"\n                    @click="navigateToCreateOrder"\n                >\n                    {{ $tc(\'sw-customer.detailOrder.buttonCreateOrder\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-empty-state>\n    </template>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","acl"],props:{customer:{type:Object,required:!0}},data:function(){return{isLoading:!1,activeCustomer:this.customer,orders:null,term:"",orderIcon:"regular-shopping-bag"}},computed:{orderColumns:function(){return this.getOrderColumns()},orderRepository:function(){return this.repositoryFactory.create("order")},emptyTitle:function(){return this.term?this.$tc("sw-customer.detailOrder.emptySearchTitle"):this.$tc("sw-customer.detailOrder.emptyTitle")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.isLoading=!0,this.refreshList()},onChange:function(e){this.term=e,this.orders.criteria.setPage(1),this.orders.criteria.setTerm(e),this.refreshList()},getOrderColumns:function(){return[{property:"orderNumber",label:"sw-customer.detailOrder.columnNumber",align:"center"},{property:"amountTotal",label:"sw-customer.detailOrder.columnAmount",align:"right"},{property:"stateMachineState.name",label:"sw-customer.detailOrder.columnOrderState"},{property:"orderDateTime",label:"sw-customer.detailOrder.columnOrderDate",align:"center"}]},refreshList:function(){var e=this,t=new n(1,25);this.orders&&this.orders.criteria?t=this.orders.criteria:t.addFilter(n.equals("order.orderCustomer.customerId",this.customer.id)),t.addAssociation("stateMachineState").addAssociation("currency"),this.orderRepository.search(t).then((function(t){e.orders=t,e.isLoading=!1}))},navigateToCreateOrder:function(){this.$router.push({name:"sw.order.create",params:{customer:this.customer}})}}}},z6pG:function(e,t,r){var n=r("DLiX");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("ydqr").default)("4bc51c2a",n,!0,{})}}]);