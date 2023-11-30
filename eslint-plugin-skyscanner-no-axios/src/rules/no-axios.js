module.exports = {
  create: (context) => ({
    CallExpression: (node) => {
      if (
        node.callee.name === 'require' &&
        node.arguments.length > 0 &&
        typeof node.arguments[0].value === 'string' &&
        (node.arguments[0].value === 'axios' ||
          node.arguments[0].value.indexOf('axios/') === 0)
      ) {
        context.report(node, 'Deprecated require of axios package');
      }
    },
    ImportDeclaration: (node) => {
      if (
        node.source.value === 'axios' ||
        node.source.value.indexOf('axios/') === 0
      ) {
        context.report(node, 'Deprecated import of axios package');
      }
    },
  }),
  meta: {
    docs: {
      description:
        'Deprecate the use of axios due to potential sensitive information leaks',
    },
    type: 'problem',
  },
};
