import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiStandard } from './ui-standard';

const Story: ComponentMeta<typeof UiStandard> = {
  component: UiStandard,
  title: 'UiStandard',
};
export default Story;

const Template: ComponentStory<typeof UiStandard> = (args) => (
  <UiStandard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
