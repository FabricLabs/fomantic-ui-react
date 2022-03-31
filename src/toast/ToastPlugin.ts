import _ from 'lodash';
import { ArgsProps } from './type';
import { fetchListInstance } from './ToastContainer';

const renderToast = (args: ArgsProps) => {
  if (typeof args !== 'object') return;

  const containerPropsKeys = ['position', 'context', 'newestOnTop', 'zIndex'];

  return fetchListInstance(_.pick(args, containerPropsKeys)).then((listInstance) => {
    listInstance?.push(_.omit(args, containerPropsKeys));
  });
};

const ToastPlugin = {
  open: (args: ArgsProps) => renderToast(args),
};

export default ToastPlugin;
