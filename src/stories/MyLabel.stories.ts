import type { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props as MyLAbelProps } from "../components/MyLabel";

const meta: Meta<MyLAbelProps> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        size: 'normal',
        allCaps: false
    },
    argTypes: {
        size: { control: 'select' },
        allCaps: { control: "boolean" },
        color: { control: 'select' },
    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Hola mundo',
        size: 'h3'
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All caps label',
        allCaps: true
    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom color label',
        fontColor: 'red'
    }
};