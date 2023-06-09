import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, g as getContext } from './index2-0bd1e788.js';
import { r as rimbaultTransparent } from './rimbault-transparent-ca888b84.js';

const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="container"><div class="img-header text-center flex justify-center mt-10"><img${add_attribute("src", rimbaultTransparent, 0)} alt="Portrait de Louis Rimbault"></div>
    <div class="text-center mt-10"><h1 class="frankie text-atl-red">${escape($page.status)}</h1>
        <h1 class="frankie">Ceci est une erreur...</h1>
        ${$page.status == 404 ? `<h2 class="frankie">Il n&#39;y a (encore) rien ici</h2>` : `<h2 class="frankie">Quelque chose s&#39;est mal passé...</h2>`}
        <a href="/" title="Retour à l'accueil" class="block mt-6">Retour à la page d&#39;accueil</a></div></div>`;
});

export { Error$1 as default };
//# sourceMappingURL=_error.svelte-0c63c9a6.js.map
