(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[37],{"/o+V":function(e,t,n){var i=n("aIJ/");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("ydqr").default)("29eee4d6",i,!0,{})},U18T:function(e,t,n){"use strict";n.r(t);n("/o+V"),t.default={template:'\n{% block sw_media_list_selection_item_v2 %}\n<div\n    class="sw-media-list-selection-item-v2"\n    :class="productImageClasses"\n>\n\n    \n    {% block sw_media_list_selection_item_v2_preview %}\n    <template v-if="!isPlaceholder">\n\n        \n        {% block sw_media_list_selection_item_v2_preview_media %}\n        <sw-media-preview-v2\n            class="sw-media-list-selection-item-v2__image"\n            :source="sourceId"\n            :hide-tooltip="hideTooltip"\n            @click="$emit(\'click\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_media_list_selection_item_v2_preview_actions %}\n        <sw-context-button\n            v-if="!hideActions"\n            class="sw-media-list-selection-item-v2__context-button"\n        >\n            \n            {% block sw_media_list_selection_item_v2_context %}\n            \n            {% block sw_media_list_selection_item_v2_context_delete_action %}\n            <sw-context-menu-item\n                variant="danger"\n                @click="$emit(\'item-remove\')"\n            >\n                {{ $tc(\'global.sw-media-list-selection-item-v2.buttonRemove\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            {% endblock %}\n        </sw-context-button>\n        {% endblock %}\n    </template>\n\n    {% endblock %}\n\n    \n    {% block sw_media_list_selection_item_v2_placeholder %}\n    <template v-else>\n        \n        {% block sw_media_list_selection_item_v2_placeholder_icon %}\n        <sw-icon\n            class="sw-media-list-selection-item-v2__placeholder-icon"\n            :name="\'regular-image\'"\n            :small="true"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',props:{item:{required:!0},hideActions:{type:Boolean,required:!1,default:!1},hideTooltip:{type:Boolean,required:!1,default:!1}},computed:{isPlaceholder:function(){return!!this.item.isPlaceholder},productImageClasses:function(){return{"is--placeholder":this.isPlaceholder}},sourceId:function(){return this.item.mediaId||this.item.targetId||this.item.id}}}},"aIJ/":function(e,t,n){}}]);