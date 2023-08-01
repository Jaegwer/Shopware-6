(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[475],{"8/h+":function(t,s,i){},NJD5:function(t,s,i){"use strict";i.r(s);i("t/oI");var e=Shopware,o=e.Component,a=e.Mixin;s.default=o.wrapComponentConfig({template:'<sw-modal\n    class="sw-settings-tax-provider-sorting-modal"\n    :title="$tc(\'sw-settings-tax.list.taxProvider.sorting-modal.modalTitle\')"\n    @modal-close="closeModal"\n>\n    <template #body>\n        <div class="sw-modal__body sw-settings-tax-provider-sorting-modal__subtitle">\n            {{ $tc(\'sw-settings-tax.list.taxProvider.sorting-modal.subTitle\') }}\n        </div>\n\n        <div class="sw-modal__body">\n            <sw-sortable-list\n                class="sw-settings-tax-provider-sorting-modal__tax-provider-list"\n                :items="sortedTaxProviders"\n                @itemsSorted="onSort"\n            >\n                <template #item="{ item: taxProvider }">\n                    <div\n                        class="sw-settings-tax-provider-sorting-modal__tax-provider-list-item"\n                        :class="!taxProvider.active ? \'is--disabled\' : \'\'"\n                    >\n                        <sw-icon\n                            class="sw-settings-tax-provider-sorting-modal__tax-provider-list-item__action"\n                            name="regular-grip-vertical"\n                        />\n\n                        <div class="sw-settings-tax-provider-sorting-modal__tax-provider-list-item__name">\n                            {{ taxProvider.translated.name }}\n                        </div>\n                    </div>\n                </template>\n            </sw-sortable-list>\n        </div>\n    </template>\n\n    <template #modal-footer>\n        <sw-button\n            class="sw-settings-tax-provider-sorting-modal__cancel-button"\n            @click="closeModal"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n\n        <sw-button-process\n            class="sw-settings-tax-provider-sorting-modal__save-button"\n            variant="primary"\n            :is-loading="isSaving"\n            :disabled="!acl.can(\'tax.editor\')"\n            :process-success="false"\n            @click="applyChanges"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n    </template>\n</sw-modal>\n',inject:["acl","repositoryFactory"],mixins:[a.getByName("notification")],props:{taxProviders:{type:Array,required:!0}},data:function(){return{isSaving:!1,originalTaxProviders:this.taxProviders,sortedTaxProviders:this.taxProviders}},computed:{taxProviderRepository:function(){return this.repositoryFactory.create("tax_provider")}},methods:{closeModal:function(){this.$emit("modal-close")},applyChanges:function(){var t=this;this.isSaving=!0,this.sortedTaxProviders.map((function(s,i){return s.priority=t.sortedTaxProviders.length-i,s})),this.taxProviderRepository.saveAll(this.sortedTaxProviders).then((function(){t.isSaving=!1,t.$emit("modal-close"),t.$emit("modal-save"),t.createNotificationSuccess({message:t.$tc("sw-settings-tax.list.taxProvider.sorting-modal.saveSuccessful")})})).catch((function(){t.createNotificationError({message:t.$tc("sw-settings-tax.list.taxProvider.sorting-modal.errorMessage")})}))},onSort:function(t){this.sortedTaxProviders=t}}})},"t/oI":function(t,s,i){var e=i("8/h+");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i("ydqr").default)("df2e894c",e,!0,{})}}]);