(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(96)),i={title:"Getting Started",slug:"/"},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Installation",source:"@site/docs/getting-started.md",slug:"/",permalink:"/ui/",version:"current",sidebar:"docs",next:{title:"Animation and Transitions",permalink:"/ui/transitions"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Styling",id:"styling",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install react-overlays\n")),Object(r.b)("p",null,"Or with yarn"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn add react-overlays\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"Components can be imported from the main package or directly like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'import Dropdown from "react-overlays/Dropdown";\n')),Object(r.b)("h2",{id:"styling"},"Styling"),Object(r.b)("p",null,"React Overlays is a toolkit for creating functional overlays, tooltips, modals, and dropdowns.\nIt is not a UI framework but is meant to be incorporated ",Object(r.b)("em",{parentName:"p"},"into")," frameworks. To make those integrations\npossible, React Overlays is style-agnostic and ",Object(r.b)("strong",{parentName:"p"},"does not")," come with any CSS.\nYou should provide your own styles, and the documentation provides some simple examples\nfor how to do that. For more complex integrations, check out ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-bootstrap/react-bootstrap"},"React Bootstrap"),"."),Object(r.b)("p",null,"There are a few places where inline ",Object(r.b)("inlineCode",{parentName:"p"},"style"),"s are applied, however. They are functionally\nrequired and very minimal. Specifically ",Object(r.b)("inlineCode",{parentName:"p"},"PopperJs")," injects it's own styles in order\nto position overlays and dropdowns, and ",Object(r.b)("inlineCode",{parentName:"p"},"Modal")," applies ",Object(r.b)("inlineCode",{parentName:"p"},"overflow: hidden")," to the\ndocument body. These can technically be overridden but it's very unlikely to be\nrequired."))}d.isMDXComponent=!0}}]);