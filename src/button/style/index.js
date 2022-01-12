import useConfig from '../../_util/useConfig';

const { styleType } = useConfig();

if (styleType === 'less') {
  import('../../_less/definitions/elements/button.less');
} else {
  import('../../_css/components/button.css');
}
