import WbnPlayer from '../components/containers/WbnPlayer';

export default [
    {
        exact: true,
        path: '/:activeVideo',
        private: false,
        component: WbnPlayer,
    },
];