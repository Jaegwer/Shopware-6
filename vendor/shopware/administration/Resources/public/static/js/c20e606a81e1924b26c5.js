(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[213],{Jjt0:function(n,e,t){},N1BA:function(n,e,t){var i=t("Jjt0");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,t("ydqr").default)("511f9d4d",i,!0,{})},bWs2:function(n,e,t){"use strict";t.r(e);var i=t("J58c"),o=t.n(i);t("N1BA");function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){o()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var l=Shopware.Component.getComponentHelper().mapState;e.default={template:'\n{% block sw_extension_adding_failed %}\n<div class="sw-extension-adding-failed">\n    \n    {% block sw_extension_adding_failed_icon %}\n    <sw-circle-icon\n        :size="72"\n        icon-name="regular-times-circle-s"\n        variant="danger"\n    />\n    {% endblock %}\n\n    \n    {% block sw_extension_adding_failed_headline %}\n    <h3>{{ title || headline }}</h3>\n    {% endblock %}\n\n    \n    {% block sw_extension_adding_failed_notification %}\n    <p>{{ detail || text }}</p>\n    <p v-if="documentationLink">\n        <a :href="documentationLink">\n            {{ documentationLink }}\n        </a>\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_extension_adding_failed_licence_cancellation %}\n    <template v-if="isRent">\n        <p class="sw-extension-adding-failed__text-licence-cancellation">\n            {{ $tc(\'sw-extension-store.component.sw-extension-adding-failed.installationFailed.notificationLicense\') }}\n        </p>\n\n        <i18n\n            tag="p"\n            path="sw-extension-store.component.sw-extension-adding-failed.installationFailed.textSupport"\n        >\n            <template #mail>\n                <a :href="`mailto:${$tc(\'sw-extension-store.component.sw-extension-adding-failed.installationFailed.supportEmail\')}`">\n                    {{ $tc(\'sw-extension-store.component.sw-extension-adding-failed.installationFailed.supportEmail\') }}\n                </a>\n            </template>\n\n            <template #phone>\n                <a :href="`tel:${$tc(\'sw-extension-store.component.sw-extension-adding-failed.installationFailed.supportPhone\')}`">\n                    {{ $tc(\'sw-extension-store.component.sw-extension-adding-failed.installationFailed.supportPhone\') }}\n                </a>\n            </template>\n        </i18n>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_adding_failed_button_close %}\n    <sw-button\n        variant="primary"\n        block\n        @click="$emit(\'close\')"\n    >\n        {{ $tc(\'global.default.close\') }}\n    </sw-button>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["shopwareExtensionService"],props:{extensionName:{type:String,required:!0},title:{type:String,required:!1,default:null},detail:{type:String,required:!1,default:null},documentationLink:{type:String,required:!1,default:null}},computed:a(a({},l("shopwareExtensions",["myExtensions"])),{},{extension:function(){var n=this;return this.myExtensions.data.find((function(e){return e.name===n.extensionName}))},isRent:function(){var n,e;return(null===(n=this.extension)||void 0===n||null===(e=n.storeLicense)||void 0===e?void 0:e.variant)===this.shopwareExtensionService.EXTENSION_VARIANT_TYPES.RENT},headline:function(){return void 0===this.extension?this.$tc("sw-extension-store.component.sw-extension-adding-failed.titleFailure"):this.$tc("sw-extension-store.component.sw-extension-adding-failed.installationFailed.titleFailure")},text:function(){return void 0===this.extension?this.$tc("sw-extension-store.component.sw-extension-adding-failed.textProblem"):this.$tc("sw-extension-store.component.sw-extension-adding-failed.installationFailed.textProblem")}})}}}]);