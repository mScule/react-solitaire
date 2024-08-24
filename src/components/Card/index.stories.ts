import type { Meta, StoryObj } from "@storybook/react";

import Component from ".";

const meta = {
  title: "CardDeck/Card",
  component: Component,
  tags: ["autodocs"],
  args: {
    suit: "spades",
    rank: 1,
    face: "up",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpadeAce: Story = {
  args: {
    suit: "spades",
    rank: 1,
  },
};

export const HeartJack: Story = {
  args: {
    suit: "hearts",
    rank: 11,
  },
};

export const ClubQueen: Story = {
  args: {
    suit: "clubs",
    rank: 12,
  },
};

export const DiamondKing: Story = {
  args: {
    suit: "diamonds",
    rank: 13,
  },
};

export const BackSide: Story = {
  args: {
    face: "down",
  },
};
