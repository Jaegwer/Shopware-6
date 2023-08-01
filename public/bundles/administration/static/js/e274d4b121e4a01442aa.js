(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[52],{Fvaf:function(e,n,t){"use strict";t.r(n);t("JZr0");var o=Shopware.Mixin,c=Shopware.Data.Criteria;n.default={template:'\n{% block sw_bulk_edit_order_documents %}\n<div class="sw-bulk-edit-order-documents">\n    \n    {% block sw_bulk_edit_order_documents_container %}\n    <sw-container\n        columns="1fr"\n        rows="50px"\n    >\n        \n        {% block sw_bulk_edit_order_documents_type %}\n        <sw-checkbox-field\n            v-for="document in documentTypes"\n            :key="document.id"\n            v-model="value.documentType[document.technicalName]"\n            :label="document.name"\n            :disabled="documents?.disabled"\n        />\n        {% endblock %}\n\n        \n        {% block sw_bulk_edit_order_documents_skip_sent_documents %}\n        <sw-switch-field\n            v-model="value.skipSentDocuments"\n            :label="$tc(\'sw-bulk-edit.order.status.documents.skipSentDocuments\')"\n            :disabled="documents?.disabled"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[o.getByName("notification")],props:{documents:{type:Object,required:!0},value:{type:Object,required:!0}},data:function(){return{documentTypes:null}},metaInfo:function(){return{title:this.$createTitle()}},computed:{documentTypeRepository:function(){return this.repositoryFactory.create("document_type")},documentTypeCriteria:function(){var e=new c(1,100);return e.addSorting(c.sort("name","ASC")),e}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.documentTypeRepository.search(this.documentTypeCriteria).then((function(n){e.documentTypes=n,e.documentTypes.forEach((function(n){e.value.documentType[n.technicalName]=null}))}))}}}},JZr0:function(e,n,t){var o=t("WGgb");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("ydqr").default)("379a64e4",o,!0,{})},WGgb:function(e,n,t){}}]);