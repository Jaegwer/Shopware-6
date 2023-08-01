(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[296],{Ltj3:function(e,i,n){"use strict";n.r(i);n("nsYw");var s=Shopware.Mixin;i.default={template:'\n{% block sw_media_quickinfo_multiple %}\n<div class="sw-media-quickinfo-multiple">\n    \n    {% block sw_media_quickinfo_multiple_quickactions %}\n    <sw-media-collapse\n        v-if="editable"\n        :title="$tc(\'sw-media.sidebar.sections.actions\')"\n        :expand-on-loading="true"\n    >\n\n        \n        {% block sw_media_quickinfo_multiple_quickactions_content %}\n        <template #content>\n            <ul class="sw-media-sidebar__quickactions-list">\n                \n                {% block sw_media_quickinfo_multiple_quickactions_move %}\n                \n                <li\n                    class="quickaction--move"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    @click="openModalMove"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-file-export"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.move\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_multiple_quickactions_delete %}\n                \n                <li\n                    v-if="!isPrivate"\n                    class="is--danger"\n                    :class="quickActionClasses(!acl.can(\'media.deleter\'))"\n                    @click="openModalDelete"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-trash"\n                        class="sw-media-sidebar__quickactions-icon is--danger"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.delete\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_folder_quickactions_dissolve %}\n                \n                <li\n                    v-if="!hasMedia"\n                    class="quickaction--dissolve"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    @click="openFolderDissolve"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-spinner-star"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.dissolve\') }}\n                </li>\n                {% endblock %}\n            </ul>\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_multiple_file_names %}\n    <sw-media-collapse\n        :expand-on-loading="true"\n        :title="$tc(\'sw-media.sidebar.sections.selectedFiles\')"\n    >\n\n        \n        {% block sw_media_quickinfo_multiple_file_names_content %}\n        <template #content>\n            \n            <label class="sw-media-quickinfo-multiple__second-headline">{{ getFileSizeLabel }}</label>\n            <sw-media-entity-mapper\n                v-for="mediaItem in items"\n                :key="mediaItem.id"\n                :item="mediaItem"\n                :selected="true"\n                :is-list="true"\n                :show-context-menu-button="false"\n                :show-selection-indicator="true"\n                @media-item-selection-remove="onRemoveItemFromSelection"\n            />\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_sidebar_modal_delete %}\n    <sw-media-modal-delete\n        v-if="showModalDelete"\n        :items-to-delete="items"\n        @media-delete-modal-close="closeModalDelete"\n        @media-delete-modal-items-delete="deleteSelectedItems"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_sidebar_folder_dissolve_modal %}\n    <sw-media-modal-folder-dissolve\n        v-if="!hasMedia && showFolderDissolve"\n        :items-to-dissolve="items"\n        @media-folder-dissolve-modal-dissolve="onFolderDissolved"\n        @media-folder-dissolve-modal-close="closeFolderDissolve"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_sidebar_folder_move_modal %}\n    <sw-media-modal-move\n        v-if="showModalMove"\n        :items-to-move="items"\n        @media-move-modal-close="closeModalMove"\n        @media-move-modal-items-move="onFolderMoved"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n\n',mixins:[s.getByName("media-sidebar-modal-mixin")],props:{items:{required:!0,type:Array},editable:{type:Boolean,required:!1,default:!1}},computed:{itemsIsAvailable:function(){return this.items.length>0},getFileSize:function(){var e=this.items.reduce((function(e,i){return e+(i.fileSize||0)}),0);return Shopware.Utils.format.fileSize(e)},getFileSizeLabel:function(){return"".concat(this.$tc("sw-media.sidebar.metadata.totalSize"),": ").concat(this.getFileSize)},hasFolder:function(){return this.items.some((function(e){return"media_folder"===e.getEntityName()}))},hasMedia:function(){return this.items.some((function(e){return"media"===e.getEntityName()}))},isPrivate:function(){return this.items.some((function(e){return!0===e.private}))}},methods:{onRemoveItemFromSelection:function(e){this.$emit("media-item-selection-remove",e)},quickActionClassesDelete:function(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]},quickActionClasses:function(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]}}}},UMHi:function(e,i,n){},nsYw:function(e,i,n){var s=n("UMHi");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n("ydqr").default)("5354b078",s,!0,{})}}]);