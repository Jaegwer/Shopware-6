(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[70],{EPy0:function(e,t,o){},ZJtK:function(e,t,o){var n=o("EPy0");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,o("ydqr").default)("d8eaae4e",n,!0,{})},uD0x:function(e,t,o){"use strict";o.r(t);o("ZJtK"),t.default={template:'\n{% block sw_category_detail_seo %}\n<div class="sw-category-detail-seo">\n\n    \n    {% block sw_category_detail_seo_config %}\n    <sw-card\n        position-identifier="sw-category-detail-seo"\n        :title="$tc(\'sw-category.base.seo.title\')"\n        :is-loading="isLoading"\n    >\n        <sw-category-seo-form :category="category" />\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_category_detail_seo_list %}\n    <sw-seo-url\n        v-if="category.seoUrls"\n        :is-loading="isLoading"\n        :has-default-template="false"\n        :disabled="!acl.can(\'category.editor\')"\n        :urls="category.seoUrls"\n    />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["acl"],props:{isLoading:{type:Boolean,required:!0}},computed:{category:function(){return Shopware.State.get("swCategoryDetail").category}}}}}]);