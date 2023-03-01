import { ReactElement, useState } from "react"

type Tab = { title: string, component: any };

export default function ({ tabs, initialTab }: { tabs: Tab[], initialTab?: number }) {

  const [activeIndex, setActiveIndex] = useState<number>(initialTab ?? 0);
  const isActiveIndex = (index: number) => index === activeIndex;

  // TODO: select component in section div
  return (
    <>

      <div className="line-horizontal" />

      <div className="tab-bar">
        {tabs.map((tab, index) => (
          <button
            className="tab-button"
            style={{
              color: (isActiveIndex(index) ? 'white' : 'var(--medium)'),
            }}
            title={tab.title}
            onClick={() => setActiveIndex(index)}
          >
            <h2 className="tab-button-title">
              {tab.title}
            </h2>
          </button>
        ))}
      </div>

      <div className="line-horizontal" />

      <div className="section">
        {tabs[activeIndex].component}
      </div>

    </>
  )
}