---
name: Storybook React Component
description: Storybookに対応するReactコンポーネントを作るための指示です
---

## 概要

- Reactコンポーネントと、それに対応するStorybookのstoryファイルを作るための指示です

## 指示

- 「Storybookコンポーネントを作りたいです」と依頼されたら、以下の手順で必要事項を確認しながら進めてください。
- 指示の中に必要な説明が含まれている場合は、その内容を前提に作成してください。

1. 必要事項の確認

   - 作成先フォルダ
     - 指示にファイルが添付されている場合は、そのファイルと同じ階層を意図していることが多いです。必要に応じて、そのフォルダでよいか確認してください。
   - コンポーネント名

2. コードの生成

   - 以下のテンプレートに従って2つのファイルを生成し、作業フォルダに保存してください。
   - コンポーネント名は、ユーザーが指定した名前を元に生成してください。

### Component.tsx

```typescript jsx
import type { FC } from "react";

type Props = {};

export const Component: FC<Props> = () => {
  return <div>Component name as text here</div>;
};
```

### Component.stories.tsx

```typescript jsx
import { Component } from "PathToComponent";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Component,
  args: {},
  decorators: [],
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
```
