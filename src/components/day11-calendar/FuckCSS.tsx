import { useState } from 'react'

interface ICalendarType {
  defaultValue?: Date
  onChange?: (date: Date) => void
}

const monthName = [
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
  '十一',
  '十二',
]

const FuckCSS: React.FC<ICalendarType> = props => {
  const { defaultValue, onChange } = props
  const [date, setDate] = useState(defaultValue || new Date())

  // 处理点击上个月和下个月的按扭点击事件
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  // 一个月有多少天
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }
  // 这个月 1 号是星期几?
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  // 只渲染上个月的日期
  const renderPreviousDates = (days: JSX.Element[]) => {
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth())

    for (let i = firstDay - 1; i >= 0; i--) {
      // 获取上个月最后几天
      const currentDate = new Date(date.getFullYear(), date.getMonth(), -i)
      days.push(
        <div
          key={`before-month-${i}`}
          className="w-[calc(100%/7)] text-center leading-[30px] hover:bg-slate-200 cursor-pointer font-sans font-light rounded-lg duration200 text-gray-300"
        >
          {currentDate.getDate()}
        </div>,
      )
    }
  }
  // 只渲染本月的日期
  const renderCurrentDates = (days: JSX.Element[]) => {
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth())

    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = () => {
        const currentDate = new Date(date.getFullYear(), date.getMonth(), i)
        setDate(currentDate)
        onChange?.(currentDate)
      }

      // 选中时添加背景
      if (i === date.getDate()) {
        days.push(
          <div
            key={i}
            className="w-[calc(100%/7)] text-center leading-[30px] cursor-pointer bg-black text-white rounded-lg font-sans "
            onClick={() => clickHandler()}
          >
            {i}
          </div>,
        )
      } else {
        days.push(
          <div
            key={i}
            className="w-[calc(100%/7)] text-center leading-[30px] hover:bg-slate-200 cursor-pointer font-sans font-light rounded-lg duration-200 text-gray-700"
            onClick={() => clickHandler()}
          >
            {i}
          </div>,
        )
      }
    }
  }
  // 渲染下一个月的日期
  const renderNextDates = (days: JSX.Element[]) => {
    // 动态渲染到底是35 还是 42 ? 获取下个月是星期几开始? 如果是星期日开始说明日历填满了
    const nextDate = new Date(date.getFullYear(), date.getMonth() + 1, 1)

    if (nextDate.getDay() !== 0) {
      // 获取上个月最后几天
      for (let i = 1; i <= 7 - nextDate.getDay(); i++) {
        days.push(
          <div
            key={`next-month-${i}`}
            className="w-[calc(100%/7)] text-center leading-[30px] hover:bg-slate-200 cursor-pointer font-sans font-light rounded-lg duration-200 text-gray-300"
          >
            {i}
          </div>,
        )
      }
    }
  }

  //* 渲染组件的函数
  const renderDates = () => {
    const days: JSX.Element[] = []

    renderPreviousDates(days)
    renderCurrentDates(days)
    renderNextDates(days)

    return days
  }

  return (
    <div className="w-[270px] h-fit m-auto p-3 rounded-lg items-center justify-center bg-white/95 shadow-lg">
      <div className="flex justify-center items-center h-10 gap-4">
        <button
          onClick={handlePrevMonth}
          className="border px-2 rounded-lg text-lg font-serif"
        >
          &lt;
        </button>
        <div className="mx-4 w-32 text-center">
          {date.getFullYear()} 年 {monthName[date.getMonth()]} 月
        </div>
        <button
          onClick={handleNextMonth}
          className="border px-2 rounded-lg text-lg font-serif"
        >
          &gt;
        </button>
      </div>
      <div className="flex flex-wrap gap-y-1  ">
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          日
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          一
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          二
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          三
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500  ">
          四
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          五
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          六
        </div>
        {/* 渲染一个一个日期 */}
        {renderDates()}
      </div>
    </div>
  )
}

export default FuckCSS
