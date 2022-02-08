import { ModuleProps } from '../common';

export interface ModalProps extends ModuleProps {
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 关闭弹出层时触发
   */
  onClose?: Function;
}
