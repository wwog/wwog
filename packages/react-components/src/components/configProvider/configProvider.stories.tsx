import type { Meta, StoryObj } from '@storybook/react'

import { ConfigProvider, useConfigContext } from '.'

const meta: Meta<typeof ConfigProvider> = {
  component: ConfigProvider,
  title: 'Input / ConfigProvider',
}
function Level() {
  const { id } = useConfigContext()
  const primaryColor = `--primary-color-${id}`
  return (
    <div
      style={{
        color: `var(${primaryColor})`,
      }}
    >
      123
    </div>
  )
}
//TempLate
const Template = () => {
  return (
    <ConfigProvider
      config={{
        id: '001',
        tokens: {
          primaryColor: 'red',
        },
      }}
    >
      <Level />
      <ConfigProvider
        config={{
          id: '002',
          tokens: {
            primaryColor: 'blue',
          },
        }}
      >
        <Level />
        <ConfigProvider
          config={{
            id: '003',
            tokens: {
              primaryColor: 'green',
            },
          }}
        >
          <Level />
        </ConfigProvider>
      </ConfigProvider>
    </ConfigProvider>
  )
}

export default meta

export const ExampleStory = Template.bind({})
//@ts-ignore
ExampleStory.args = {
  // 在这里设置你的组件的属性
}
