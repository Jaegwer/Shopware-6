(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[43],{P9Dn:function(e,a,n){},qjU2:function(e,a,n){var l=n("P9Dn");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,n("ydqr").default)("4df82e54",l,!0,{})},vqaP:function(e,a,n){"use strict";n.r(a);var l=n("HZZ/"),t=n.n(l),i=n("hJxD"),o=n.n(i),c=(n("qjU2"),Shopware.Mixin);a.default={template:'\n{% block sw_media_modal_replace %}\n<sw-modal\n    class="sw-media-modal-replace"\n    size="420px"\n    :title="$tc(\'global.sw-media-modal-replace.titleModal\')"\n    @modal-close="emitCloseReplaceModal"\n>\n\n    <sw-upload-listener\n        :upload-tag="itemToReplace.id"\n        @media-upload-add="onNewUpload"\n    />\n\n    <sw-media-replace\n        class="sw-media-modal-replace__upload"\n        :item-to-replace="itemToReplace"\n        :upload-tag="itemToReplace.id"\n        variant="regular"\n    />\n\n    <sw-alert\n        v-if="newFileExtension"\n        class="sw-media-modal-replace__file-extension-warning"\n        variant="warning"\n    >\n        {{ $tc(\'global.sw-media-modal-replace.warningFileExtension\', 0, { extension: newFileExtension }) }}\n    </sw-alert>\n\n    \n    {% block sw_media_modal_replace_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_media_modal_replace_cancel_button %}\n        <sw-button\n            size="small"\n            @click="emitCloseReplaceModal"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_media_modal_replace_replace_button %}\n        <sw-button\n            class="sw-media-replace__replace-media-action"\n            size="small"\n            variant="primary"\n            :disabled="!isUploadDataSet"\n            @click="replaceMediaItem"\n        >\n            {{ $tc(\'global.sw-media-modal-replace.buttonReplace\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["mediaService","repositoryFactory"],mixins:[c.getByName("notification")],props:{itemToReplace:{type:Object,required:!1,default:null}},data:function(){return{uploadTag:null,isUploadDataSet:!1,newFileExtension:""}},methods:{onNewUpload:function(e){var a=e.data;this.isUploadDataSet=!0;var n=a[0].extension;n!==this.itemToReplace.fileExtension&&(this.newFileExtension=n)},emitCloseReplaceModal:function(){this.$emit("media-replace-modal-close")},replaceMediaItem:function(){var e=this;return t()(o.a.mark((function a(){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.itemToReplace.isLoading=!0,n=e.itemToReplace.fileName,a.next=4,e.mediaService.runUploads(e.itemToReplace.id);case 4:return a.next=6,e.mediaService.renameMedia(e.itemToReplace.id,n);case 6:e.itemToReplace.isLoading=!1,e.$emit("media-replace-modal-item-replaced");case 8:case"end":return a.stop()}}),a)})))()}}}}}]);