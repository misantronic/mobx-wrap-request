import { computed, makeObservable, observable } from "mobx";
import { WrapRequest } from "wrap-request";

export * from "wrap-request";

makeObservable(WrapRequest, {
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
