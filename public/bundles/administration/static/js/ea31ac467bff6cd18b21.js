(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[436],{"+yQ8":function(t,e,n){var l=n("c266");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);(0,n("ydqr").default)("083dd2d2",l,!0,{})},"Ad/y":function(t,e,n){"use strict";n.r(e);n("+yQ8"),e.default={template:'\n{% block sw_settings_listing_delete_modal %}\n<sw-modal\n    :title="title"\n    variant="small"\n    class="sw-settings-listing-delete-modal"\n    @modal-close="emitCancel"\n>\n\n    \n    {% block sw_settings_listing_delete_modal_body_description %}\n    <p>{{ description }}</p>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_delete_modal_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_settings_listing_delete_modal_footer_cancel_button %}\n        <sw-button\n            size="small"\n            @click="emitCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_delete_modal_footer_delete_button %}\n        <sw-button\n            variant="danger"\n            size="small"\n            @click="emitDelete"\n        >\n            {{ $tc(\'global.default.delete\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',props:{title:{type:String,required:!0},description:{type:String,required:!0}},methods:{emitCancel:function(){this.$emit("cancel")},emitDelete:function(){this.$emit("delete")}}}},c266:function(t,e,n){}}]);