# dzeja

```
# user who can set roles for other users
$ firebase functions:config:set users.admin="...uid..."
```

```
$ npm run deploy:all
$ npm run deploy:hosting
```

``` javascript
// make someone editor
let store = Ember.Namespace.NAMESPACES[0].__container__.lookup('service:store');
await store.setRole('target-uid', 'editor');
```
