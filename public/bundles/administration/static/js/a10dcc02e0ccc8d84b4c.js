(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[649],{AFox:function(t,e,a){"use strict";a.r(e);var n=Shopware.Context,i=Shopware.Data.Criteria;e.default={template:"\n{% block sw_settings_tax_rule_type_individual_states_cell %}\n<span>\n    {{ taxRule.type.typeName }}:\n    <template v-if=\"individualStates\">\n        {{ individualStates.join(', ') }}\n    </template>\n    <template v-else>\n        -\n    </template>\n</span>\n{% endblock %}\n",inject:["repositoryFactory"],props:{taxRule:{type:Object,required:!0}},data:function(){return{individualStates:null}},computed:{stateRepository:function(){return this.repositoryFactory.create("country_state")}},watch:{"taxRule.data.states":function(){this.loadStates()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadStates()},loadStates:function(){var t=this;if(this.taxRule.data&&this.taxRule.data.states&&this.taxRule.data.states.length){var e=new i(1,25);e.setIds(this.taxRule.data.states),this.stateRepository.search(e,n.api).then((function(e){t.individualStates=e.map((function(t){return t.name}))}))}else this.individualStates=[]}}}}}]);