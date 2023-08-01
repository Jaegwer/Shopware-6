(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[333],{"1GWi":function(n,e,l){"use strict";l.r(e);l("78SH"),e.default={template:'\n{% block sw_order_saveable_field %}\n<sw-container\n    v-if="isEditing"\n    columns="1fr 20px 25px"\n    gap="0px 10px"\n    class="sw-order-saveable-field"\n>\n    \n    {% block sw_order_saveable_field_input %}\n    \n    {% block  sw_order_saveable_field_input_field%}\n    <sw-field ref="edit-field"\n        :type="type"\n        :value="value"\n        :placeholder="placeholder">\n    </sw-field>\n    {% endblock %}\n    {% endblock %}\n    \n    {% block sw_order_saveable_field_actions %}\n    \n    {% block sw_order_saveable_field_cancel_button %}\n    <sw-button\n        size="x-small"\n        square\n        @click="onCancelButtonClicked"\n    >\n        <sw-icon\n            name="regular-times-xs"\n            small\n        />\n    </sw-button>\n    {%  endblock %}\n    {%  block sw_order_saveable_field_save_button %}\n    <sw-button\n        size="x-small"\n        variant="primary"\n        square\n        @click="onSaveButtonClicked"\n    >\n        <sw-icon\n            name="regular-checkmark-xxs"\n            small\n        />\n    </sw-button>\n    {%  endblock %}\n    {% endblock %}\n</sw-container>\n\n<div\n    v-else\n    @click="onClick"\n>\n    \n    {% block sw_order_saveable_field_content %}\n    <slot></slot>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{value:{required:!0,default:null},type:{type:String,required:!0,default:"text"},placeholder:{required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},data:function(){return{isEditing:!1,isLoading:!1}},methods:{onClick:function(){this.editable&&(this.isEditing=!0)},onSaveButtonClicked:function(){this.isEditing=!1,this.$emit("value-change",this.$refs["edit-field"].currentValue)},onCancelButtonClicked:function(){this.isEditing=!1}}}},"78SH":function(n,e,l){var i=l("g7Lx");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,l("ydqr").default)("60dadeb4",i,!0,{})},g7Lx:function(n,e,l){}}]);