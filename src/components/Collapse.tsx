import { children, JSX, ParentComponent, Show } from 'solid-js'
import { twMerge } from 'tailwind-merge'
import { renderProxiesInTwoColumns } from '~/signals'

type Props = {
  title: JSX.Element
  isOpen?: boolean
  onCollapse: (collapsed: boolean) => void
}

export const Collapse: ParentComponent<Props> = (props) => {
  const { title, onCollapse } = props

  const getCollapseClassName = () => {
    const openedClassName = 'collapse-open'
    const closedClassName = 'collapse-close'

    return props.isOpen ? openedClassName : closedClassName
  }

  const getCollapseContentClassName = () => {
    const openedClassName = 'opacity-100'
    const closedClassName = 'opacity-0'

    return props.isOpen ? openedClassName : closedClassName
  }

  return (
    <div
      class={twMerge(
        getCollapseClassName(),
        'collapse collapse-arrow select-none border-secondary bg-base-200 shadow-md',
      )}
    >
      <div
        class="collapse-title pr-4 text-xl font-medium after:!top-8"
        onClick={() => onCollapse(!props.isOpen)}
      >
        {title}
      </div>

      <div
        class={twMerge(
          getCollapseContentClassName(),
          'collapse-content grid grid-cols-2 gap-2 transition-opacity duration-1000',
          renderProxiesInTwoColumns()
            ? 'sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 min-[1700px]:grid-cols-4'
            : 'sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 min-[1700px]:grid-cols-8',
        )}
      >
        <Show when={props.isOpen}>{children(() => props.children)()}</Show>
      </div>
    </div>
  )
}
