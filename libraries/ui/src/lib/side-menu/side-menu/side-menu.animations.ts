import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
} from '@angular/animations';

const openCloseAnimation = trigger('openClose', [
  state(
    'open',
    style({
      width: '400px',
      transform: 'translate3d(0,0,0)',
      paddingRight: '10px',
    })
  ),
  state(
    'closed',
    style({
      width: '0px',
      transform: 'translate3d(-100%, 0, 0)',
    })
  ),
  transition('open => closed', animate('400ms ease-in-out')),
  transition('closed => open', animate('400ms ease-in-out')),
]);

export const SIDE_MENU_ANIMATIONS = [openCloseAnimation];
