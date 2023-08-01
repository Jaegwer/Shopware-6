(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[454],{"0Yl/":function(e,n,t){var i=t("zfM1");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("ydqr").default)("95186f7e",i,!0,{})},FmFt:function(e,n,t){"use strict";t.r(n);var i=t("QGb3"),s=t.n(i),o=t("HZZ/"),a=t.n(o),r=t("J58c"),l=t.n(r),c=t("hJxD"),d=t.n(c);t("0Yl/");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=Shopware,p=g.Component,f=g.Mixin,m=g.Context,v=p.getComponentHelper().mapPropertyErrors,w=Shopware.Data,b=w.Criteria,_=w.EntityCollection;n.default={template:'\n{% block sw_settings_rule_detail %}\n<sw-page class="sw-settings-rule-detail">\n    \n    {% block sw_settings_rule_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="rule">\n            {{ rule.name }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-settings-rule.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_detail_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_settings_rule_detail_actions_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-rule.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        <sw-button-group\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'rule.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-settings-rule-detail__save-button-group"\n            :split-button="true"\n        >\n            \n            {% block sw_settings_rule_detail_actions_save %}\n            <sw-button-process\n                v-model="isSaveSuccessful"\n                v-tooltip.bottom="tooltipSave"\n                class="sw-settings-rule-detail__save-action"\n                :is-loading="isLoading"\n                variant="primary"\n                :disabled="!acl.can(\'rule.editor\')"\n                @click="onSave"\n            >\n                {{ $tc(\'sw-settings-rule.detail.buttonSave\') }}\n            </sw-button-process>\n            {% endblock %}\n\n            \n            {% block sw_settings_rule_detail_actions_save_context_menu %}\n            <sw-context-button>\n                <template #button>\n                    <sw-button\n                        class="sw-settings-rule-detail__button-context-menu"\n                        square\n                        variant="primary"\n                        :disabled="isLoading || !acl.can(\'rule.editor\')"\n                    >\n                        <sw-icon\n                            name="regular-chevron-down-xs"\n                            size="16"\n                        />\n                    </sw-button>\n                </template>\n\n                \n                {% block sw_settings_rule_detail_actions_save_context_menu_actions %}\n                \n                {% block sw_settings_rule_detail_actions_duplicate %}\n                <sw-context-menu-item\n                    class="sw-settings-rule-detail__save-duplicate-action"\n                    :disabled="!acl.can(\'rule.creator\') || !acl.can(\'rule.editor\')"\n                    @click="onDuplicate"\n                >\n                    {{ $tc(\'sw-product.detail.buttonSaveDuplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </sw-button-group>\n    </template>\n    {% endblock %}\n\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :disabled="!ruleId"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n\n    \n    {% block sw_settings_rule_detail_content %}\n    <template #content>\n        \n        {% block sw_settings_rule_detail_tabs_discard_changes_modal %}\n        <sw-discard-changes-modal\n            v-if="isDisplayingSaveChangesWarning"\n            @keep-editing="onLeaveModalClose(nextRoute)"\n            @discard-changes="onLeaveModalConfirm(nextRoute)"\n        />\n        {% endblock %}\n        <sw-card-view>\n            \n            {% block sw_settings_rule_detail_tabs %}\n            <sw-tabs\n                v-if="rule && !rule.isNew()"\n                class="sw-settings-rule-detail__tabs"\n                position-identifier="sw-settings-rule-detail"\n            >\n                \n                {% block sw_settings_rule_detail_tab_items %}\n                <sw-tabs-item\n                    v-for="tab in tabItems"\n                    :key="tab.route.name"\n                    :class="\'sw-settings-rule-detail__tab-item sw-settings-rule-detail__tab-item-\' + tab.cssClassSuffix"\n                    :route="tab.route"\n                    :title="tab.title"\n                    :has-error="tabHasError(tab)"\n                >\n                    {{ tab.title }}\n                </sw-tabs-item>\n                {% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_settings_rule_detail_content_view %}\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <router-view\n                v-else-if="rule !== null"\n                :key="$route.path"\n                :rule="rule"\n                :conditions="conditions"\n                :condition-repository="conditionRepository"\n                :is-loading="isLoading"\n                :detail-page-loading="isLoading"\n                :rule-name-error="ruleNameError"\n                :rule-priority-error="rulePriorityError"\n                @conditions-changed="conditionsChanged"\n                @tree-finished-loading="setTreeFinishedLoading"\n            />\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["ruleConditionDataProviderService","ruleConditionsConfigApiService","repositoryFactory","acl","feature"],mixins:[f.getByName("notification")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},props:{ruleId:{type:String,required:!1,default:null}},data:function(){return{rule:null,conditions:null,conditionTree:null,deletedIds:[],isLoading:!1,isSaveSuccessful:!1,conditionTreeFinishedLoading:!1,conditionsTreeContainsUserChanges:!1,nextRoute:null,isDisplayingSaveChangesWarning:!1,forceDiscardChanges:!1}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:h({identifier:function(){return this.rule?this.rule.name:""},ruleRepository:function(){return this.repositoryFactory.create("rule")},ruleCriteria:function(){var e=new b(1,25);return e.addAssociation("tags"),e.addAssociation("personaPromotions"),e.addAssociation("orderPromotions"),e.addAssociation("cartPromotions"),e.addAssociation("promotionDiscounts"),e.addAssociation("promotionSetGroups"),e.addAssociation("flowSequences.flow"),e.addAssociation("shippingMethodPriceCalculations"),e.addAssociation("shippingMethodPrices"),e.addAssociation("productPrices"),e.addAssociation("shippingMethods"),e.addAssociation("paymentMethods"),e},appScriptConditionRepository:function(){return this.repositoryFactory.create("app_script_condition")},conditionRepository:function(){return this.rule?this.repositoryFactory.create(this.rule.conditions.entity,this.rule.conditions.source):null},tooltipSave:function(){if(!this.acl.can("rule.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("rule.editor"),showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},tabItems:function(){return[{title:this.$tc("sw-settings-rule.detail.tabGeneral"),route:{name:"sw.settings.rule.detail.base",params:{id:this.$route.params.id}},cssClassSuffix:"general"},{title:this.$tc("sw-settings-rule.detail.tabAssignments"),route:{name:"sw.settings.rule.detail.assignments",params:{id:this.$route.params.id}},cssClassSuffix:"assignments"}]}},v("rule",["name","priority"])),watch:{ruleId:{immediate:!0,handler:function(){var e=this;this.isLoading=!0,this.loadConditionData().then((function(n){if(e.ruleConditionDataProviderService.addScriptConditions(n),!e.ruleId)return e.isLoading=!1,void e.createRule();e.loadEntityData(e.ruleId).then((function(){e.isLoading=!1})),e.setTreeFinishedLoading()}))}},conditionTree:{deep:!0,handler:function(){this.conditionTreeFinishedLoading&&(this.conditionsTreeContainsUserChanges=!0)}},$route:function(e,n){var t=this;"sw.settings.rule.detail.base"===e.name&&"sw.settings.rule.detail.assignments"===n.name&&(this.isLoading=!0,this.loadEntityData(this.ruleId).then((function(){t.isLoading=!1,t.setTreeFinishedLoading()})))}},beforeRouteUpdate:function(e,n,t){this.unsavedDataLeaveHandler(e,n,t)},beforeRouteLeave:function(e,n,t){this.unsavedDataLeaveHandler(e,n,t)},methods:{loadConditionData:function(){var e=h(h({},m.api),{},{languageId:Shopware.State.get("session").languageId}),n=new b(1,500);return Promise.all([this.appScriptConditionRepository.search(n,e),this.ruleConditionsConfigApiService.load()]).then((function(e){return e[0]}))},createRule:function(){this.rule=this.ruleRepository.create(m.api),this.conditions=this.rule.conditions},loadEntityData:function(e){var n=this;return this.isLoading=!0,this.conditions=null,this.ruleRepository.get(e,m.api,this.ruleCriteria).then((function(e){return n.rule=e,n.loadConditions()}))},unsavedDataLeaveHandler:function(e,n,t){if(this.forceDiscardChanges)return this.forceDiscardChanges=!1,void t();if("sw.settings.rule.detail.assignments"===e.name&&"sw.settings.rule.detail.base"===n.name)this.checkUnsavedData({to:e,from:n,next:t});else if("sw.settings.rule.detail.base"===e.name||"sw.settings.rule.create.base"===e.name)return this.conditionsTreeContainsUserChanges=!1,this.conditionTreeFinishedLoading=!1,void t();this.checkUnsavedData({to:e,from:n,next:t})},checkUnsavedData:function(e){var n=e.to,t=e.next;this.conditionsTreeContainsUserChanges||this.ruleRepository.hasChanges(this.rule)?(this.isDisplayingSaveChangesWarning=!0,this.nextRoute=n,t(!1)):t()},setTreeFinishedLoading:function(){var e=this;this.$nextTick((function(){e.conditionsTreeContainsUserChanges=!1,e.conditionTreeFinishedLoading=!0}))},onLeaveModalClose:function(){this.nextRoute=null,this.isDisplayingSaveChangesWarning=!1},onLeaveModalConfirm:function(e){var n=this;return a()(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.forceDiscardChanges=!0,n.isDisplayingSaveChangesWarning=!1,"sw.settings.rule.detail.assignments"!==e.name){t.next=5;break}return t.next=5,n.loadEntityData(n.ruleId).then((function(){n.isLoading=!1}));case 5:n.$nextTick((function(){n.$router.push({name:e.name,params:e.params})}));case 6:case"end":return t.stop()}}),t)})))()},loadConditions:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=h(h({},m.api),{},{inheritance:!0});if(null===n)return this.conditionRepository.search(new b(1,25),t).then((function(n){return e.loadConditions(n)}));if(n.total<=n.length)return this.conditions=n,Promise.resolve();var i=new b(n.criteria.page+1,n.criteria.limit);return"product"===n.entity&&i.addAssociation("options.group"),this.conditionRepository.search(i,n.context).then((function(t){return n.push.apply(n,s()(t)),n.criteria=t.criteria,n.total=t.total,e.loadConditions(n)}))},conditionsChanged:function(e){var n=e.conditions,t=e.deletedIds;this.conditionTree=n,this.deletedIds=[].concat(s()(this.deletedIds),s()(t))},validateRuleAwareness:function(){var e=this,n=this.ruleConditionDataProviderService.getAwarenessKeysWithEqualsAnyConfig();if(n.length<=0)return!0;var t=!0;return n.forEach((function(n){if(e.rule[n].length>0){var i=[];e.conditionTree.forEach((function(n){if(i.push(n),n.children){var t=e.getChildrenConditions(n);i.push.apply(i,s()(t))}}));var o=e.ruleConditionDataProviderService.getRestrictionsByAssociation(new _(e.conditionRepository.route,e.conditionRepository.entityName,m.api,null,i),n);if(o.isRestricted){var a=e.$tc("sw-restricted-rules.restrictedAssignment.equalsAnyViolationTooltip",0,{conditions:e.ruleConditionDataProviderService.getTranslatedConditionViolationList(o.equalsAnyNotMatched,"sw-restricted-rules.or"),entityLabel:e.$tc(o.assignmentSnippet,2)});e.createNotificationError({message:a}),t=!1}}})),t},getChildrenConditions:function(e){var n=this,t=[];return e.children.forEach((function(e){if(t.push(e),e.children){var i=n.getChildrenConditions(e);t.push.apply(t,s()(i))}})),t},onSave:function(){var e=this;return this.validateRuleAwareness()?(this.isSaveSuccessful=!1,this.isLoading=!0,this.rule.isNew()?(this.rule.conditions=this.conditionTree,this.saveRule().then((function(){e.$router.push({name:"sw.settings.rule.detail",params:{id:e.rule.id}}),e.isSaveSuccessful=!0,e.conditionsTreeContainsUserChanges=!1})).catch((function(){e.showErrorNotification()}))):this.saveRule().then(this.syncConditions).then((function(){e.isSaveSuccessful=!0,e.loadEntityData(e.rule.id).then((function(){e.setTreeFinishedLoading()}))})).then((function(){e.isLoading=!1})).catch((function(){e.isLoading=!1,e.showErrorNotification()}))):Promise.resolve()},abortOnLanguageChange:function(){return this.ruleRepository.hasChanges(this.rule)},saveOnLanguageChange:function(){return this.onSave()},onChangeLanguage:function(e){var n=this;Shopware.State.commit("context/setApiLanguageId",e),this.isLoading=!0,this.loadEntityData(this.ruleId).then((function(){n.isLoading=!1,n.setTreeFinishedLoading()}))},saveRule:function(){return this.ruleRepository.save(this.rule,m.api)},syncConditions:function(){var e=this;return this.conditionRepository.sync(this.conditionTree,m.api).then((function(){return e.deletedIds.length>0?e.conditionRepository.syncDeleted(e.deletedIds,m.api).then((function(){e.deletedIds=[]})):Promise.resolve()}))},showErrorNotification:function(){this.createNotificationError({message:this.$tc("sw-settings-rule.detail.messageSaveError",0,{name:this.rule.name})}),this.isLoading=!1},tabHasError:function(e){return"sw.settings.rule.detail.base"===e.route.name&&(!!this.ruleNameError||!!this.rulePriorityError)},onCancel:function(){this.$router.push({name:"sw.settings.rule.index"})},onDuplicate:function(){var e=this;return this.onSave().then((function(){var n={overwrites:{name:"".concat(e.rule.name," ").concat(e.$tc("global.default.copy")),createdAt:null}};return e.ruleRepository.clone(e.rule.id,Shopware.Context.api,n).then((function(n){e.$router.push({name:"sw.settings.rule.detail",params:{id:n.id}})}))}))}}}},zfM1:function(e,n,t){}}]);