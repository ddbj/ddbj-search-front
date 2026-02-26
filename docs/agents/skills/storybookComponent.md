---
name: StoryBook React Component
description: StoryBook に対応するReactコンポーネントを作るための指示です
---


## 概要
* ReactのFunctional Componentとそれ対応するStorybookのStoryファイルを作ります


## 指示
* 「Storybookコンポーネントを作りたいです」以下の手順に従ってユーザーに内容を確認しながら。指示の中に説明が含まれている場合は、説明を参考に作成してください。

1. 必要事項の確認
  - 作成フォルダ先
    - 指示にファイルが添付されている場合、そのファイルと同じ階層を意図している場合が多いです。念のためにそのフォルダでいいかの確認はしてください
  - コンポーネント名
2. コードの生成
  - 以下のテンプレートに従って2つのコードを生成し、作業フォルダに保存してください。
  - コンポーネント名は、ユーザーが入力したコンポーネント名を元に生成してください。

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
import { Component } from "PathToComponent"
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
