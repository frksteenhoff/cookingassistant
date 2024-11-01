import Vue, { VNode } from 'vue'
import "vue-tsx-support/enable-check";
declare global {
	namespace JSX {
		// tslint:disable no-empty-interface
		interface Element extends VNode { }
		// tslint:disable no-empty-interface
		interface ElementClass extends Vue { }
	}
}
