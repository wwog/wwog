import type { Meta, StoryObj } from '@storybook/react'

import { ConfigProvider, useConfigContext } from '.'

const meta: Meta<typeof ConfigProvider> = {
  component: ConfigProvider,
  title: 'Input / ConfigProvider',
}
function Level() {
  const { id } = useConfigContext()
  const primaryColor = `--primary-color-${id}`
  console.log(id)
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
    <ConfigProvider>
      <Level />
      <ConfigProvider primaryColor='#DEDA93'>
        <Level />
        <ConfigProvider primaryColor='red'>
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
