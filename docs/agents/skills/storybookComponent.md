---
name: Storybook React Component
description: Storybookに対応するReactコンポーネントを作成するための指示
---

## この指示の役割

- Reactコンポーネントと、それに対応するStorybookファイルを作成するときに使う。

## 手順

- Storybookに対応するReactコンポーネントの作成を依頼されたら、次の手順で進める。
- 指示の中に必要な情報が含まれている場合は、その内容を前提に進める。

1. 必要事項を確認する

   - 作成先フォルダ
     - 指示にファイルが添付されている場合は、そのファイルと同じ階層を第一候補とする。
     - 作成先が明記されていなければ、そのフォルダでよいか確認する。
   - コンポーネント名

2. 2つのファイルを作成する

   - `<ComponentName>.tsx`
   - `<ComponentName>.stories.tsx`

3. テンプレートを要件に合わせて置き換える

   - `ComponentName` は、ユーザーが指定したコンポーネント名に置き換える。
   - `Props` と表示内容は、指示に含まれる要件に合わせて調整する。
   - `import` 文のパスは、作成先の周辺ファイルに合わせて相対パスまたは `@/` を選ぶ。
   - 必須の `props` がある場合は、`Primary` に `args` を設定する。

## テンプレート

### `<ComponentName>.tsx`

```typescript jsx
import type { FC } from "react";

type Props = {};

export const ComponentName: FC<Props> = () => {
  return <div>ComponentName</div>;
};
```

### `<ComponentName>.stories.tsx`

```typescript jsx
import { ComponentName } from "PathToComponent";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: ComponentName,
  args: {},
  decorators: [],
} satisfies Meta<typeof ComponentName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
```
