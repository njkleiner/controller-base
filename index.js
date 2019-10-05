class Controller {
    async $new(request, response, next) {
        return next(new Error('#new is not implemented'));
    }

    async $edit(request, response, next) {
        return next(new Error('#edit is not implemented'));
    }

    async $index(request, response, next) {
        return next(new Error('#index is not implemented'));
    }

    async $show(request, response, next) {
        return next(new Error('#show is not implemented'));
    }

    async $create(request, response, next) {
        return next(new Error('#create is not implemented'));
    }

    async $update(request, response, next) {
        return next(new Error('#update is not implemented'));
    }

    async $destroy(request, response, next) {
        return next(new Error('#destroy is not implemented'));
    }

    configure(router) {
        const wrap = (handler) => (request, response, next) => handler(request, response, next).catch(error => next(error));

        // Non-action routes
        router.get('/new', wrap(this.$new));
        router.get('/:id/edit', wrap(this.$edit));

        // CREATE
        router.post('/', wrap(this.$create));

        // READ
        router.get('/', wrap(this.$index));
        router.get('/:id', wrap(this.$show));

        // UPDATE
        router.put('/:id', wrap(this.$update));
        router.patch('/:id', wrap(this.$update));

        // DELETE
        router.delete('/:id', wrap(this.$destroy));
    }
}

module.exports = Controller;
