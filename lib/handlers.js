module.exports = {

    home: function(request, reply) {
        reply.redirect('/urban');
    },

    urban: function(request, reply) {
        reply.file('./public/views/index.html');
    },

    trees: function(request, reply) {
        reply.file('./public/views/index.html');
    }

};
