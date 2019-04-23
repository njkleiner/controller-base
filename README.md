# controller-base

> A controller template for MVC in Express.

## Getting Started

### Installing

`$ npm install controller-base`

### Usage

The controller follows the [Ruby on Rails methodology](https://www.codecademy.com/articles/standard-controller-actions).

The controller will register the following action methods by default:
* `$index`
* `$new`
* `$create`
* `$show`
* `$edit`
* `$update`
* `$destroy`

Each method has the following signature: `$action(request, response, next)`.

Simply extend the controller class and override the `$action` methods and add your own actions as needed.

```javascript
// controllers/account.js
const Controller = require('controller-base');

class AccountsController extends Controller {
    $index(request, response, next) {
        // List all accounts...
    }
    
    // Implement the other $action methods as needed.
    
    // Add a custom $action
    $action(request, response, next) {
        response.send('/action');
    }
    
    // Override the configure method to register your custom action.
    configure(router) {
        // Call the super method to configure the default actions.
        super.configure(router);
        
        // And configure your custom action.
        const self = this;
        router.get('/action', (request, response, next) => self.$action(request, response, next));
    }
}

module.exports = new AccountsController();
```

Then call the `configure` method on your controller instance and pass it a [Router](https://expressjs.com/en/4x/api.html#router) object.

```javascript
const AccountsController = require('./controllers/account');

const router = new express.Router();
AccountsController.configure(router);

// ...
app.use('/accounts', router);
```

## Contributing

This project uses the git branching model [described here](https://nvie.com/posts/a-successful-git-branching-model/).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/njkleiner/controller-base/tags). 

## Authors

* [Noah Kleiner](https://github.com/njkleiner)

See also the list of [contributors](https://github.com/njkleiner/controller-base/contributors) who participated in this project.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* This project is inspired by [Ruby on Rails](https://rubyonrails.org/).
* [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) by [Billie Thompson](https://github.com/PurpleBooth).
