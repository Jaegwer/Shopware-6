(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[512],{B7Zd:function(e,t,n){"use strict";n.r(t);var i=Shopware.Data.EntityCollection;t.default={template:'\n{% block sw_entity_multi_select_base_selection_list_label_inner %}\n<slot\n    name="selection-label-property"\n    v-bind="{ item, index, labelProperty, valueProperty}"\n>\n    {{ displayLabelProperty(item) }}\n</slot>\n{% endblock %}\n\n\n{% block sw_entity_multi_select_base_results_list_result_label %}\n<slot\n    name="result-label-property"\n    v-bind="{ item, index, labelProperty, valueProperty: \'id\'}"\n>\n    {{ displayLabelProperty(item) }}\n</slot>\n{% endblock %}\n',computed:{salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")}},methods:{isSelected:function(e){return this.currentCollection.some((function(t){return t.id===e.id}))},addItem:function(e){if(this.isSelected(e)){var t=this.currentCollection.find((function(t){return t.id===e.id}));this.remove(t)}else{var n=i.fromCollection(this.currentCollection);n.add(e),this.$emit("item-add",e),this.emitChanges(n),this.onSelectExpanded()}}}}}}]);