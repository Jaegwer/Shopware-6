(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[365],{"1Ryf":function(n,e,t){var s=t("TTRG");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);(0,t("ydqr").default)("7391beb1",s,!0,{})},FHtd:function(n,e,t){"use strict";t.r(e);t("1Ryf"),e.default={template:'\n{% block sw_product_settings_mode %}\n<sw-context-button\n    v-tooltip="{ message: $tc(\'sw-product.general.tooltipModeSettings\') }"\n    class="sw-product-settings-mode"\n    :menu-width="300"\n    :auto-close="false"\n>\n    <template #button>\n        \n        {% block sw_product_settings_mode_trigger %}\n        <sw-button\n            class="sw-product-settings-mode__trigger"\n            size="x-small"\n            square\n            :aria-label="$tc(\'sw-product.general.tooltipModeSettings\')"\n        >\n            \n            {% block sw_product_settings_mode_trigger_icon %}\n            <sw-icon\n                name="regular-bars-s"\n                size="16px"\n            />\n            {% endblock %}\n        </sw-button>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_product_settings_mode_content %}\n    \n    {% block sw_product_settings_mode_main %}\n    <div class="sw-product-settings-mode__container">\n        \n        {% block sw_product_settings_mode_advanced_switch %}\n        <sw-switch-field\n            v-model="advancedMode.enabled"\n            class="sw-product-settings-mode__advanced-mode"\n            size="medium"\n            :label="$tc(advancedMode.label)"\n            @change="onChangeSetting"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_settings_mode_devider %}\n    <sw-context-menu-divider />\n    {% endblock %}\n\n    \n    {% block sw_product_settings_mode_list %}\n    <transition-group\n        class="sw-product-settings-mode__container sw-product-settings-mode__list"\n        name="item-list"\n        tag="div"\n    >\n        \n        {% block sw_product_settings_mode_item %}\n        <div\n            v-for="(item, index) in settings"\n            :key="item.key"\n            class="sw-product-settings-mode__item"\n        >\n            \n            {% block sw_product_settings_mode_item_visibility_checkbox %}\n            <sw-checkbox-field\n                v-model="item.enabled"\n                :disabled="!advancedMode.enabled"\n                :label="$tc(item.label)"\n                @change="onChangeSettingItem"\n            />\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </transition-group>\n    {% endblock %}\n\n    \n    {% block sw_product_settings_mode_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n    {% endblock %}\n</sw-context-button>\n{% endblock %}\n',props:{modeSettings:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!0}},computed:{advancedMode:function(){return this.modeSettings.value.advancedMode},settings:function(){switch(this.$route.name){case"sw.product.detail.base":return this.modeSettings.value.settings.filter((function(n){return"general"===n.name}));case"sw.product.detail.specifications":return this.modeSettings.value.settings.filter((function(n){return"specifications"===n.name}));default:return this.modeSettings.value.settings}}},methods:{onChangeSetting:function(){this.$emit("settings-change")},onChangeSettingItem:function(){this.$emit("settings-item-change")}}}},TTRG:function(n,e,t){}}]);