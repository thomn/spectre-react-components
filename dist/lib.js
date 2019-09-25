import{createElement}from"react";import PropTypes from"prop-types";function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread2(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}/**
 *
 * @param entries
 * @returns {string}
 */var composer=function a(){for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return c.filter(Boolean).map(function(b){var c;return(c={},_defineProperty(c,String.toString(),function(){return b}),_defineProperty(c,Number.toString(),function(){return b}),_defineProperty(c,Array.toString(),function(){return a.apply(void 0,_toConsumableArray(b))}),_defineProperty(c,Object.toString(),function(){return a(Object.keys(b).filter(function(a){return b[a]}))}),c)[b.constructor.toString()]}).map(function(a){return a()}).flat().join(" ").trim()},useTooltip=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"";return a?{className:composer(b,"tooltip"),"data-tooltip":a}:{}},index=/*#__PURE__*/Object.freeze({useTooltip:useTooltip,useClassName:composer}),through=function(a){return a||{}},factory=function(a){var b=a.type,c=a.className,d=a.style,e=a.modifier,f=void 0===e?through:e;return function(a){var e=a,g=e.className;return g=composer(g,c,d&&d(a)),a=_objectSpread2({},a,{className:g},f(a)),createElement(b,a)}},Breadcrumb=factory({type:"ul",className:"breadcrumb"}),Item=factory({type:"li",className:"breadcrumb-item"});/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 11:18
 */Breadcrumb.Item=Item;/**
 *
 * @param props
 * @returns {emptyFunctionThatReturnsNull}
 */var oneOf=function(a){return PropTypes.oneOf(Object.keys(a).map(function(b){return a[b]}))},Button=factory({type:"button",className:"btn",style:function(a){var b,c=a.active,d=a.disabled,e=a.size,f=a.primary,g=a.success,h=a.error;return b={active:c,disabled:d},_defineProperty(b,"btn-"+e,e),_defineProperty(b,"btn-primary",f),_defineProperty(b,"btn-success",g),_defineProperty(b,"btn-error",h),b}});/**
 *
 * @type {*}
 */Button.Size={LARGE:"lg",SMALL:"sm"},Button.propTypes={active:PropTypes.bool,disabled:PropTypes.bool,primary:PropTypes.bool,success:PropTypes.bool,error:PropTypes.bool,size:oneOf(Button.Size)};/**
 *
 * @type {*}
 */var Container=factory({type:"div",className:"container",style:function(a){var b=a.size;return _defineProperty({},"grid-"+b,b)}});Container.Size={EXTRA_LARGE:"xl",LARGE:"lg",MEDIUM:"md",SMALL:"sm",EXTRA_SMALL:"xs"},Container.propTypes={size:oneOf(Container.Size)};/**
 *
 * @type {*}
 */var Icon=factory({type:"i",className:"icon",style:function(a){var b,c=a.size,d=a.type;return b={},_defineProperty(b,"icon-"+c,c),_defineProperty(b,"icon-"+d,d),b}});Icon.Size={BIG:"2x",BIGGER:"3x",BIGGEST:"4x"},Icon.Type={ARROW_UP:"arrow-up",ARROW_RIGHT:"arrow-right",ARROW_DOWN:"arrow-down",ARROW_LEFT:"arrow-left",UPWARD:"upward",FORWARD:"forward",DOWNWARD:"downward",BACK:"back",CARET:"caret",MENU:"menu",APPS:"apps",MORE_HORIZ:"more-horiz",MORE_VERT:"more-vert",RESIZE_HORIZ:"resize-horiz",RESIZE_VERT:"resize-vert",PLUS:"plus",MINUS:"minus",CROSS:"cross",CHECK:"check",STOP:"stop",SHUTDOWN:"shutdown",REFRESH:"refresh",SEARCH:"search",FLAG:"flag",BOOKMARK:"bookmark",EDIT:"edit",DELETE:"delete",SHARE:"share",DOWNLOAD:"download",UPLOAD:"upload",MAIL:"mail",PEOPLE:"people",MESSAGE:"message",PHOTO:"photo",TIME:"time",LOCATION:"location",LINK:"link",EMOJI:"emoji"},Icon.propTypes={size:oneOf(Icon.Size),type:oneOf(Icon.Type).isRequired};/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */var Menu=factory({type:"ul",className:"menu"}),Divider=factory({type:"li",className:"divider",modifier:function(a){var b=a.children;return{"data-content":b}}}),Item$1=factory({type:"li",className:"menu-item"}),Badge=factory({type:"div",className:"menu-badge"});/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */Menu.Item=Item$1,Menu.Badge=Badge,Menu.Divider=Divider;export{Breadcrumb,Button,Container,Icon,Menu,index as hooks};
