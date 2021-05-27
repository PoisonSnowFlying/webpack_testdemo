let babel = require('@babel/core');
let t = require('babel-types');
let visitor = {
    ImportDeclaration:{
        enter(path,state={opts}) {
            const node = path.node;
            const specifiers = node.specifiers;
            const source = node.source;
            if(source.value === state.opts.library && !t.isImportDefaultSpecifier(specifiers[0])) {
                //console.log(specifiers.length);
                const declations = specifiers.map((specifier)=> {
                    return t.importDeclaration([t.importDefaultSpecifier(specifier.local)],
                    t.stringLiteral(`${source.value}/${specifier.imported.name}`))
                });
                path.replaceWithMultiple(declations);
            }
        }
    }
}
module.exports = function () {
    return {
        visitor
    }
}