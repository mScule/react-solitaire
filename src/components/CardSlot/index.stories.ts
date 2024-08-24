import type { Meta, StoryObj } from "@storybook/react";

import Component from ".";

const meta = {
  title: "CardDeck/CardSlot",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpadeFoundationSlot: Story = {
  args: {
    type: "spades",
  },
};

export const HeartFoundationSlot: Story = {
  args: {
    type: "hearts",
  },
};

export const DiamondFoundationSlot: Story = {
  args: {
    type: "diamonds",
  },
};

export const ClubFoundationSlot: Story = {
  args: {
    type: "clubs",
  },
};

export const TableauPileSlot: Story = {
  args: {
    type: "tableau",
  },
};

export const StockPileSlot: Story = {
  args: {
    type: "stock",
  },
};
