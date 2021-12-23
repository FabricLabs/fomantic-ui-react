import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../components';

export default {
  id: 'components/icon',
  title: '组件/Icon (图标)',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);

export const Basic = Template.bind({});

Basic.storyName = '基本用法';

Basic.args = {
  name: 'users'
};


const TemplateSize: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon {...args} size="mini" />
    <Icon {...args} size="tiny" />
    <Icon {...args} size="small" />
    <Icon {...args} />
    <Icon {...args} size="large" />
    <Icon {...args} size="big" />
    <Icon {...args} size="huge" />
    <Icon {...args} size="massive" />
  </>
);

export const Size = TemplateSize.bind({});

Size.storyName = '尺寸';

Size.args = {
  name: 'home'
};

export const Disabled = Template.bind({});

Disabled.storyName = '禁用';

Disabled.args = {
  name: 'users',
  disabled: true
};

const TemplateLoading: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon {...args} name="spinner" />
    <Icon {...args} name="notched circle" />
    <Icon {...args} name="asterisk" />
  </>
);

export const Loading = TemplateLoading.bind({});

Loading.storyName = '加载'

Loading.args = {
  loading: true
};


const TemplateFitted: ComponentStory<typeof Icon> = (args) => (
  <>
    This icon<Icon {...args} fitted />is fitted.<br />
    This icon<Icon {...args} />is not.
  </>
);

export const Fitted = TemplateFitted.bind({});

Fitted.storyName = '紧身'

Fitted.args = {
  name: 'help'
}

export const Link = Template.bind({});

Link.storyName = '链接';

Link.args = {
  name: 'help',
  link: true
}

export const Flipped = Template.bind({});

Flipped.storyName = '翻转';

Flipped.args = {
  name: 'help',
  flipped: 'horizontally'
}

export const Rotated = Template.bind({});

Rotated.storyName = '旋转';
Rotated.args = {
  name: 'help',
  rotated: 'clockwise'
}

const TemplateCircular: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon {...args} color={undefined} inverted={false} />
    <Icon {...args} color="teal" inverted={false} />
    <Icon {...args} color="black" inverted />
    <Icon {...args} color="teal" inverted />
  </>
);
export const Circular = TemplateCircular.bind({});

Circular.storyName = '圆形';
Circular.args = {
  name: 'help',
  circular: true
}


const TemplateColor: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon {...args} color="primary" />
    <Icon {...args} color="secondary" />
    <Icon {...args} color="red" />
    <Icon {...args} color="orange" />
    <Icon {...args} color="yellow" />
    <Icon {...args} color="olive" />
    <Icon {...args} color="green" />
    <Icon {...args} color="teal" />
    <Icon {...args} color="blue" />
    <Icon {...args} color="violet" />
    <Icon {...args} color="purple" />
    <Icon {...args} color="pink" />
    <Icon {...args} color="brown" />
    <Icon {...args} color="grey" />
    <Icon {...args} color="black" />
  </>
);

export const Color = TemplateColor.bind({});

Color.storyName = '颜色';
Color.args = {
  name: 'users'
}

const TemplateBordered: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon {...args} color={undefined} inverted={false} />
    <Icon {...args} color="teal" inverted={false} />
    <Icon {...args} color="black" inverted />
    <Icon {...args} color="teal" inverted />
  </>
);

export const Bordered = TemplateBordered.bind({});

Bordered.storyName = '边框';
Bordered.args = {
  name: 'users',
  bordered: true
}

const TemplateColored: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon {...args} bordered />
    <Icon {...args} circular />
  </>
);

export const Colored = TemplateColored.bind({});

Colored.storyName = '边框颜色';
Colored.args = {
  name: 'users',
  color: 'red',
  colored: true
}

export const Inverted = Template.bind({});

Inverted.storyName = 'Inverted';
Inverted.args = {
  name: 'users',
  inverted: true,
  color: 'red'
}
