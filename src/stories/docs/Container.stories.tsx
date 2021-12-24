import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '../components';

export default {
  id: 'components/container',
  title: '组件/Container (容器)',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </Container>
);

export const Basic = Template.bind({});

Basic.storyName = '基本用法';

Basic.args = {};

const TemplateAlign: ComponentStory<typeof Container> = (args) => (
  <>
    <Container {...args} textAlign='left'>
      Left Aligned
    </Container>
    <Container {...args} textAlign='center'>
      Center Aligned
    </Container>
    <Container {...args} textAlign='right'>
      Right Aligned
    </Container>
  </>
);

export const Align = TemplateAlign.bind({});

Align.storyName = '文本对齐';

Align.args = {};
