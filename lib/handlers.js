module.exports = {

    home: function(request, reply) {
        reply.redirect('/urban');
    },

    urban: function(request, reply) {
        reply.file('./public/views/index.html');
    }

};
