
exports.handler = function(event, context) {

    if ((event.name === 'Dan') || (event.name === 'danh')) {
        return context.succeed( { valid: true } );
    }
    
    context.fail(new Error('unknown name'));
};
