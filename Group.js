import"react";import{f as factory}from"./vendor.js";import{bool}from"prop-types";import Button from"./Button.js";const every=(a,b)=>a.every(({type:a})=>b===a),Group=factory({type:"div",style:({children:a,block:b})=>({block:b,"btn-group":every(a,Button)})});Group.propTypes={block:bool};export default Group;