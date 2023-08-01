(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[408],{HrFT:function(n,a,e){"use strict";e.r(a);e("TBBH");var l=Shopware.Context;a.default={template:'\n{% block sw_sales_channel_detail_analytics %}\n<sw-card\n    position-identifier="sw-sales-channel-detail-analytics"\n    :title="$tc(\'sw-sales-channel.detail.analytics.cardTitle\')"\n    :is-loading="isLoading"\n>\n    <template v-if="salesChannel && salesChannel.analytics">\n        \n        {% block sw_sales_channel_detail_analytics_headline %}\n        <div class="sw-sales-channel-detail-analytics__headline-text">\n            {{ $tc(\'sw-sales-channel.detail.analytics.headline\') }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_detail_analytics_description %}\n        <p\n            class="sw-sales-channel-detail-analytics__description"\n            v-html="$tc(\'sw-sales-channel.detail.analytics.description\')"\n        ></p>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_detail_analytics_fields_tracking_id %}\n        <sw-field\n            v-model="salesChannel.analytics.trackingId"\n            type="text"\n            :label="$tc(\'sw-sales-channel.detail.analytics.fields.trackingId.label\')"\n            :placeholder="$tc(\'sw-sales-channel.detail.analytics.fields.trackingId.placeHolder\')"\n            name="trackingId"\n            :disabled="!acl.can(\'sales_channel.editor\')"\n            :help-text="$tc(\'sw-sales-channel.detail.analytics.fields.trackingId.helpText\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_detail_analytics_fields_container %}\n        <sw-container\n            columns="repeat(auto-fit, minmax(250px, 1fr))"\n            gap="0 30px"\n        >\n            \n            {% block sw_sales_channel_detail_analytics_fields_active %}\n            <sw-field\n                v-model="salesChannel.analytics.active"\n                type="switch"\n                :label="$tc(\'sw-sales-channel.detail.analytics.fields.active.label\')"\n                name="analyticsActive"\n                :disabled="!acl.can(\'sales_channel.editor\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_analytics_fields_track_orders %}\n            <sw-field\n                v-model="salesChannel.analytics.trackOrders"\n                type="switch"\n                :label="$tc(\'sw-sales-channel.detail.analytics.fields.trackOrders.label\')"\n                name="trackOrders"\n                :disabled="!acl.can(\'sales_channel.editor\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_analytics_fields_anonymize_ip %}\n            <sw-field\n                v-model="salesChannel.analytics.anonymizeIp"\n                type="switch"\n                :label="$tc(\'sw-sales-channel.detail.analytics.fields.anonymizeIp.label\')"\n                name="anonymizeIp"\n                :disabled="!acl.can(\'sales_channel.editor\')"\n            />\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </template>\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","acl"],props:{isLoading:{type:Boolean,default:!1},salesChannel:{required:!0}},watch:{salesChannel:function(){this.createAnalyticsData()}},created:function(){this.createAnalyticsData()},methods:{createAnalyticsData:function(){if(this.salesChannel&&!this.salesChannel.analytics){var n=this.repositoryFactory.create("sales_channel_analytics");this.salesChannel.analytics=n.create(l.api)}}}}},TBBH:function(n,a,e){var l=e("cJVQ");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[n.i,l,""]]),l.locals&&(n.exports=l.locals);(0,e("ydqr").default)("aac888e0",l,!0,{})},cJVQ:function(n,a,e){}}]);