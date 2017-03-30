module.exports = function({
    types: t
}) {

    const generateElement = (path, state) => {

            const node = path.node; 

            return t.StringLiteral("oRM.write('alan')");
        }
        // JSX Attribute 
    const getName = (node) => {
        return node.name
    }
    const getValue = (node) => {
        return node.value
    }

    return {
        inherits: require('babel-plugin-syntax-jsx'),
        visitor: {
            JSXElement: function(path, state) {
                path.replaceWith(
                    generateElement(path, state)
                );
            },

            JSXOpeningElement: {
                enter: function(path, state) {
                    console.log('[enter] JSXIdentifier:', getName(path.node.name));
                    //path.replaceWithSourceString(
                    //"oRM.write('<" + getName(path.node.name) + ">')"
                    //)
                },
                exit: function(path, state) {
                    //console.log('[exit] JSXIdentifier:', getName(path.node.name));

                    //path.replaceWithSourceString(
                    //"oRM.write('<" + getName(path.node.name) + "/>')"
                    //)
                }
            },
            JSXAttribute(path, state) {
                //console.log(path.node.name);
                var name = getName(path.node.name)
                var value = getValue(path.node.value)
                console.log(name)
                console.log(value)
                    //var name = getAttributeName(path.node);
                    //console.log('JSXAttribute', name);
                    //console.log('JSXAttribute', path.node.value);
            }
        }
    }

}
