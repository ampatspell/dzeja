import EmberObject from '@ember/object';
import { inject as service } from "@ember/service"
import { activate, models } from 'zuglet/decorators';
import { load } from 'zuglet/utils';
import { cached } from 'tracked-toolbox';

export default class Posts extends EmberObject {

  @service
  store

  @cached
  get collection() {
    return this.store.collection('posts');
  }

  @activate().content(({ collection }) => collection.orderBy('createdAt', 'desc').query())
  query

  @models().source(({ query }) => query.content).named(doc => `post/${doc.data.type}`).mapping(doc => ({ doc }))
  models

  async load() {
    await load(this.query);
  }

  byId(id) {
    return this.models.find(model => model.id === id);
  }

  buildPost(type) {
    let doc = this.collection.doc().new({
      type,
      createdAt: this.store.serverTimestamp
    });
    return this.store.models.create(`post/${type}`, { doc });
  }

}
