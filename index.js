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

        router.get('/new', wrap(this.$new));

        router.get('/:id/edit', wrap(this.$edit));

        router.get('/', wrap(this.$index));

        router.get('/:id', wrap(this.$show));

        router.post('/', wrap(this.$create));

        router.put('/:id', wrap(this.$update));

        router.patch('/:id', wrap(this.$update));

        router.delete('/:id', wrap(this.$destroy));
    }
}

module.exports = Controller;
