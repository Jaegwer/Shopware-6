(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[67],{Geux:function(e,t,a){"use strict";a.r(t);a("S/U5"),t.default={template:'\n{% block sw_category_detail_cms %}\n<div class="sw-category-detail__cms">\n\n    \n    {% block sw_category_detail_cms_layout %}\n    <sw-category-layout-card\n        v-if="category.type === \'page\'"\n        v-bind="{ category, cmsPage, isLoading }"\n    />\n    {% endblock %}\n\n    \n    {% block sw_category_detail_cms_form %}\n    <sw-cms-page-form\n        v-if="cmsPage && acl.can(\'category.editor\')"\n        :page="cmsPage"\n    />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["acl"],props:{isLoading:{type:Boolean,required:!0}},computed:{category:function(){return Shopware.State.get("swCategoryDetail").category},cmsPage:function(){return Shopware.State.get("cmsPageState").currentPage}}}},"S/U5":function(e,t,a){var n=a("SeRG");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("ydqr").default)("52834f76",n,!0,{})},SeRG:function(e,t,a){}}]);