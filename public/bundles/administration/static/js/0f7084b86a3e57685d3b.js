(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[565],{iKrJ:function(e,t,n){"use strict";n.r(t);t.default={template:'\n{% block sw_order_customer_comment %}\n<sw-card\n    class="sw-order-customer-comment"\n    position-identifier="sw-order-customer-comment"\n    :title="$tc(\'sw-order.detailCustomerComment.title\')"\n    :is-loading="isLoading"\n>\n    \n    {% block sw_order_customer_comment_content %}\n    <sw-text-preview\n        :text="customerComment"\n        :modal-title="$tc(\'sw-order.detailCustomerComment.title\')"\n        :maximum-length="750"\n        :maximum-new-lines="5"\n    />\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',props:{customerComment:{type:String,required:!0,default:""},isLoading:{type:Boolean,required:!1,default:!1}}}}}]);