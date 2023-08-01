(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[278],{"9wDM":function(e,t,i){},N0jU:function(e,t,i){"use strict";i.r(t);i("Qg1r");var n=Shopware.Data.Criteria;t.default={template:'\n{% block sw_import_export_edit_profile_modal_identifiers %}\n<div class="sw-import-export-edit-profile-modal-identifiers">\n    \n    {% block sw_import_export_edit_profile_modal_identifiers_grid %}\n    <sw-data-grid\n        v-if="identifiers && identifiers.length"\n        :data-source="identifiers"\n        :compact-mode="false"\n        :show-selection="false"\n        :show-actions="false"\n        :columns="identifierColumns"\n        plain-appearance\n        class="sw-import-export-edit-profile-modal-identifiers__grid"\n    >\n\n        \n        {% block sw_import_export_edit_profile_modal_identifiers_grid_entity_name_column %}\n        <template #column-identifierName="{ item }">\n            {{ item.propertyNames.join(\', \') }}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_modal_identifiers_grid_mapped_column %}\n        <template #column-mapped="{ item }">\n            <sw-single-select\n                v-if="item.relation !== \'many_to_many\'"\n                required\n                :value="item.selected"\n                :options="item.options"\n                :disabled="profile.systemDefault"\n                :show-clearable-button="item.selected !== \'id\'"\n                @change="onChangeIdentifier($event, item.entityName)"\n            />\n            <sw-import-export-entity-path-select\n                v-else\n                :value="item.selected"\n                :languages="languages"\n                :currencies="currencies"\n                :entity-type="item.entityName"\n                :disabled="profile.systemDefault"\n                :custom-field-sets="customFieldSets"\n                @change="onChangeIdentifier($event, item.entityName)"\n            >\n                <template #before-item-list>\n                    <span></span>\n                </template>\n            </sw-import-export-entity-path-select>\n        </template>\n        {% endblock %}\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_import_export_edit_profile_modal_identifiers_empty_state %}\n    <sw-empty-state\n        v-else\n        class="sw-import-export-edit-profile-modal-identifiers__empty-state"\n        :title="$tc(\'sw-import-export.profile.mappingEmptyState\')"\n        :absolute="false"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","importExportUpdateByMapping"],props:{profile:{type:Object,required:!1,default:null}},data:function(){return{currencies:[],languages:[],customFieldSets:[]}},computed:{languageRepository:function(){return this.repositoryFactory.create("language")},currencyRepository:function(){return this.repositoryFactory.create("currency")},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},languageCriteria:function(){var e=new n(1,500);return e.addAssociation("locale"),e},currencyCriteria:function(){return new n(1,500)},customFieldSetCriteria:function(){var e=new n(1,500);return e.addAssociation("relations"),e.addAssociation("customFields"),e},identifierColumns:function(){return[{property:"identifierName",label:"sw-import-export.profile.identifiers.identifierNameLabel",allowResize:!1,primary:!0},{property:"mapped",label:"sw-import-export.profile.identifiers.mappedKeyLabel",allowResize:!1,width:"100%"}]},identifiers:function(){var e=this,t={};return this.profile.mapping?(this.profile.mapping.forEach((function(i){var n,r=e.importExportUpdateByMapping.getEntity(e.profile.sourceEntity,i.key),o=r.entity,a=r.path,s=r.relation,p=r.name;if(o&&"one_to_many"!==s){t[o]=null!==(n=t[o])&&void 0!==n?n:{entityName:o,options:[],selected:e.importExportUpdateByMapping.getSelected(o,e.profile.updateBy),relation:s,propertyNames:[]};var l=""!==a?i.key.replace(new RegExp("^(".concat(a,".)")),""):i.key;t[o].options.push({label:l,value:l}),t[o].propertyNames.includes(p)||t[o].propertyNames.push(p)}})),Object.values(t)):[]}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.languageRepository.search(this.languageCriteria).then((function(t){e.languages=t,e.languages.push({locale:{code:"DEFAULT"}})})),this.currencyRepository.search(this.currencyCriteria).then((function(t){e.currencies=t,e.currencies.push({isoCode:"DEFAULT"})})),this.customFieldSetRepository.search(this.customFieldSetCriteria).then((function(t){e.customFieldSets=t}))},onChangeIdentifier:function(e,t){this.importExportUpdateByMapping.updateMapping(this.profile,e,t)}}}},Qg1r:function(e,t,i){var n=i("9wDM");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("ydqr").default)("1b8790d6",n,!0,{})}}]);