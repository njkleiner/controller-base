class Controller {
    constructor() {}

    $index(request, response, next) {
        next();
    }

    $new(request, response, next) {
        next();
    }

    $create(request, response, next) {
        next();
    }

    $show(request, response, next) {
        next();
    }

    $edit(request, response, next) {
        next();
    }

    $update(request, response, next) {
        next();
    }

    $destroy(request, response, next) {
        next();
    }

    configure(router) {
        const self = this;

        router.get('/new', (request, response, next) => self.$new(request, response, next));
        router.get('/:id/edit', (request, response, next) => self.$edit(request, response, next));

        router.get('/', (request, response, next) => self.$index(request, response, next));
        router.get('/:id', (request, response, next) => self.$show(request, response, next));

        router.post('/', (request, response, next) => self.$create(request, response, next));
        router.put('/:id', (request, response, next) => self.$update(request, response, next));
        router.patch('/:id', (request, response, next) => self.$update(request, response, next));
        router.delete('/:id', (request, response, next) => self.$destroy(request, response, next));
    }
}

module.exports = Controller;
