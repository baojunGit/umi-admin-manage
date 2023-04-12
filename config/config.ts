import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';
import theme from './theme';

// REACT_APP_ENV 默认值是dev
const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: routes,
  npmClient: 'pnpm',
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  theme,
});
