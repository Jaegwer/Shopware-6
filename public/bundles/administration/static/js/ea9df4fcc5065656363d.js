(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[396],{FJlg:function(t,e,n){"use strict";n.r(e);n("twc/"),e.default={template:'\n{% block sw_property_detail_language_switch %}\n\n<template #language-switch>\n    <sw-language-switch disabled />\n</template>\n{% endblock %}\n\n\n{% block sw_property_detail_content_language_info %}\n<sw-language-info\n    :entity-description="placeholder(propertyGroup, \'name\', $tc(\'sw-property.detail.textHeadline\'))"\n    is-new-entity\n/>\n{% endblock %}\n\n\n{% block sw_property_detail_content_option_list %}\n<sw-card\n    class="sw-property-create__option-list-empty-state"\n    position-identifier="sw-property-create-empty-state"\n    :title="$tc(\'sw-property.detail.cardTitle\')"\n>\n    <sw-empty-state\n        title=""\n        :subline="$tc(\'sw-property.detail.optionEmptyStateSubline\')"\n    >\n        <template #icon>\n            <img\n                :src="\'/administration/static/img/empty-states/products-empty-state.svg\' | asset"\n                alt=""\n            >\n        </template>\n    </sw-empty-state>\n</sw-card>\n{% endblock %}\n',data:function(){return{newId:null}},methods:{createdComponent:function(){Shopware.State.getters["context/isSystemDefaultLanguage"]||(Shopware.Context.api.languageId=Shopware.Context.api.systemLanguageId),this.propertyGroup=this.propertyRepository.create(),this.propertyGroup.sortingType="alphanumeric",this.propertyGroup.displayType="text",this.propertyGroup.position=1,this.propertyGroup.filterable=!0,this.propertyGroup.visibleOnProductDetailPage=!0,this.newId=this.propertyGroup.id,this.isLoading=!1},saveFinish:function(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.property.detail",params:{id:this.newId}})},onSave:function(){this.$super("onSave")}}}},h7K6:function(t,e,n){},"twc/":function(t,e,n){var i=n("h7K6");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("ydqr").default)("5870bdea",i,!0,{})}}]);