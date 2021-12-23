import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Icon } from '../components';

export default {
  id: 'components/button',
  title: '组件/Button (按钮)',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.storyName = '基本用法';

Basic.args = {
  children: 'button',
};

const TemplateAnimated: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args} animated>
      <Button.Content visible content='Next' />
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button {...args} animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    <Button {...args} animated='fade'>
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
  </>
);

export const Animated = TemplateAnimated.bind({});

Animated.storyName = '动画';

Animated.args = {};

const TemplateSize: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args} size='mini'>
      Mini
    </Button>
    <Button {...args} size='tiny'>
      Tiny
    </Button>
    <Button {...args} size='small'>
      Small
    </Button>
    <Button {...args} size='medium'>
      Medium
    </Button>
    <Button {...args} size='large'>
      Large
    </Button>
    <Button {...args} size='big'>
      Big
    </Button>
    <Button {...args} size='huge'>
      Huge
    </Button>
    <Button {...args} size='massive'>
      Massive
    </Button>
  </>
);

export const Size = TemplateSize.bind({});

Size.storyName = '尺寸';
Size.args = {};

const TemplateDisabled: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Disabled</Button>
);

export const Disabled = TemplateDisabled.bind({});

Disabled.storyName = '禁用';
Disabled.args = {
  disabled: true,
};

const TemplateColor: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args} color='primary'>
      primary
    </Button>
    <Button {...args} color='secondary'>
      secondary
    </Button>
    <Button {...args} color='red'>
      red
    </Button>
    <Button {...args} color='orange'>
      orange
    </Button>
    <Button {...args} color='yellow'>
      yellow
    </Button>
    <Button {...args} color='olive'>
      olive
    </Button>
    <Button {...args} color='green'>
      green
    </Button>
    <Button {...args} color='teal'>
      teal
    </Button>
    <Button {...args} color='blue'>
      blue
    </Button>
    <Button {...args} color='violet'>
      violet
    </Button>
    <Button {...args} color='purple'>
      purple
    </Button>
    <Button {...args} color='pink'>
      pink
    </Button>
    <Button {...args} color='brown'>
      brown
    </Button>
    <Button {...args} color='grey'>
      grey
    </Button>
    <Button {...args} color='black'>
      black
    </Button>
    <Button {...args} color='facebook'>
      facebook
    </Button>
    <Button {...args} color='google plus'>
      google plus
    </Button>
    <Button {...args} color='instagram'>
      instagram
    </Button>
    <Button {...args} color='linkedin'>
      linkedin
    </Button>
    <Button {...args} color='twitter'>
      twitter
    </Button>
    <Button {...args} color='vk'>
      vk
    </Button>
    <Button {...args} color='youtube'>
      youtube
    </Button>
  </>
);

export const Color = TemplateColor.bind({});

Color.storyName = '颜色';

Color.args = {};

const TemplateIcon: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args} icon>
      <Icon name='world' />
    </Button>
    <Button {...args} icon='world' />
  </>
);

export const IconButton = TemplateIcon.bind({});

IconButton.storyName = '图标';

IconButton.args = {};
