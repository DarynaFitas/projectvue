"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[427],{5323:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var i=l(3396),n=l(9242);const r=(0,i._)("h1",null,"Кухня",-1),d=(0,i._)("hr",null,null,-1);function a(e,t,l,a,u,o){const p=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[r,(0,i._)("div",null,[(0,i._)("div",null,[(0,i.Uk)(" Запитання "),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.recipes.title=e),type:"text"},null,512),[[n.nr,u.recipes.title]])]),(0,i._)("div",null,[(0,i.Uk)(" Опис "),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>u.recipes.text=e),type:"text"},null,512),[[n.nr,u.recipes.text]])]),(0,i._)("button",{onClick:t[2]||(t[2]=t=>e.addItem(u.recipes))},"Add"),d])]),(0,i.Wm)(p)],64)}var u=l(65),o={name:"HomeView",data(){return{recipes:{}}},computed:{...(0,u.Se)("recipes",["getItemsList","isLoading"])},created(){this.loadList()},methods:{...(0,u.nv)("recipes",["loadList","addItem","deleteItem","updateItem","loadFilteredData"]),loadFilteredTitle(){this.loadFilteredData({fieldTitle:"title",compareOperator:"==",valueToCompare:this.titleToFind})}}},p=l(89);const s=(0,p.Z)(o,[["render",a]]);var c=s}}]);
//# sourceMappingURL=RecipesComponent.06cd10d1.js.map