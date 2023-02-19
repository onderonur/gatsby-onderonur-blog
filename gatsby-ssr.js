export { wrapRootElement } from './mui-root-wrapper';

export function onRenderBody({ setHtmlAttributes }) {
  setHtmlAttributes({ lang: 'en-US' });
}
