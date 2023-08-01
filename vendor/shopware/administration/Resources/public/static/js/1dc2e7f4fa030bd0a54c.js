(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[173],{"+van":function(e,n,l){},OT0r:function(e,n,l){"use strict";l.r(n);var t=l("HZZ/"),i=l.n(t),a=l("hJxD"),o=l.n(a),s=(l("l+HM"),Shopware.Mixin);n.default={template:'\n{% block sw_cms_element_image_config %}\n<div class="sw-cms-el-config-image">\n    \n    {% block sw_cms_element_image_config_media_upload %}\n    <sw-cms-mapping-field\n        v-model="element.config.media"\n        :label="$tc(\'sw-cms.elements.image.label\')"\n        value-types="entity"\n        entity="media"\n    >\n        <sw-media-upload-v2\n            variant="regular"\n            :upload-tag="uploadTag"\n            :source="previewSource"\n            :allow-multi-select="false"\n            :default-folder="cmsPageState.pageEntityName"\n            :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n            @media-upload-sidebar-open="onOpenMediaModal"\n            @media-upload-remove-image="onImageRemove"\n        />\n\n        <template #preview="{ demoValue }">\n            <div class="sw-cms-el-config-image__mapping-preview">\n                <img\n                    v-if="demoValue.url"\n                    :src="demoValue.url"\n                    alt=""\n                >\n                <sw-alert\n                    v-else\n                    class="sw-cms-el-config-image__preview-info"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n                </sw-alert>\n            </div>\n        </template>\n    </sw-cms-mapping-field>\n\n    <sw-upload-listener\n        :upload-tag="uploadTag"\n        auto-upload\n        @media-upload-finish="onImageUpload"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_element_image_config_display_mode %}\n    <sw-select-field\n        v-model="element.config.displayMode.value"\n        class="sw-cms-el-config-image__display-mode"\n        :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n        @change="onChangeDisplayMode"\n    >\n        <option value="standard">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\n        </option>\n        <option value="cover">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeCover\') }}\n        </option>\n        <option value="stretch">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStretch\') }}\n        </option>\n    </sw-select-field>\n    {% endblock %}\n\n    <template v-if="element.config.displayMode.value === \'cover\'">\n        \n        {% block sw_cms_element_image_config_min_height %}\n        <sw-text-field\n            v-model="element.config.minHeight.value"\n            :label="$tc(\'sw-cms.elements.image.config.label.minHeight\')"\n            :placeholder="$tc(\'sw-cms.elements.image.config.placeholder.enterMinHeight\')"\n            @input="onChangeMinHeight"\n        />\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_cms_element_image_config_vertical_align %}\n    <sw-select-field\n        v-model="element.config.verticalAlign.value"\n        :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n        :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n        :disabled="element.config.displayMode.value === \'cover\'"\n    >\n        <option value="flex-start">\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n        </option>\n        <option value="center">\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n        </option>\n        <option value="flex-end">\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n        </option>\n    </sw-select-field>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_image_config_link %}\n    <div class="sw-cms-el-config-image__link">\n        <sw-dynamic-url-field\n            v-model="element.config.url.value"\n        />\n        <sw-field\n            v-model="element.config.newTab.value"\n            class="sw-cms-el-config-image__link-tab"\n            type="switch"\n            :label="$tc(\'sw-cms.elements.image.config.label.linkNewTab\')"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_image_config_media_modal %}\n    <sw-media-modal-v2\n        v-if="mediaModalIsOpen"\n        variant="regular"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        :entity-context="cmsPageState.entityName"\n        :allow-multi-select="false"\n        :initial-folder-id="cmsPageState.defaultMediaFolderId"\n        @media-upload-remove-image="onImageRemove"\n        @media-modal-selection-change="onSelectionChanges"\n        @modal-close="onCloseModal"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[s.getByName("cms-element")],data:function(){return{mediaModalIsOpen:!1,initialFolderId:null}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")},uploadTag:function(){return"cms-element-media-config-".concat(this.element.id)},previewSource:function(){var e,n,l;return null!==(e=this.element)&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&null!==(l=n.media)&&void 0!==l&&l.id?this.element.data.media:this.element.config.media.value}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("image")},onImageUpload:function(e){var n=this;return i()(o.a.mark((function l(){var t,i;return o.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.targetId,l.next=3,n.mediaRepository.get(t);case 3:i=l.sent,n.element.config.media.value=i.id,n.element.config.media.source="static",n.updateElementData(i),n.$emit("element-update",n.element);case 8:case"end":return l.stop()}}),l)})))()},onImageRemove:function(){this.element.config.media.value=null,this.updateElementData(),this.$emit("element-update",this.element)},onCloseModal:function(){this.mediaModalIsOpen=!1},onSelectionChanges:function(e){var n=e[0];this.element.config.media.value=n.id,this.element.config.media.source="static",this.updateElementData(n),this.$emit("element-update",this.element)},updateElementData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=null===e?null:e.id;this.element.data?(this.$set(this.element.data,"mediaId",n),this.$set(this.element.data,"media",e)):this.$set(this.element,"data",{mediaId:n,media:e})},onOpenMediaModal:function(){this.mediaModalIsOpen=!0},onChangeMinHeight:function(e){this.element.config.minHeight.value=null===e?"":e,this.$emit("element-update",this.element)},onChangeDisplayMode:function(e){"cover"===e&&(this.element.config.verticalAlign.value=null),this.$emit("element-update",this.element)}}}},"l+HM":function(e,n,l){var t=l("+van");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,l("ydqr").default)("328b75d6",t,!0,{})}}]);