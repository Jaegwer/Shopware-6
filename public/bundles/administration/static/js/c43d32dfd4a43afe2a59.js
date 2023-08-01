(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[182],{"7fhx":function(t,i,n){var e=n("rHQQ");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,n("ydqr").default)("24b4bf46",e,!0,{})},rHQQ:function(t,i,n){},wZqs:function(t,i,n){"use strict";n.r(i);n("7fhx"),i.default={template:'<div class="sw-cms-el-config-product-listing-config-sorting-grid">\n\n    <sw-data-grid\n        class="sw-cms-el-config-product-listing-config-sorting-grid__grid"\n        :data-source="visibleProductSortings"\n        :columns="gridColumns"\n        :compact-mode="false"\n        :allow-inline-edit="true"\n        :show-selection="false"\n        plain-appearance\n    >\n\n        <template #actions="{ item }">\n            <sw-context-menu-item\n                v-if="!item.locked"\n                :class="\'sw-cms-el-config-product-listing-config-sorting-grid__grid_item_\' + item.id"\n                variant="danger"\n                :disabled="isDefaultSorting(item)"\n                @click="onDelete(item)"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-context-menu-item>\n        </template>\n\n        <template #column-fields="{ item }">\n            {{ formatProductSortingFields(item.fields) }}\n        </template>\n\n        <template #pagination>\n            <sw-pagination\n                v-if="paginationVisible"\n                :page="page"\n                :limit="limit"\n                :total="total"\n                :steps="steps"\n                :auto-hide="false"\n                @page-change="onPageChange"\n            />\n        </template>\n    </sw-data-grid>\n</div>\n',props:{productSortings:{type:Array,required:!0},defaultSorting:{type:Object,required:!0}},data:function(){return{limit:10,page:1}},computed:{visibleProductSortings:function(){return this.productSortings.slice((this.page-1)*this.limit,(this.page-1)*this.limit+this.limit)},paginationVisible:function(){return this.total>this.limit},total:function(){return this.productSortings.length},gridColumns:function(){return[{property:"label",label:"sw-cms.elements.productListing.config.sorting.gridHeaderName"},{property:"fields",label:"sw-cms.elements.productListing.config.sorting.gridHeaderFields",multiLine:!0},{property:"priority",label:"sw-cms.elements.productListing.config.sorting.gridHeaderPriority",inlineEdit:"number"}]}},methods:{formatProductSortingFields:function(t){return t.map((function(t){return t.field})).join(", ")},onDelete:function(t){this.productSortings.remove(t.id)},isDefaultSorting:function(t){return!!this.defaultSorting&&t.id===this.defaultSorting.id},onPageChange:function(t){var i=t.page,n=t.limit;this.page=i,this.limit=n}}}}}]);