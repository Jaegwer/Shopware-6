(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[569],{pC9v:function(n,e,o){"use strict";o.r(e);e.default={template:'\n{% block sw_order_leave_page_modal %}\n<sw-modal\n    :title="$tc(\'sw-order.leavePageModal.headline\')"\n    variant="small"\n    @modal-close="onCancel"\n>\n\n    \n    {% block sw_order_leave_page_modal_content %}\n    {{ $tc(\'sw-order.leavePageModal.description\') }}\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_order_leave_page_modal_actions %}\n        \n        {% block sw_order_leave_page_modal_action_cancel %}\n        <sw-button\n            size="small"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-order.leavePageModal.cancelButton\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_leave_page_modal_action_confirm %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="onConfirm"\n        >\n            {{ $tc(\'sw-order.leavePageModal.confirmButton\') }}\n        </sw-button>\n        {% endblock %}\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',methods:{onConfirm:function(){this.$emit("page-leave-confirm")},onCancel:function(){this.$emit("page-leave-cancel")}}}}}]);