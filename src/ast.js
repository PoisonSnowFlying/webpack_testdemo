// let esprima = require('esprima');
// let estraverse = require('estraverse');
// let escodegen = require('escodegen');
// let code = `function ast(a) {return a}`;

// let ast = esprima.parse(code);
// estraverse.traverse(ast,{
//     enter(node) {
//         console.log(node.type + '进入')
//     },
//     leave(node) {
//         console.log(node.type + '离开')
//     }
// });
let babel = require('@babel/core');
let t = require('babel-types');
let arrowPlugin = require('babel-plugin-transform-es2015-arrow-functions');
const { thisExpression } = require('babel-types');
let code= `const sum = (a,b) => {
    console.log(this);
    return a+b
}`;
//let code = `const sum = (a,b) => a + b`
// 插件是个对象
let arrowFunctionPlugin = {
    visitor:{
        ArrowFunctionExpression:(path)=> {
            let node = path.node;
            let id = path.parent.id;
            let params = node.params;
            // console.log(node.body);
            let functionExporession = t.functionExpression(id,params,
               node.body,node.generator,node.async);

            let thisVari = t.variableDeclaration('var',[t.variableDeclarator(t.identifier('_this'),t.thisExpression())])  
            let newNodes = [thisVari,functionExporession];
            path.replaceWithMultiple(newNodes);
            //path.replaceWith(functionExporession);
        },
        ThisExpression(path) {
            path.replaceWith(t.identifier('_this'));
        }
    }
}


let result = babel.transform(code,{
    plugins:[arrowFunctionPlugin]
});
console.log(result.code);

