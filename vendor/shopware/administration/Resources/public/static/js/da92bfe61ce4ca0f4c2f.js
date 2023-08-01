(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[227],{"2RYS":function(t,n,a){var i=a("4SBR");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("ydqr").default)("9398684c",i,!0,{})},"4SBR":function(t,n,a){},"u6/U":function(t,n,a){"use strict";a.r(n);a("2RYS"),n.default={template:'\n{% block sw_extension_rating_stars %}\n<div\n    class="sw-extension-rating-stars"\n    :class="editableClass"\n>\n    \n    {% block sw_extension_rating_stars_wrapper %}\n    <div class="sw-extension-rating-stars__wrapper">\n        \n        {% block sw_extension_rating_stars_wrapper_stars %}\n        <button\n            v-for="(ratingValue, key) in maxRating"\n            :key="key"\n            :disabled="!editable"\n            class="sw-extension-rating-stars__star"\n            :class="colorClass(key + 1)"\n            @click="addRating(key)"\n        >\n            \n            {% block sw_extension_rating_stars_wrapper_stars_full_star %}\n            <sw-icon\n                name="solid-star"\n                :style="starSize"\n            />\n            {% endblock %}\n\n            \n            {% block sw_extension_rating_stars_wrapper_stars_partial_star %}\n            <span\n                v-if="showPartialStar(key)"\n                class="sw-extension-rating-stars__partial-star"\n            >\n                \n                {% block sw_extension_rating_stars_wrapper_stars_partial_star_wrapper %}\n                <span\n                    class="sw-extension-rating-stars__partial-star-wrapper"\n                    :style="{ width: partialStarWidth }"\n                >\n                    <sw-icon\n                        name="solid-star"\n                        :size="partialStarSize"\n                    />\n                </span>\n                {% endblock %}\n            </span>\n            {% endblock %}\n        </button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',model:{prop:"rating",event:"rating-changed"},props:{editable:{type:Boolean,required:!1,default:!1},size:{type:Number,required:!1,default:8},rating:{type:Number,required:!1,default:0}},data:function(){return{maxRating:5,ratingValue:null}},computed:{editableClass:function(){return{"sw-extension-rating-stars--is-editable":this.editable}},sizeValue:function(){return this.editable&&8===this.size?this.defaultSizeForEditable:this.size},starSize:function(){return{width:"".concat(this.sizeValue*this.scaleFactor,"px")}},partialStarSize:function(){return"".concat(this.sizeValue,"px")},partialStarWidth:function(){return"".concat(this.ratingValue%1*100,"%")},defaultSizeForEditable:function(){return 17},scaleFactor:function(){return 1.25}},watch:{rating:function(t){this.ratingValue=t}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.ratingValue=this.rating},colorClass:function(t){return{"sw-extension-rating-stars__star--is-rated":this.maxRating+1-t<=this.ratingValue}},addRating:function(t){this.editable&&(this.ratingValue=this.maxRating-t,this.$emit("rating-changed",this.ratingValue))},showPartialStar:function(t){return this.ratingValue%1!=0&&this.maxRating-Math.ceil(this.ratingValue)===t}}}}}]);