import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label, Icon } from '../components';

export default {
  id: 'components/label',
  title: '组件/Label (标签)',
  component: Label
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args} />
);

export const Basic = Template.bind({});

Basic.storyName = '基本用法';

Basic.args = {
  children: 'label'
};

const TemplateImage: ComponentStory<typeof Label> = (args) => (
  <>
    <Label {...args}>
      <img src="https://fomantic-ui.com/images/avatar/small/joe.jpg" alt="" />
      Job
    </Label>
    <Label {...args}>
      <img src="https://fomantic-ui.com/images/avatar/small/joe.jpg" alt="" />
      Job
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label {...args}>
      <img src="https://fomantic-ui.com/images/avatar/small/joe.jpg" alt="" />
      Job
      <Icon name='delete' />
    </Label>
  </>
);

export const Image = TemplateImage.bind({});

Image.storyName = '图片';

Image.args = {
  as: 'a',
  image: true
}
