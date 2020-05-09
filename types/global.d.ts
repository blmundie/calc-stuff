// Types for compiled templates
declare module 'number-of-runs/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
