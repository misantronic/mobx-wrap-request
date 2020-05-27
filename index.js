import { computed, decorate, observable } from "mobx";
import { WrapRequest } from "wrap-request";

export * from "wrap-request";

decorate(WrapRequest, {
  _$: observable,
  $: computed,
  _metadata: observable,
  requestParams: observable,
  metadata: computed,
  error: observable,
  transform: observable,
  state: observable,
  source: computed,
  loading: computed,
  fetched: computed,
  empty: computed
});
