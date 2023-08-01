(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[362],{E7Hd:function(e,t,i){var o=i("ED/m");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,i("ydqr").default)("74df9deb",o,!0,{})},"ED/m":function(e,t,i){},l78s:function(e,t,i){"use strict";i.r(t);var o=i("J58c"),r=i.n(o);i("E7Hd");function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){r()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var c=Shopware,a=c.Component,s=c.Mixin,u=a.getComponentHelper().mapGetters;t.default={template:'\n{% block sw_product_media_form %}\n<div\n    class="sw-product-media-form"\n    :class="{ \'is--disabled\': disabled }"\n>\n    \n    {% block sw_product_media_form_upload %}\n    <sw-upload-listener\n        v-if="!isLoading"\n        :upload-tag="product.id"\n        auto-upload\n        @media-upload-finish="successfulUpload"\n        @media-upload-fail="onUploadFailed"\n    />\n\n    <sw-media-upload-v2\n        v-if="!isLoading && acl.can(\'product.editor\')"\n        variant="regular"\n        :upload-tag="product.id"\n        :scroll-target="$parent.$el"\n        :default-folder="product.getEntityName()"\n        @media-upload-sidebar-open="onOpenMedia"\n    />\n    {% endblock %}\n\n    \n    {% block sw_product_media_form_grid %}\n    <div class="sw-product-media-form__previews">\n        <div class="sw-product-media-form__cover-container sw-product-media-form__column">\n            \n            {% block sw_product_media_form_cover_preview %}\n            <div\n                v-if="product.cover || cover"\n                class="sw-product-media-form__preview-cover"\n            >\n                <div class="preview-cover">\n                    \n                    {% block sw_product_media_form_cover_image %}\n                    <sw-media-preview-v2\n                        class="sw-product-media-form__cover-image"\n                        :source="cover ? cover.mediaId : product.cover.mediaId"\n                    />\n                    {% endblock %}\n                    <span>{{ $tc(\'sw-product.mediaForm.coverSubline\') }}</span>\n                </div>\n            </div>\n            <div\n                v-else\n                class="sw-product-media-form__cover-image is--placeholder"\n            >\n                {{ $tc(\'sw-product.mediaForm.coverSubline\') }}\n            </div>\n            {% endblock %}\n        </div>\n\n        <div\n            v-if="!isLoading"\n            class="sw-product-media-form__grid sw-product-media-form__column"\n            :style="gridAutoRows"\n        >\n            {%  block sw_product_media_form_grid_items %}\n            <sw-product-image\n                v-for="mediaItem in mediaItems"\n                :key="mediaItem.id"\n                v-draggable="{ dragGroup: \'product-media\', data: mediaItem, onDragEnter: onMediaItemDragSort }"\n                v-droppable="{ dragGroup: \'product-media\', data: mediaItem }"\n                :is-cover="isCover(mediaItem)"\n                :is-placeholder="mediaItem.isPlaceholder"\n                :media-id="mediaItem.mediaId"\n                :show-cover-label="showCoverLabel"\n                @sw-product-image-delete="removeFile(mediaItem)"\n                @sw-product-image-cover="markMediaAsCover(mediaItem)"\n            />\n            {% endblock %}\n        </div>\n        <sw-loader v-else />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[s.getByName("notification")],props:{disabled:{type:Boolean,required:!1,default:!1},isInherited:{type:Boolean,required:!1,default:!1}},data:function(){return{showCoverLabel:!0,isMediaLoading:!1,columnCount:5,columnWidth:90}},computed:n(n({product:function(){var e=Shopware.State.get("swProductDetail");return this.isInherited?e.parentProduct:e.product},mediaItems:function(){var e=this.productMedia.slice(),t=this.getPlaceholderCount(this.columnCount);if(0===t)return e;for(var i=0;i<t;i+=1)e.push(this.createPlaceholderMedia(e));return e},cover:function(){if(!this.product)return null;var e=this.product.cover?this.product.cover.mediaId:this.product.coverId;return this.product.media.find((function(t){return t.id===e}))}},u("swProductDetail",{isStoreLoading:"isLoading"})),{},{isLoading:function(){return this.isMediaLoading||this.isStoreLoading},productMediaRepository:function(){return this.repositoryFactory.create("product_media")},productMedia:function(){return this.product?this.product.media:[]},productMediaStore:function(){return this.product.getAssociation("media")},gridAutoRows:function(){return"grid-auto-rows: ".concat(this.columnWidth)},currentCoverID:function(){var e=this;return this.productMedia.find((function(t){return t.media.id===e.product.coverId})).id}}),methods:{onOpenMedia:function(){this.$emit("media-open")},updateColumnCount:function(){var e=this;this.$nextTick((function(){if(e.isLoading)return!1;var t=window.getComputedStyle(e.$refs.grid,null).getPropertyValue("grid-template-columns").split(" ");return e.columnCount=t.length,e.columnWidth=t[0],!0}))},getPlaceholderCount:function(e){this.productMedia.length+3<2*e&&(e*=2);var t=e;return 0!==this.productMedia.length&&(t=e-this.productMedia.length%e)===e?0:t},createPlaceholderMedia:function(e){return{isPlaceholder:!0,isCover:0===e.length,media:{isPlaceholder:!0,name:""},mediaId:e.length.toString()}},buildProductMedia:function(e){this.isLoading=!0;var t=this.productMediaStore.create();return t.mediaId=e,0===this.productMedia.length?(t.position=0,this.product.cover=t,this.product.coverId=t.id):t.position=this.productMedia.length+1,this.isLoading=!1,t},successfulUpload:function(e){var t=e.targetId;if(!this.product.media.find((function(e){return e.mediaId===t}))){var i=this.createMediaAssociation(t);this.product.media.add(i)}},createMediaAssociation:function(e){var t=this.productMediaRepository.create();return t.productId=this.product.id,t.mediaId=e,this.product.media.length<=0?(t.position=0,this.product.coverId=t.id):t.position=this.product.media.length,t},onUploadFailed:function(e){var t=this.product.media.find((function(t){return t.mediaId===e.targetId}));t&&(this.product.coverId===t.id&&(this.product.coverId=null),this.product.media.remove(t.id)),this.product.isLoading=!1},removeCover:function(){this.product.cover=null,this.product.coverId=null},isCover:function(e){var t=this.product.cover?this.product.cover.id:this.product.coverId;return 0!==this.product.media.length&&!e.isPlaceholder&&e.id===t},removeFile:function(e){this.product.coverId===e.id&&(this.product.cover=null,this.product.coverId=null),null===this.product.coverId&&this.product.media.length>0&&(this.product.coverId=this.product.media.first().id),this.product.media.remove(e.id)},markMediaAsCover:function(e){this.product.cover=e,this.product.coverId=e.id,this.product.media.moveItem(e.position,0),this.updateMediaItemPositions()},onDropMedia:function(e){if(!this.product.media.find((function(t){return t.mediaId===e.id}))){var t=this.createMediaAssociation(e.mediaItem.id);0===this.product.media.length&&(t.position=0,this.product.cover=t,this.product.coverId=t.id),this.product.media.add(t)}},onMediaItemDragSort:function(e,t,i){!0!==i||e.id===this.product.coverId&&0===e.position||t.id===this.product.coverId&&0===t.position||(this.product.media.moveItem(e.position,t.position),this.updateMediaItemPositions())},updateMediaItemPositions:function(){this.productMedia.forEach((function(e,t){e.position=t}))}}}}}]);