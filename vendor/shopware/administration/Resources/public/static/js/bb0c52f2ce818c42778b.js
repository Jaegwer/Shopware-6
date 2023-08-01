(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[415],{fFDh:function(e,n,c){var t=c("h/uh");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,c("ydqr").default)("68397c60",t,!0,{})},gNnm:function(e,n,c){"use strict";c.r(n);var t=c("Z4I7"),s=(c("fFDh"),Shopware.Mixin);n.default={template:'\n{% block sw_settings_cache_index %}\n<sw-page class="sw-settings-cache">\n\n    \n    {% block sw_settings_cache_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_cache_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_cache_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-cache.general.mainMenuItemGeneral\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_cache_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <sw-card\n                v-else\n                position-identifier="sw-settings-cache-content"\n                :title="$tc(\'sw-settings-cache.general.mainMenuItemGeneral\')"\n                :is-loading="isLoading"\n            >\n\n                \n                {% block sw_settings_cache_content_toolbar %}\n                <template #toolbar>\n                    <sw-card-section secondary>\n                        <sw-container\n                            class="sw-settings-cache__card-toolbar"\n                            columns="1fr 1fr"\n                            rows="repeat(2, 40px)"\n                        >\n\n                            \n                            {% block sw_settings_cache_content_toolbar_environment %}\n                            <div>\n\n                                \n                                {% block sw_settings_cache_content_toolbar_environment_heading %}\n                                <p class="sw-settings-cache__card-toolbar-heading">\n                                    {{ $tc(\'sw-settings-cache.toolbar.environment\') }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_cache_content_toolbar_environment_text %}\n                                <p>{{ environmentValue }}</p>\n                                {% endblock %}\n                            </div>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_cache_content_toolbar_http_cache %}\n                            <div>\n\n                                \n                                {% block sw_settings_cache_content_toolbar_http_cache_heading %}\n                                <p class="sw-settings-cache__card-toolbar-heading">\n                                    {{ $tc(\'sw-settings-cache.toolbar.httpCache\') }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_cache_content_toolbar_http_cache_text %}\n                                <p>{{ httpCacheValue }}</p>\n                                {% endblock %}\n                            </div>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_cache_content_toolbar_cache_adapter %}\n                            <div>\n\n                                \n                                {% block sw_settings_cache_content_toolbar_cache_adapter_heading %}\n                                <p class="sw-settings-cache__card-toolbar-heading">\n                                    {{ $tc(\'sw-settings-cache.toolbar.cacheAdapter\') }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_cache_content_toolbar_cache_adapter_text %}\n                                <p>{{ cacheAdapterValue }}</p>\n                                {% endblock %}\n                            </div>\n                            {% endblock %}\n                        </sw-container>\n                    </sw-card-section>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_cache_content_clear_cache_row %}\n                <sw-card-section divider="bottom">\n                    <sw-container\n                        align="center"\n                        columns="1fr auto"\n                        gap="20px"\n                    >\n                        <div>\n\n                            \n                            {% block sw_settings_cache_content_clear_cache_row_heading %}\n                            <p class="sw-settings-cache__card-section-heading">\n                                {{ $tc(\'sw-settings-cache.section.clearCachesHeadline\') }}\n                            </p>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_cache_content_clear_cache_row_text %}\n                            <p>{{ $tc(\'sw-settings-cache.section.clearCachesText\') }}</p>\n                            {% endblock %}\n                        </div>\n\n                        \n                        {% block sw_settings_cache_content_clear_cache_row_button %}\n                        <sw-button-process\n                            variant="ghost"\n                            :is-loading="processes.normalClearCache"\n                            :process-success="processSuccess.normalClearCache"\n                            @process-finish="resetButtons"\n                            @click="clearCache"\n                        >\n                            {{ $tc(\'sw-settings-cache.section.clearCachesButton\') }}\n                        </sw-button-process>\n                        {% endblock %}\n                    </sw-container>\n                </sw-card-section>\n                {% endblock %}\n\n                \n                {% block sw_settings_cache_content_clear_and_warm_up_cache_row %}\n                <sw-card-section divider="bottom">\n                    <sw-container\n                        align="center"\n                        columns="1fr auto"\n                        gap="20px"\n                    >\n                        <div>\n\n                            \n                            {% block sw_settings_cache_content_clear_and_warm_up_cache_row_heading %}\n                            <p class="sw-settings-cache__card-section-heading">\n                                {{ $tc(\'sw-settings-cache.section.clearAndWarmUpHeadline\') }}\n                            </p>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_cache_content_clear_and_warm_up_cache_row_text %}\n                            <p>{{ $tc(\'sw-settings-cache.section.clearAndWarmUpText\') }}</p>\n                            {% endblock %}\n                        </div>\n\n                        \n                        {% block sw_settings_cache_content_clear_and_warm_up_cache_row_button %}\n                        <sw-button-process\n                            variant="ghost"\n                            :is-loading="processes.clearAndWarmUpCache"\n                            :process-success="processSuccess.clearAndWarmUpCache"\n                            @process-finish="resetButtons"\n                            @click="clearAndWarmUpCache"\n                        >\n                            {{ $tc(\'sw-settings-cache.section.clearAndWarmUpButton\') }}\n                        </sw-button-process>\n                        {% endblock %}\n                    </sw-container>\n                </sw-card-section>\n                {% endblock %}\n\n                \n                {% block sw_settings_cache_content_indexes_row %}\n                <sw-card-section>\n                    <sw-container\n                        align="center"\n                        columns="1fr auto"\n                        gap="20px"\n                    >\n                        <div>\n\n                            \n                            {% block sw_settings_cache_content_indexes_row_heading %}\n                            <p class="sw-settings-cache__card-section-heading">\n                                {{ $tc(\'sw-settings-cache.section.indexesHeadline\') }}\n                            </p>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_cache_content_indexes_row_text %}\n                            <p>{{ $tc(\'sw-settings-cache.section.indexesText\') }}</p>\n                            {% endblock %}\n                        </div>\n\n                        \n                        {% block sw_settings_cache_content_indexes_row_button %}\n                        <sw-button-process\n                            variant="ghost"\n                            :is-loading="processes.updateIndexes"\n                            :process-success="processSuccess.updateIndexes"\n                            @process-finish="resetButtons"\n                            @click="updateIndexes"\n                        >\n                            {{ $tc(\'sw-settings-cache.section.indexesButton\') }}\n                        </sw-button-process>\n                        {% endblock %}\n                    </sw-container>\n                    \n                    {% block sw_settings_cache_content_indexes_row_skip_select %}\n                    <sw-select-base\n                        class="sw-settings-cache__indexers-select"\n                        :disabled="processes.updateIndexes"\n                    >\n                        <template #sw-select-selection>\n                            <sw-label\n                                v-for="(selection, index) in skip"\n                                :key="index"\n                                @dismiss="changeSkip(false, selection)"\n                            >\n                                {{ selection }}\n                            </sw-label>\n                            <sw-label\n                                ghost\n                                class="sw-settings-cache__indexers-placeholder"\n                            >\n                                {{ $tc(\'sw-settings-cache.section.indexesSkipSelectPlaceholder\') }}\n                            </sw-label>\n                        </template>\n                        <template #results-list>\n                            <sw-select-result-list :options="[indexers]">\n                                <template #result-item="{ item, index }">\n                                    <ul\n                                        class="sw-settings-cache__indexers-list"\n                                        @click.stop\n                                    >\n                                        <li\n                                            v-for="(updaters, indexer) in item"\n                                            :key="indexer"\n                                        >\n                                            <sw-checkbox-field\n                                                class="sw-settings-cache__indexers-entry"\n                                                :value="skip.includes(indexer)"\n                                                :label="indexer"\n                                                size="small"\n                                                @change="changeSkip($event, indexer)"\n                                            />\n                                            <ul>\n                                                <li\n                                                    v-for="(updater, index) in updaters"\n                                                    :key="index"\n                                                >\n                                                    <sw-checkbox-field\n                                                        class="sw-settings-cache__indexers-entry"\n                                                        :value="skip.includes(updater) || skip.includes(indexer)"\n                                                        :label="updater"\n                                                        size="small"\n                                                        :disabled="skip.includes(indexer)"\n                                                        @click.prevent\n                                                        @change="changeSkip($event, updater)"\n                                                    />\n                                                </li>\n                                            </ul>\n                                        </li>\n                                    </ul>\n                                </template>\n                            </sw-select-result-list>\n                        </template>\n                    </sw-select-base>\n                    {% endblock %}\n                </sw-card-section>\n                {% endblock %}\n            </sw-card>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["cacheApiService"],mixins:[s.getByName("notification")],data:function(){return{isLoading:!0,cacheInfo:null,processes:{normalClearCache:!1,clearAndWarmUpCache:!1,updateIndexes:!1},processSuccess:{normalClearCache:!1,clearAndWarmUpCache:!1,updateIndexes:!1},skip:[],indexers:{"category.indexer":["category.child-count","category.tree","category.breadcrumb","category.seo-url"],"customer.indexer":["customer.many-to-many-id-field"],"landing_page.indexer":["landing_page.many-to-many-id-field","landing_page.seo-url"],"media.indexer":[],"media_folder.indexer":["media_folder.child-count"],"media_folder_configuration.indexer":[],"payment_method.indexer":[],"product.indexer":["product.inheritance","product.stock","product.variant-listing","product.child-count","product.many-to-many-id-field","product.category-denormalizer","product.cheapest-price","product.rating-averaget","product.stream","product.search-keyword","product.seo-url"],"product_stream.indexer":[],"product_stream_mapping.indexer":[],"promotion.indexer":["promotion.exclusion","promotion.redemption"],"rule.indexer":["rule.payload"],"sales_channel.indexer":["sales_channel.many-to-many"],"flow.indexer":[],"newsletter_recipient.indexer":[]}}},metaInfo:function(){return{title:this.$createTitle()}},computed:{httpCacheValue:function(){return null===this.cacheInfo?"":this.cacheInfo.httpCache?this.$tc("sw-settings-cache.toolbar.httpCacheOn"):this.$tc("sw-settings-cache.toolbar.httpCacheOff")},environmentValue:function(){return null===this.cacheInfo?"":"dev"===this.cacheInfo.environment?this.$tc("sw-settings-cache.toolbar.environmentDev"):this.$tc("sw-settings-cache.toolbar.environmentProd")},cacheAdapterValue:function(){return null===this.cacheInfo?"":this.cacheInfo.cacheAdapter}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.cacheApiService.info().then((function(n){e.cacheInfo=n.data,e.isLoading=!1}))},resetButtons:function(){this.processSuccess={normalClearCache:!1,clearAndWarmUpCache:!1,updateIndexes:!1}},decreaseWorkerPoll:function(){Shopware.State.commit("notification/setWorkerProcessPollInterval",t.b),setTimeout((function(){Shopware.State.commit("notification/setWorkerProcessPollInterval",t.a)}),6e4)},clearCache:function(){var e=this;this.createNotificationInfo({message:this.$tc("sw-settings-cache.notifications.clearCache.started")}),this.processes.normalClearCache=!0,this.cacheApiService.clear().then((function(){e.processSuccess.normalClearCache=!0,e.createNotificationSuccess({message:e.$tc("sw-settings-cache.notifications.clearCache.success")})})).catch((function(){e.processSuccess.normalClearCache=!1,e.createNotificationError({message:e.$tc("sw-settings-cache.notifications.clearCache.error")})})).finally((function(){e.processes.normalClearCache=!1}))},clearAndWarmUpCache:function(){var e=this;this.processes.clearAndWarmUpCache=!0,this.cacheApiService.clearAndWarmup().then((function(){e.decreaseWorkerPoll(),setTimeout((function(){e.cacheApiService.cleanupOldCaches()}),3e4),e.createNotificationInfo({message:e.$tc("sw-settings-cache.notifications.clearCacheAndWarmup.started")}),e.processSuccess.clearAndWarmUpCache=!0})).catch((function(){e.processSuccess.clearAndWarmUpCache=!1})).finally((function(){e.processes.clearAndWarmUpCache=!1}))},updateIndexes:function(){var e=this;this.processes.updateIndexes=!0,this.cacheApiService.index(this.skip).then((function(){e.decreaseWorkerPoll(),e.createNotificationInfo({message:e.$tc("sw-settings-cache.notifications.index.started")}),e.processSuccess.updateIndexes=!0})).catch((function(){e.processSuccess.updateIndexes=!1})).finally((function(){e.processes.updateIndexes=!1}))},changeSkip:function(e,n){if(e)this.skip.push(n);else{var c=this.skip.indexOf(n);c>-1&&this.skip.splice(c,1)}}}}},"h/uh":function(e,n,c){}}]);