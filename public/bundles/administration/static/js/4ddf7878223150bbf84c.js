(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[639],{IDPD:function(e,n,a){"use strict";a.r(n);n.default={template:'\n{% block sw_seo_main_category %}\n<div class="sw-seo-main-category">\n    \n    {% block sw_seo_main_category_select %}\n    <sw-single-select\n        :options="categories"\n        label-property="translated.name"\n        value-property="id"\n        show-clearable-button\n        :placeholder="$tc(\'sw-seo-url.placeholderMainCategory\')"\n        :label="overwriteLabel ? undefined : $tc(\'sw-seo-url.labelMainCategory\')"\n        :value="selectedCategory"\n        :disabled="currentSalesChannelId === null || !allowEdit"\n        @change="onMainCategorySelected"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],props:{currentSalesChannelId:{type:String,required:!1,default:null},categories:{type:Array,required:!0},mainCategories:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},allowEdit:{type:Boolean,required:!1,default:!0},overwriteLabel:{type:Boolean,required:!1,default:!1}},data:function(){return{mainCategoryForSalesChannel:null}},computed:{mainCategoryRepository:function(){return this.repositoryFactory.create("main_category")},isHeadlessSalesChannel:function(){var e=this;if(null===Shopware.State.get("swSeoUrl").salesChannelCollection)return!0;var n=Shopware.State.get("swSeoUrl").salesChannelCollection.find((function(n){return n.id===e.currentSalesChannelId}));return null!==this.currentSalesChannelId&&"f183ee5650cf4bdb8a774337575067a6"===n.typeId},selectedCategory:function(){return null!==this.mainCategoryForSalesChannel?this.mainCategoryForSalesChannel.categoryId:null}},watch:{currentSalesChannelId:function(){this.refreshMainCategoryForSalesChannel()},mainCategories:function(){this.refreshMainCategoryForSalesChannel()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.refreshMainCategoryForSalesChannel()},onMainCategorySelected:function(e){if(null!==e){var n=this.categories.find((function(n){return n.id===e}));if(null!==this.mainCategoryForSalesChannel)return this.mainCategoryForSalesChannel.category=n,void(this.mainCategoryForSalesChannel.categoryId=n.id);var a=this.mainCategoryRepository.create();a.salesChannelId=this.currentSalesChannelId,a.category=n,a.categoryId=n.id,this.$emit("main-category-add",a),this.refreshMainCategoryForSalesChannel()}},refreshMainCategoryForSalesChannel:function(){var e=this,n=this.mainCategories.find((function(n){return n.salesChannelId===e.currentSalesChannelId}));this.mainCategoryForSalesChannel=void 0!==n?n:null}}}}}]);