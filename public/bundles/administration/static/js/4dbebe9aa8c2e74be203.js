(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[334],{"WN/6":function(e,t,n){},dsPR:function(e,t,n){"use strict";n.r(t);n("kNoA");var o=Shopware.Data.Criteria;t.default={template:'\n{% block sw_order_select_document_type_modal %}\n<sw-modal\n    v-bind="$attrs"\n    :title="$tc(\'sw-order.components.selectDocumentTypeModal.title\')"\n    variant="small"\n    class="sw-order-select-document-type-modal"\n    @modal-close="$emit(\'modal-close\', false)"\n>\n\n    \n    {% block sw_order_select_document_type_modal_document_types %}\n    <sw-radio-field\n        v-if="!isLoading && documentTypes.length"\n        v-model="documentType"\n        :options="documentTypes"\n        class="sw-order-select-document-type-modal__radio-field"\n        @change="onRadioFieldChange"\n    />\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_order_select_document_type_modal_footer_action_cancel %}\n        <sw-button\n            @click="$emit(\'modal-close\', false)"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_select_document_type_modal_footer_action_create %}\n        <sw-button\n            variant="primary"\n            @click="$emit(\'modal-close\', true)"\n        >\n            {{ $tc(\'sw-order.components.selectDocumentTypeModal.primaryAction\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory"],model:{prop:"value",event:"change"},props:{order:{type:Object,required:!0},value:{required:!1,type:Object,default:null}},data:function(){return{documentTypes:[],documentTypeCollection:null,documentType:null,invoiceExists:!1,isLoading:!1}},computed:{creditItems:function(){var e=[];return this.order.lineItems.forEach((function(t){"credit"===t.type&&e.push(t)})),e},documentRepository:function(){return this.repositoryFactory.create("document")},documentTypeRepository:function(){return this.repositoryFactory.create("document_type")},documentTypeCriteria:function(){return new o(1,100).addSorting(o.sort("name","ASC"))},documentCriteria:function(){var e=new o(1,100);return e.addFilter(o.equals("order.id",this.order.id)),e.addFilter(o.equals("documentType.technicalName","invoice")),e}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.isLoading=!0,this.documentRepository.searchIds(this.documentCriteria).then((function(t){e.invoiceExists=t.total>0,e.documentTypeRepository.search(e.documentTypeCriteria).then((function(t){e.documentTypeCollection=t,e.documentTypes=t.map((function(t){var n={value:t.id,name:t.name,disabled:!e.documentTypeAvailable(t)};return"storno"===t.technicalName||"credit_note"===t.technicalName?e.addHelpTextToOption(n,t):n})),e.documentTypes.length&&(e.documentType=e.documentTypes.find((function(e){return!e.disabled})).value,e.onRadioFieldChange()),e.isLoading=!1}))}))},documentTypeAvailable:function(e){return"storno"!==e.technicalName&&"credit_note"!==e.technicalName||("storno"===e.technicalName||"credit_note"===e.technicalName&&0!==this.creditItems.length)&&this.invoiceExists},addHelpTextToOption:function(e,t){return e.helpText=this.$tc("sw-order.components.selectDocumentTypeModal.helpText.".concat(t.technicalName)),e},onRadioFieldChange:function(){this.$emit("change",this.documentTypeCollection.get(this.documentType))}}}},kNoA:function(e,t,n){var o=n("WN/6");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("ydqr").default)("1f65b9bd",o,!0,{})}}]);