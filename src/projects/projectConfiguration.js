import Rxjs from './rxjs';
import Pixijs from './pixijs';
import TouteLeMonde from './toutelemonde';

const projectConfiguration = [
  {
    id: 'RXJS',
    title: 'RxJs tutorial',
    description: 'this is a basic tutorial on RxJs',
    routeId: '/rxjs',
    component: Rxjs,
  },
  {
    id: 'PixiJs',
    title: 'PixiJs tutorial',
    description: 'this is a basic tutorial on PixiJs',
    routeId: '/pixijs',
    component: Pixijs,
  },
  {
    id: 'TouteLeMonde',
    title: 'Toute Le Monde',
    description: 'this is a basic tutorial on France',
    routeId: '/toutelemonde',
    component: TouteLeMonde,
  },
];

export default projectConfiguration;
