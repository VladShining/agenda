import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

export const fade = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0 }), style({ position: 'absolute' })], {
      optional: true,
    }),
    query(':enter', [animate('500ms', style({ opacity: 1 }))], {
      optional: true,
    }),
    query(':leave', [style({ opacity: 1 }), style({ position: 'absolute' })], {
      optional: true,
    }),
    query(':leave', [animate('500ms', style({ opacity: 0 }))], {
      optional: true,
    }),
  ]),
]);
export const home = trigger('routeAnimations', [
  transition('<=> *', [
    query(':enter', [style({ opacity: 0 }), style({ position: 'absolute' })], {
      optional: true,
    }),
    query(':enter', [animate('500ms', style({ opacity: 1 }))], {
      optional: true,
    }),
    query(':leave', [style({ opacity: 1 }), style({ position: 'absolute' })], {
      optional: true,
    }),
    query(':leave', [animate('500ms', style({ opacity: 0 }))], {
      optional: true,
    }),
  ]),
]);
