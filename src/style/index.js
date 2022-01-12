import useConfig from '../_util/useConfig';

const { styleType } = useConfig();

if (styleType === 'less') {
  import('../_less/definitions/globals/reset.less');
  import('../_less/definitions/globals/site.less');
} else {
  import('../_css/components/reset.css');
  import('../_css/components/site.css');
}
