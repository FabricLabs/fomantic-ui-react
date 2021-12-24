import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flag } from '../components';

export default {
  id: 'components/flag',
  title: '组件/Flag (旗帜)',
  component: Flag,
} as ComponentMeta<typeof Flag>;

const Template: ComponentStory<typeof Flag> = (args) => <Flag {...args} />;

export const Basic = Template.bind({});

Basic.storyName = '基本用法';

Basic.args = { name: 'cn' };
