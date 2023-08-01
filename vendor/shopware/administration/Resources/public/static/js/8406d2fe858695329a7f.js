(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[401],{"0tQH":function(e,t,n){"use strict";n.r(t);n("X5p+");var l=Shopware.Mixin;t.default={template:'\n{% block sw_sales_channel_defaults_select %}\n<sw-container\n    class="sw-sales-channel-defaults-select"\n    gap="0px 30px"\n    columns="1fr 200px"\n>\n    <template v-if="salesChannel">\n        <sw-entity-multi-select\n            :label-property="labelProperty"\n            :disabled="disabled"\n            :class="multiSelectClass"\n            :label="propertyLabel"\n            :help-text="helpText"\n            :entity-collection="propertyCollection"\n            :criteria="criteria"\n            @change="updateCollection"\n        >\n            <template\n                v-if="shouldShowActiveState"\n                #result-label-preview="{ item }"\n            >\n                <sw-icon\n                    class="sw-sales-channel-defaults-select__active-icon"\n                    size="6"\n                    :color="getActiveIconColor(item)"\n                    name="solid-circle"\n                />\n            </template>\n        </sw-entity-multi-select>\n\n        <sw-entity-single-select\n            :label-property="labelProperty"\n            :disabled="disabled"\n            :class="singleSelectClass"\n            :label="defaultPropertyLabel"\n            :help-text="helpText"\n            required\n            show-clearable-button\n            :entity="propertyEntityName"\n            :value="defaultId"\n            :error="defaultsValueError"\n            :criteria="criteria"\n            :selection-disabling-method="isDisabledItem"\n            :disabled-selection-tooltip="{ message: disabledTooltipMessage }"\n            @change="updateDefault"\n        />\n    </template>\n</sw-container>\n{% endblock %}\n',inject:["feature"],mixins:[l.getByName("notification")],props:{salesChannel:{type:Object,required:!1,default:null},propertyName:{type:String,required:!0},propertyLabel:{type:String,required:!0},defaultPropertyName:{type:String,required:!0},defaultPropertyLabel:{type:String,required:!0},propertyNameInDomain:{type:String,required:!1,default:null},helpText:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},criteria:{type:Object,required:!1,default:void 0},disabledTooltipMessage:{type:String,required:!1,default:""},shouldShowActiveState:{type:Boolean,required:!1,default:!1}},computed:{propertyCollection:{get:function(){return this.salesChannel?this.salesChannel[this.propertyName]:[]},set:function(e){this.salesChannel&&(this.salesChannel[this.propertyName]=e)}},defaultId:{get:function(){return this.salesChannel?this.salesChannel[this.defaultPropertyName]:null},set:function(e){this.salesChannel&&(this.salesChannel[this.defaultPropertyName]=e)}},propertyEntityName:function(){return this.propertyCollection?this.propertyCollection.entity:null},propertyNameKebabCase:function(){return Shopware.Utils.string.kebabCase(this.propertyName)},multiSelectClass:function(){return"sw-sales-channel-detail__select-".concat(this.propertyNameKebabCase)},singleSelectClass:function(){return"sw-sales-channel-detail__assign-".concat(this.propertyNameKebabCase)},defaultsValueError:function(){return Shopware.State.getters["error/getApiError"](this.salesChannel,this.defaultPropertyName)},labelProperty:function(){return"payment_method"===this.propertyEntityName?"distinguishableName":"name"}},methods:{updateCollection:function(e){e.length>this.propertyCollection.length?this.addItem(e):this.removeItem(e)},getNotInCollection:function(e,t){return e.find((function(e){return!t.some((function(t){return t.id===e.id}))}))||null},addItem:function(e){var t=this.getNotInCollection(e,this.propertyCollection);this.propertyCollection=e,1===this.propertyCollection.length&&(this.defaultId=t.id)},removeItem:function(e){var t=this.getNotInCollection(this.propertyCollection,e);if(null!==t){if(this.propertyNameInDomain){var n=this.getDomainUsingValue(t);if(null!==n)return void this.createNotificationError({message:this.$tc("sw-sales-channel.sw-sales-channel-defaults-select.messageError",0,{url:n.url})})}this.propertyCollection=e,this.defaultId===t.id&&(this.defaultId=null)}},getDomainUsingValue:function(e){var t=this;return this.salesChannel.domains.find((function(n){return n[t.propertyNameInDomain]===e.id}))||null},updateDefault:function(e,t){this.defaultId=e,e&&!this.propertyCollection.has(e)&&this.propertyCollection.add(t)},isDisabledItem:function(e){return!1===e.active},getActiveIconColor:function(e){return this.isDisabledItem(e)?"#d1d9e0":"#37d046"}}}},"6uMB":function(e,t,n){},"X5p+":function(e,t,n){var l=n("6uMB");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,n("ydqr").default)("4e689ebb",l,!0,{})}}]);