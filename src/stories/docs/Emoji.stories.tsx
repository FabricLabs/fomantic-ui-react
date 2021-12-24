import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Emoji } from '../components';

export default {
  id: 'components/emoji',
  title: '组件/Emoji (表情符号)',
  component: Emoji,
} as ComponentMeta<typeof Emoji>;

const Template: ComponentStory<typeof Emoji> = (args) => <Emoji {...args} />;

export const Basic = Template.bind({});

Basic.storyName = '基本用法';

Basic.args = {
  name: 'adult',
};
