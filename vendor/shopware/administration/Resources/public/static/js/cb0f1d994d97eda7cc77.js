(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[559],{VwbQ:function(e,t,a){"use strict";a.r(t);var i=Shopware.Utils;t.default={template:"\n{% block sw_mail_template_detail_language_switch %}\n\n<template #language-switch>\n    <sw-language-switch disabled />\n</template>\n{% endblock %}\n\n{% block sw_mail_template_basic_form_sales_channels_field %}\n{% endblock %}\n\n{% block sw_mail_template_detail_attachments_info %}\n{% endblock %}\n",beforeRouteEnter:function(e,t,a){e.name.includes("sw.mail.template.create")&&!e.params.id&&(e.params.id=i.createId()),a()},methods:{createdComponent:function(){Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault"),this.$route.params.id?this.mailTemplate=this.mailTemplateRepository.create(Shopware.Context.api,this.$route.params.id):this.mailTemplate=this.mailTemplateRepository.create(),this.mailTemplateId=this.mailTemplate.id},saveFinish:function(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.mail.template.detail",params:{id:this.mailTemplate.id}})},onSave:function(){this.$super("onSave")}}}}}]);